import type { Meta, StoryObj } from '@storybook/vue3';
import LumaBadge from './Badge.vue';

/**
 * **LumaBadge** — Komponen visual kecil untuk menampilkan status, label, atau counter.
 */
const meta = {
  title: 'Data Display/LumaBadge',
  component: LumaBadge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'subtle', 'outline'],
      description: 'Varian visual badge',
      table: { defaultValue: { summary: 'subtle' } },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral'],
      description: 'Warna dasar badge',
      table: { defaultValue: { summary: 'neutral' } },
    },
  },
} satisfies Meta<typeof LumaBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'subtle',
    color: 'neutral',
  },
  render: (args) => ({
    components: { LumaBadge },
    setup() { return { args }; },
    template: `<LumaBadge v-bind="args">Badge</LumaBadge>`,
  }),
};

export const ColorVariants: Story = {
  render: () => ({
    components: { LumaBadge },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; gap: 0.5rem; align-items: center;">
          <strong style="width: 100px;">Subtle:</strong>
          <LumaBadge color="neutral" variant="subtle">Neutral</LumaBadge>
          <LumaBadge color="primary" variant="subtle">Primary</LumaBadge>
          <LumaBadge color="secondary" variant="subtle">Secondary</LumaBadge>
          <LumaBadge color="success" variant="subtle">Success</LumaBadge>
          <LumaBadge color="warning" variant="subtle">Warning</LumaBadge>
          <LumaBadge color="danger" variant="subtle">Danger</LumaBadge>
        </div>
        <div style="display: flex; gap: 0.5rem; align-items: center;">
          <strong style="width: 100px;">Solid:</strong>
          <LumaBadge color="neutral" variant="solid">Neutral</LumaBadge>
          <LumaBadge color="primary" variant="solid">Primary</LumaBadge>
          <LumaBadge color="secondary" variant="solid">Secondary</LumaBadge>
          <LumaBadge color="success" variant="solid">Success</LumaBadge>
          <LumaBadge color="warning" variant="solid">Warning</LumaBadge>
          <LumaBadge color="danger" variant="solid">Danger</LumaBadge>
        </div>
        <div style="display: flex; gap: 0.5rem; align-items: center;">
          <strong style="width: 100px;">Outline:</strong>
          <LumaBadge color="neutral" variant="outline">Neutral</LumaBadge>
          <LumaBadge color="primary" variant="outline">Primary</LumaBadge>
          <LumaBadge color="secondary" variant="outline">Secondary</LumaBadge>
          <LumaBadge color="success" variant="outline">Success</LumaBadge>
          <LumaBadge color="warning" variant="outline">Warning</LumaBadge>
          <LumaBadge color="danger" variant="outline">Danger</LumaBadge>
        </div>
      </div>
    `,
  }),
};
