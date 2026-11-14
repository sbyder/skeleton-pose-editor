
'use strict';
const DATA = window.EDITOR_DATA;
if (!DATA || !DATA.rig || !Array.isArray(DATA.motions)) throw new Error('缺少 editor-data.js 数据文件');

const rig=DATA.rig, motions=DATA.motions;
const boneMap=Object.fromEntries(rig.bones.map(b=>[b.id,b]));
const motionMap=Object.fromEntries(motions.map(m=>[m.id,m]));
const trackMap={};
for(const motion of motions){trackMap[motion.id]={};for(const tr of motion.tracks){(trackMap[motion.id][tr.boneId]??={})[tr.channel]=tr.keyframes.map(k=>({timeMs:k.timeMs,value:k.value})).sort((a,b)=>a.timeMs-b.timeMs)}}
const WEAPON = DATA.weapon;
;
// State: patches store edited keyframe values on top of the V8 local base motion clips.
let patches={}, selectedMotion=motions[0].id, selectedBone=null, dragState=null, hoverBone=null;
let undoStack=[],redoStack=[];
const timeState=Object.fromEntries(motions.map(m=>[m.id,{time:0,playing:false}]));
const els={};
for(const id of ['motionList','count','motionName','motionId','playBtn','prevBtn','nextBtn','dragMode','showBones','showWeapon','showLabels','showWeaponSockets','groundLock','stage','selectedBone','rotInput','offxInput','offyInput','wxInput','wyInput','boneHelp','resetNodeBtn','mainTime','timeLabel','keyframes','addKeyBtn','removeKeyBtn','stepBack','stepForward','undoBtn','redoBtn','resetMotionBtn','editCount','generateBtn','copyBtn','saveBtn','exportMode','jsonOutput','importBtn','clearOutput','importHint'])els[id]=document.getElementById(id);
const cardMap={};
const round2=n=>Math.round(n*100)/100;
const fmt=n=>String(round2(n));
const byId=id=>motionMap[id];
const clamp=(v,min,max)=>Math.max(min,Math.min(max,v));
function deepCopy(o){return JSON.parse(JSON.stringify(o))}
function saveHistory(){undoStack.push(deepCopy(patches));if(undoStack.length>80)undoStack.shift();redoStack.length=0;updateButtons()}
function editRecord(mid,boneId,channel,ms,value){
 if(!Number.isFinite(value))return;
 ((patches[mid]??={})[boneId]??={})[channel]??={};
 patches[mid][boneId][channel][String(Math.round(ms))]=round2(value);
}
function removeRecord(mid,boneId,channel,ms){
 const p=patches[mid]?.[boneId]?.[channel];if(!p)return;
 delete p[String(Math.round(ms))];if(!Object.keys(p).length)delete patches[mid][boneId][channel];
 if(!Object.keys(patches[mid][boneId]).length)delete patches[mid][boneId];
 if(!Object.keys(patches[mid]).length)delete patches[mid];
}
function mergedTrack(mid,boneId,channel){
 const base=trackMap[mid]?.[boneId]?.[channel]||[];
 const edit=patches[mid]?.[boneId]?.[channel]||null;
 if(!edit)return base;
 const seen=new Map(base.map(k=>[k.timeMs,k.value]));
 for(const [ms,val] of Object.entries(edit))seen.set(Number(ms),val);
 return Array.from(seen,([timeMs,value])=>({timeMs,value})).sort((a,b)=>a.timeMs-b.timeMs)
}
function sample(mid,boneId,channel,t){
 const keys=mergedTrack(mid,boneId,channel);
 if(!keys.length)return 0;
 if(t<=keys[0].timeMs)return keys[0].value;
 for(let i=0;i<keys.length-1;i++){
   const a=keys[i],b=keys[i+1];
   if(t<=b.timeMs){const f=(t-a.timeMs)/(b.timeMs-a.timeMs);const s=f*f*(3-2*f);return a.value+(b.value-a.value)*s;}
 }
 return keys[keys.length-1].value;
}
function angleVector(dx,dy,deg){const r=deg*Math.PI/180,c=Math.cos(r),s=Math.sin(r);return {x:dx*c-dy*s,y:dx*s+dy*c}}
function normalizeAngle(a){return ((a+180)%360+360)%360-180}
function getPose(mid,t,applyGroundLock=true){
 const positions={},rotations={};
 function calc(id){
   if(positions[id])return;
   const b=boneMap[id],r=(b.defaultRotationDeg||0)+sample(mid,id,'rotationDeg',t),dx=sample(mid,id,'offsetX',t),dy=sample(mid,id,'offsetY',t);
   if(!b.parentId){positions[id]={x:dx,y:dy};rotations[id]=r;return;}
   calc(b.parentId);
   const parent=positions[b.parentId],v=angleVector((b.bindOffset?.x||0)+dx,(b.bindOffset?.y||0)+dy,rotations[b.parentId]);
   positions[id]={x:parent.x+v.x,y:parent.y+v.y};rotations[id]=rotations[b.parentId]+r;
 }
 for(const b of rig.bones)calc(b.id);
 let groundOffsetY=0;
 if(applyGroundLock && els.groundLock?.checked){
   const contacts=DATA.floor?.contactBones||['foot_l','toe_l','foot_r','toe_r'];
   const lowest=Math.max(...contacts.map(id=>positions[id]?.y??-Infinity));
   if(Number.isFinite(lowest)){
     groundOffsetY=(DATA.floor?.y??0)-lowest;
     for(const point of Object.values(positions))point.y+=groundOffsetY;
   }
 }
 return {p:positions,r:rotations,groundOffsetY};
}
function geometry(canvas){const w=canvas.width,h=canvas.height;return {cx:w/2,cy:h*.905,scale:Math.min(w/850,h/690)};}
function worldToScreen(world,canvas){const g=geometry(canvas);return{x:g.cx+world.x*g.scale,y:g.cy+world.y*g.scale}}
function screenToWorld(screen,canvas){const g=geometry(canvas);return{x:(screen.x-g.cx)/g.scale,y:(screen.y-g.cy)/g.scale}}
function line(ctx,a,b,width,color){ctx.strokeStyle=color;ctx.lineWidth=width;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}
function circ(ctx,p,r,fill,stroke=null,sw=1){ctx.beginPath();ctx.arc(p.x,p.y,r,0,Math.PI*2);if(fill){ctx.fillStyle=fill;ctx.fill()}if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=sw;ctx.stroke()}}
function poly(ctx,points,fill,stroke=null){ctx.beginPath();points.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));ctx.closePath();ctx.fillStyle=fill;ctx.fill();if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=1.3;ctx.stroke()}}
function offsetPoint(p,ox,oy,ang=0){const d=angleVector(ox,oy,ang);return{x:p.x+d.x,y:p.y+d.y}}
const COLORS={clothes:'#688ee0',dark:'#364769',pants:'#e5806c',skin:'#f0c39d',hair:'#28344b',trim:'#263650',blade:'#8999ac',metal:'#e9f0f6'};
function getMoveHandleScreen(pose,canvas){
 const pelvis=worldToScreen(pose.p.pelvis,canvas),scale=geometry(canvas).scale;
 return {x:pelvis.x+42*scale,y:pelvis.y-5*scale};
}
function drawMoveHandle(ctx,pose,canvas){
 const c=getMoveHandleScreen(pose,canvas);
 ctx.save();circ(ctx,c,12,'#ffffff','#2868c7',2);
 line(ctx,{x:c.x-6,y:c.y},{x:c.x+6,y:c.y},1.6,'#2868c7');
 line(ctx,{x:c.x,y:c.y-6},{x:c.x,y:c.y+6},1.6,'#2868c7');
 poly(ctx,[{x:c.x-8,y:c.y},{x:c.x-4,y:c.y-3},{x:c.x-4,y:c.y+3}],'#2868c7');
 poly(ctx,[{x:c.x+8,y:c.y},{x:c.x+4,y:c.y-3},{x:c.x+4,y:c.y+3}],'#2868c7');
 poly(ctx,[{x:c.x,y:c.y-8},{x:c.x-3,y:c.y-4},{x:c.x+3,y:c.y-4}],'#2868c7');
 poly(ctx,[{x:c.x,y:c.y+8},{x:c.x-3,y:c.y+4},{x:c.x+3,y:c.y+4}],'#2868c7');
 ctx.fillStyle='#315b91';ctx.font='11px system-ui';ctx.fillText('整体移动',c.x+15,c.y+4);ctx.restore();
}
function drawHumanoid(ctx,pose,canvas,options){
 const w=canvas.width,h=canvas.height,g=geometry(canvas),p={};
 for(const [id,value] of Object.entries(pose.p))p[id]=worldToScreen(value,canvas);
 const s=g.scale,seg=(a,b,width,color)=>line(ctx,p[a],p[b],width*s,color);
 const layers=options.rightArmLayers||{upperArm:'back',forearmWeapon:'back'};
 const drawUpperArm=()=>seg('shoulder_r','upper_arm_r',20,COLORS.dark);
 const drawForearmWeapon=()=>{
   // The current small knife and right forearm share one render-depth group.
   seg('upper_arm_r','forearm_r',15,COLORS.dark);seg('forearm_r','wrist_r',12,COLORS.dark);seg('wrist_r','hand_r',11,COLORS.skin);
   if(options.weapon&&WEAPON.renderGroup==='rightForearm')drawWeapon(ctx,p.wrist_r,p.hand_r,s,options.showRelation,options.showWeaponSockets);
 };
 ctx.fillStyle='#fbfcff';ctx.fillRect(0,0,w,h);ctx.strokeStyle='#eff2f8';ctx.lineWidth=1;
 for(let x=g.cx%(32*s);x<w;x+=32*s){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke()}
 for(let y=g.cy%(32*s);y<h;y+=32*s){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke()}
 const floorY=DATA.floor?.y??0,gl=worldToScreen({x:-260,y:floorY},canvas),gr=worldToScreen({x:260,y:floorY},canvas);
 line(ctx,gl,gr,1.4,'#bccbdc');
 // Legs are the rear-most body layer.
 for(const side of ['r','l']){
   const color=side==='r'?COLORS.dark:COLORS.clothes;
   seg('pelvis','thigh_'+side,24,color);seg('thigh_'+side,'shin_'+side,18,color);
   seg('shin_'+side,'foot_'+side,13,color);seg('foot_'+side,'toe_'+side,11,COLORS.dark);
 }
 // Each action chooses whether the upper arm and forearm/knife group sit behind or in front.
 if(layers.upperArm==='back')drawUpperArm();
 if(layers.forearmWeapon==='back')drawForearmWeapon();
 const pelvis=p.pelvis,sl=p.shoulder_l,sr=p.shoulder_r,neck=p.neck,head=p.head;
 const torso=[offsetPoint(sl,-9,-12),offsetPoint(neck,-8,-12),offsetPoint(neck,8,-12),offsetPoint(sr,9,-12),offsetPoint(pelvis,27,12),offsetPoint(pelvis,-27,12)];
 poly(ctx,torso,COLORS.clothes,'#49689b');line(ctx,offsetPoint(neck,-9,-3),offsetPoint(neck,9,-3),2.4*s,'#d6e6fb');
 line(ctx,offsetPoint(neck,0,-9),offsetPoint(head,0,-1),11*s,COLORS.skin);
 circ(ctx,offsetPoint(head,0,-10*s),23*s,COLORS.skin,'#354255',1.3*s);
 ctx.fillStyle=COLORS.hair;ctx.beginPath();ctx.arc(head.x,head.y-10*s,23*s,Math.PI,2*Math.PI);ctx.closePath();ctx.fill();
 circ(ctx,offsetPoint(head,11*s,-13*s),2.3*s,COLORS.trim);
 poly(ctx,[offsetPoint(pelvis,-28,-8*s),offsetPoint(pelvis,28,-8*s),offsetPoint(pelvis,26,16*s),offsetPoint(pelvis,-25,16*s)],COLORS.pants,'#b7594c');
 seg('shoulder_l','upper_arm_l',20,COLORS.clothes);seg('upper_arm_l','forearm_l',15,COLORS.clothes);
 seg('forearm_l','wrist_l',12,COLORS.clothes);seg('wrist_l','hand_l',11,COLORS.skin);
 if(layers.upperArm==='front')drawUpperArm();
 if(layers.forearmWeapon==='front')drawForearmWeapon();
 if(options.joints){
   if(options.bones){ctx.save();ctx.setLineDash([5,5]);for(const bone of rig.bones){if(bone.parentId&&!(bone.parentId==='pelvis'&&bone.id.startsWith('thigh_')))line(ctx,p[bone.parentId],p[bone.id],1.3,'#83a0c2')}ctx.restore()}
   for(const bone of rig.bones){if(bone.id==='root')continue;const active=bone.id===selectedBone,hover=bone.id===hoverBone;
     circ(ctx,p[bone.id],active?8:hover?6:4,active?'#2f6fd6':'#ffe29a',active?'#fff':'#7d683d',active?2:1);
     if(options.labels&&(active||hover||canvas===els.stage)){ctx.fillStyle='#48566e';ctx.font='11px system-ui';ctx.fillText(bone.id,p[bone.id].x+7,p[bone.id].y-7)}
   }
   circ(ctx,p.root,selectedBone==='root'?8:5,selectedBone==='root'?'#2f6fd6':'#ffe29a','#7d683d',1);
 }
 if(options.moveHandle)drawMoveHandle(ctx,pose,canvas);
}
function computeWeaponAttachment(wrist,hand,s=1){
 // Bind-time regular grip: local weapon +X is rotated -90° from the wrist->hand edge.
 // Do NOT reselect the other normal based on screen direction; that caused a sudden 180° flip.
 const dx=hand.x-wrist.x,dy=hand.y-wrist.y;
 const length=Math.hypot(dx,dy)||1;
 const edgeAngle=Math.atan2(dy,dx);
 const gripAngle=edgeAngle+WEAPON.gripAngleOffsetDeg*Math.PI/180;
 const ux=Math.cos(gripAngle),uy=Math.sin(gripAngle);
 // All offsets are immutable coordinates in weapon local space, measured from the grip center.
 const point=(xy)=>({x:hand.x+ux*xy[0]*s,y:hand.y+uy*xy[0]*s});
 return {gripCenter:{x:hand.x,y:hand.y},handleNear:point(WEAPON.weaponLocal.handleNear),
   guard:point(WEAPON.weaponLocal.guard),tipFar:point(WEAPON.weaponLocal.tipFar),
   direction:{x:ux,y:uy},edgeAngle,gripAngle,socketName:WEAPON.sockets.tipFar};
}
function drawWeapon(ctx,wrist,hand,s,relation,showSockets){
 const mount=computeWeaponAttachment(wrist,hand,s);
 const {handleNear,guard,tipFar,direction:{x:ux,y:uy}}=mount;
 line(ctx,handleNear,guard,7*s,'#946331');
 line(ctx,guard,tipFar,6*s,COLORS.blade);line(ctx,guard,tipFar,2*s,COLORS.metal);
 const cross={x:-uy*12*s,y:ux*12*s};
 line(ctx,offsetPoint(guard,-cross.x,-cross.y),offsetPoint(guard,cross.x,cross.y),4*s,'#d6a34e');
 if(relation){line(ctx,wrist,hand,3,'#13a3ba');line(ctx,hand,{x:hand.x+ux*48*s,y:hand.y+uy*48*s},3,'#e5a642')}
 if(showSockets){
   circ(ctx,mount.gripCenter,4.5*s,'#38a6bc','#fff',1.5*s);
   circ(ctx,tipFar,5*s,'#efad35','#fff',1.5*s);
   ctx.save();ctx.fillStyle='#8a661c';ctx.font='11px system-ui';ctx.fillText('weapon_tip_r',tipFar.x+7*s,tipFar.y-7*s);ctx.restore();
 }
}
function getRightArmLayers(mid){
 const base=DATA.renderDefaults?.rightArm||{upperArm:'back',forearmWeapon:'back'};
 const custom=motionMap[mid]?.renderOrder?.rightArm||{};
 return {...base,...custom};
}
function render(canvas,mid,t,mini=false){
 const ctx=canvas.getContext('2d');ctx.clearRect(0,0,canvas.width,canvas.height);
 const pose=getPose(mid,t);
 drawHumanoid(ctx,pose,canvas,{
   weapon:els.showWeapon.checked,joints:!mini,bones:els.showBones.checked,labels:els.showLabels.checked,
   showRelation:!mini&&['wrist_r','hand_r'].includes(selectedBone),showWeaponSockets:els.showWeaponSockets.checked&&!mini,
   rightArmLayers:getRightArmLayers(mid),moveHandle:!mini
 });
}
function paint(){for(const m of motions){const card=cardMap[m.id];if(card){render(card.canvas,m.id,timeState[m.id].time,true);card.time.textContent=`${Math.round(timeState[m.id].time)} ms`;card.slider.value=Math.round(timeState[m.id].time);card.play.textContent=timeState[m.id].playing?'Ⅱ':'▶';}}const m=byId(selectedMotion);render(els.stage,selectedMotion,timeState[selectedMotion].time);els.mainTime.value=Math.round(timeState[selectedMotion].time);els.timeLabel.textContent=`${Math.round(timeState[selectedMotion].time)} / ${m.durationMs} ms`;els.playBtn.textContent=timeState[selectedMotion].playing?'Ⅱ 暂停':'▶ 播放';updateInspectorValues();}
let raf=0,lastTick=0;
function frame(ts){raf=0;if(!lastTick)lastTick=ts;const delta=Math.min(ts-lastTick,100);lastTick=ts;let active=false;
 for(const m of motions){const st=timeState[m.id];if(!st.playing)continue;active=true;st.time+=delta;if(st.time>=m.durationMs){if(m.loop){st.time=st.time%m.durationMs}else{st.time=m.durationMs;st.playing=false}}}
 paint();if(active)requestFrame();else lastTick=0;}
