# 🌌 Lumina Borealis UI

![License](https://img.shields.io/npm/l/lumina-borealis-ui)
![Version](https://img.shields.io/npm/v/@lumina-borealis/core)

> A modern, premium, and multi-framework UI component library built for React and Vue.

Lumina Borealis is designed to help developers build stunning, aesthetic, and highly responsive user interfaces quickly. With a core architecture based on pure CSS tokens and utilities, it provides perfectly synced components across multiple JavaScript frameworks.

## 🌟 Features

- **Multi-Framework**: Native components for both **React** and **Vue**.
- **Aesthetic by Default**: Beautifully crafted designs out-of-the-box with glassmorphism, micro-animations, and modern typography.
- **Framework Agnostic Core**: Shared CSS variables and design tokens in `@lumina-borealis/core` ensure absolute consistency across frameworks.
- **Developer Experience**: Fully typed with TypeScript, intuitive API, and excellent documentation.

## 📦 Packages

This repository is a monorepo containing the following packages:

| Package | Description | Version |
| ------- | ----------- | ------- |
| [`@lumina-borealis/core`](./packages/core) | Core CSS, design tokens, and utility classes. | [![npm](https://img.shields.io/npm/v/@lumina-borealis/core)](https://www.npmjs.com/package/@lumina-borealis/core) |
| [`@lumina-borealis/react`](./packages/react) | Native React UI components. | [![npm](https://img.shields.io/npm/v/@lumina-borealis/react)](https://www.npmjs.com/package/@lumina-borealis/react) |
| [`@lumina-borealis/vue`](./packages/vue) | Native Vue UI components. | [![npm](https://img.shields.io/npm/v/@lumina-borealis/vue)](https://www.npmjs.com/package/@lumina-borealis/vue) |

## 🚀 Quick Start

Depending on your framework of choice, install the core styles and the specific framework components:

### For React
```bash
npm install @lumina-borealis/core @lumina-borealis/react
```

### For Vue
```bash
npm install @lumina-borealis/core @lumina-borealis/vue
```

## 💻 Usage Example (React)

```tsx
import React from 'react';
import '@lumina-borealis/core/src/index.css';
import { Button } from '@lumina-borealis/react';

function App() {
  return (
    <Button variant="primary">
      Hello Lumina Borealis!
    </Button>
  );
}

export default App;
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for more details.

## 📄 License

MIT © Lumina Borealis
