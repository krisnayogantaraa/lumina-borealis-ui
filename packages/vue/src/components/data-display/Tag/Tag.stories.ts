import type { Meta, StoryObj } from '@storybook/vue3';
import LumaTag from './Tag.vue';

/**
 * **LumaTag** — Komponen visual interaktif untuk menampilkan label kategori, tag filter, atau chips.
 */
const meta = {
  title: 'Data Display/LumaTag',
  component: LumaTag,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'subtle', 'outline'],
      description: 'Varian visual tag',
      table: { defaultValue: { summary: 'subtle' } },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral'],
      description: 'Warna tema dasar tag',
      table: { defaultValue: { summary: 'neutral' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Ukuran tag',
      table: { defaultValue: { summary: 'md' } },
    },
    closable: {
      control: 'boolean',
      description: 'Apakah tag memiliki tombol hapus (close)',
      table: { defaultValue: { summary: 'false' } },
    },
  },
} satisfies Meta<typeof LumaTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'subtle',
    color: 'neutral',
    size: 'md',
    closable: false,
  },
  render: (args) => ({
    components: { LumaTag },
    setup() { return { args }; },
    template: `<LumaTag v-bind="args">Lumina UI</LumaTag>`,
  }),
};

export const ClosableTags: Story = {
  render: () => ({
    components: { LumaTag },
    setup() {
      const handleClose = (name: string) => {
        alert(`Tag "${name}" di-click hapus!`);
      };
      return { handleClose };
    },
    template: `
      <div style="display: flex; gap: 0.5rem; align-items: center;">
        <LumaTag color="primary" closable @close="handleClose('Primary')">Vue</LumaTag>
        <LumaTag color="secondary" closable @close="handleClose('Secondary')">React</LumaTag>
        <LumaTag color="success" closable @close="handleClose('Success')">Build Success</LumaTag>
        <LumaTag color="danger" closable @close="handleClose('Danger')">Bug Fix</LumaTag>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { LumaTag },
    template: `
      <div style="display: flex; gap: 0.5rem; align-items: center;">
        <LumaTag color="neutral" size="sm" closable>Small Tag</LumaTag>
        <LumaTag color="neutral" size="md" closable>Medium Tag</LumaTag>
        <LumaTag color="neutral" size="lg" closable>Large Tag</LumaTag>
      </div>
    `,
  }),
};
