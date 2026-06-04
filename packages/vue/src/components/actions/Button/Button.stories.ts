import type { Meta, StoryObj } from '@storybook/vue3';
import LumaButton from './Button.vue';
import { Mail, Search } from '@lucide/vue'; // Mengambil langsung komponen dari library

/**
 * **LumaButton** — Komponen tombol interaktif untuk Lumina Borealis.
 *
 * ## Sistem Ikon Global 🎨
 * Lumina Borealis merekomendasikan **[Lucide Icons](https://lucide.dev)** sebagai provider ikon default. 
 * LumaButton mendukung Sistem Ikon Hybrid yang sangat fleksibel. Anda dapat mengisi prop `icon` dengan:
 * 
 * 1. **Komponen Vue Asli (Best Practice)**: Mencegah ukuran aplikasi membesar (100% Tree-Shakable). Contoh: `:icon="MailIcon"`
 * 2. **String Global Resolved**: Cukup berikan string seperti `icon="check"`. Lumina akan menerjemahkannya berdasarkan konfigurasi `createLumina()` di aplikasi Anda (bisa menjadi Lucide SVG, FontAwesome class, dll).
 * 
 * 💡 **PENTING (Ikon):** Untuk memetakan ikon secara global atau mengganti *provider* ikon, baca **[Dokumentasi LumaIcon](?path=/docs/components-lumaicon--docs)**.
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
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
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
};

export const Secondary: Story = {
  args: { variant: 'secondary', default: 'Secondary' },
  render,
};

export const Outline: Story = {
  args: { variant: 'outline', default: 'Outline' },
  render,
};

export const Ghost: Story = {
  args: { variant: 'ghost', default: 'Ghost' },
  render,
};

export const Danger: Story = {
  args: { variant: 'danger', default: 'Delete' },
  render,
};

/** 
 * Contoh ini menampilkan cara TERBAIK untuk memanggil ikon: melemparkan komponen secara langsung.
 * Ukuran bundle akan tetap sangat kecil karena fungsi tree-shaking berjalan sempurna.
 */
export const IconAsVueComponent: Story = {
  render: () => ({
    components: { LumaButton },
    setup() {
      // Import langsung komponen SVG dari Lucide
      return { Mail, Search };
    },
    template: `
      <div style="display: flex; gap: 1rem;">
        <LumaButton :icon="Mail">Kirim Pesan</LumaButton>
        <LumaButton :icon="Search" iconPos="right" variant="outline">Cari Data</LumaButton>
      </div>
    `
  }),
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
        <!-- 'check' di-resolve menjadi komponen SVG Lucide Check via global resolver -->
        <LumaButton icon="check" variant="success">Disetujui</LumaButton>
        
        <!-- 'fa-heart' di-resolve menjadi HTML class '<i class="fa fa-heart">' via global resolver -->
        <!-- Bayangkan Anda meng-import CSS FontAwesome di index.html aplikasi Anda -->
        <LumaButton icon="fa-heart" variant="danger">FontAwesome Fallback</LumaButton>
      </div>
    `
  }),
};

/** 
 * Tombol yang HANYA berisi ikon. Prop \`iconOnly\` memastikan padding sisi kanan-kiri proporsional menjadi bentuk kotak proporsional.
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
};
