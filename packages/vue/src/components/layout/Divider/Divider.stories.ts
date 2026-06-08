import type { Meta, StoryObj } from '@storybook/vue3';
import LumaDivider from './Divider.vue';

/**
 * **LumaDivider** — Garis Pemisah Visual.
 * 
 * Gunakan komponen ini untuk memisahkan konten antar seksi. 
 * Mendukung orientasi horizontal/vertikal, penambahan label teks di tengah, dan spacing custom.
 */
const meta = {
  title: 'Layout/LumaDivider',
  component: LumaDivider,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    label: { control: 'text' },
    spacing: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
  },
} satisfies Meta<typeof LumaDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: { orientation: 'horizontal', spacing: 'md' },
  render: (args: any) => ({
    components: { LumaDivider },
    setup() { return { args }; },
    template: `
      <div style="font-family: var(--luma-font-sans); color: var(--luma-text-primary);">
        <p>Konten Bagian Atas</p>
        <LumaDivider v-bind="args" />
        <p>Konten Bagian Bawah</p>
      </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<p>Konten Bagian Atas</p>
<LumaDivider spacing="md" />
<p>Konten Bagian Bawah</p>
        `.trim(),
      },
    },
  },
};

export const WithLabel: Story = {
  args: { orientation: 'horizontal', spacing: 'md', label: 'ATAU' },
  render: (args: any) => ({
    components: { LumaDivider },
    setup() { return { args }; },
    template: `
      <div style="font-family: var(--luma-font-sans); max-width: 400px;">
        <button style="width: 100%; padding: 0.5rem;">Daftar dengan Email</button>
        <LumaDivider v-bind="args" />
        <button style="width: 100%; padding: 0.5rem;">Daftar dengan Google</button>
      </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<LumaDivider label="ATAU" spacing="md" />
        `.trim(),
      },
    },
  },
};

export const Vertical: Story = {
  args: { orientation: 'vertical', spacing: 'md' },
  render: (args: any) => ({
    components: { LumaDivider },
    setup() { return { args }; },
    template: `
      <div style="display: flex; height: 50px; align-items: center; font-family: var(--luma-font-sans);">
        <span>Kiri</span>
        <LumaDivider v-bind="args" />
        <span>Kanan</span>
      </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<div style="display: flex;">
  <span>Kiri</span>
  <LumaDivider orientation="vertical" spacing="md" />
  <span>Kanan</span>
</div>
        `.trim(),
      },
    },
  },
};
