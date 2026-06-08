import type { Meta, StoryObj } from '@storybook/vue3';
import LumaGrid from './Grid.vue';

/**
 * **LumaGrid** — Sistem Layout Grid 12 Kolom.
 * 
 * Gunakan ini untuk membagi area menjadi beberapa kolom rata atau
 * membuat galeri kartu (cards). Sangat presisi dan mudah diprediksi.
 */
const meta = {
  title: 'Layout/LumaGrid',
  component: LumaGrid,
  tags: ['autodocs'],
  argTypes: {
    cols: { control: { type: 'number', min: 1, max: 12 } },
    gap: { control: 'select', options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] },
    align: { control: 'select', options: ['start', 'center', 'end', 'stretch'] },
  },
} satisfies Meta<typeof LumaGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

const dummyBoxStyle = "background: var(--luma-bg-muted); border: 1px solid var(--luma-border-strong); padding: 2rem 1rem; border-radius: var(--luma-radius-md); text-align: center; font-family: var(--luma-font-sans); color: var(--luma-text-secondary);";

export const BasicThreeColumns: Story = {
  args: { cols: 3, gap: 'md' },
  render: (args: any) => ({
    components: { LumaGrid },
    setup() { return { args, dummyBoxStyle }; },
    template: `
      <LumaGrid v-bind="args">
        <div :style="dummyBoxStyle">Kolom 1</div>
        <div :style="dummyBoxStyle">Kolom 2</div>
        <div :style="dummyBoxStyle">Kolom 3</div>
        <div :style="dummyBoxStyle">Baris Baru 1</div>
        <div :style="dummyBoxStyle">Baris Baru 2</div>
      </LumaGrid>
    `
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<LumaGrid cols="3" gap="md">
  <div>Kolom 1</div>
  <div>Kolom 2</div>
  <div>Kolom 3</div>
  <div>Baris Baru 1</div>
  <div>Baris Baru 2</div>
</LumaGrid>
        `.trim(),
      },
    },
  },
};
