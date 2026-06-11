import type { Meta, StoryObj } from '@storybook/vue3';
import LumaButton from './Button.vue';
import { Mail, Search } from '@lucide/vue'; // Mengambil langsung komponen dari library

/**
 * **LumaButton** — Komponen tombol interaktif untuk Lumina Borealis.
 *
 * ## Sistem Ikon (3 Cara Penggunaan) 🎨
 * LumaButton mendukung Sistem Ikon Hybrid yang sangat fleksibel. Anda dapat mengisi prop `icon` dengan 3 cara:
 * 
 * 1. **Manual Import (Paling Disarankan)**: Import komponen (misal Lucide) di tiap file. Contoh: `:icon="MailIcon"`. Menjamin 100% Tree-shaking.
 * 2. **Global Component Map**: Cukup tulis string `icon="mail"`, dan atur *resolver* di `main.ts` untuk me-return komponen SVG-nya tanpa perlu *import* manual lagi.
 * 3. **Global Class-based**: Tulis string `icon="fa-mail"`, dan atur *resolver* di `main.ts` untuk me-return class FontAwesome atau pustaka lain.
 * 
 * 💡 **PENTING (Ikon):** Untuk melihat detail konfigurasi ketiga cara di atas, baca **[Dokumentasi LumaIcon](?path=/docs/components-lumaicon--docs)**.
 * 
 * 💡 **PENTING (Grup):** Untuk menggabungkan beberapa tombol menjadi satu kesatuan visual yang menempel (seperti filter atau navigasi), Anda harus membungkusnya dengan **[LumaButtonGroup](?path=/docs/actions-lumabuttongroup--docs)**.
 */
const meta = {
  title: 'Actions/LumaButton',
  component: LumaButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
      description: 'Varian visual tombol',
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Ukuran tombol',
      table: { defaultValue: { summary: 'md' } },
    },
    icon: {
      control: 'text',
      description: 'Shorthand untuk icon. Bisa menerima String (di-resolve global) atau Komponen Vue.',
    },
    iconPos: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Posisi ikon terhadap teks (default: left)',
      table: { defaultValue: { summary: 'left' } },
    },
    iconOnly: {
      control: 'boolean',
      description: 'Membentuk tombol menjadi bujur sangkar (square) khusus untuk ikon',
    }
  },
} satisfies Meta<typeof LumaButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// ---- Render helper dasar ----
const render = (args: any) => ({
  components: { LumaButton },
  setup() { return { args }; },
  template: `<LumaButton v-bind="args">{{ args.default }}</LumaButton>`,
});

// ---- Stories ----

export const Primary: Story = {
  args: { variant: 'primary', default: 'Primary Button' },
  render,
  parameters: { docs: { source: { language: 'html', code: `<LumaButton variant="primary">Primary Button</LumaButton>` } } },
};

export const Secondary: Story = {
  args: { variant: 'secondary', default: 'Secondary' },
  render,
  parameters: { docs: { source: { language: 'html', code: `<LumaButton variant="secondary">Secondary</LumaButton>` } } },
};

export const Outline: Story = {
  args: { variant: 'outline', default: 'Outline' },
  render,
  parameters: { docs: { source: { language: 'html', code: `<LumaButton variant="outline">Outline</LumaButton>` } } },
};

export const Ghost: Story = {
  args: { variant: 'ghost', default: 'Ghost' },
  render,
  parameters: { docs: { source: { language: 'html', code: `<LumaButton variant="ghost">Ghost</LumaButton>` } } },
};

export const Danger: Story = {
  args: { variant: 'danger', default: 'Delete' },
  render,
  parameters: { docs: { source: { language: 'html', code: `<LumaButton variant="danger">Delete</LumaButton>` } } },
};

/** 
 * Contoh ini menampilkan cara TERBAIK untuk memanggil ikon: melemparkan komponen secara langsung.
 * Ukuran bundle akan tetap sangat kecil karena fungsi tree-shaking berjalan sempurna.
 */
export const IconAsVueComponent: Story = {
  render: () => ({
    components: { LumaButton },
    setup() {
      return { Mail, Search };
    },
    template: `
      <div style="display: flex; gap: 1rem;">
        <LumaButton :icon="Mail">Kirim Pesan</LumaButton>
        <LumaButton :icon="Search" iconPos="right" variant="outline">Cari Data</LumaButton>
      </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<script setup>
import { Mail, Search } from '@lucide/vue'
</script>

<template>
  <LumaButton :icon="Mail">Kirim Pesan</LumaButton>
  <LumaButton :icon="Search" iconPos="right" variant="outline">Cari Data</LumaButton>
</template>
        `.trim(),
      },
    },
  },
};

/**
 * Contoh ini menampilkan pemanggilan ikon menggunakan **String**.
 * String ini secara ajaib diterjemahkan karena kita sudah mengatur \`resolver\` di konfigurasi global \`createLumina()\`.
 */
export const IconAsGlobalString: Story = {
  render: () => ({
    components: { LumaButton },
    template: `
      <div style="display: flex; gap: 1rem;">
        <LumaButton icon="check" variant="primary">Disetujui</LumaButton>
        <LumaButton icon="fa-heart" variant="danger">FontAwesome</LumaButton>
      </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<!-- String "check" di-resolve ke Lucide SVG via global resolver -->
<LumaButton icon="check" variant="primary">Disetujui</LumaButton>

<!-- String "fa-heart" di-resolve ke FontAwesome class via global resolver -->
<LumaButton icon="fa-heart" variant="danger">FontAwesome</LumaButton>
        `.trim(),
      },
    },
  },
};

/** 
 * Tombol yang HANYA berisi ikon. Prop \`iconOnly\` memastikan padding proporsional menjadi bentuk kotak.
 * Ingatlah untuk selalu memberikan \`aria-label\` agar dapat dibaca oleh pembaca layar (difabel).
 */
export const IconOnlyButton: Story = {
  render: () => ({
    components: { LumaButton },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <LumaButton icon="fa-trash" iconOnly aria-label="Hapus Item" variant="danger" size="sm" />
        <LumaButton icon="fa-search" iconOnly aria-label="Cari Sesuatu" variant="primary" size="md" />
        <LumaButton icon="fa-cog" iconOnly aria-label="Pengaturan" variant="outline" size="lg" />
      </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<LumaButton icon="fa-trash" iconOnly aria-label="Hapus" variant="danger" size="sm" />
<LumaButton icon="fa-search" iconOnly aria-label="Cari" variant="primary" size="md" />
<LumaButton icon="fa-cog" iconOnly aria-label="Pengaturan" variant="outline" size="lg" />
        `.trim(),
      },
    },
  },
};

