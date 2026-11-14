// V9 editor data. Keep rig, motion clips, weapon sockets and per-motion render layers here; editor behavior lives in editor.js.
window.EDITOR_DATA = {
  "rig": {
    "id": "humanoid_biped_3q_right_wrist_preview",
    "assetType": "rig_template",
    "schemaVersion": "1.0.0",
    "name": "通用双足人形 / 右前3/4 / V6 颈部绘制修正预览",
    "view": {
      "id": "three_quarter_right"
    },
    "boneSpace": "parent_local_pivot_origin",
    "coordinateSystem": {
      "unit": "px",
      "xAxis": "right",
      "yAxis": "down",
      "rotationDirection": "clockwise",
      "angleUnit": "degrees"
    },
    "bones": [
      {
        "id": "root",
        "parentId": null,
        "role": "root",
        "bindOffset": {
          "x": 0,
          "y": 0
        },
        "lengthPx": 0,
        "defaultRotationDeg": 0,
        "rotationLimitsDeg": [
          -180,
          180
        ]
      },
      {
        "id": "pelvis",
        "parentId": "root",
        "role": "pelvis",
        "bindOffset": {
          "x": 0,
          "y": -200
        },
        "lengthPx": 36,
        "defaultRotationDeg": 0,
        "rotationLimitsDeg": [
          -25,
          25
        ]
      },
      {
        "id": "spine_lower",
        "parentId": "pelvis",
        "role": "spine_lower",
        "bindOffset": {
          "x": 0,
          "y": -34
        },
        "lengthPx": 57,
        "defaultRotationDeg": 0,
        "rotationLimitsDeg": [
          -25,
          25
        ]
      },
      {
        "id": "chest",
        "parentId": "spine_lower",
        "role": "chest",
        "bindOffset": {
          "x": 0,
          "y": -64
        },
        "lengthPx": 66,
        "defaultRotationDeg": 0,
        "rotationLimitsDeg": [
          -25,
          25
        ]
      },
      {
        "id": "neck",
        "parentId": "chest",
        "role": "neck",
        "bindOffset": {
          "x": 0,
          "y": -60
        },
        "lengthPx": 19,
        "defaultRotationDeg": 0,
        "rotationLimitsDeg": [
          -30,
          30
        ]
      },
      {
        "id": "head",
        "parentId": "neck",
        "role": "head",
        "bindOffset": {
          "x": 3,
          "y": -24
        },
        "lengthPx": 45,
        "defaultRotationDeg": 0,
        "rotationLimitsDeg": [
          -45,
          45
        ]
      },
      {
        "id": "shoulder_l",
        "parentId": "chest",
        "role": "shoulder_left",
        "bindOffset": {
          "x": -36,
          "y": -47
        },
        "lengthPx": 24,
        "defaultRotationDeg": 0,
        "rotationLimitsDeg": [
          -35,
          35
        ]
      },
      {
        "id": "upper_arm_l",
        "parentId": "shoulder_l",
        "role": "upper_arm_left",
        "bindOffset": {
          "x": -17,
          "y": 9
        },
        "lengthPx": 72,
        "defaultRotationDeg": 0,
        "rotationLimitsDeg": [
          -110,
          145
        ]
      },
      {
        "id": "forearm_l",
        "parentId": "upper_arm_l",
        "role": "forearm_left",
        "bindOffset": {
          "x": -29,
          "y": 65
        },
        "lengthPx": 65,
        "defaultRotationDeg": 0,
        "rotationLimitsDeg": [
          -145,
          10
        ]
      },
      {
        "id": "wrist_l",
        "parentId": "forearm_l",
        "role": "wrist_left",
        "bindOffset": {
          "x": -20,
          "y": 46
        },
        "lengthPx": 18,
        "defaultRotationDeg": 0,
        "rotationLimitsDeg": [
          -55,
          55
        ]
      },
      {
        "id": "hand_l",
        "parentId": "wrist_l",
        "role": "hand_left",
        "bindOffset": {
          "x": -2,
          "y": 18
        },
        "lengthPx": 16,
        "defaultRotationDeg": 0,
        "rotationLimitsDeg": [
          -25,
          25
        ]
      },
      {
        "id": "shoulder_r",
        "parentId": "chest",
        "role": "shoulder_right",
        "bindOffset": {
          "x": 37,
          "y": -48
        },
        "lengthPx": 24,
        "defaultRotationDeg": 0,
        "rotationLimitsDeg": [
          -35,
          35
        ]
      },
      {
        "id": "upper_arm_r",
        "parentId": "shoulder_r",
        "role": "upper_arm_right",
        "bindOffset": {
          "x": 17,
          "y": 9
        },
        "lengthPx": 72,
        "defaultRotationDeg": 0,
        "rotationLimitsDeg": [
          -110,
          145
        ]
      },
      {
        "id": "forearm_r",
        "parentId": "upper_arm_r",
        "role": "forearm_right",
        "bindOffset": {
          "x": 29,
          "y": 65
        },
        "lengthPx": 65,
        "defaultRotationDeg": 0,
        "rotationLimitsDeg": [
          -145,
          10
        ]
      },
      {
        "id": "wrist_r",
        "parentId": "forearm_r",
        "role": "wrist_right",
        "bindOffset": {
          "x": 20,
          "y": 46
        },
        "lengthPx": 18,
        "defaultRotationDeg": 0,
        "rotationLimitsDeg": [
          -55,
          55
        ]
      },
      {
        "id": "hand_r",
        "parentId": "wrist_r",
        "role": "hand_right",
        "bindOffset": {
          "x": 2,
          "y": 18
        },
        "lengthPx": 16,
        "defaultRotationDeg": 0,
        "rotationLimitsDeg": [
          -25,
          25
        ]
      },
      {
        "id": "thigh_l",
        "parentId": "pelvis",
        "role": "thigh_left",
        "bindOffset": {
          "x": -23,
          "y": 8
        },
        "lengthPx": 102,
        "defaultRotationDeg": 0,
        "rotationLimitsDeg": [
          -85,
          90
        ]
      },
      {
        "id": "shin_l",
        "parentId": "thigh_l",
        "role": "shin_left",
        "bindOffset": {
          "x": -8,
          "y": 102
        },
        "lengthPx": 101,
        "defaultRotationDeg": 0,
        "rotationLimitsDeg": [
          -10,
          145
        ]
      },
      {
        "id": "foot_l",
        "parentId": "shin_l",
        "role": "foot_left",
        "bindOffset": {
          "x": -1,
          "y": 101
        },
        "lengthPx": 33,
        "defaultRotationDeg": 0,
        "rotationLimitsDeg": [
          -50,
          55
        ]
      },
      {
        "id": "toe_l",
        "parentId": "foot_l",
        "role": "toe_left",
        "bindOffset": {
          "x": -3,
          "y": 20
        },
        "lengthPx": 22,
        "defaultRotationDeg": 0,
        "rotationLimitsDeg": [
          -35,
          35
        ]
      },
      {
        "id": "thigh_r",
        "parentId": "pelvis",
        "role": "thigh_right",
        "bindOffset": {
          "x": 23,
          "y": 8
        },
        "lengthPx": 102,
        "defaultRotationDeg": 0,
        "rotationLimitsDeg": [
          -85,
          90
        ]
      },
      {
        "id": "shin_r",
        "parentId": "thigh_r",
        "role": "shin_right",
        "bindOffset": {
          "x": 8,
          "y": 102
        },
        "lengthPx": 101,
        "defaultRotationDeg": 0,
        "rotationLimitsDeg": [
          -10,
          145
        ]
      },
      {
        "id": "foot_r",
        "parentId": "shin_r",
        "role": "foot_right",
        "bindOffset": {
          "x": 1,
          "y": 101
        },
        "lengthPx": 33,
        "defaultRotationDeg": 0,
        "rotationLimitsDeg": [
          -50,
          55
        ]
      },
      {
        "id": "toe_r",
        "parentId": "foot_r",
        "role": "toe_right",
        "bindOffset": {
          "x": 3,
          "y": 20
        },
        "lengthPx": 22,
        "defaultRotationDeg": 0,
        "rotationLimitsDeg": [
          -35,
          35
        ]
      }
    ],
    "version": "local_preview"
  },
  "motions": [
    {
      "assetType": "motion_clip",
      "schemaVersion": "1.0.0",
      "id": "human_combat_idle_v1",
      "name": "战斗待机",
      "target": {
        "type": "rig",
        "id": "humanoid_biped_3q_right_wrist_preview"
      },
      "rig": {
        "id": "humanoid_biped_3q_right_wrist_preview",
        "version": "local_preview"
      },
      "durationMs": 1600,
      "loop": true,
      "layer": "primary",
      "blendMode": "override",
      "tracks": [
        {
          "boneId": "pelvis",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 0
            },
            {
              "timeMs": 400,
              "value": 0
            },
            {
              "timeMs": 800,
              "value": 0
            },
            {
              "timeMs": 1200,
              "value": 0
            },
            {
              "timeMs": 1600,
              "value": 0
            }
          ]
        },
        {
          "boneId": "spine_lower",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 0
            },
            {
              "timeMs": 400,
              "value": 0.3
            },
            {
              "timeMs": 800,
              "value": 0.6
            },
            {
              "timeMs": 1200,
              "value": 0.2
            },
            {
              "timeMs": 1600,
              "value": 0
            }
          ]
        },
        {
          "boneId": "chest",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 1
            },
            {
              "timeMs": 400,
              "value": 1.6
            },
            {
              "timeMs": 800,
              "value": 1.9
            },
            {
              "timeMs": 1200,
              "value": 1.5
            },
            {
              "timeMs": 1600,
              "value": 1
            }
          ]
        },
        {
          "boneId": "head",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -2
            },
            {
              "timeMs": 400,
              "value": -2.4
            },
            {
              "timeMs": 800,
              "value": -2.7
            },
            {
              "timeMs": 1200,
              "value": -2.3
            },
            {
              "timeMs": 1600,
              "value": -2
            }
          ]
        },
        {
          "boneId": "upper_arm_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 25.76
            },
            {
              "timeMs": 400,
              "value": 26.8
            },
            {
              "timeMs": 800,
              "value": 24.7
            },
            {
              "timeMs": 1200,
              "value": 25.3
            },
            {
              "timeMs": 1600,
              "value": 25.76
            }
          ]
        },
        {
          "boneId": "forearm_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -27
            },
            {
              "timeMs": 400,
              "value": -27.5
            },
            {
              "timeMs": 800,
              "value": -28
            },
            {
              "timeMs": 1200,
              "value": -27.4
            },
            {
              "timeMs": 1600,
              "value": -27
            }
          ]
        },
        {
          "boneId": "wrist_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 6
            },
            {
              "timeMs": 400,
              "value": 6.4
            },
            {
              "timeMs": 800,
              "value": 6.8
            },
            {
              "timeMs": 1200,
              "value": 6.2
            },
            {
              "timeMs": 1600,
              "value": 6
            }
          ]
        },
        {
          "boneId": "upper_arm_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -16.74
            },
            {
              "timeMs": 400,
              "value": -18.1
            },
            {
              "timeMs": 800,
              "value": -17.5
            },
            {
              "timeMs": 1200,
              "value": -15.8
            },
            {
              "timeMs": 1600,
              "value": -16.74
            }
          ]
        },
        {
          "boneId": "forearm_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -43
            },
            {
              "timeMs": 400,
              "value": -43.5
            },
            {
              "timeMs": 800,
              "value": -44
            },
            {
              "timeMs": 1200,
              "value": -43.4
            },
            {
              "timeMs": 1600,
              "value": -43
            }
          ]
        },
        {
          "boneId": "wrist_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 4
            },
            {
              "timeMs": 400,
              "value": 4.4
            },
            {
              "timeMs": 800,
              "value": 4.8
            },
            {
              "timeMs": 1200,
              "value": 4.3
            },
            {
              "timeMs": 1600,
              "value": 4
            }
          ]
        },
        {
          "boneId": "thigh_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 8
            },
            {
              "timeMs": 400,
              "value": 8
            },
            {
              "timeMs": 800,
              "value": 8
            },
            {
              "timeMs": 1200,
              "value": 8
            },
            {
              "timeMs": 1600,
              "value": 8
            }
          ]
        },
        {
          "boneId": "thigh_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -9
            },
            {
              "timeMs": 400,
              "value": -9
            },
            {
              "timeMs": 800,
              "value": -9
            },
            {
              "timeMs": 1200,
              "value": -9
            },
            {
              "timeMs": 1600,
              "value": -9
            }
          ]
        },
        {
          "boneId": "shoulder_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 35
            },
            {
              "timeMs": 400,
              "value": 34
            },
            {
              "timeMs": 800,
              "value": 35
            },
            {
              "timeMs": 1200,
              "value": 33.5
            },
            {
              "timeMs": 1600,
              "value": 35
            }
          ]
        },
        {
          "boneId": "shoulder_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -35
            },
            {
              "timeMs": 400,
              "value": -34
            },
            {
              "timeMs": 800,
              "value": -35
            },
            {
              "timeMs": 1200,
              "value": -33.5
            },
            {
              "timeMs": 1600,
              "value": -35
            }
          ]
        }
      ],
      "events": []
    },
    {
      "assetType": "motion_clip",
      "schemaVersion": "1.0.0",
      "id": "human_walk_cycle_v1",
      "name": "步行",
      "target": {
        "type": "rig",
        "id": "humanoid_biped_3q_right_wrist_preview"
      },
      "rig": {
        "id": "humanoid_biped_3q_right_wrist_preview",
        "version": "local_preview"
      },
      "durationMs": 800,
      "loop": true,
      "layer": "primary",
      "blendMode": "override",
      "tracks": [
        {
          "boneId": "pelvis",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -2
            },
            {
              "timeMs": 200,
              "value": 1
            },
            {
              "timeMs": 400,
              "value": 2
            },
            {
              "timeMs": 600,
              "value": -1
            },
            {
              "timeMs": 800,
              "value": -2
            }
          ]
        },
        {
          "boneId": "chest",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 1
            },
            {
              "timeMs": 200,
              "value": -1
            },
            {
              "timeMs": 400,
              "value": -2
            },
            {
              "timeMs": 600,
              "value": 1
            },
            {
              "timeMs": 800,
              "value": 1
            }
          ]
        },
        {
          "boneId": "upper_arm_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 18
            },
            {
              "timeMs": 200,
              "value": 0
            },
            {
              "timeMs": 400,
              "value": -20
            },
            {
              "timeMs": 600,
              "value": 0
            },
            {
              "timeMs": 800,
              "value": 18
            }
          ]
        },
        {
          "boneId": "upper_arm_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -20
            },
            {
              "timeMs": 200,
              "value": 0
            },
            {
              "timeMs": 400,
              "value": 18
            },
            {
              "timeMs": 600,
              "value": 0
            },
            {
              "timeMs": 800,
              "value": -20
            }
          ]
        },
        {
          "boneId": "forearm_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -20
            },
            {
              "timeMs": 200,
              "value": -17
            },
            {
              "timeMs": 400,
              "value": -20
            },
            {
              "timeMs": 600,
              "value": -24
            },
            {
              "timeMs": 800,
              "value": -20
            }
          ]
        },
        {
          "boneId": "forearm_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -25
            },
            {
              "timeMs": 200,
              "value": -20
            },
            {
              "timeMs": 400,
              "value": -20
            },
            {
              "timeMs": 600,
              "value": -20
            },
            {
              "timeMs": 800,
              "value": -25
            }
          ]
        },
        {
          "boneId": "wrist_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 5
            },
            {
              "timeMs": 200,
              "value": 2
            },
            {
              "timeMs": 400,
              "value": 5
            },
            {
              "timeMs": 600,
              "value": 8
            },
            {
              "timeMs": 800,
              "value": 5
            }
          ]
        },
        {
          "boneId": "wrist_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 6
            },
            {
              "timeMs": 200,
              "value": 3
            },
            {
              "timeMs": 400,
              "value": 6
            },
            {
              "timeMs": 600,
              "value": 3
            },
            {
              "timeMs": 800,
              "value": 6
            }
          ]
        },
        {
          "boneId": "thigh_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -27
            },
            {
              "timeMs": 200,
              "value": 0
            },
            {
              "timeMs": 400,
              "value": 28
            },
            {
              "timeMs": 600,
              "value": 0
            },
            {
              "timeMs": 800,
              "value": -27
            }
          ]
        },
        {
          "boneId": "thigh_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 28
            },
            {
              "timeMs": 200,
              "value": 0
            },
            {
              "timeMs": 400,
              "value": -27
            },
            {
              "timeMs": 600,
              "value": 0
            },
            {
              "timeMs": 800,
              "value": 28
            }
          ]
        },
        {
          "boneId": "shin_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 24
            },
            {
              "timeMs": 200,
              "value": 12
            },
            {
              "timeMs": 400,
              "value": 5
            },
            {
              "timeMs": 600,
              "value": 38
            },
            {
              "timeMs": 800,
              "value": 24
            }
          ]
        },
        {
          "boneId": "shin_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 5
            },
            {
              "timeMs": 200,
              "value": 38
            },
            {
              "timeMs": 400,
              "value": 24
            },
            {
              "timeMs": 600,
              "value": 12
            },
            {
              "timeMs": 800,
              "value": 5
            }
          ]
        },
        {
          "boneId": "foot_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -12
            },
            {
              "timeMs": 200,
              "value": 0
            },
            {
              "timeMs": 400,
              "value": 11
            },
            {
              "timeMs": 600,
              "value": -7
            },
            {
              "timeMs": 800,
              "value": -12
            }
          ]
        },
        {
          "boneId": "foot_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 10
            },
            {
              "timeMs": 200,
              "value": -6
            },
            {
              "timeMs": 400,
              "value": -12
            },
            {
              "timeMs": 600,
              "value": 0
            },
            {
              "timeMs": 800,
              "value": 10
            }
          ]
        }
      ],
      "events": []
    },
    {
      "assetType": "motion_clip",
      "schemaVersion": "1.0.0",
      "id": "human_run_cycle_v1",
      "name": "奔跑",
      "target": {
        "type": "rig",
        "id": "humanoid_biped_3q_right_wrist_preview"
      },
      "rig": {
        "id": "humanoid_biped_3q_right_wrist_preview",
        "version": "local_preview"
      },
      "durationMs": 580,
      "loop": true,
      "layer": "primary",
      "blendMode": "override",
      "tracks": [
        {
          "boneId": "pelvis",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -5
            },
            {
              "timeMs": 145,
              "value": -3
            },
            {
              "timeMs": 290,
              "value": 1
            },
            {
              "timeMs": 435,
              "value": -3
            },
            {
              "timeMs": 580,
              "value": -5
            }
          ]
        },
        {
          "boneId": "spine_lower",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -8
            },
            {
              "timeMs": 145,
              "value": -7
            },
            {
              "timeMs": 290,
              "value": -9
            },
            {
              "timeMs": 435,
              "value": -7
            },
            {
              "timeMs": 580,
              "value": -8
            }
          ]
        },
        {
          "boneId": "chest",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -10
            },
            {
              "timeMs": 145,
              "value": -8
            },
            {
              "timeMs": 290,
              "value": -10
            },
            {
              "timeMs": 435,
              "value": -8
            },
            {
              "timeMs": 580,
              "value": -10
            }
          ]
        },
        {
          "boneId": "upper_arm_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 40
            },
            {
              "timeMs": 145,
              "value": 0
            },
            {
              "timeMs": 290,
              "value": -43
            },
            {
              "timeMs": 435,
              "value": 0
            },
            {
              "timeMs": 580,
              "value": 40
            }
          ]
        },
        {
          "boneId": "upper_arm_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -43
            },
            {
              "timeMs": 145,
              "value": 0
            },
            {
              "timeMs": 290,
              "value": 40
            },
            {
              "timeMs": 435,
              "value": 0
            },
            {
              "timeMs": 580,
              "value": -43
            }
          ]
        },
        {
          "boneId": "forearm_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -60
            },
            {
              "timeMs": 145,
              "value": -60
            },
            {
              "timeMs": 290,
              "value": -64
            },
            {
              "timeMs": 435,
              "value": -62
            },
            {
              "timeMs": 580,
              "value": -60
            }
          ]
        },
        {
          "boneId": "forearm_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -62
            },
            {
              "timeMs": 145,
              "value": -65
            },
            {
              "timeMs": 290,
              "value": -60
            },
            {
              "timeMs": 435,
              "value": -60
            },
            {
              "timeMs": 580,
              "value": -62
            }
          ]
        },
        {
          "boneId": "wrist_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 10
            },
            {
              "timeMs": 145,
              "value": 5
            },
            {
              "timeMs": 290,
              "value": 12
            },
            {
              "timeMs": 435,
              "value": 8
            },
            {
              "timeMs": 580,
              "value": 10
            }
          ]
        },
        {
          "boneId": "wrist_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 8
            },
            {
              "timeMs": 145,
              "value": 12
            },
            {
              "timeMs": 290,
              "value": 8
            },
            {
              "timeMs": 435,
              "value": 5
            },
            {
              "timeMs": 580,
              "value": 8
            }
          ]
        },
        {
          "boneId": "thigh_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -48
            },
            {
              "timeMs": 145,
              "value": 0
            },
            {
              "timeMs": 290,
              "value": 48
            },
            {
              "timeMs": 435,
              "value": 0
            },
            {
              "timeMs": 580,
              "value": -48
            }
          ]
        },
        {
          "boneId": "thigh_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 48
            },
            {
              "timeMs": 145,
              "value": 0
            },
            {
              "timeMs": 290,
              "value": -48
            },
            {
              "timeMs": 435,
              "value": 0
            },
            {
              "timeMs": 580,
              "value": 48
            }
          ]
        },
        {
          "boneId": "shin_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 68
            },
            {
              "timeMs": 145,
              "value": 38
            },
            {
              "timeMs": 290,
              "value": 10
            },
            {
              "timeMs": 435,
              "value": 82
            },
            {
              "timeMs": 580,
              "value": 68
            }
          ]
        },
        {
          "boneId": "shin_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 10
            },
            {
              "timeMs": 145,
              "value": 82
            },
            {
              "timeMs": 290,
              "value": 68
            },
            {
              "timeMs": 435,
              "value": 38
            },
            {
              "timeMs": 580,
              "value": 10
            }
          ]
        },
        {
          "boneId": "foot_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -18
            },
            {
              "timeMs": 145,
              "value": 5
            },
            {
              "timeMs": 290,
              "value": 25
            },
            {
              "timeMs": 435,
              "value": -10
            },
            {
              "timeMs": 580,
              "value": -18
            }
          ]
        },
        {
          "boneId": "foot_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 25
            },
            {
              "timeMs": 145,
              "value": -10
            },
            {
              "timeMs": 290,
              "value": -18
            },
            {
              "timeMs": 435,
              "value": 5
            },
            {
              "timeMs": 580,
              "value": 25
            }
          ]
        }
      ],
      "events": []
    },
    {
      "assetType": "motion_clip",
      "schemaVersion": "1.0.0",
      "id": "human_guard_raise_v1",
      "name": "格挡",
      "target": {
        "type": "rig",
        "id": "humanoid_biped_3q_right_wrist_preview"
      },
      "rig": {
        "id": "humanoid_biped_3q_right_wrist_preview",
        "version": "local_preview"
      },
      "durationMs": 520,
      "loop": false,
      "layer": "primary",
      "blendMode": "override",
      "tracks": [
        {
          "boneId": "pelvis",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -2
            },
            {
              "timeMs": 110,
              "value": -5
            },
            {
              "timeMs": 240,
              "value": -8
            },
            {
              "timeMs": 370,
              "value": -5
            },
            {
              "timeMs": 520,
              "value": -3
            }
          ]
        },
        {
          "boneId": "spine_lower",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 0
            },
            {
              "timeMs": 110,
              "value": -7
            },
            {
              "timeMs": 240,
              "value": -10
            },
            {
              "timeMs": 370,
              "value": -7
            },
            {
              "timeMs": 520,
              "value": -5
            }
          ]
        },
        {
          "boneId": "chest",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 0
            },
            {
              "timeMs": 110,
              "value": -3
            },
            {
              "timeMs": 240,
              "value": -8
            },
            {
              "timeMs": 370,
              "value": -5
            },
            {
              "timeMs": 520,
              "value": -3
            }
          ]
        },
        {
          "boneId": "head",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 0
            },
            {
              "timeMs": 110,
              "value": 2
            },
            {
              "timeMs": 240,
              "value": 7
            },
            {
              "timeMs": 370,
              "value": 4
            },
            {
              "timeMs": 520,
              "value": 2
            }
          ]
        },
        {
          "boneId": "upper_arm_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 14
            },
            {
              "timeMs": 110,
              "value": -20
            },
            {
              "timeMs": 240,
              "value": -57
            },
            {
              "timeMs": 370,
              "value": -54
            },
            {
              "timeMs": 520,
              "value": -48
            }
          ]
        },
        {
          "boneId": "forearm_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -27
            },
            {
              "timeMs": 110,
              "value": -50
            },
            {
              "timeMs": 240,
              "value": -96
            },
            {
              "timeMs": 370,
              "value": -93
            },
            {
              "timeMs": 520,
              "value": -88
            }
          ]
        },
        {
          "boneId": "wrist_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 10
            },
            {
              "timeMs": 110,
              "value": 14
            },
            {
              "timeMs": 240,
              "value": 18
            },
            {
              "timeMs": 370,
              "value": 15
            },
            {
              "timeMs": 520,
              "value": 12
            }
          ]
        },
        {
          "boneId": "upper_arm_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -22
            },
            {
              "timeMs": 110,
              "value": -42
            },
            {
              "timeMs": 240,
              "value": -73
            },
            {
              "timeMs": 370,
              "value": -70
            },
            {
              "timeMs": 520,
              "value": -65
            }
          ]
        },
        {
          "boneId": "forearm_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -43
            },
            {
              "timeMs": 110,
              "value": -66
            },
            {
              "timeMs": 240,
              "value": -100
            },
            {
              "timeMs": 370,
              "value": -96
            },
            {
              "timeMs": 520,
              "value": -90
            }
          ]
        },
        {
          "boneId": "wrist_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -10
            },
            {
              "timeMs": 110,
              "value": -15
            },
            {
              "timeMs": 240,
              "value": -20
            },
            {
              "timeMs": 370,
              "value": -18
            },
            {
              "timeMs": 520,
              "value": -14
            }
          ]
        },
        {
          "boneId": "thigh_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 8
            },
            {
              "timeMs": 110,
              "value": 10
            },
            {
              "timeMs": 240,
              "value": 17
            },
            {
              "timeMs": 370,
              "value": 15
            },
            {
              "timeMs": 520,
              "value": 12
            }
          ]
        },
        {
          "boneId": "thigh_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -9
            },
            {
              "timeMs": 110,
              "value": -11
            },
            {
              "timeMs": 240,
              "value": -17
            },
            {
              "timeMs": 370,
              "value": -15
            },
            {
              "timeMs": 520,
              "value": -12
            }
          ]
        },
        {
          "boneId": "shin_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 8
            },
            {
              "timeMs": 110,
              "value": 15
            },
            {
              "timeMs": 240,
              "value": 19
            },
            {
              "timeMs": 370,
              "value": 17
            },
            {
              "timeMs": 520,
              "value": 17
            }
          ]
        },
        {
          "boneId": "shin_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 11
            },
            {
              "timeMs": 110,
              "value": 14
            },
            {
              "timeMs": 240,
              "value": 18
            },
            {
              "timeMs": 370,
              "value": 17
            },
            {
              "timeMs": 520,
              "value": 17
            }
          ]
        }
      ],
      "events": [],
      "renderOrder": {
        "rightArm": {
          "upperArm": "back",
          "forearmWeapon": "front"
        }
      }
    },
    {
      "assetType": "motion_clip",
      "schemaVersion": "1.0.0",
      "id": "human_light_slash_r_v1",
      "name": "快速挥击",
      "target": {
        "type": "rig",
        "id": "humanoid_biped_3q_right_wrist_preview"
      },
      "rig": {
        "id": "humanoid_biped_3q_right_wrist_preview",
        "version": "local_preview"
      },
      "durationMs": 680,
      "loop": false,
      "layer": "primary",
      "blendMode": "override",
      "tracks": [
        {
          "boneId": "pelvis",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 0
            },
            {
              "timeMs": 110,
              "value": -6
            },
            {
              "timeMs": 240,
              "value": -9
            },
            {
              "timeMs": 350,
              "value": 11
            },
            {
              "timeMs": 510,
              "value": 3
            },
            {
              "timeMs": 680,
              "value": 0
            }
          ]
        },
        {
          "boneId": "spine_lower",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 1
            },
            {
              "timeMs": 110,
              "value": -9
            },
            {
              "timeMs": 240,
              "value": -12
            },
            {
              "timeMs": 350,
              "value": 15
            },
            {
              "timeMs": 510,
              "value": 6
            },
            {
              "timeMs": 680,
              "value": 1
            }
          ]
        },
        {
          "boneId": "chest",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 2
            },
            {
              "timeMs": 110,
              "value": -12
            },
            {
              "timeMs": 240,
              "value": -17
            },
            {
              "timeMs": 350,
              "value": 19
            },
            {
              "timeMs": 510,
              "value": 7
            },
            {
              "timeMs": 680,
              "value": 2
            }
          ]
        },
        {
          "boneId": "head",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -2
            },
            {
              "timeMs": 110,
              "value": 4
            },
            {
              "timeMs": 240,
              "value": 5
            },
            {
              "timeMs": 350,
              "value": -9
            },
            {
              "timeMs": 510,
              "value": -3
            },
            {
              "timeMs": 680,
              "value": -2
            }
          ]
        },
        {
          "boneId": "shoulder_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 0
            },
            {
              "timeMs": 110,
              "value": -12
            },
            {
              "timeMs": 240,
              "value": -18
            },
            {
              "timeMs": 350,
              "value": 13
            },
            {
              "timeMs": 510,
              "value": 5
            },
            {
              "timeMs": 680,
              "value": 0
            }
          ]
        },
        {
          "boneId": "upper_arm_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -22
            },
            {
              "timeMs": 110,
              "value": -62
            },
            {
              "timeMs": 240,
              "value": -95
            },
            {
              "timeMs": 350,
              "value": 23
            },
            {
              "timeMs": 510,
              "value": 48
            },
            {
              "timeMs": 680,
              "value": -22
            }
          ]
        },
        {
          "boneId": "forearm_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -40
            },
            {
              "timeMs": 110,
              "value": -65
            },
            {
              "timeMs": 240,
              "value": -90
            },
            {
              "timeMs": 350,
              "value": -19
            },
            {
              "timeMs": 510,
              "value": -12
            },
            {
              "timeMs": 680,
              "value": -40
            }
          ]
        },
        {
          "boneId": "wrist_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -6
            },
            {
              "timeMs": 110,
              "value": -18
            },
            {
              "timeMs": 240,
              "value": -30
            },
            {
              "timeMs": 350,
              "value": 16
            },
            {
              "timeMs": 510,
              "value": 8
            },
            {
              "timeMs": 680,
              "value": -6
            }
          ]
        },
        {
          "boneId": "upper_arm_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 13
            },
            {
              "timeMs": 110,
              "value": 22
            },
            {
              "timeMs": 240,
              "value": 18
            },
            {
              "timeMs": 350,
              "value": -7
            },
            {
              "timeMs": 510,
              "value": 4
            },
            {
              "timeMs": 680,
              "value": 13
            }
          ]
        },
        {
          "boneId": "forearm_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -27
            },
            {
              "timeMs": 110,
              "value": -32
            },
            {
              "timeMs": 240,
              "value": -42
            },
            {
              "timeMs": 350,
              "value": -35
            },
            {
              "timeMs": 510,
              "value": -28
            },
            {
              "timeMs": 680,
              "value": -27
            }
          ]
        },
        {
          "boneId": "wrist_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 8
            },
            {
              "timeMs": 110,
              "value": 11
            },
            {
              "timeMs": 240,
              "value": 15
            },
            {
              "timeMs": 350,
              "value": 12
            },
            {
              "timeMs": 510,
              "value": 8
            },
            {
              "timeMs": 680,
              "value": 8
            }
          ]
        },
        {
          "boneId": "thigh_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 8
            },
            {
              "timeMs": 110,
              "value": 14
            },
            {
              "timeMs": 240,
              "value": 21
            },
            {
              "timeMs": 350,
              "value": 17
            },
            {
              "timeMs": 510,
              "value": 10
            },
            {
              "timeMs": 680,
              "value": 8
            }
          ]
        },
        {
          "boneId": "thigh_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -9
            },
            {
              "timeMs": 110,
              "value": -15
            },
            {
              "timeMs": 240,
              "value": -21
            },
            {
              "timeMs": 350,
              "value": -15
            },
            {
              "timeMs": 510,
              "value": -12
            },
            {
              "timeMs": 680,
              "value": -9
            }
          ]
        },
        {
          "boneId": "shin_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 12
            },
            {
              "timeMs": 110,
              "value": 13
            },
            {
              "timeMs": 240,
              "value": 21
            },
            {
              "timeMs": 350,
              "value": 19
            },
            {
              "timeMs": 510,
              "value": 15
            },
            {
              "timeMs": 680,
              "value": 12
            }
          ]
        }
      ],
      "events": [],
      "renderOrder": {
        "rightArm": {
          "upperArm": "back",
          "forearmWeapon": "back"
        }
      }
    },
    {
      "assetType": "motion_clip",
      "schemaVersion": "1.0.0",
      "id": "human_heavy_slash_r_v1",
      "name": "蓄力重击",
      "target": {
        "type": "rig",
        "id": "humanoid_biped_3q_right_wrist_preview"
      },
      "rig": {
        "id": "humanoid_biped_3q_right_wrist_preview",
        "version": "local_preview"
      },
      "durationMs": 1010,
      "loop": false,
      "layer": "primary",
      "blendMode": "override",
      "tracks": [
        {
          "boneId": "pelvis",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 0
            },
            {
              "timeMs": 180,
              "value": -5
            },
            {
              "timeMs": 420,
              "value": -15
            },
            {
              "timeMs": 600,
              "value": 14
            },
            {
              "timeMs": 810,
              "value": 8
            },
            {
              "timeMs": 1010,
              "value": 0
            }
          ]
        },
        {
          "boneId": "spine_lower",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 1
            },
            {
              "timeMs": 180,
              "value": -11
            },
            {
              "timeMs": 420,
              "value": -19
            },
            {
              "timeMs": 600,
              "value": 19
            },
            {
              "timeMs": 810,
              "value": 8
            },
            {
              "timeMs": 1010,
              "value": 1
            }
          ]
        },
        {
          "boneId": "chest",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 2
            },
            {
              "timeMs": 180,
              "value": -15
            },
            {
              "timeMs": 420,
              "value": -24
            },
            {
              "timeMs": 600,
              "value": 23
            },
            {
              "timeMs": 810,
              "value": 11
            },
            {
              "timeMs": 1010,
              "value": 2
            }
          ]
        },
        {
          "boneId": "head",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -2
            },
            {
              "timeMs": 180,
              "value": 6
            },
            {
              "timeMs": 420,
              "value": 9
            },
            {
              "timeMs": 600,
              "value": -12
            },
            {
              "timeMs": 810,
              "value": -6
            },
            {
              "timeMs": 1010,
              "value": -2
            }
          ]
        },
        {
          "boneId": "shoulder_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 0
            },
            {
              "timeMs": 180,
              "value": -13
            },
            {
              "timeMs": 420,
              "value": -26
            },
            {
              "timeMs": 600,
              "value": 18
            },
            {
              "timeMs": 810,
              "value": 8
            },
            {
              "timeMs": 1010,
              "value": 0
            }
          ]
        },
        {
          "boneId": "upper_arm_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -22
            },
            {
              "timeMs": 180,
              "value": -65
            },
            {
              "timeMs": 420,
              "value": -107
            },
            {
              "timeMs": 600,
              "value": 65
            },
            {
              "timeMs": 810,
              "value": 30
            },
            {
              "timeMs": 1010,
              "value": -22
            }
          ]
        },
        {
          "boneId": "forearm_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -42
            },
            {
              "timeMs": 180,
              "value": -62
            },
            {
              "timeMs": 420,
              "value": -95
            },
            {
              "timeMs": 600,
              "value": -14
            },
            {
              "timeMs": 810,
              "value": -20
            },
            {
              "timeMs": 1010,
              "value": -42
            }
          ]
        },
        {
          "boneId": "wrist_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -5
            },
            {
              "timeMs": 180,
              "value": -18
            },
            {
              "timeMs": 420,
              "value": -38
            },
            {
              "timeMs": 600,
              "value": 24
            },
            {
              "timeMs": 810,
              "value": 10
            },
            {
              "timeMs": 1010,
              "value": -5
            }
          ]
        },
        {
          "boneId": "upper_arm_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 13
            },
            {
              "timeMs": 180,
              "value": 26
            },
            {
              "timeMs": 420,
              "value": 30
            },
            {
              "timeMs": 600,
              "value": 3
            },
            {
              "timeMs": 810,
              "value": 7
            },
            {
              "timeMs": 1010,
              "value": 13
            }
          ]
        },
        {
          "boneId": "forearm_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -28
            },
            {
              "timeMs": 180,
              "value": -46
            },
            {
              "timeMs": 420,
              "value": -56
            },
            {
              "timeMs": 600,
              "value": -32
            },
            {
              "timeMs": 810,
              "value": -28
            },
            {
              "timeMs": 1010,
              "value": -28
            }
          ]
        },
        {
          "boneId": "wrist_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 8
            },
            {
              "timeMs": 180,
              "value": 12
            },
            {
              "timeMs": 420,
              "value": 18
            },
            {
              "timeMs": 600,
              "value": 10
            },
            {
              "timeMs": 810,
              "value": 8
            },
            {
              "timeMs": 1010,
              "value": 8
            }
          ]
        },
        {
          "boneId": "thigh_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 8
            },
            {
              "timeMs": 180,
              "value": 21
            },
            {
              "timeMs": 420,
              "value": 33
            },
            {
              "timeMs": 600,
              "value": 16
            },
            {
              "timeMs": 810,
              "value": 10
            },
            {
              "timeMs": 1010,
              "value": 8
            }
          ]
        },
        {
          "boneId": "thigh_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -9
            },
            {
              "timeMs": 180,
              "value": -19
            },
            {
              "timeMs": 420,
              "value": -34
            },
            {
              "timeMs": 600,
              "value": -18
            },
            {
              "timeMs": 810,
              "value": -12
            },
            {
              "timeMs": 1010,
              "value": -9
            }
          ]
        },
        {
          "boneId": "shin_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 12
            },
            {
              "timeMs": 180,
              "value": 20
            },
            {
              "timeMs": 420,
              "value": 33
            },
            {
              "timeMs": 600,
              "value": 27
            },
            {
              "timeMs": 810,
              "value": 18
            },
            {
              "timeMs": 1010,
              "value": 12
            }
          ]
        },
        {
          "boneId": "shin_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 12
            },
            {
              "timeMs": 180,
              "value": 18
            },
            {
              "timeMs": 420,
              "value": 27
            },
            {
              "timeMs": 600,
              "value": 24
            },
            {
              "timeMs": 810,
              "value": 15
            },
            {
              "timeMs": 1010,
              "value": 12
            }
          ]
        }
      ],
      "events": [],
      "renderOrder": {
        "rightArm": {
          "upperArm": "back",
          "forearmWeapon": "back"
        }
      }
    },
    {
      "assetType": "motion_clip",
      "schemaVersion": "1.0.0",
      "id": "human_dodge_lean_v1",
      "name": "闪身回避",
      "target": {
        "type": "rig",
        "id": "humanoid_biped_3q_right_wrist_preview"
      },
      "rig": {
        "id": "humanoid_biped_3q_right_wrist_preview",
        "version": "local_preview"
      },
      "durationMs": 580,
      "loop": false,
      "layer": "primary",
      "blendMode": "override",
      "tracks": [
        {
          "boneId": "root",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 0
            },
            {
              "timeMs": 80,
              "value": -3
            },
            {
              "timeMs": 190,
              "value": -11
            },
            {
              "timeMs": 340,
              "value": -13
            },
            {
              "timeMs": 470,
              "value": -5
            },
            {
              "timeMs": 580,
              "value": 0
            }
          ]
        },
        {
          "boneId": "pelvis",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 0
            },
            {
              "timeMs": 80,
              "value": -4
            },
            {
              "timeMs": 190,
              "value": -15
            },
            {
              "timeMs": 340,
              "value": -19
            },
            {
              "timeMs": 470,
              "value": -9
            },
            {
              "timeMs": 580,
              "value": 0
            }
          ]
        },
        {
          "boneId": "spine_lower",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 0
            },
            {
              "timeMs": 80,
              "value": -10
            },
            {
              "timeMs": 190,
              "value": -21
            },
            {
              "timeMs": 340,
              "value": -19
            },
            {
              "timeMs": 470,
              "value": -8
            },
            {
              "timeMs": 580,
              "value": 0
            }
          ]
        },
        {
          "boneId": "chest",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 0
            },
            {
              "timeMs": 80,
              "value": -11
            },
            {
              "timeMs": 190,
              "value": -22
            },
            {
              "timeMs": 340,
              "value": -18
            },
            {
              "timeMs": 470,
              "value": -5
            },
            {
              "timeMs": 580,
              "value": 0
            }
          ]
        },
        {
          "boneId": "head",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 0
            },
            {
              "timeMs": 80,
              "value": 5
            },
            {
              "timeMs": 190,
              "value": 13
            },
            {
              "timeMs": 340,
              "value": 9
            },
            {
              "timeMs": 470,
              "value": 3
            },
            {
              "timeMs": 580,
              "value": 0
            }
          ]
        },
        {
          "boneId": "upper_arm_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 13
            },
            {
              "timeMs": 80,
              "value": 26
            },
            {
              "timeMs": 190,
              "value": 50
            },
            {
              "timeMs": 340,
              "value": 38
            },
            {
              "timeMs": 470,
              "value": 22
            },
            {
              "timeMs": 580,
              "value": 13
            }
          ]
        },
        {
          "boneId": "forearm_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -28
            },
            {
              "timeMs": 80,
              "value": -43
            },
            {
              "timeMs": 190,
              "value": -70
            },
            {
              "timeMs": 340,
              "value": -52
            },
            {
              "timeMs": 470,
              "value": -34
            },
            {
              "timeMs": 580,
              "value": -28
            }
          ]
        },
        {
          "boneId": "wrist_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 8
            },
            {
              "timeMs": 80,
              "value": 10
            },
            {
              "timeMs": 190,
              "value": 12
            },
            {
              "timeMs": 340,
              "value": 10
            },
            {
              "timeMs": 470,
              "value": 8
            },
            {
              "timeMs": 580,
              "value": 8
            }
          ]
        },
        {
          "boneId": "upper_arm_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -22
            },
            {
              "timeMs": 80,
              "value": -40
            },
            {
              "timeMs": 190,
              "value": -59
            },
            {
              "timeMs": 340,
              "value": -45
            },
            {
              "timeMs": 470,
              "value": -30
            },
            {
              "timeMs": 580,
              "value": -22
            }
          ]
        },
        {
          "boneId": "forearm_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -42
            },
            {
              "timeMs": 80,
              "value": -62
            },
            {
              "timeMs": 190,
              "value": -78
            },
            {
              "timeMs": 340,
              "value": -56
            },
            {
              "timeMs": 470,
              "value": -46
            },
            {
              "timeMs": 580,
              "value": -42
            }
          ]
        },
        {
          "boneId": "wrist_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 5
            },
            {
              "timeMs": 80,
              "value": 8
            },
            {
              "timeMs": 190,
              "value": 14
            },
            {
              "timeMs": 340,
              "value": 10
            },
            {
              "timeMs": 470,
              "value": 6
            },
            {
              "timeMs": 580,
              "value": 5
            }
          ]
        },
        {
          "boneId": "thigh_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 8
            },
            {
              "timeMs": 80,
              "value": -9
            },
            {
              "timeMs": 190,
              "value": -27
            },
            {
              "timeMs": 340,
              "value": -18
            },
            {
              "timeMs": 470,
              "value": 3
            },
            {
              "timeMs": 580,
              "value": 8
            }
          ]
        },
        {
          "boneId": "shin_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 12
            },
            {
              "timeMs": 80,
              "value": 28
            },
            {
              "timeMs": 190,
              "value": 65
            },
            {
              "timeMs": 340,
              "value": 57
            },
            {
              "timeMs": 470,
              "value": 24
            },
            {
              "timeMs": 580,
              "value": 12
            }
          ]
        },
        {
          "boneId": "thigh_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -9
            },
            {
              "timeMs": 80,
              "value": 15
            },
            {
              "timeMs": 190,
              "value": 34
            },
            {
              "timeMs": 340,
              "value": 26
            },
            {
              "timeMs": 470,
              "value": 4
            },
            {
              "timeMs": 580,
              "value": -9
            }
          ]
        },
        {
          "boneId": "shin_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 12
            },
            {
              "timeMs": 80,
              "value": 26
            },
            {
              "timeMs": 190,
              "value": 48
            },
            {
              "timeMs": 340,
              "value": 40
            },
            {
              "timeMs": 470,
              "value": 23
            },
            {
              "timeMs": 580,
              "value": 12
            }
          ]
        },
        {
          "boneId": "foot_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 0
            },
            {
              "timeMs": 80,
              "value": -4
            },
            {
              "timeMs": 190,
              "value": -16
            },
            {
              "timeMs": 340,
              "value": -6
            },
            {
              "timeMs": 470,
              "value": 0
            },
            {
              "timeMs": 580,
              "value": 0
            }
          ]
        },
        {
          "boneId": "foot_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 0
            },
            {
              "timeMs": 80,
              "value": 10
            },
            {
              "timeMs": 190,
              "value": 20
            },
            {
              "timeMs": 340,
              "value": 12
            },
            {
              "timeMs": 470,
              "value": 3
            },
            {
              "timeMs": 580,
              "value": 0
            }
          ]
        }
      ],
      "events": []
    },
    {
      "assetType": "motion_clip",
      "schemaVersion": "1.0.0",
      "id": "human_hit_react_v1",
      "name": "受击反应",
      "target": {
        "type": "rig",
        "id": "humanoid_biped_3q_right_wrist_preview"
      },
      "rig": {
        "id": "humanoid_biped_3q_right_wrist_preview",
        "version": "local_preview"
      },
      "durationMs": 460,
      "loop": false,
      "layer": "primary",
      "blendMode": "override",
      "tracks": [
        {
          "boneId": "root",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 0
            },
            {
              "timeMs": 75,
              "value": 2
            },
            {
              "timeMs": 160,
              "value": 9
            },
            {
              "timeMs": 290,
              "value": 5
            },
            {
              "timeMs": 460,
              "value": 0
            }
          ]
        },
        {
          "boneId": "pelvis",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 0
            },
            {
              "timeMs": 75,
              "value": 4
            },
            {
              "timeMs": 160,
              "value": 11
            },
            {
              "timeMs": 290,
              "value": 5
            },
            {
              "timeMs": 460,
              "value": 0
            }
          ]
        },
        {
          "boneId": "spine_lower",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 0
            },
            {
              "timeMs": 75,
              "value": 7
            },
            {
              "timeMs": 160,
              "value": 18
            },
            {
              "timeMs": 290,
              "value": 8
            },
            {
              "timeMs": 460,
              "value": 0
            }
          ]
        },
        {
          "boneId": "chest",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 2
            },
            {
              "timeMs": 75,
              "value": 11
            },
            {
              "timeMs": 160,
              "value": 22
            },
            {
              "timeMs": 290,
              "value": 9
            },
            {
              "timeMs": 460,
              "value": 2
            }
          ]
        },
        {
          "boneId": "head",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -2
            },
            {
              "timeMs": 75,
              "value": 12
            },
            {
              "timeMs": 160,
              "value": 25
            },
            {
              "timeMs": 290,
              "value": 8
            },
            {
              "timeMs": 460,
              "value": -2
            }
          ]
        },
        {
          "boneId": "upper_arm_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 13
            },
            {
              "timeMs": 75,
              "value": 34
            },
            {
              "timeMs": 160,
              "value": 51
            },
            {
              "timeMs": 290,
              "value": 28
            },
            {
              "timeMs": 460,
              "value": 13
            }
          ]
        },
        {
          "boneId": "forearm_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -27
            },
            {
              "timeMs": 75,
              "value": -49
            },
            {
              "timeMs": 160,
              "value": -62
            },
            {
              "timeMs": 290,
              "value": -38
            },
            {
              "timeMs": 460,
              "value": -27
            }
          ]
        },
        {
          "boneId": "wrist_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 8
            },
            {
              "timeMs": 75,
              "value": 12
            },
            {
              "timeMs": 160,
              "value": 15
            },
            {
              "timeMs": 290,
              "value": 10
            },
            {
              "timeMs": 460,
              "value": 8
            }
          ]
        },
        {
          "boneId": "upper_arm_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -22
            },
            {
              "timeMs": 75,
              "value": -4
            },
            {
              "timeMs": 160,
              "value": 18
            },
            {
              "timeMs": 290,
              "value": -7
            },
            {
              "timeMs": 460,
              "value": -22
            }
          ]
        },
        {
          "boneId": "forearm_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -43
            },
            {
              "timeMs": 75,
              "value": -64
            },
            {
              "timeMs": 160,
              "value": -80
            },
            {
              "timeMs": 290,
              "value": -56
            },
            {
              "timeMs": 460,
              "value": -43
            }
          ]
        },
        {
          "boneId": "wrist_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 4
            },
            {
              "timeMs": 75,
              "value": 6
            },
            {
              "timeMs": 160,
              "value": 8
            },
            {
              "timeMs": 290,
              "value": 5
            },
            {
              "timeMs": 460,
              "value": 4
            }
          ]
        },
        {
          "boneId": "thigh_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 8
            },
            {
              "timeMs": 75,
              "value": 2
            },
            {
              "timeMs": 160,
              "value": -13
            },
            {
              "timeMs": 290,
              "value": -3
            },
            {
              "timeMs": 460,
              "value": 8
            }
          ]
        },
        {
          "boneId": "thigh_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -9
            },
            {
              "timeMs": 75,
              "value": -1
            },
            {
              "timeMs": 160,
              "value": 13
            },
            {
              "timeMs": 290,
              "value": 2
            },
            {
              "timeMs": 460,
              "value": -9
            }
          ]
        },
        {
          "boneId": "shin_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 12
            },
            {
              "timeMs": 75,
              "value": 20
            },
            {
              "timeMs": 160,
              "value": 31
            },
            {
              "timeMs": 290,
              "value": 22
            },
            {
              "timeMs": 460,
              "value": 12
            }
          ]
        },
        {
          "boneId": "shin_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 12
            },
            {
              "timeMs": 75,
              "value": 20
            },
            {
              "timeMs": 160,
              "value": 32
            },
            {
              "timeMs": 290,
              "value": 22
            },
            {
              "timeMs": 460,
              "value": 12
            }
          ]
        }
      ],
      "events": []
    },
    {
      "assetType": "motion_clip",
      "schemaVersion": "1.0.0",
      "id": "human_fall_back_v1",
      "name": "倒地",
      "target": {
        "type": "rig",
        "id": "humanoid_biped_3q_right_wrist_preview"
      },
      "rig": {
        "id": "humanoid_biped_3q_right_wrist_preview",
        "version": "local_preview"
      },
      "durationMs": 920,
      "loop": false,
      "layer": "primary",
      "blendMode": "override",
      "tracks": [
        {
          "boneId": "root",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 0
            },
            {
              "timeMs": 100,
              "value": 4
            },
            {
              "timeMs": 240,
              "value": 20
            },
            {
              "timeMs": 460,
              "value": 51
            },
            {
              "timeMs": 700,
              "value": 76
            },
            {
              "timeMs": 920,
              "value": 80
            }
          ]
        },
        {
          "boneId": "pelvis",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 0
            },
            {
              "timeMs": 100,
              "value": 3
            },
            {
              "timeMs": 240,
              "value": 12
            },
            {
              "timeMs": 460,
              "value": 19
            },
            {
              "timeMs": 700,
              "value": 11
            },
            {
              "timeMs": 920,
              "value": 10
            }
          ]
        },
        {
          "boneId": "spine_lower",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 0
            },
            {
              "timeMs": 100,
              "value": 6
            },
            {
              "timeMs": 240,
              "value": 17
            },
            {
              "timeMs": 460,
              "value": 24
            },
            {
              "timeMs": 700,
              "value": 12
            },
            {
              "timeMs": 920,
              "value": 10
            }
          ]
        },
        {
          "boneId": "chest",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 2
            },
            {
              "timeMs": 100,
              "value": 6
            },
            {
              "timeMs": 240,
              "value": 15
            },
            {
              "timeMs": 460,
              "value": 23
            },
            {
              "timeMs": 700,
              "value": 12
            },
            {
              "timeMs": 920,
              "value": 10
            }
          ]
        },
        {
          "boneId": "head",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -2
            },
            {
              "timeMs": 100,
              "value": 4
            },
            {
              "timeMs": 240,
              "value": 10
            },
            {
              "timeMs": 460,
              "value": -10
            },
            {
              "timeMs": 700,
              "value": -15
            },
            {
              "timeMs": 920,
              "value": -15
            }
          ]
        },
        {
          "boneId": "upper_arm_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 13
            },
            {
              "timeMs": 100,
              "value": 16
            },
            {
              "timeMs": 240,
              "value": 40
            },
            {
              "timeMs": 460,
              "value": 62
            },
            {
              "timeMs": 700,
              "value": 85
            },
            {
              "timeMs": 920,
              "value": 87
            }
          ]
        },
        {
          "boneId": "forearm_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -27
            },
            {
              "timeMs": 100,
              "value": -30
            },
            {
              "timeMs": 240,
              "value": -44
            },
            {
              "timeMs": 460,
              "value": -75
            },
            {
              "timeMs": 700,
              "value": -55
            },
            {
              "timeMs": 920,
              "value": -48
            }
          ]
        },
        {
          "boneId": "wrist_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 6
            },
            {
              "timeMs": 100,
              "value": 10
            },
            {
              "timeMs": 240,
              "value": 14
            },
            {
              "timeMs": 460,
              "value": 18
            },
            {
              "timeMs": 700,
              "value": 12
            },
            {
              "timeMs": 920,
              "value": 8
            }
          ]
        },
        {
          "boneId": "upper_arm_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -22
            },
            {
              "timeMs": 100,
              "value": -19
            },
            {
              "timeMs": 240,
              "value": 20
            },
            {
              "timeMs": 460,
              "value": 56
            },
            {
              "timeMs": 700,
              "value": 72
            },
            {
              "timeMs": 920,
              "value": 76
            }
          ]
        },
        {
          "boneId": "forearm_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -43
            },
            {
              "timeMs": 100,
              "value": -50
            },
            {
              "timeMs": 240,
              "value": -80
            },
            {
              "timeMs": 460,
              "value": -90
            },
            {
              "timeMs": 700,
              "value": -49
            },
            {
              "timeMs": 920,
              "value": -45
            }
          ]
        },
        {
          "boneId": "wrist_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 4
            },
            {
              "timeMs": 100,
              "value": 8
            },
            {
              "timeMs": 240,
              "value": 12
            },
            {
              "timeMs": 460,
              "value": 18
            },
            {
              "timeMs": 700,
              "value": 10
            },
            {
              "timeMs": 920,
              "value": 6
            }
          ]
        },
        {
          "boneId": "thigh_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 8
            },
            {
              "timeMs": 100,
              "value": 12
            },
            {
              "timeMs": 240,
              "value": -15
            },
            {
              "timeMs": 460,
              "value": -38
            },
            {
              "timeMs": 700,
              "value": 4
            },
            {
              "timeMs": 920,
              "value": 15
            }
          ]
        },
        {
          "boneId": "shin_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 12
            },
            {
              "timeMs": 100,
              "value": 15
            },
            {
              "timeMs": 240,
              "value": 35
            },
            {
              "timeMs": 460,
              "value": 72
            },
            {
              "timeMs": 700,
              "value": 32
            },
            {
              "timeMs": 920,
              "value": 24
            }
          ]
        },
        {
          "boneId": "thigh_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -9
            },
            {
              "timeMs": 100,
              "value": -12
            },
            {
              "timeMs": 240,
              "value": 12
            },
            {
              "timeMs": 460,
              "value": 36
            },
            {
              "timeMs": 700,
              "value": 25
            },
            {
              "timeMs": 920,
              "value": 20
            }
          ]
        },
        {
          "boneId": "shin_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 12
            },
            {
              "timeMs": 100,
              "value": 16
            },
            {
              "timeMs": 240,
              "value": 38
            },
            {
              "timeMs": 460,
              "value": 66
            },
            {
              "timeMs": 700,
              "value": 30
            },
            {
              "timeMs": 920,
              "value": 21
            }
          ]
        }
      ],
      "events": []
    },
    {
      "assetType": "motion_clip",
      "schemaVersion": "1.0.0",
      "id": "human_cast_forward_v1",
      "name": "向前施法",
      "target": {
        "type": "rig",
        "id": "humanoid_biped_3q_right_wrist_preview"
      },
      "rig": {
        "id": "humanoid_biped_3q_right_wrist_preview",
        "version": "local_preview"
      },
      "durationMs": 880,
      "loop": false,
      "layer": "primary",
      "blendMode": "override",
      "tracks": [
        {
          "boneId": "pelvis",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 0
            },
            {
              "timeMs": 150,
              "value": -4
            },
            {
              "timeMs": 320,
              "value": -7
            },
            {
              "timeMs": 540,
              "value": 0
            },
            {
              "timeMs": 700,
              "value": 3
            },
            {
              "timeMs": 880,
              "value": 0
            }
          ]
        },
        {
          "boneId": "spine_lower",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 1
            },
            {
              "timeMs": 150,
              "value": -4
            },
            {
              "timeMs": 320,
              "value": -9
            },
            {
              "timeMs": 540,
              "value": -7
            },
            {
              "timeMs": 700,
              "value": 3
            },
            {
              "timeMs": 880,
              "value": 1
            }
          ]
        },
        {
          "boneId": "chest",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 2
            },
            {
              "timeMs": 150,
              "value": -7
            },
            {
              "timeMs": 320,
              "value": -15
            },
            {
              "timeMs": 540,
              "value": -10
            },
            {
              "timeMs": 700,
              "value": 6
            },
            {
              "timeMs": 880,
              "value": 2
            }
          ]
        },
        {
          "boneId": "head",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -2
            },
            {
              "timeMs": 150,
              "value": 3
            },
            {
              "timeMs": 320,
              "value": 7
            },
            {
              "timeMs": 540,
              "value": 1
            },
            {
              "timeMs": 700,
              "value": -4
            },
            {
              "timeMs": 880,
              "value": -2
            }
          ]
        },
        {
          "boneId": "upper_arm_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 13
            },
            {
              "timeMs": 150,
              "value": -10
            },
            {
              "timeMs": 320,
              "value": -43
            },
            {
              "timeMs": 540,
              "value": -47
            },
            {
              "timeMs": 700,
              "value": -20
            },
            {
              "timeMs": 880,
              "value": 13
            }
          ]
        },
        {
          "boneId": "forearm_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -28
            },
            {
              "timeMs": 150,
              "value": -52
            },
            {
              "timeMs": 320,
              "value": -75
            },
            {
              "timeMs": 540,
              "value": -64
            },
            {
              "timeMs": 700,
              "value": -50
            },
            {
              "timeMs": 880,
              "value": -28
            }
          ]
        },
        {
          "boneId": "wrist_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 8
            },
            {
              "timeMs": 150,
              "value": 14
            },
            {
              "timeMs": 320,
              "value": 22
            },
            {
              "timeMs": 540,
              "value": 18
            },
            {
              "timeMs": 700,
              "value": 12
            },
            {
              "timeMs": 880,
              "value": 8
            }
          ]
        },
        {
          "boneId": "upper_arm_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -22
            },
            {
              "timeMs": 150,
              "value": -48
            },
            {
              "timeMs": 320,
              "value": -78
            },
            {
              "timeMs": 540,
              "value": -87
            },
            {
              "timeMs": 700,
              "value": -60
            },
            {
              "timeMs": 880,
              "value": -22
            }
          ]
        },
        {
          "boneId": "forearm_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -43
            },
            {
              "timeMs": 150,
              "value": -53
            },
            {
              "timeMs": 320,
              "value": -37
            },
            {
              "timeMs": 540,
              "value": -26
            },
            {
              "timeMs": 700,
              "value": -36
            },
            {
              "timeMs": 880,
              "value": -43
            }
          ]
        },
        {
          "boneId": "wrist_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 4
            },
            {
              "timeMs": 150,
              "value": 10
            },
            {
              "timeMs": 320,
              "value": 16
            },
            {
              "timeMs": 540,
              "value": 10
            },
            {
              "timeMs": 700,
              "value": 6
            },
            {
              "timeMs": 880,
              "value": 4
            }
          ]
        },
        {
          "boneId": "thigh_l",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": 8
            },
            {
              "timeMs": 150,
              "value": 12
            },
            {
              "timeMs": 320,
              "value": 17
            },
            {
              "timeMs": 540,
              "value": 15
            },
            {
              "timeMs": 700,
              "value": 10
            },
            {
              "timeMs": 880,
              "value": 8
            }
          ]
        },
        {
          "boneId": "thigh_r",
          "channel": "rotationDeg",
          "interpolation": "easeInOut",
          "keyframes": [
            {
              "timeMs": 0,
              "value": -9
            },
            {
              "timeMs": 150,
              "value": -12
            },
            {
              "timeMs": 320,
              "value": -16
            },
            {
              "timeMs": 540,
              "value": -14
            },
            {
              "timeMs": 700,
              "value": -11
            },
            {
              "timeMs": 880,
              "value": -9
            }
          ]
        }
      ],
      "events": []
    }
  ],
  "weapon": {
    "hand": "right",
    "attachmentEdge": [
      "wrist_r",
      "hand_r"
    ],
    "gripAxis": "perpendicular_to_edge",
    "gripAngleOffsetDeg": -90,
    "orientationPolicy": "fixed_bind_offset",
    "gripStyle": "regular",
    "sockets": {
      "gripCenter": "hand_r",
      "tipFar": "weapon_tip_r"
    },
    "weaponLocal": {
      "handleNear": [
        -12,
        0
      ],
      "guard": [
        9,
        0
      ],
      "tipFar": [
        96,
        0
      ]
    },
    "note": "正握的初始绑定位姿选定刀尖朝右；以后不再逐帧选择向右的法线，刀尖随腕部连续旋转。反握需显式切换握持姿态。",
    "id": "small_knife_preview",
    "name": "当前小刀",
    "renderGroup": "rightForearm"
  },
  "renderDefaults": {
    "rightArm": {
      "upperArm": "back",
      "forearmWeapon": "back"
    }
  },
  "floor": {
    "y": 0,
    "contactBones": [
      "foot_l",
      "toe_l",
      "foot_r",
      "toe_r"
    ]
  }
};
