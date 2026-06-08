import type { Meta, StoryObj } from '@storybook/vue3';
import LumaStack from './Stack.vue';
import LumaButton from '../../actions/Button/Button.vue';

/**
 * **LumaStack** — Komponen Layout Fleksibel.
 * 
 * Pengganti dari LumaBox dan LumaFlex. Mengatur elemen secara baris (horizontal)
 * atau kolom (vertikal) menggunakan *Flexbox* secara mudah dan rapi.
 */
const meta = {
  title: 'Layout/LumaStack',
  component: LumaStack,
  tags: ['autodocs'],
  argTypes: {
    as: { control: 'text', description: 'Tag HTML pembungkus (default: div)' },
    direction: { control: 'select', options: ['vertical', 'horizontal'] },
    gap: { control: 'select', options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] },
    align: { control: 'select', options: ['start', 'center', 'end', 'stretch', 'baseline'] },
    justify: { control: 'select', options: ['start', 'center', 'end', 'between', 'around', 'evenly'] },
    wrap: { control: 'boolean' },
  },
} satisfies Meta<typeof LumaStack>;

export default meta;
type Story = StoryObj<typeof meta>;

// Kotak dummy untuk visualisasi flex
const dummyBoxStyle = "background: var(--luma-bg-muted); border: 1px solid var(--luma-border-strong); padding: 1rem; border-radius: var(--luma-radius-md); text-align: center; font-family: var(--luma-font-sans); color: var(--luma-text-secondary);";

export const VerticalStack: Story = {
  args: { direction: 'vertical', gap: 'md' },
  render: (args: any) => ({
    components: { LumaStack },
    setup() { return { args, dummyBoxStyle }; },
    template: `
      <LumaStack v-bind="args">
        <div :style="dummyBoxStyle">Item Pertama</div>
        <div :style="dummyBoxStyle">Item Kedua</div>
        <div :style="dummyBoxStyle">Item Ketiga</div>
      </LumaStack>
    `
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<LumaStack direction="vertical" gap="md">
  <div>Item Pertama</div>
  <div>Item Kedua</div>
  <div>Item Ketiga</div>
</LumaStack>
        `.trim(),
      },
    },
  },
};

export const HorizontalStack: Story = {
  args: { direction: 'horizontal', gap: 'md', align: 'center' },
  render: (args: any) => ({
    components: { LumaStack, LumaButton },
    setup() { return { args }; },
    template: `
      <LumaStack v-bind="args">
        <LumaButton variant="ghost">Batal</LumaButton>
        <LumaButton variant="primary">Simpan Perubahan</LumaButton>
      </LumaStack>
    `
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<LumaStack direction="horizontal" gap="md" align="center">
  <LumaButton variant="ghost">Batal</LumaButton>
  <LumaButton variant="primary">Simpan Perubahan</LumaButton>
</LumaStack>
        `.trim(),
      },
    },
  },
};

export const ResponsiveWrap: Story = {
  args: { direction: 'horizontal', gap: 'sm', wrap: true },
  render: (args: any) => ({
    components: { LumaStack },
    setup() { return { args, dummyBoxStyle }; },
    template: `
      <!-- Container dibatasi lebarnya agar flex-wrap terlihat aksinya -->
      <div style="max-width: 300px; border: 2px dashed var(--luma-border-default); padding: 1rem;">
        <LumaStack v-bind="args">
          <div :style="dummyBoxStyle">Tag 1</div>
          <div :style="dummyBoxStyle">Tag Panjang 2</div>
          <div :style="dummyBoxStyle">Tag 3</div>
          <div :style="dummyBoxStyle">Tag Pendek</div>
          <div :style="dummyBoxStyle">Tag 5</div>
        </LumaStack>
      </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<LumaStack direction="horizontal" gap="sm" wrap>
  <div>Tag 1</div>
  <div>Tag Panjang 2</div>
  <div>Tag 3</div>
  ...
</LumaStack>
        `.trim(),
      },
    },
  },
};
