---
'@w57x/anode': minor
---

- External Layout Integration: Added the `applyLayout()` capability to the core Context , allowing developers to integrate external layout engines (like Dagre)
  to automatically arrange nodes. Layout calculations are recorded as a single batch operation in the undo/redo history stack.

- Optimized Culling and Rendering: Massively reduced unnecessary re-renders for viewport culling and the minimap, and decoupled link path recalculations so they
  only occur for edges connected to the node actively being dragged.

- Manhattan Link Path Routing: Fixed a routing bug where STEP links would overlap or draw awkwardly when the target socket was positioned to the left of the
  source socket. It now properly generates a 5-segment non-overlapping path.
  - Node Alignment Animations: Ensured that nodes align instantly to their new positions during layout changes, bypassing unwanted transition animations.

- Namespace Migration: Renamed the core organization scope throughout the package from `@stuly` to `@w57x`.
