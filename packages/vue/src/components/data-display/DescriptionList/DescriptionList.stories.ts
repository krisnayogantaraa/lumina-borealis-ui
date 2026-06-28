import type { Meta, StoryObj } from '@storybook/vue3';
import { LumaDescriptionList, LumaDescriptionListItem } from './index';

/**
 * **LumaDescriptionList** — Komponen list metadata/informasi key-value terformat secara vertikal atau horizontal.
 */
const meta = {
  title: 'Data Display/LumaDescriptionList',
  component: LumaDescriptionList,
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Tata letak list item',
      table: { defaultValue: { summary: 'vertical' } },
    },
    spacing: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Spasi vertical antar item',
      table: { defaultValue: { summary: 'md' } },
    },
  },
} satisfies Meta<typeof LumaDescriptionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  args: { layout: 'vertical', spacing: 'md' },
  parameters: {
    docs: {
      source: {
        code: `
<LumaDescriptionList layout="vertical" spacing="md">
  <LumaDescriptionListItem term="Nama Pengguna" details="Krisna Yogantara" />
  <LumaDescriptionListItem term="Alamat Email" details="krisna@lumina.dev" />
  <LumaDescriptionListItem term="Status Akun" details="Aktif (Premium)" />
</LumaDescriptionList>
        `,
      },
    },
  },
  render: (args) => ({
    components: { LumaDescriptionList, LumaDescriptionListItem },
    setup() { return { args }; },
    template: `
      <div style="max-width: 400px;">
        <LumaDescriptionList v-bind="args">
          <LumaDescriptionListItem term="Nama Pengguna" details="Krisna Yogantara" />
          <LumaDescriptionListItem term="Alamat Email" details="krisna@lumina.dev" />
          <LumaDescriptionListItem term="Status Akun" details="Aktif (Premium)" />
        </LumaDescriptionList>
      </div>
    `,
  }),
};

export const Horizontal: Story = {
  args: { layout: 'horizontal', spacing: 'md' },
  parameters: {
    docs: {
      source: {
        code: `
<LumaDescriptionList layout="horizontal" spacing="md">
  <LumaDescriptionListItem term="Nama Pengguna" details="Krisna Yogantara" />
  <LumaDescriptionListItem term="Alamat Email" details="krisna@lumina.dev" />
  <LumaDescriptionListItem term="Status Akun">
    <span style="color: var(--luma-color-success); font-weight: bold;">Aktif</span>
  </LumaDescriptionListItem>
</LumaDescriptionList>
        `,
      },
    },
  },
  render: (args) => ({
    components: { LumaDescriptionList, LumaDescriptionListItem },
    setup() { return { args }; },
    template: `
      <div style="max-width: 500px;">
        <LumaDescriptionList v-bind="args">
          <LumaDescriptionListItem term="Nama Pengguna" details="Krisna Yogantara" />
          <LumaDescriptionListItem term="Alamat Email" details="krisna@lumina.dev" />
          <LumaDescriptionListItem term="Status Akun">
            <span style="color: var(--luma-color-success); font-weight: bold;">Aktif</span>
          </LumaDescriptionListItem>
        </LumaDescriptionList>
      </div>
    `,
  }),
};
