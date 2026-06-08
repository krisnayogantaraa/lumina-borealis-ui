import type { Meta, StoryObj } from '@storybook/vue3';
import LumaIcon from './Icon.vue';
import { Camera, Settings, User } from '@lucide/vue'; // Untuk contoh komponen

/**
 * **LumaIcon** — Komponen Ikon Universal Lumina Borealis.
 *
 * Komponen ini adalah jantung dari Sistem Ikon Hybrid di seluruh UI Library kita.
 * Komponen lain (seperti `LumaButton`) menggunakan `LumaIcon` di belakang layar untuk
 * memastikan *user* memiliki kebebasan mutlak dalam memilih *provider* ikon mereka.
 *
 * ## Panduan Setup: Global Icon Resolver ⚙️
 * 
 * Agar Anda dapat memasukkan *string* (misalnya `icon="user"`) dan membiarkan Lumina merendernya dengan benar,
 * Anda harus mendaftarkan fungsi *resolver* di file `main.ts` aplikasi Anda.
 *
 * ### Kasus 1: Menggunakan Lucide (atau Phosphor) dengan Tree-Shaking Sempurna
 * Jika Anda langsung me-*mapping* *string* ke seluruh *library* Lucide, ukuran aplikasi Anda akan membengkak.
 * Lakukan pemetaan secara eksplisit hanya untuk ikon yang Anda pakai:
 * 
 * ```ts
 * // main.ts
 * import { createApp } from 'vue'
 * import { createLumina } from '@lumina-borealis/vue'
 * import { User, Settings, Camera } from '@lucide/vue'
 * 
 * const app = createApp(App)
 * 
 * app.use(createLumina({
 *   icons: {
 *     resolver: (name) => {
 *       // Mapping manual menjamin 100% Tree-Shaking!
 *       const map: Record<string, any> = {
 *         'user': User,
 *         'settings': Settings,
 *         'camera': Camera
 *       }
 *       return map[name];
 *     }
 *   }
 * }))
 * ```
 *
 * ### Kasus 2: Menggunakan FontAwesome (atau PrimeIcons / Class-based)
 * Jika proyek Anda terlanjur menggunakan FontAwesome dari CDN atau CSS, Anda bisa me-*return* *string class* HTML:
 * 
 * ```ts
 * // main.ts
 * app.use(createLumina({
 *   icons: {
 *     resolver: (name) => {
 *       if (name.startsWith('fa-')) {
 *         return \`fa-solid \${name}\`; // Ini akan dirender sebagai <i class="fa-solid fa-xxx"></i>
 *       }
 *     }
 *   }
 * }))
 * ```
 */
const meta = {
  title: 'Components/LumaIcon',
  component: LumaIcon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Nama ikon (jika menggunakan global string) ATAU langsung masukkan objek Komponen Vue.',
    },
  },
} satisfies Meta<typeof LumaIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Ini adalah cara memanggil ikon secara statis dan langsung dengan komponen Vue.
 * Ini adalah **rekomendasi utama** jika Anda peduli dengan ukuran bundle aplikasi Anda.
 */
export const DirectVueComponent: Story = {
  args: { name: Camera },
  render: () => ({
    components: { LumaIcon },
    setup() {
      return { Camera, Settings, User };
    },
    template: `
      <div style="display: flex; gap: 2rem; font-size: 2rem; color: var(--luma-color-primary);">
        <LumaIcon :name="Camera" />
        <LumaIcon :name="Settings" />
        <LumaIcon :name="User" />
      </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<script setup>
import { Camera, Settings, User } from '@lucide/vue'
</script>

<template>
  <LumaIcon :name="Camera" />
  <LumaIcon :name="Settings" />
  <LumaIcon :name="User" />
</template>
        `.trim(),
      },
    },
  },
};

/**
 * Ini adalah cara memanggil ikon menggunakan String.
 * *String* ini diterjemahkan menjadi komponen asli karena *Mock Resolver* di Storybook
 * kita sudah memetakan nama "camera", "settings", dan "user" ke komponen Lucide.
 */
export const StringResolved: Story = {
  args: { name: 'camera' },
  render: () => ({
    components: { LumaIcon },
    template: `
      <div style="display: flex; gap: 2rem; font-size: 2rem; color: var(--luma-color-secondary);">
        <LumaIcon name="camera" />
        <LumaIcon name="fa-heart" style="color: var(--luma-color-danger);" />
      </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<!-- String "camera" di-resolve menjadi komponen SVG Lucide -->
<LumaIcon name="camera" />

<!-- String "fa-heart" di-resolve menjadi <i class="fa-solid fa-heart"> -->
<LumaIcon name="fa-heart" />
        `.trim(),
      },
    },
  },
};
