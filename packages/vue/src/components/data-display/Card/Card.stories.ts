import type { Meta, StoryObj } from '@storybook/vue3';
import {
  LumaCard,
  LumaCardHeader,
  LumaCardTitle,
  LumaCardDescription,
  LumaCardBody,
  LumaCardFooter,
} from './index';

/**
 * **LumaCard** — Komponen kontainer konten untuk Lumina Borealis.
 * Mendukung beberapa varian visual (elevated, flat, outline) dan padding sizing.
 */
const meta = {
  title: 'Data Display/LumaCard',
  component: LumaCard,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'flat', 'outline'],
      description: 'Varian visual kartu',
      table: { defaultValue: { summary: 'elevated' } },
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Ukuran padding di dalam kartu',
      table: { defaultValue: { summary: 'md' } },
    },
    as: {
      control: 'text',
      description: 'Tag HTML pembungkus kartu',
      table: { defaultValue: { summary: 'div' } },
    },
  },
} satisfies Meta<typeof LumaCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Elevated: Story = {
  args: { variant: 'elevated', padding: 'md' },
  parameters: {
    docs: {
      source: {
        code: `
<LumaCard variant="elevated" padding="md">
  <LumaCardBody>
    Ini adalah elevated card default. Sangat cocok untuk menampilkan konten utama dengan kedalaman shadow yang soft.
  </LumaCardBody>
</LumaCard>
        `,
      },
    },
  },
  render: (args) => ({
    components: { LumaCard, LumaCardBody },
    setup() { return { args }; },
    template: `
      <LumaCard v-bind="args">
        <LumaCardBody>
          Ini adalah elevated card default. Sangat cocok untuk menampilkan konten utama dengan kedalaman shadow yang soft.
        </LumaCardBody>
      </LumaCard>
    `,
  }),
};

export const Flat: Story = {
  args: { variant: 'flat', padding: 'md' },
  parameters: {
    docs: {
      source: {
        code: `
<LumaCard variant="flat" padding="md">
  <LumaCardBody>
    Ini adalah flat card. Memiliki background surface yang solid tanpa bayangan.
  </LumaCardBody>
</LumaCard>
        `,
      },
    },
  },
  render: (args) => ({
    components: { LumaCard, LumaCardBody },
    setup() { return { args }; },
    template: `
      <LumaCard v-bind="args">
        <LumaCardBody>
          Ini adalah flat card. Memiliki background surface yang solid tanpa bayangan.
        </LumaCardBody>
      </LumaCard>
    `,
  }),
};

export const Outline: Story = {
  args: { variant: 'outline', padding: 'md' },
  parameters: {
    docs: {
      source: {
        code: `
<LumaCard variant="outline" padding="md">
  <LumaCardBody>
    Ini adalah outline card. Memiliki border default tanpa background warna atau bayangan.
  </LumaCardBody>
</LumaCard>
        `,
      },
    },
  },
  render: (args) => ({
    components: { LumaCard, LumaCardBody },
    setup() { return { args }; },
    template: `
      <LumaCard v-bind="args">
        <LumaCardBody>
          Ini adalah outline card. Memiliki border default tanpa background warna atau bayangan.
        </LumaCardBody>
      </LumaCard>
    `,
  }),
};

export const ComplexCard: Story = {
  parameters: {
    docs: {
      source: {
        code: `
<LumaCard variant="elevated" padding="md">
  <LumaCardHeader>
    <LumaCardTitle>Lumina Borealis UI</LumaCardTitle>
    <LumaCardDescription>Sebuah UI library multi-framework premium</LumaCardDescription>
  </LumaCardHeader>
  <LumaCardBody>
    Lumina Borealis dirancang dengan sistem token Aurora yang modern, mendukung kustomisasi penuh, dan aksesibilitas tinggi untuk Vue dan React.
  </LumaCardBody>
  <LumaCardFooter>
    <button>Batal</button>
    <button>Pelajari</button>
  </LumaCardFooter>
</LumaCard>
        `,
      },
    },
  },
  render: () => ({
    components: {
      LumaCard,
      LumaCardHeader,
      LumaCardTitle,
      LumaCardDescription,
      LumaCardBody,
      LumaCardFooter,
    },
    template: `
      <div style="max-width: 400px;">
        <LumaCard variant="elevated" padding="md">
          <LumaCardHeader>
            <LumaCardTitle>Lumina Borealis UI</LumaCardTitle>
            <LumaCardDescription>Sebuah UI library multi-framework premium</LumaCardDescription>
          </LumaCardHeader>
          <LumaCardBody>
            Lumina Borealis dirancang dengan sistem token Aurora yang modern, mendukung kustomisasi penuh, dan aksesibilitas tinggi untuk Vue dan React.
          </LumaCardBody>
          <LumaCardFooter>
            <button style="padding: 0.5rem 1rem; border-radius: 4px; border: 1px solid #ccc; cursor: pointer; background: transparent;">Batal</button>
            <button style="padding: 0.5rem 1rem; border-radius: 4px; border: none; cursor: pointer; background: var(--luma-color-primary); color: white; font-weight: 600;">Pelajari</button>
          </LumaCardFooter>
        </LumaCard>
      </div>
    `,
  }),
};
