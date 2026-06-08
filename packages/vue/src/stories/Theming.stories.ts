import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, onMounted, onUnmounted } from 'vue';
import LumaButton from '../components/actions/Button/Button.vue';
import LumaButtonGroup from '../components/actions/ButtonGroup/ButtonGroup.vue';

/**
 * # 🎨 Theming — Kustomisasi Warna Lumina Borealis
 * 
 * Lumina Borealis dirancang agar warnanya bisa dikustomisasi secara **menyeluruh dan disiplin**.
 * Alih-alih memasukkan kode warna (*hex/RGB*) langsung ke setiap komponen (yang akan membuat kode berantakan),
 * Lumina memaksa Anda untuk mendaftarkan warna di **satu tempat**: konfigurasi `createLumina()`.
 * 
 * ## Cara Kerja
 * 
 * Saat Anda memanggil `createLumina()` dengan opsi `theme.colors`, Lumina akan secara otomatis
 * menyuntikkan warna-warna tersebut sebagai **CSS Custom Properties** (`--luma-color-xxx`) ke `:root`.
 * Seluruh komponen Lumina akan langsung merespons perubahan ini tanpa kode tambahan.
 * 
 * ## Contoh Pengaturan di `main.ts`
 * 
 * ```ts
 * import { createApp } from 'vue'
 * import { createLumina } from '@lumina-borealis/vue'
 * import App from './App.vue'
 * 
 * const app = createApp(App)
 * 
 * app.use(createLumina({
 *   theme: {
 *     colors: {
 *       // Override warna bawaan
 *       primary: {
 *         base: '#2563eb',   // Biru (mengganti Teal default)
 *         hover: '#1d4ed8',
 *         active: '#1e40af',
 *         light: '#eff6ff',
 *       },
 *       // Atau biarkan sebagian kosong, Lumina akan pakai default
 *       danger: {
 *         base: '#dc2626',  // Merah yang lebih terang
 *       },
 *     }
 *   }
 * }))
 * ```
 * 
 * ## Aturan Hierarki
 * 
 * | Prioritas | Sumber | Contoh |
 * |---|---|---|
 * | 1 (Tertinggi) | `createLumina({ theme })` | Menang di seluruh aplikasi |
 * | 2 | CSS override manual di project | `.my-section { --luma-color-primary: red; }` |
 * | 3 (Terendah) | Default dari `@lumina-borealis/core` | Teal, Indigo, Rose, dll. |
 * 
 * 💡 **PENTING:** Komponen-komponen yang terpengaruh oleh warna ini antara lain **[LumaButton](?path=/docs/actions-lumabutton--docs)** dan **[LumaButtonGroup](?path=/docs/actions-lumabuttongroup--docs)**.
 * Kedepannya, semua komponen baru (Input, Checkbox, dll.) juga akan merespons warna yang sama.
 */
const meta = {
  title: 'Configuration/Theming',
  tags: ['autodocs'],
  parameters: {
    // Tidak perlu kontrol karena ini halaman dokumentasi
    controls: { disable: true },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Demo interaktif: Klik tombol "Ganti ke Biru" atau "Ganti ke Ungu" untuk melihat
 * bagaimana **seluruh komponen Lumina berubah warna secara bersamaan** — karena semuanya
 * membaca dari CSS variable yang sama.
 */
export const LiveThemeSwitcher: Story = {
  render: () => ({
    components: { LumaButton, LumaButtonGroup },
    setup() {
      const currentTheme = ref('Default (Teal)');

      function applyTheme(colors: Record<string, string>, label: string) {
        const root = document.documentElement;
        for (const [key, val] of Object.entries(colors)) {
          root.style.setProperty(key, val);
        }
        currentTheme.value = label;
      }

      function resetTheme() {
        const root = document.documentElement;
        const vars = [
          '--luma-color-primary', '--luma-color-primary-hover', 
          '--luma-color-primary-active', '--luma-color-primary-light',
        ];
        vars.forEach(v => root.style.removeProperty(v));
        currentTheme.value = 'Default (Teal)';
      }

      return { currentTheme, applyTheme, resetTheme };
    },
    template: `
      <div>
        <p style="margin-bottom: 1rem; font-family: var(--luma-font-sans); color: var(--luma-text-secondary);">
          Tema aktif: <strong style="color: var(--luma-color-primary);">{{ currentTheme }}</strong>
        </p>

        <div style="display: flex; gap: 0.5rem; margin-bottom: 2rem; flex-wrap: wrap;">
          <LumaButton 
            variant="outline" size="sm"
            @click="applyTheme({ '--luma-color-primary': '#2563eb', '--luma-color-primary-hover': '#1d4ed8', '--luma-color-primary-active': '#1e40af', '--luma-color-primary-light': '#eff6ff' }, 'Biru (Blue)')">
            🔵 Ganti ke Biru
          </LumaButton>
          <LumaButton 
            variant="outline" size="sm"
            @click="applyTheme({ '--luma-color-primary': '#7c3aed', '--luma-color-primary-hover': '#6d28d9', '--luma-color-primary-active': '#5b21b6', '--luma-color-primary-light': '#f5f3ff' }, 'Ungu (Violet)')">
            🟣 Ganti ke Ungu
          </LumaButton>
          <LumaButton 
            variant="outline" size="sm"
            @click="applyTheme({ '--luma-color-primary': '#ea580c', '--luma-color-primary-hover': '#c2410c', '--luma-color-primary-active': '#9a3412', '--luma-color-primary-light': '#fff7ed' }, 'Oranye (Orange)')">
            🟠 Ganti ke Oranye
          </LumaButton>
          <LumaButton variant="ghost" size="sm" @click="resetTheme()">
            ↩ Reset ke Default
          </LumaButton>
        </div>

        <hr style="border: 1px solid var(--luma-border-default); margin-bottom: 1.5rem;" />

        <p style="margin-bottom: 0.75rem; font-family: var(--luma-font-sans); font-size: var(--luma-text-sm); color: var(--luma-text-muted);">
          Perhatikan — semua komponen di bawah ini langsung berubah warna:
        </p>

        <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: flex-start;">
          <LumaButton variant="primary">Primary Solid</LumaButton>
          <LumaButton variant="outline">Primary Outline</LumaButton>
          <LumaButton variant="ghost">Primary Ghost</LumaButton>
          <LumaButton variant="primary" icon="check">Dengan Ikon</LumaButton>
          <LumaButton variant="primary" icon="search" iconOnly aria-label="Cari" />
        </div>

        <div style="margin-top: 1.5rem;">
          <LumaButtonGroup>
            <LumaButton variant="primary">Simpan</LumaButton>
            <LumaButton variant="primary" icon="fa-chevron-down" iconOnly aria-label="Opsi" />
          </LumaButtonGroup>
        </div>
      </div>
    `,
  }),
};
