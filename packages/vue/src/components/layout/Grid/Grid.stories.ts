import type { Meta, StoryObj } from '@storybook/vue3';
import LumaGrid from './Grid.vue';
import LumaGridItem from './GridItem.vue';

/**
 * **LumaGrid & LumaGridItem** — Sistem Layout Grid 12 Kolom.
 * 
 * Gunakan `LumaGrid` sebagai pembungkus induk, dan `LumaGridItem` untuk menentukan kolom span, offset, rowSpan, dan perataan individual setiap elemen anak.
 */
const meta = {
  title: 'Layout/LumaGrid',
  component: LumaGrid,
  subcomponents: { LumaGridItem },
  tags: ['autodocs'],
  argTypes: {
    cols: { control: { type: 'number', min: 1, max: 12 } },
    gap: { control: 'select', options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] },
    align: { control: 'select', options: ['start', 'center', 'end', 'stretch'] },
  },
} satisfies Meta<typeof LumaGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

const dummyBoxStyle = "background: var(--luma-bg-muted); border: 1px solid var(--luma-border-strong); padding: 1.5rem 1rem; border-radius: var(--luma-radius-md); text-align: center; font-family: var(--luma-font-sans); color: var(--luma-text-secondary);";
const sidebarStyle = "background: linear-gradient(135deg, var(--luma-primary-bg) 0%, var(--luma-bg-muted) 100%); border: 1px solid var(--luma-border-strong); padding: 2rem 1rem; border-radius: var(--luma-radius-md); text-align: center; font-family: var(--luma-font-sans); color: var(--luma-text-primary); font-weight: bold; min-height: 150px; display: flex; align-items: center; justify-content: center;";

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

export const SidebarAndContent: Story = {
  args: { cols: 12, gap: 'lg' },
  render: (args: any) => ({
    components: { LumaGrid, LumaGridItem },
    setup() { return { args, sidebarStyle, dummyBoxStyle }; },
    template: `
      <LumaGrid v-bind="args">
        <LumaGridItem span="4">
          <div :style="sidebarStyle">Sidebar (span 4)</div>
        </LumaGridItem>
        <LumaGridItem span="8">
          <div :style="dummyBoxStyle" style="min-height: 150px; display: flex; align-items: center; justify-content: center;">
            Konten Utama (span 8)
          </div>
        </LumaGridItem>
      </LumaGrid>
    `
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<LumaGrid cols="12" gap="lg">
  <!-- Sidebar memakan 4 kolom -->
  <LumaGridItem span="4">
    <div class="sidebar">Sidebar (span 4)</div>
  </LumaGridItem>

  <!-- Konten Utama memakan 8 kolom -->
  <LumaGridItem span="8">
    <div class="content">Konten Utama (span 8)</div>
  </LumaGridItem>
</LumaGrid>
        `.trim(),
      },
    },
  },
};

export const OffsetsAndAlignment: Story = {
  args: { cols: 12, gap: 'md' },
  render: (args: any) => ({
    components: { LumaGrid, LumaGridItem },
    setup() { return { args, dummyBoxStyle }; },
    template: `
      <LumaGrid v-bind="args">
        <!-- Offset 4 berarti melompati 4 kolom dari kiri -->
        <LumaGridItem span="4" offset="4">
          <div :style="dummyBoxStyle">Span 4, Offset 4 (Di tengah)</div>
        </LumaGridItem>
        
        <LumaGridItem span="2" offset="2">
          <div :style="dummyBoxStyle">Span 2, Offset 2</div>
        </LumaGridItem>
      </LumaGrid>
    `
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<LumaGrid cols="12" gap="md">
  <!-- Kolom berada di tengah karena melompati 4 kolom pertama -->
  <LumaGridItem span="4" offset="4">
    <div>Span 4, Offset 4 (Di tengah)</div>
  </LumaGridItem>

  <LumaGridItem span="2" offset="2">
    <div>Span 2, Offset 2</div>
  </LumaGridItem>
</LumaGrid>
        `.trim(),
      },
    },
  },
};
