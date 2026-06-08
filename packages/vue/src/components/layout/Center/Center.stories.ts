import type { Meta, StoryObj } from '@storybook/vue3';
import LumaCenter from './Center.vue';

/**
 * **LumaCenter** — Komponen Layout untuk Memusatkan Konten.
 * 
 * Gunakan `LumaCenter` untuk memosisikan elemen anak persis di tengah-tengah ruang induk baik secara horizontal maupun vertikal menggunakan model kotak Flexbox.
 */
const meta = {
  title: 'Layout/LumaCenter',
  component: LumaCenter,
  tags: ['autodocs'],
  argTypes: {
    as: { control: 'text' },
    inline: { control: 'boolean' },
  },
} satisfies Meta<typeof LumaCenter>;

export default meta;
type Story = StoryObj<typeof meta>;

const boxStyle = "width: 100%; height: 250px; background: var(--luma-bg-muted); border: 2px dashed var(--luma-border-strong); border-radius: var(--luma-radius-lg); color: var(--luma-text-secondary);";
const contentStyle = "background: linear-gradient(135deg, var(--luma-primary-bg) 0%, var(--luma-border-strong) 100%); padding: 1.5rem 2.5rem; border-radius: var(--luma-radius-md); box-shadow: var(--luma-shadow-md); color: var(--luma-text-primary); font-family: var(--luma-font-sans); font-weight: bold; text-align: center;";

export const BlockCentering: Story = {
  args: { inline: false },
  render: (args: any) => ({
    components: { LumaCenter },
    setup() { return { args, boxStyle, contentStyle }; },
    template: `
      <LumaCenter v-bind="args" :style="boxStyle">
        <div :style="contentStyle">
          Centred Content Block
        </div>
      </LumaCenter>
    `
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<LumaCenter style="height: 250px; background: var(--luma-bg-muted); border: 2px dashed var(--luma-border-strong);">
  <div class="centered-card">
    Centred Content Block
  </div>
</LumaCenter>
        `.trim(),
      },
    },
  },
};

export const InlineCentering: Story = {
  args: { inline: true },
  render: (args: any) => ({
    components: { LumaCenter },
    setup() { return { args }; },
    template: `
      <div style="font-family: var(--luma-font-sans); color: var(--luma-text-primary);">
        Teks biasa di luar komponen 
        <LumaCenter v-bind="args" style="background: var(--luma-primary-bg); width: 32px; height: 32px; border-radius: 50%; color: var(--luma-text-primary); font-weight: bold;">
          1
        </LumaCenter>
        diikuti teks lanjutan setelah elemen center inline.
      </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<div>
  Teks biasa di luar komponen 
  <LumaCenter inline style="background: var(--luma-primary-bg); width: 32px; height: 32px; border-radius: 50%;">
    1
  </LumaCenter>
  diikuti teks lanjutan setelah elemen center inline.
</div>
        `.trim(),
      },
    },
  },
};
