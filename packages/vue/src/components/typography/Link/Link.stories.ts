import type { Meta, StoryObj } from '@storybook/vue3';
import LumaLink from './Link.vue';
import LumaText from '../Text/Text.vue';

/**
 * **LumaLink** — Komponen Hyperlink.
 *
 * Tautan dengan transisi hover halus, kontrol garis bawah,
 * dukungan external link otomatis (`target="_blank"`), dan
 * kompatibel dengan Vue Router (`as="RouterLink"`).
 */
const meta = {
  title: 'Typography/LumaLink',
  component: LumaLink,
  tags: ['autodocs'],
  argTypes: {
    href: { control: 'text' },
    as: { control: 'text' },
    external: { control: 'boolean' },
    underline: { control: 'select', options: ['always', 'hover', 'none'] },
    color: { control: 'select', options: ['primary', 'default', 'muted'] },
  },
} satisfies Meta<typeof LumaLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ColorVariants: Story = {
  render: () => ({
    components: { LumaLink },
    template: `
      <div style="display: flex; flex-direction: column; gap: 0.75rem; font-family: var(--luma-font-sans);">
        <LumaLink href="#" color="primary">Primary Link — Warna aksen utama</LumaLink>
        <LumaLink href="#" color="default">Default Link — Warna teks standar, hover jadi primary</LumaLink>
        <LumaLink href="#" color="muted">Muted Link — Warna halus untuk konteks sekunder</LumaLink>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<LumaLink href="#" color="primary">Primary Link</LumaLink>
<LumaLink href="#" color="default">Default Link</LumaLink>
<LumaLink href="#" color="muted">Muted Link</LumaLink>
        `.trim(),
      },
    },
  },
};

export const UnderlineStyles: Story = {
  render: () => ({
    components: { LumaLink },
    template: `
      <div style="display: flex; flex-direction: column; gap: 0.75rem; font-family: var(--luma-font-sans);">
        <LumaLink href="#" underline="always">Always — Garis bawah selalu terlihat</LumaLink>
        <LumaLink href="#" underline="hover">Hover — Garis bawah muncul saat di-hover (default)</LumaLink>
        <LumaLink href="#" underline="none">None — Tidak ada garis bawah sama sekali</LumaLink>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<LumaLink href="#" underline="always">Always underline</LumaLink>
<LumaLink href="#" underline="hover">Hover underline (default)</LumaLink>
<LumaLink href="#" underline="none">No underline</LumaLink>
        `.trim(),
      },
    },
  },
};

export const ExternalLink: Story = {
  args: { href: 'https://github.com', external: true, underline: 'always' },
  render: (args: any) => ({
    components: { LumaLink, LumaText },
    setup() { return { args }; },
    template: `
      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        <LumaLink v-bind="args">Buka GitHub di tab baru</LumaLink>
        <LumaText variant="caption" color="muted">
          ☝️ Perhatikan ikon panah kecil (↗) di akhir teks — indikator bahwa link ini membuka tab baru.
          Atribut target="_blank" dan rel="noopener noreferrer" ditambahkan secara otomatis.
        </LumaText>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<!-- Otomatis menambahkan target="_blank" rel="noopener noreferrer" -->
<LumaLink href="https://github.com" external underline="always">
  Buka GitHub di tab baru
</LumaLink>
        `.trim(),
      },
    },
  },
};

export const InlineWithText: Story = {
  render: () => ({
    components: { LumaLink, LumaText },
    template: `
      <LumaText variant="body-md" style="max-width: 500px;">
        Dengan mendaftar, Anda menyetujui 
        <LumaLink href="#" underline="always">Syarat dan Ketentuan</LumaLink> 
        serta 
        <LumaLink href="#" underline="always">Kebijakan Privasi</LumaLink> 
        kami. Silakan hubungi 
        <LumaLink href="mailto:support@lumina.dev" color="muted" underline="hover">support@lumina.dev</LumaLink> 
        jika ada pertanyaan.
      </LumaText>
    `,
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<LumaText>
  Dengan mendaftar, Anda menyetujui 
  <LumaLink href="#" underline="always">Syarat dan Ketentuan</LumaLink> 
  serta 
  <LumaLink href="#" underline="always">Kebijakan Privasi</LumaLink> 
  kami.
</LumaText>
        `.trim(),
      },
    },
  },
};
