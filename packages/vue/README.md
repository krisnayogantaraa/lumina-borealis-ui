# @lumina-borealis/vue

> Native Vue 3 components for the Lumina Borealis UI library.

This package provides a collection of highly customizable, accessible, and beautiful Vue 3 components built on top of the `@lumina-borealis/core` styling engine.

## 📦 Installation

To use the Vue components, simply install the package (the core styling package will be installed automatically):

```bash
npm install @lumina-borealis/vue
```

## 🚀 Usage

First, ensure you have imported the core CSS in your main entry file (e.g., `main.ts`):

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import '@lumina-borealis/core/src/index.css'

createApp(App).mount('#app')
```

Then, you can import and use any component in your `.vue` files:

```vue
<script setup>
import { Button, Card, Flex } from '@lumina-borealis/vue';
</script>

<template>
  <Card padding="md">
    <Flex direction="column" gap="sm">
      <h2>Welcome to Lumina Borealis</h2>
      <Button variant="primary">Click Me!</Button>
    </Flex>
  </Card>
</template>
```

## 📄 License
MIT © Lumina Borealis
