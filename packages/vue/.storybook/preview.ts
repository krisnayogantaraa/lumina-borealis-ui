import type { Preview } from '@storybook/vue3';
import { setup } from '@storybook/vue3';
import { createLumina } from '../src/config';
import { Check, ArrowRight, Trash, Search, Camera, Settings, User, ArrowRightFromLine } from '@lucide/vue';

// Daftarkan plugin Lumina Borealis secara global di Storybook
setup((app) => {
  app.use(createLumina({
    icons: {
      resolver: (name) => {
        // 1. Mocking FontAwesome style (jika string berawalan 'fa-')
        if (name.startsWith('fa-')) {
          // FontAwesome 6 menggunakan class 'fa-solid fa-xxx'
          return `fa-solid ${name}`;
        }
        
        // 2. Mocking Lucide SVG mapping
        const lucideMap: Record<string, any> = {
          'check': Check,
          'arrow-right': ArrowRight,
          'arrow-right-from-line': ArrowRightFromLine,
          'trash': Trash,
          'search': Search,
          'camera': Camera,
          'settings': Settings,
          'user': User,
        };
        return lucideMap[name];
      }
    },

    // Contoh: User bisa override warna di sini!
    // Uncomment baris di bawah untuk melihat efeknya secara langsung:
    // theme: {
    //   colors: {
    //     primary: { base: '#2563eb', hover: '#1d4ed8', active: '#1e40af', light: '#eff6ff' },
    //   }
    // }
  }));
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
