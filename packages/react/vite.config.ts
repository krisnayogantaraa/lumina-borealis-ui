import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'LuminaBorealisReact',
      formats: ['es', 'umd'],
      fileName: 'lumina-borealis-react',
    },
    rollupOptions: {
      // Externalize deps that shouldn't be bundled into the library
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    },
    sourcemap: true,
    // Clear dist before each build
    emptyOutDir: true,
  },
});
