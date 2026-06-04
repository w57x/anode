---
'@w57x/anode-react': minor
---

Instead of forcing React to compute the bounding box of the entire node graph on every frame (which was causing massive GC jitter),
the diff introduces a useGraphBounds hook.

- It uses useSyncExternalStore under the hood.
- It attaches listeners to engine-level events ( registerEntityMoveListener , etc.).
- It caches the bounds. It only forces a React render if the overall dimensions (x, y, w, h) of the graph change by more than 0.01px.
  This drastically reduces the overhead for the MiniMap.

There is a new boolean prop on the `<World />` component called renderLinksViaCanvas .

- When false : Links render as traditional SVG `<path>` elements (the old standard).
- When true : The system renders an HTML5 `<canvas>` element and draws the links natively onto it, bypassing the DOM entirely for the
  visual lines.

One of the coolest additions in the test suite shows that even when using Canvas rendering, you preserve interactivity via a clever trick:

- It maintains an invisible, transparent SVG <path> directly over the canvas line.
- Clicking the transparent path selects the link.
- Double-clicking the path adds a new routing waypoint ( link.waypoints.push(...) ) at the exact mouse coordinates, enabling advanced
  multi-segment routing dynamically.

The tests explicitly verify that dragging a node (via entity.move(x,y) ) triggers an immediate reflow of the connected SVG/Canvas paths
without needing to wait for a state flush or a React reconciliation cycle.