function requestFrame(){if(!raf)raf=requestAnimationFrame(frame)}
function rePaint(){paint();if(motions.some(m=>timeState[m.id].playing))requestFrame()}
function setTime(mid,t){timeState[mid].time=clamp(Math.round(t),0,byId(mid).durationMs);rePaint();if(mid===selectedMotion)renderKeys()}
function pickMotion(mid){selectedMotion=mid;selectedBone=null;
 for(const [id,card] of Object.entries(cardMap))card.el.classList.toggle('active',id===mid);
 const m=byId(mid);els.motionName.textContent=m.name;els.motionId.textContent=m.id+` · ${m.durationMs} ms · ${m.loop?'循环':'单次'}`;els.mainTime.max=m.durationMs;els.mainTime.value=Math.round(timeState[mid].time);
 renderKeys();rePaint();}
function togglePlay(mid){const state=timeState[mid],m=byId(mid);if(!state.playing&&state.time>=m.durationMs)state.time=0;state.playing=!state.playing;if(state.playing){lastTick=0;requestFrame()}rePaint()}
function initCards(){els.count.textContent=String(motions.length);
 for(const m of motions){const item=document.createElement('article');item.className='motion-card';
 const title=document.createElement('div');title.className='motion-title';
 const name=document.createElement('span');name.textContent=m.name;const dur=document.createElement('span');dur.className='smalltxt';dur.textContent=(m.durationMs/1000).toFixed(2)+' s';title.append(name,dur);
 const c=document.createElement('canvas');c.width=320;c.height=185;c.className='motion-canvas';
 const controls=document.createElement('div');controls.className='mini-controls';
 const play=document.createElement('button');play.className='sm';play.textContent='▶';play.title='独立播放/暂停';
 const slider=document.createElement('input');slider.type='range';slider.min=0;slider.max=m.durationMs;slider.step=1;slider.value=0;slider.setAttribute('aria-label',m.name+'进度');
 const time=document.createElement('span');time.className='smalltxt';time.textContent='0 ms';controls.append(play,slider,time);item.append(title,c,controls);els.motionList.appendChild(item);
 cardMap[m.id]={el:item,canvas:c,play,slider,time};
 item.addEventListener('click',()=>pickMotion(m.id));
 play.addEventListener('click',e=>{e.stopPropagation();togglePlay(m.id)});
 slider.addEventListener('pointerdown',e=>e.stopPropagation());
 slider.addEventListener('input',e=>{e.stopPropagation();timeState[m.id].playing=false;setTime(m.id,Number(slider.value));});
 }
}
function keyframeTimes(mid){const m=byId(mid),set=new Set([0,m.durationMs]);
 for(const tr of m.tracks)for(const k of tr.keyframes)set.add(k.timeMs);
 for(const channels of Object.values(patches[mid]||{}))for(const samples of Object.values(channels))for(const t of Object.keys(samples))set.add(Number(t));
 return [...set].sort((a,b)=>a-b)
}
function renderKeys(){const current=Math.round(timeState[selectedMotion].time);const container=els.keyframes;container.replaceChildren();
 for(const ms of keyframeTimes(selectedMotion)){const b=document.createElement('button');b.className='kf'+(Math.abs(ms-current)<=0?' current':'');b.textContent=ms+' ms';b.onclick=()=>{timeState[selectedMotion].playing=false;setTime(selectedMotion,ms)};container.appendChild(b);}
 updateButtons();}
