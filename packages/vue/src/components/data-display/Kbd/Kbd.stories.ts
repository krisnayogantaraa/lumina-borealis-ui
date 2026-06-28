import type { Meta, StoryObj } from '@storybook/vue3';
import LumaKbd from './Kbd.vue';

/**
 * **LumaKbd** — Komponen visual kecil untuk merender tampilan tombol keyboard shortcut.
 */
const meta = {
  title: 'Data Display/LumaKbd',
  component: LumaKbd,
  tags: ['autodocs'],
} satisfies Meta<typeof LumaKbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleKey: Story = {
  render: () => ({
    components: { LumaKbd },
    template: `
      <div>
        Tekan <LumaKbd>Enter</LumaKbd> untuk memproses.
      </div>
    `,
  }),
};

export const Combination: Story = {
  render: () => ({
    components: { LumaKbd },
    template: `
      <div style="display: flex; gap: 0.25rem; align-items: center;">
        <span>Shortcut Pencarian:</span>
        <LumaKbd>⌘</LumaKbd>
        <span>+</span>
        <LumaKbd>K</LumaKbd>
      </div>
    `,
  }),
};
