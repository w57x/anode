# @w57x/anode-react

## 1.1.0

### Minor Changes

- ea6b46b: Instead of forcing React to compute the bounding box of the entire node graph on every frame (which was causing massive GC jitter),
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

## 2.0.0

### Patch Changes

- Updated dependencies [c0b0d99]
  - @w57x/anode@0.3.0

## 1.0.1

### Patch Changes

- facf6b7: Integrated ResizeObserver into the Socket component to ensure link anchors stay synchronized when nodes change dimensions

## 1.0.0

### Minor Changes

- 581f70f: Consistency and performance: A cleaner engine with refined link routing.

  ### Core Engine (@w57x/anode)
  - Atomic Patching System: Introduced `ctx.apply(actions)`
  - Dynamic QuadTree: The spatial index now auto-expands.
  - Reactivity Cycle Protection: Added automated safeguards to `setSocketValue`
    to prevent infinite loops and stack overflows in circular node topologies.
  - Ergonomic API: `ctx.newLink` now uses a single configuration object.

  ### Visuals and Routing
  - New `LinkStyling` property supporting `SOLID`, `DASHED`, and `DOTTED` paths
    and `selectionColor`.
  - Flow Animations: Added a flowing property to indicate data movement
    visually with customizable speed.

  ```ts
  ctx.newLink({
    from,
    to,
    styling: {
      color: '#181818',
      flowing: true,
      style: LinkStyle.DASHED
    }
  });
  ```

  ### React Bindings (@w57x/anode-react)
  - Architecture: Decomposed the monolithic World component into focused hooks
    (`useSyncManager`, `useInteractionHandler`, `useViewportManager`).
  - Stable Reference Context: `AnodeProvider` now hosts a stable `worldRef`

  ### misc
  - Strict Type Safety: Full compliance with `exactOptionalPropertyTypes` and
    `noUnusedLocals`.

### Patch Changes

- Updated dependencies [581f70f]
  - @w57x/anode@0.2.0

## 0.1.2

### Patch Changes

- f244767: fix: avoid `setState` during state update in `World` selection
  docs: improved docs
  - @w57x/anode@0.1.2

## 0.1.1

### Patch Changes

- ef2096a: docs: Enhanced library documentation
  - including comprehensive TSDoc for all core engine methods, elements, and React hooks.
  - simplified package READMEs with quick-start examples and added missing repository
    metadata to package.json.

- Updated dependencies [ef2096a]
  - @w57x/anode@0.1.1

## 0.1.0

### Minor Changes

- be44381: We are excited to announce the first release of Anode, a high-performance node-graph engine built for architectural
  flexibility and massive scale.

  Anode is split into two packages:
  - `anode`: A headless, framework-agnostic core that manages graph topology and spatial indexing.
  - `anode-react`: First-class React bindings for building interactive, declarative node editors.

  Key Features
  - Spatial Efficiency: Integrated indexing for fluid performance with thousands
    of nodes via spatial culling.
  - Transactional Integrity: Command-based undo/redo system with atomic batch operations.
  - Reactive Data Flow: Built-in value propagation between sockets, decoupled from the UI render cycle.
  - Nested Topology: Robust support for nested groups and relative coordinate systems.

  Getting Started
  Check out our README.md (https://github.com/w57x/anode) for quick-start examples.

### Patch Changes

- Updated dependencies [be44381]
  - @w57x/anode@0.1.0