function updateButtons(){els.undoBtn.disabled=!undoStack.length;els.redoBtn.disabled=!redoStack.length;let n=0;for(const m of Object.values(patches))for(const x of Object.values(m))for(const y of Object.values(x))n+=Object.keys(y).length;els.editCount.textContent=n?`已修改 ${n} 个轨道关键帧值（${Object.keys(patches).length} 个动作）`:'尚无改动';}
function setSelectedBone(id){
 selectedBone=id;els.selectedBone.textContent=id==='root'?'root（整体移动）':(id||'未选择');
 for(const key of ['rotInput','offxInput','offyInput','wxInput','wyInput'])els[key].disabled=!id;
 els.resetNodeBtn.disabled=!id;
 els.boneHelp.textContent=id==='root'
  ?'拖动身体旁的蓝色十字点可整体平移；开启脚底贴地锁定时会自动保持最低脚点贴地。关闭锁定后可上下移动。'
  :id?('父节点：'+(boneMap[id].parentId||'（无，根节点）')+'。拖动或输入数值后自动记录到 '+Math.round(timeState[selectedMotion].time)+' ms。')
  :'点击或拖动画布上的任意黄色关节。';
 rePaint();
}
function updateInspectorValues(){if(!selectedBone)return;const t=timeState[selectedMotion].time,mid=selectedMotion,pose=getPose(mid,t).p[selectedBone];
 if(document.activeElement!==els.rotInput)els.rotInput.value=fmt(sample(mid,selectedBone,'rotationDeg',t));
 if(document.activeElement!==els.offxInput)els.offxInput.value=fmt(sample(mid,selectedBone,'offsetX',t));
 if(document.activeElement!==els.offyInput)els.offyInput.value=fmt(sample(mid,selectedBone,'offsetY',t));
 if(document.activeElement!==els.wxInput)els.wxInput.value=fmt(pose.x);
 if(document.activeElement!==els.wyInput)els.wyInput.value=fmt(pose.y);
}
function getPointerPos(e){const r=els.stage.getBoundingClientRect();return{x:(e.clientX-r.left)*els.stage.width/r.width,y:(e.clientY-r.top)*els.stage.height/r.height}}
function hitJoint(screen){
 const pose=getPose(selectedMotion,timeState[selectedMotion].time),moveHandle=getMoveHandleScreen(pose,els.stage);
 if(Math.hypot(moveHandle.x-screen.x,moveHandle.y-screen.y)<=18)return 'root';
 const s=geometry(els.stage).scale,hits=[];
 for(let i=0;i<rig.bones.length;i++){const bone=rig.bones[i],q=worldToScreen(pose.p[bone.id],els.stage),dist=Math.hypot(q.x-screen.x,q.y-screen.y);if(dist<=Math.max(14*s+6,24))hits.push({id:bone.id,dist,drawOrder:i});}
 hits.sort((a,b)=>a.dist-b.dist);return hits[0]?.id||null;
}
// editing: all keyframe edits are stored at the current ms. IK modifies ancestor rotations, never bone lengths.
function allowedAngle(boneId,angle){const lim=boneMap[boneId].rotationLimitsDeg||[-180,180];return clamp(angle,lim[0],lim[1]);}
function ikStop(boneId){if(/^(hand|wrist|forearm|upper_arm|shoulder)_[lr]$/.test(boneId))return 'shoulder_'+boneId.slice(-1);
 if(/^(toe|foot|shin|thigh)_[lr]$/.test(boneId))return 'thigh_'+boneId.slice(-1);
 if(['head','neck'].includes(boneId))return 'neck';return 'root';}
