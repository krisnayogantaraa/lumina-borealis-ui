import type { Meta, StoryObj } from '@storybook/vue3';
import LumaSpacer from './Spacer.vue';
import LumaStack from '../Stack/Stack.vue';
import LumaButton from '../../actions/Button/Button.vue';

/**
 * **LumaSpacer** — Komponen Layout Fleksibel untuk Flexbox.
 * 
 * Gunakan `LumaSpacer` di dalam komponen layout berbasis flexbox seperti `LumaStack` untuk mendorong elemen sebelahnya ke ujung container dengan cara mengisi semua sisa ruang kosong secara merata (`flex-grow: 1`).
 */
const meta = {
  title: 'Layout/LumaSpacer',
  component: LumaSpacer,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LumaSpacer>;

export default meta;
type Story = StoryObj<typeof meta>;

const navStyle = "background: var(--luma-bg-muted); border: 1px solid var(--luma-border-strong); padding: 1rem; border-radius: var(--luma-radius-md); width: 100%; box-sizing: border-box;";
const logoStyle = "font-family: var(--luma-font-sans); font-weight: 800; font-size: 1.25rem; color: var(--luma-text-primary);";

export const NavbarLayout: Story = {
  render: () => ({
    components: { LumaStack, LumaSpacer, LumaButton },
    setup() { return { navStyle, logoStyle }; },
    template: `
      <LumaStack direction="horizontal" align="center" gap="md" :style="navStyle">
        <!-- Brand Logo -->
        <div :style="logoStyle">LUMINA</div>
        
        <!-- Menu Items -->
        <LumaButton variant="text" size="sm">Home</LumaButton>
        <LumaButton variant="text" size="sm">Products</LumaButton>
        <LumaButton variant="text" size="sm">Pricing</LumaButton>
        
        <!-- Spacer mendorong tombol aksi ke kanan -->
        <LumaSpacer />
        
        <LumaButton variant="outline" size="sm">Masuk</LumaButton>
        <LumaButton variant="solid" size="sm">Daftar</LumaButton>
      </LumaStack>
    `
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<LumaStack direction="horizontal" align="center" gap="md" class="navbar">
  <!-- Brand Logo -->
  <div class="logo">LUMINA</div>
  
  <!-- Menu Items -->
  <LumaButton variant="text" size="sm">Home</LumaButton>
  <LumaButton variant="text" size="sm">Products</LumaButton>
  <LumaButton variant="text" size="sm">Pricing</LumaButton>
  
  <!-- Spacer mengisi seluruh sisa ruang kosong, mendorong tombol selanjutnya ke kanan -->
  <LumaSpacer />
  
  <LumaButton variant="outline" size="sm">Masuk</LumaButton>
  <LumaButton variant="solid" size="sm">Daftar</LumaButton>
</LumaStack>
        `.trim(),
      },
    },
  },
};

export const CardFooter: Story = {
  render: () => ({
    components: { LumaStack, LumaSpacer, LumaButton },
    setup() { return { navStyle }; },
    template: `
      <LumaStack direction="horizontal" align="center" gap="sm" :style="navStyle" style="max-width: 450px;">
        <LumaButton variant="text" color="danger" size="sm">Hapus Akun</LumaButton>
        
        <!-- Spacer memisahkan tombol berbahaya di kiri dengan tombol aksi utama di kanan -->
        <LumaSpacer />
        
        <LumaButton variant="outline" size="sm">Batal</LumaButton>
        <LumaButton variant="solid" size="sm">Simpan Perubahan</LumaButton>
      </LumaStack>
    `
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<LumaStack direction="horizontal" align="center" gap="sm" class="card-footer">
  <LumaButton variant="text" color="danger" size="sm">Hapus Akun</LumaButton>
  
  <!-- Spacer memisahkan tombol kiri dan kanan -->
  <LumaSpacer />
  
  <LumaButton variant="outline" size="sm">Batal</LumaButton>
  <LumaButton variant="solid" size="sm">Simpan Perubahan</LumaButton>
</LumaStack>
        `.trim(),
      },
    },
  },
};
