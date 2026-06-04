# @w57x/anode-react

React bindings and components for Anode, providing a declarative layer over the headless core engine.

## Installation

```bash
npm install @w57x/anode-react @w57x/anode
```

## Quick Start

```tsx
import { AnodeProvider, World } from '@w57x/anode-react';

export default function App() {
  return (
    <AnodeProvider>
      <World />
    </AnodeProvider>
  );
}
```

## Key Components & Hooks

- **`World`**: Primary canvas component.
- **`AnodeProvider`**: Context provider for the engine.
- **`useAnode()`**: Access the core engine instance.
- **`useSocketValue()`**: Subscribe to reactive data flow.
- **`useVisibleNodes()`**: Optimized spatial culling for large graphs.

For detailed documentation, usage examples, and core principles, see the [Full README](https://github.com/w57x/anode?tab=readme-ov-file).