function moveIK(mid,boneId,ms,target){
 if(boneId==='root'||boneId==='pelvis'||boneId==='chest'||boneId==='spine_lower')return moveOffset(mid,boneId,ms,target);
 let chain=[],ancestor=boneMap[boneId].parentId,stop=ikStop(boneId),count=0;
 while(ancestor&&count++<16){chain.push(ancestor);if(ancestor===stop)break;ancestor=boneMap[ancestor].parentId;}
 if(!chain.length)return moveOffset(mid,boneId,ms,target);
 for(let iter=0;iter<9;iter++){
   for(const joint of chain){const pose=getPose(mid,ms),center=pose.p[joint],end=pose.p[boneId];
      const a=Math.atan2(end.y-center.y,end.x-center.x),b=Math.atan2(target.y-center.y,target.x-center.x);
      if(Math.hypot(end.x-center.x,end.y-center.y)<1e-3)continue;
      const delta=normalizeAngle((b-a)*180/Math.PI)*.77;
      const current=sample(mid,joint,'rotationDeg',ms);
      const next=allowedAngle(joint,current+delta);
      if(Math.abs(next-current)>.005)editRecord(mid,joint,'rotationDeg',ms,next);
   }
   const current=getPose(mid,ms).p[boneId];if(Math.hypot(current.x-target.x,current.y-target.y)<1)break;
 }
}
function moveOffset(mid,boneId,ms,target){
 const pose=getPose(mid,ms),at=pose.p[boneId];
 const d={x:target.x-at.x,y:target.y-at.y};
 const parent=boneMap[boneId].parentId;
 const a=parent?pose.r[parent]:0;
 const local=angleVector(d.x,d.y,-a);
 editRecord(mid,boneId,'offsetX',ms,sample(mid,boneId,'offsetX',ms)+local.x);
 editRecord(mid,boneId,'offsetY',ms,sample(mid,boneId,'offsetY',ms)+local.y);
}
function applyWorldPosition(mid,boneId,ms,target,method){method==='offset'?moveOffset(mid,boneId,ms,target):moveIK(mid,boneId,ms,target)}
els.stage.addEventListener('pointerdown',e=>{
 const screen=getPointerPos(e),id=hitJoint(screen);if(!id){setSelectedBone(null);return}
 e.preventDefault();timeState[selectedMotion].playing=false;setSelectedBone(id);saveHistory();
 const mid=selectedMotion,ms=Math.round(timeState[mid].time);
 if(id==='root')dragState={type:'translate',id,mid,ms,pointerStart:screenToWorld(screen,els.stage),rootStartX:sample(mid,'root','offsetX',ms),rootStartY:sample(mid,'root','offsetY',ms)};
 else dragState={type:'joint',id,mid,ms,mode:e.shiftKey?'offset':els.dragMode.value,start:getPose(mid,timeState[mid].time).p[id]};
 els.stage.setPointerCapture(e.pointerId);els.stage.classList.add('grabbing');
});
els.stage.addEventListener('pointermove',e=>{
 const screen=getPointerPos(e);
 if(dragState){const target=screenToWorld(screen,els.stage);if(dragState.type==='translate'){const dx=target.x-dragState.pointerStart.x,dy=els.groundLock.checked?0:target.y-dragState.pointerStart.y;editRecord(dragState.mid,'root','offsetX',dragState.ms,dragState.rootStartX+dx);editRecord(dragState.mid,'root','offsetY',dragState.ms,dragState.rootStartY+dy);}else applyWorldPosition(dragState.mid,dragState.id,dragState.ms,target,dragState.mode);rePaint();return}
 const node=hitJoint(screen);if(node!==hoverBone){hoverBone=node;els.stage.style.cursor=node?'grab':'default';rePaint()}
});
function stopDrag(){if(!dragState)return;dragState=null;els.stage.classList.remove('grabbing');renderKeys();rePaint()}
els.stage.addEventListener('pointerup',stopDrag);els.stage.addEventListener('pointercancel',stopDrag);
function editNumber(channel,value){if(!selectedBone||!Number.isFinite(value))return;saveHistory();const mid=selectedMotion,ms=Math.round(timeState[mid].time);if(channel==='rotationDeg')value=allowedAngle(selectedBone,value);editRecord(mid,selectedBone,channel,ms,value);renderKeys();rePaint()}
for(const [id,ch] of [['rotInput','rotationDeg'],['offxInput','offsetX'],['offyInput','offsetY']])els[id].addEventListener('change',e=>editNumber(ch,Number(e.target.value)));
function setWorldAxis(axis,value){if(!selectedBone||!Number.isFinite(value))return;saveHistory();const mid=selectedMotion,ms=Math.round(timeState[mid].time),target={...getPose(mid,ms).p[selectedBone]};target[axis]=value;moveOffset(mid,selectedBone,ms,target);renderKeys();rePaint()}
els.wxInput.addEventListener('change',e=>setWorldAxis('x',Number(e.target.value)));
els.wyInput.addEventListener('change',e=>setWorldAxis('y',Number(e.target.value)));
els.resetNodeBtn.addEventListener('click',()=>{if(!selectedBone)return;saveHistory();const mid=selectedMotion,ms=Math.round(timeState[mid].time);for(const c of ['rotationDeg','offsetX','offsetY'])removeRecord(mid,selectedBone,c,ms);renderKeys();rePaint()});
els.mainTime.addEventListener('input',e=>{timeState[selectedMotion].playing=false;setTime(selectedMotion,Number(e.target.value))});
els.stepBack.addEventListener('click',()=>{timeState[selectedMotion].playing=false;setTime(selectedMotion,timeState[selectedMotion].time-10)});
els.stepForward.addEventListener('click',()=>{timeState[selectedMotion].playing=false;setTime(selectedMotion,timeState[selectedMotion].time+10)});
els.playBtn.addEventListener('click',()=>togglePlay(selectedMotion));
els.prevBtn.addEventListener('click',()=>{const times=keyframeTimes(selectedMotion),t=timeState[selectedMotion].time;setTime(selectedMotion,[...times].reverse().find(x=>x<t)||0)});
els.nextBtn.addEventListener('click',()=>{const times=keyframeTimes(selectedMotion),t=timeState[selectedMotion].time;setTime(selectedMotion,times.find(x=>x>t)||byId(selectedMotion).durationMs)});
for(const id of ['showBones','showLabels','showWeapon','showWeaponSockets','groundLock'])els[id].addEventListener('change',rePaint);
els.addKeyBtn.addEventListener('click',()=>{const mid=selectedMotion,ms=Math.round(timeState[mid].time);saveHistory();for(const tr of byId(mid).tracks)editRecord(mid,tr.boneId,tr.channel,ms,sample(mid,tr.boneId,tr.channel,ms));renderKeys();rePaint();toast('已在 '+ms+' ms 创建姿态关键帧')});
els.removeKeyBtn.addEventListener('click',()=>{const mid=selectedMotion,ms=Math.round(timeState[mid].time);saveHistory();for(const [boneId,chs] of Object.entries({...patches[mid]||{}}))for(const channel of Object.keys(chs))removeRecord(mid,boneId,channel,ms);renderKeys();rePaint();toast('已清除 '+ms+' ms 的本地改动；原始关键帧不受影响')});
els.resetMotionBtn.addEventListener('click',()=>{if(!patches[selectedMotion])return;if(!confirm('清空当前动作已编辑的全部关键帧吗？可用撤销恢复。'))return;saveHistory();delete patches[selectedMotion];renderKeys();rePaint()});
els.undoBtn.addEventListener('click',()=>{if(!undoStack.length)return;redoStack.push(deepCopy(patches));patches=undoStack.pop();renderKeys();rePaint()});
els.redoBtn.addEventListener('click',()=>{if(!redoStack.length)return;undoStack.push(deepCopy(patches));patches=redoStack.pop();renderKeys();rePaint()});
document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='z'&&!['TEXTAREA','INPUT'].includes(document.activeElement.tagName)){e.preventDefault();els[e.shiftKey?'redoBtn':'undoBtn'].click()}});
function makePatch(){
 const edits=[];
 for(const [mid,bonemap] of Object.entries(patches)){
   const tracks=[];
   for(const [boneId,channels] of Object.entries(bonemap))for(const [channel,vals] of Object.entries(channels)){
     const keyframes=Object.entries(vals).map(([ms,v])=>({timeMs:Number(ms),value:v})).sort((a,b)=>a.timeMs-b.timeMs);
     if(keyframes.length)tracks.push({boneId,channel,keyframes});
   }
   if(tracks.length)edits.push({motionId:mid,motionName:byId(mid)?.name||mid,tracks});
 }
 return {format:'rpg-rig-pose-edit-patch-v1',rig:{baseId:'humanoid_biped_3q_right',baseVersion:1,localRigId:rig.id,wristsAdded:true},drawOrder:{legs:['right','left'],arms:'per-motion',rightForearmWeaponGroup:WEAPON.renderGroup,pelvisBriefsAboveThighRoots:true},renderOrderByMotion:Object.fromEntries(motions.filter(m=>m.renderOrder).map(m=>[m.id,deepCopy(m.renderOrder)])),weapon:deepCopy(WEAPON),editorOptions:{groundLockPreview:els.groundLock.checked},notes:'rotationDeg edits can be converted to rig Motion tracks. offsetX/offsetY are editor-only positional corrections and need an explicit engine-compatible translation/IK conversion before uploading. groundLockPreview is a viewport-only constraint: it shifts the whole pose so the lowest foot contact stays on the floor; it is not baked into motion tracks.',motions:edits};
}
function makeSnapshot(){return {format:'rpg-rig-pose-edit-project-v1',rig,baseMotions:motions,weapon:deepCopy(WEAPON),patches:deepCopy(patches),editorOptions:{groundLockPreview:els.groundLock.checked},selectedMotion,selectedTime:Math.round(timeState[selectedMotion].time)};}
function outputJSON(){const value=els.exportMode.value==='patch'?makePatch():makeSnapshot();const str=JSON.stringify(value,null,2);els.jsonOutput.value=str;return str}
function toast(msg){const el=document.getElementById('toast');el.textContent=msg;el.style.display='block';clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.style.display='none',3600)}
els.generateBtn.addEventListener('click',()=>{outputJSON();toast('JSON 已生成，可复制到聊天')});
els.copyBtn.addEventListener('click',async()=>{const str=els.jsonOutput.value||outputJSON();try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(str);toast('已复制 JSON')}
 else throw Error('Clipboard unavailable')}catch(e){els.jsonOutput.focus();els.jsonOutput.select();try{if(document.execCommand('copy'))toast('已复制 JSON');else toast('已选中文本，请按 Ctrl+C 复制')}catch(_){toast('已选中文本，请按 Ctrl+C 复制')}}});
