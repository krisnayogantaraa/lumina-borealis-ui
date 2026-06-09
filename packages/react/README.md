# @lumina-borealis/react

> Native React components for the Lumina Borealis UI library.

This package provides a collection of highly customizable, accessible, and beautiful React components built on top of the `@lumina-borealis/core` styling engine.

## 📦 Installation

To use the React components, you must install both this package and the core styling package:

```bash
npm install @lumina-borealis/core @lumina-borealis/react
```

## 🚀 Usage

First, ensure you have imported the core CSS in your main entry file (e.g., `main.tsx` or `App.tsx`):

```tsx
// App.tsx
import '@lumina-borealis/core/src/index.css';
// Or if the core builds css to dist, ensure to import the correct compiled css path.
```

Then, you can import and use any component:

```tsx
import { Button, Card, Flex } from '@lumina-borealis/react';

function MyComponent() {
  return (
    <Card padding="md">
      <Flex direction="column" gap="sm">
        <h2>Welcome to Lumina Borealis</h2>
        <Button variant="primary">Click Me!</Button>
      </Flex>
    </Card>
  );
}
```

## 📄 License
MIT © Lumina Borealis
