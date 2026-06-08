import type { Meta, StoryObj } from '@storybook/vue3';
import LumaButtonGroup from './ButtonGroup.vue';
import LumaButton from '../Button/Button.vue';

/**
 * **LumaButtonGroup** — Komponen pembungkus (wrapper) untuk menempelkan beberapa tombol menjadi satu kesatuan visual.
 *
 * Sangat berguna untuk membuat *Segmented Controls*, Navigasi/Paginasi, atau kumpulan aksi (aksi sekunder dan primer) 
 * yang saling terhubung secara visual.
 * 
 * ## Fitur Utama
 * - **Prop Cascade**: Anda dapat mengatur `variant` dan `size` di level grup, dan seluruh `LumaButton` di dalamnya akan otomatis mengikuti.
 * - **Override Hirarki**: Jika salah satu tombol anak secara eksplisit mendefinisikan prop-nya sendiri, maka prop anak tersebut yang akan menang.
 * 
 * ## 💡 Hubungan Komponen
 * Komponen ini dibuat khusus untuk digunakan bersama dengan **[LumaButton](?path=/docs/actions-lumabutton--docs)**. 
 * Seluruh prop dan variasi yang Anda pelajari di `LumaButton` bisa digunakan langsung di dalam *slot* komponen ini.
 */
const meta = {
  title: 'Actions/LumaButtonGroup',
  component: LumaButtonGroup,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
      description: 'Menetapkan varian default untuk SEMUA LumaButton di dalamnya. Bisa di-override per tombol.',
      table: { defaultValue: { summary: 'undefined (tiap tombol pakai default sendiri)' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Menetapkan ukuran default untuk SEMUA LumaButton di dalamnya. Bisa di-override per tombol.',
      table: { defaultValue: { summary: 'undefined (tiap tombol pakai default sendiri)' } },
    },
  },
} satisfies Meta<typeof LumaButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Contoh paling umum: filter atau Segmented Control.
 * Perhatikan bagaimana sudut melengkung otomatis hilang pada bagian tengah!
 * 
 * **Coba ubah kontrol `variant` dan `size` di panel bawah** untuk melihat semua tombol berubah serentak.
 */
export const SegmentedControl: Story = {
  args: { variant: 'outline', size: 'md' },
  render: (args: any) => ({
    components: { LumaButtonGroup, LumaButton },
    setup() { return { args }; },
    template: `
      <LumaButtonGroup v-bind="args">
        <LumaButton>Harian</LumaButton>
        <LumaButton>Mingguan</LumaButton>
        <LumaButton>Bulanan</LumaButton>
      </LumaButtonGroup>
    `
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<LumaButtonGroup variant="outline" size="md">
  <LumaButton>Harian</LumaButton>
  <LumaButton>Mingguan</LumaButton>
  <LumaButton>Bulanan</LumaButton>
</LumaButtonGroup>
        `.trim(),
      },
    },
  },
};

/**
 * Tombol yang hanya berupa Ikon (*Icon-Only Button*).
 * Cocok untuk aksi *formatting text* seperti tebal, miring, garis bawah.
 * 
 * **Coba ubah kontrol `variant` dan `size` di panel bawah** untuk melihat efeknya.
 */
export const TextFormatting: Story = {
  args: { variant: 'outline', size: 'md' },
  render: (args: any) => ({
    components: { LumaButtonGroup, LumaButton },
    setup() { return { args }; },
    template: `
      <LumaButtonGroup v-bind="args">
        <LumaButton icon="fa-bold" iconOnly aria-label="Bold" />
        <LumaButton icon="fa-italic" iconOnly aria-label="Italic" />
        <LumaButton icon="fa-underline" iconOnly aria-label="Underline" />
      </LumaButtonGroup>
    `
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<LumaButtonGroup variant="outline">
  <LumaButton icon="fa-bold" iconOnly aria-label="Bold" />
  <LumaButton icon="fa-italic" iconOnly aria-label="Italic" />
  <LumaButton icon="fa-underline" iconOnly aria-label="Underline" />
</LumaButtonGroup>
        `.trim(),
      },
    },
  },
};

/**
 * Aksi komplementer: aksi utama (Simpan) dan dropdown opsi lain.
 */
export const PrimaryActionGroup: Story = {
  args: { variant: 'primary', size: 'md' },
  render: (args: any) => ({
    components: { LumaButtonGroup, LumaButton },
    setup() { return { args }; },
    template: `
      <LumaButtonGroup v-bind="args">
        <LumaButton>Simpan Laporan</LumaButton>
        <LumaButton icon="fa-chevron-down" iconOnly aria-label="Opsi Lain" />
      </LumaButtonGroup>
    `
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<LumaButtonGroup variant="primary">
  <LumaButton>Simpan Laporan</LumaButton>
  <LumaButton icon="fa-chevron-down" iconOnly aria-label="Opsi Lain" />
</LumaButtonGroup>
        `.trim(),
      },
    },
  },
};

/**
 * **Kaskade Prop & Hirarki (Overrides)**
 * 
 * Grup diatur sebagai `outline` dan `sm`. Tombol yang tidak punya prop sendiri akan mengikuti grup.
 * Tombol tengah secara eksplisit diatur `variant="danger"`, sehingga ia *override* pengaturan grup.
 * 
 * **Coba ubah kontrol `variant` dan `size` di panel bawah** — tombol pinggir berubah, tombol tengah tetap `danger`!
 */
export const PropCascadeAndOverride: Story = {
  args: { variant: 'outline', size: 'sm' },
  render: (args: any) => ({
    components: { LumaButtonGroup, LumaButton },
    setup() { return { args }; },
    template: `
      <LumaButtonGroup v-bind="args">
        <LumaButton>Ikut Grup</LumaButton>
        <LumaButton variant="danger">Override (Danger)</LumaButton>
        <LumaButton>Ikut Grup</LumaButton>
      </LumaButtonGroup>
    `
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<!-- Tombol tanpa prop sendiri akan ikut grup (outline, sm) -->
<!-- Tombol dengan prop eksplisit akan override (danger) -->
<LumaButtonGroup variant="outline" size="sm">
  <LumaButton>Ikut Grup</LumaButton>
  <LumaButton variant="danger">Override (Danger)</LumaButton>
  <LumaButton>Ikut Grup</LumaButton>
</LumaButtonGroup>
        `.trim(),
      },
    },
  },
};
