import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'LuminaBorealisVue',
      formats: ['es', 'umd'],
      fileName: 'lumina-borealis-vue',
    },
    rollupOptions: {
      // Externalize deps that shouldn't be bundled into the library
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    sourcemap: true,
    // Clear dist before each build
    emptyOutDir: true,
  },
});
