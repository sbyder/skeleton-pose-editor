# Skeleton Pose Editor

A standalone, offline-capable keyframe editor for the humanoid skeleton rig used by the RPG asset workflow.

## Run

Open [index.html](./index.html) directly in a modern browser. The editor is a self-contained HTML file with inline CSS, JavaScript, rig data, and motion clips; it has no external runtime dependencies or build step.

## Current baseline

- **Editor:** Human skeleton keyframe editor V8
- **Rig variant:** `humanoid_biped_3q_right_wrist_preview`
- **Base rig reference:** `humanoid_biped_3q_right`
- **Included clips:** 10 motion clips
- **Skeleton:** 24 joints
- **Editing:** IK drag (preserves bone lengths), free node offset, numeric joint rotation/offset editing, keyframe add/remove, undo/redo, independent clip preview
- **Weapon visualization:** fixed grip orientation plus handle/grip and `weapon_tip_r` tip socket visualization
- **Exchange:** exports an edit patch or a full editor project as JSON; imports previously exported patches/projects

## Important data boundary

The JSON exported in **修改补丁** mode is an editor exchange format, not an approved server-side Motion asset. In particular, `offsetX` and `offsetY` are editor-side positional corrections and require conversion to an engine-supported representation before being uploaded as a production asset.

Edits made in the browser are local to the current page session. Export or download them before refreshing; the editor does not write changes to the RPG asset server.

## Development

Treat `index.html` as the source of truth for the current editor. Keep future changes in this repository and commit them here. Preserve the self-contained/offline behavior unless a deliberate architecture change is agreed.

When changing the embedded rig or motion data, update the baseline details above and document any export-format or engine-compatibility changes.
