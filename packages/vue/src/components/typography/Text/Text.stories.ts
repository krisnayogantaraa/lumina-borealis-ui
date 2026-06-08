import type { Meta, StoryObj } from '@storybook/vue3';
import LumaText from './Text.vue';

/**
 * **LumaText** — Komponen Teks Universal.
 *
 * Untuk paragraf, deskripsi, caption, label — segala jenis teks
 * selain heading. Mendukung variasi ukuran, ketebalan font,
 * warna semantik, dan truncation otomatis.
 */
const meta = {
  title: 'Typography/LumaText',
  component: LumaText,
  tags: ['autodocs'],
  argTypes: {
    as: { control: 'text' },
    variant: { control: 'select', options: ['body-lg', 'body-md', 'body-sm', 'caption'] },
    weight: { control: 'select', options: ['light', 'normal', 'medium', 'semibold', 'bold'] },
    color: { control: 'select', options: ['default', 'muted', 'subtle', 'primary', 'danger', 'success', 'warning'] },
    align: { control: 'select', options: ['left', 'center', 'right', 'justify'] },
    truncated: { control: 'boolean' },
  },
} satisfies Meta<typeof LumaText>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleText = 'Lumina Borealis adalah design system modern yang terinspirasi oleh keindahan aurora borealis. Dibangun dengan arsitektur multi-layer yang memisahkan token, core CSS, dan framework binding.';

export const AllVariants: Story = {
  render: () => ({
    components: { LumaText },
    setup() { return { sampleText }; },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.25rem; max-width: 600px;">
        <div>
          <LumaText variant="body-lg" weight="semibold" color="muted" as="span">body-lg (1.125rem)</LumaText>
          <LumaText variant="body-lg">{{ sampleText }}</LumaText>
        </div>
        <div>
          <LumaText variant="body-md" weight="semibold" color="muted" as="span">body-md (1rem) — Default</LumaText>
          <LumaText variant="body-md">{{ sampleText }}</LumaText>
        </div>
        <div>
          <LumaText variant="body-sm" weight="semibold" color="muted" as="span">body-sm (0.875rem)</LumaText>
          <LumaText variant="body-sm">{{ sampleText }}</LumaText>
        </div>
        <div>
          <LumaText variant="caption" weight="semibold" color="muted" as="span">caption (0.75rem)</LumaText>
          <LumaText variant="caption">{{ sampleText }}</LumaText>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<LumaText variant="body-lg">Teks body large</LumaText>
<LumaText variant="body-md">Teks body medium (default)</LumaText>
<LumaText variant="body-sm">Teks body small</LumaText>
<LumaText variant="caption">Teks caption</LumaText>
        `.trim(),
      },
    },
  },
};

export const SemanticColors: Story = {
  render: () => ({
    components: { LumaText },
    template: `
      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        <LumaText color="default" weight="medium">Default — Warna teks utama</LumaText>
        <LumaText color="muted" weight="medium">Muted — Teks sekunder, kurang penting</LumaText>
        <LumaText color="subtle" weight="medium">Subtle — Teks sangat halus, placeholder</LumaText>
        <LumaText color="primary" weight="medium">Primary — Teks aksen brand</LumaText>
        <LumaText color="success" weight="medium">Success — Notifikasi berhasil</LumaText>
        <LumaText color="warning" weight="medium">Warning — Peringatan / alert</LumaText>
        <LumaText color="danger" weight="medium">Danger — Error / tindakan berbahaya</LumaText>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<LumaText color="default">Default</LumaText>
<LumaText color="muted">Muted</LumaText>
<LumaText color="subtle">Subtle</LumaText>
<LumaText color="primary">Primary</LumaText>
<LumaText color="success">Success</LumaText>
<LumaText color="warning">Warning</LumaText>
<LumaText color="danger">Danger</LumaText>
        `.trim(),
      },
    },
  },
};

export const WeightsShowcase: Story = {
  render: () => ({
    components: { LumaText },
    template: `
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <LumaText weight="light">Light (300) — Tipis dan elegan</LumaText>
        <LumaText weight="normal">Normal (400) — Ketebalan default</LumaText>
        <LumaText weight="medium">Medium (500) — Sedikit lebih tegas</LumaText>
        <LumaText weight="semibold">Semibold (600) — Menonjol</LumaText>
        <LumaText weight="bold">Bold (700) — Kuat dan dominan</LumaText>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<LumaText weight="light">Light (300)</LumaText>
<LumaText weight="normal">Normal (400)</LumaText>
<LumaText weight="medium">Medium (500)</LumaText>
<LumaText weight="semibold">Semibold (600)</LumaText>
<LumaText weight="bold">Bold (700)</LumaText>
        `.trim(),
      },
    },
  },
};

export const TruncatedText: Story = {
  args: { truncated: true, variant: 'body-md' },
  render: (args: any) => ({
    components: { LumaText },
    setup() { return { args }; },
    template: `
      <div style="max-width: 300px; border: 1px dashed var(--luma-border-strong); padding: 1rem; border-radius: var(--luma-radius-md);">
        <LumaText v-bind="args">
          Teks ini sangat panjang dan akan dipotong secara otomatis dengan ellipsis karena container-nya terbatas lebarnya. Lihat hasilnya!
        </LumaText>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<div style="max-width: 300px;">
  <LumaText truncated>
    Teks ini sangat panjang dan akan dipotong secara otomatis...
  </LumaText>
</div>
        `.trim(),
      },
    },
  },
};