els.saveBtn.addEventListener('click',()=>{const txt=els.jsonOutput.value||outputJSON();const blob=new Blob([txt],{type:'application/json;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=els.exportMode.value==='patch'?'humanoid_pose_changes.json':'humanoid_pose_project.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('JSON 已下载')});
els.clearOutput.addEventListener('click',()=>els.jsonOutput.value='');
function validatePatch(p){
 if(p.format!=='rpg-rig-pose-edit-patch-v1'||!Array.isArray(p.motions))throw Error('不是本编辑器的修改补丁');
 const next={};
 for(const m of p.motions){
  if(!motionMap[m.motionId])throw Error('未知动作：'+m.motionId);
  for(const tr of m.tracks||[]){
   if(!boneMap[tr.boneId])throw Error('未知骨骼：'+tr.boneId);
   if(!['rotationDeg','offsetX','offsetY'].includes(tr.channel))throw Error('未知通道：'+tr.channel);
   for(const k of tr.keyframes||[]){
    if(!Number.isFinite(k.timeMs)||!Number.isFinite(k.value)||k.timeMs<0||k.timeMs>motionMap[m.motionId].durationMs)throw Error('非法关键帧');
    (((next[m.motionId]??={})[tr.boneId]??={})[tr.channel]??={})[String(Math.round(k.timeMs))]=k.value;
   }
  }
 }
 const renderOrderByMotion=p.renderOrderByMotion||{};
 for(const [mid,value] of Object.entries(renderOrderByMotion)){
  if(!motionMap[mid])throw Error('未知动作层级：'+mid);
  const arm=value?.rightArm||{};
  for(const key of ['upperArm','forearmWeapon'])if(arm[key]&&!['back','front'].includes(arm[key]))throw Error('非法渲染层级：'+key);
 }
 return {patches:next,renderOrderByMotion};
}
function applyRenderOrderByMotion(map){
 for(const [mid,value] of Object.entries(map||{})){
  const m=motionMap[mid];if(!m)throw Error('未知动作层级：'+mid);
  const arm=value?.rightArm||{};
  for(const key of ['upperArm','forearmWeapon'])if(arm[key]&&!['back','front'].includes(arm[key]))throw Error('非法渲染层级：'+key);
  m.renderOrder={...(m.renderOrder||{}),rightArm:{...(m.renderOrder?.rightArm||{}),...arm}};
 }
}
els.importBtn.addEventListener('click',()=>{
 try{
  const obj=JSON.parse(els.jsonOutput.value);let next,renderOrderByMotion={},editorOptions=obj.editorOptions||{};
  if(obj.format==='rpg-rig-pose-edit-project-v1'){
   if(!Array.isArray(obj.baseMotions)||obj.baseMotions.length!==motions.length)throw Error('工程动作数与本编辑器不一致');
   next=obj.patches;renderOrderByMotion=Object.fromEntries(obj.baseMotions.filter(m=>m.renderOrder).map(m=>[m.id,m.renderOrder]));
  }else{const parsed=validatePatch(obj);next=parsed.patches;renderOrderByMotion=parsed.renderOrderByMotion;}
  if(!next||typeof next!=='object')throw Error('内容缺少补丁');
  saveHistory();patches=deepCopy(next);applyRenderOrderByMotion(renderOrderByMotion);
  if(editorOptions.groundLockPreview!==undefined)els.groundLock.checked=!!editorOptions.groundLockPreview;
  renderKeys();rePaint();toast('JSON 导入成功，已恢复关键帧修改');
 }catch(err){toast('导入失败：'+err.message)}
});
initCards();pickMotion(motions[0].id);paint();
