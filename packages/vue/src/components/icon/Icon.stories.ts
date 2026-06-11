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
 * ## 3 Cara Menggunakan Ikon
 * 
 * LumaIcon dirancang agar sangat fleksibel. Anda bebas memilih satu dari tiga metode ini sesuai dengan tingkat kenyamanan dan kebutuhan proyek Anda:
 * 
 * ### Cara 1: Import Manual di Setiap Halaman (Sangat Disarankan)
 * Cara paling aman dan paling optimal. Anda meng-*import* komponen SVG langsung (misalnya dari `lucide-vue-next`) di setiap halaman atau komponen Vue yang membutuhkannya.
 * - **Kelebihan**: Ukuran *bundle* aplikasi akan sangat kecil karena menjamin 100% Tree-Shaking.
 * - **Kekurangan**: Harus meng-*import* ikon satu per satu di setiap file, jadi terasa sedikit repetitif.
 * 
 * ### Cara 2: Global Map di \`main.ts\` (SVG / Component)
 * Jika Anda lelah meng-*import* ikon di setiap halaman, tapi tetap ingin memakai ikon berbasis komponen SVG, Anda bisa mendaftarkannya secara global menggunakan fitur **Resolver** di \`main.ts\`.
 * - **Kelebihan**: Anda cukup memanggil nama ikon dalam bentuk *string* (misal: \`name="user"\`) di komponen mana pun tanpa perlu *import* lagi.
 * - **Kekurangan**: Anda harus mendaftarkan ikon yang Anda pakai ke dalam \`map\` secara manual di \`main.ts\` agar ikon yang tidak terpakai tidak ikut masuk ke *bundle* akhir.
 * 
 * ```ts
 * // Di main.ts
 * import { User, Settings, Camera } from '@lucide/vue'
 * 
 * app.use(createLumina({
 *   icons: {
 *     resolver: (name) => {
 *        // Mapping komponen SVG ke string
 *        const map: Record<string, any> = {
 *          'user': User,
 *          'camera': Camera,
 *          'settings': Settings
 *        }
 *        return map[name];
 *     }
 *   }
 * }))
 * ```
 *
 * ### Cara 3: Class-based (FontAwesome / Icon Fonts)
 * Jika proyek Anda lebih nyaman (atau sudah terlanjur) menggunakan pustaka ikon berbasis *font/class* seperti FontAwesome, Anda juga bisa mengaturnya di **Resolver**.
 * - **Kelebihan**: Sangat mudah dan ringkas.
 * - **Kekurangan**: Bergantung pada CSS eksternal (CDN/Asset).
 * 
 * ```ts
 * // Di main.ts
 * app.use(createLumina({
 *   icons: {
 *     resolver: (name) => {
 *       // Kalau nama ikon diawali 'fa-', jadikan class FontAwesome
 *       if (name.startsWith('fa-')) {
 *         return \`fa-solid \${name}\`;
 *       }
 *     }
 *   }
 * }))
 * ```
 * Anda kemudian bisa menggunakannya semudah: \`<LumaIcon name="fa-home" />\`
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
