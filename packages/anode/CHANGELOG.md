# @w57x/anode

## 0.3.0

### Minor Changes

- c0b0d99: - External Layout Integration: Added the `applyLayout()` capability to the core Context , allowing developers to integrate external layout engines (like Dagre)
  to automatically arrange nodes. Layout calculations are recorded as a single batch operation in the undo/redo history stack.
  - Optimized Culling and Rendering: Massively reduced unnecessary re-renders for viewport culling and the minimap, and decoupled link path recalculations so they
    only occur for edges connected to the node actively being dragged.
  - Manhattan Link Path Routing: Fixed a routing bug where STEP links would overlap or draw awkwardly when the target socket was positioned to the left of the
    source socket. It now properly generates a 5-segment non-overlapping path.
    - Node Alignment Animations: Ensured that nodes align instantly to their new positions during layout changes, bypassing unwanted transition animations.
  - Namespace Migration: Renamed the core organization scope throughout the package from `@stuly` to `@w57x`.

## 0.2.0

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

## 0.1.2

## 0.1.1

### Patch Changes

- ef2096a: docs: Enhanced library documentation
  - including comprehensive TSDoc for all core engine methods, elements, and React hooks.
  - simplified package READMEs with quick-start examples and added missing repository
    metadata to package.json.

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
