# @lumina-borealis/vue

> Native Vue 3 components for the Lumina Borealis UI library.

This package provides a collection of highly customizable, accessible, and beautiful Vue 3 components built on top of the `@lumina-borealis/core` styling engine.

## 📦 Installation

To use the Vue components, simply install the package (the core styling package will be installed automatically):

```bash
npm install @lumina-borealis/vue
```

## 🚀 Usage

First, ensure you have imported the core CSS and registered the `createLumina` plugin in your main entry file (e.g., `main.ts`). The plugin allows you to configure global features like Icon Mapping (for string-based icons) and Theming:

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { createLumina } from '@lumina-borealis/vue'

// Import core CSS
import '@lumina-borealis/core/src/index.css'

// (Optional) Import icons for global mapping to get tree-shaking with string props
import { Mail, Check } from 'lucide-vue-next'

const app = createApp(App)

app.use(createLumina({
  icons: {
    resolver: (name) => {
      const map: Record<string, any> = {
        'mail': Mail,
        'check': Check
      }
      return map[name];
    }
  }
}))

app.mount('#app')
```

Then, you can import and use any component in your `.vue` files:

```vue
<script setup>
import { LumaButton, LumaContainer, LumaStack } from '@lumina-borealis/vue';
</script>

<template>
  <LumaContainer>
    <LumaStack direction="vertical" gap="sm">
      <h2>Welcome to Lumina Borealis</h2>
      <LumaButton variant="primary" icon="mail">Send Message</LumaButton>
      <LumaButton variant="outline" icon="check">Approved</LumaButton>
    </LumaStack>
  </LumaContainer>
</template>
```

## 📄 License
MIT © Lumina Borealis
