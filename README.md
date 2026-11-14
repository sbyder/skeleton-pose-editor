# Skeleton Pose Editor

A standalone, offline-capable keyframe editor for the humanoid skeleton rig used by the RPG asset workflow.

## Run

Open `index.html` directly in a modern browser. The editor is split into three local files and has no external runtime dependencies or build step:

- `index.html` — page structure and styles
- `editor.js` — rendering, animation preview, IK editing, keyframe editing, import/export
- `editor-data.js` — rig, motion clips, weapon attachment data, floor contacts, and per-motion render-layer metadata

Keep these files in the same directory.

## Current baseline

- **Editor:** Human skeleton keyframe editor V9
- **Rig variant:** `humanoid_biped_3q_right_wrist_preview`
- **Base rig reference:** `humanoid_biped_3q_right`
- **Included clips:** 10 motion clips
- **Skeleton:** 24 joints
- **Editing:** IK drag (preserves bone lengths), free node offset, numeric joint rotation/offset editing, whole-character root translation, keyframe add/remove, undo/redo, independent clip preview
- **Weapon visualization:** current small knife shares a render-depth group with the right forearm; grip and `weapon_tip_r` socket visualization
- **Layer order:** per-motion data. The guard clip puts the right forearm/knife group in front; quick and heavy attacks keep the right upper arm and forearm/knife group behind the torso. This is editable metadata, not a universal weapon rule.
- **Ground lock:** optional viewport constraint that vertically shifts the whole pose so the lowest foot contact stays on the floor line. It does not rewrite motion tracks or bake root offsets into exported clips.

## Data and export boundaries

The JSON exported in **修改补丁** mode is an editor exchange format, not an approved server-side Motion asset. In particular, `offsetX` and `offsetY` are editor-side positional corrections and need conversion to an engine-supported representation before production upload. The patch also carries per-motion render-layer metadata and the ground-lock preview option.

Edits made in the browser are local to the current page session. Export or download them before refreshing; the editor does not write changes to the RPG asset server.

## Development

Keep rig and motion data in `editor-data.js`; keep behavior and rendering logic in `editor.js`. Preserve direct-file offline operation unless a deliberate architecture change is agreed. When changing rig structure, motion IDs, render-order metadata, or export format, update this README and validate the editor in a browser.
