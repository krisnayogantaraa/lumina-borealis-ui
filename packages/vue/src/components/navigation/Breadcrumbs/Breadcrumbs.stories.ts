import type { Meta, StoryObj } from '@storybook/vue3';
import Breadcrumbs from './Breadcrumbs.vue';
import BreadcrumbItem from './BreadcrumbItem.vue';

/**
 * **LumaBreadcrumbs** — Navigasi hierarki / trail.
 *
 * Menunjukkan lokasi halaman saat ini di dalam hierarki navigasi.
 */
const meta = {
  title: 'Navigation/LumaBreadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  argTypes: {
    separator: { control: 'text', description: 'Karakter pemisah antar item' },
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicBreadcrumbs: Story = {
  render: (args) => ({
    components: { Breadcrumbs, BreadcrumbItem },
    setup() {
      return { args };
    },
    template: `
      <Breadcrumbs v-bind="args">
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
        <BreadcrumbItem href="/users">Users</BreadcrumbItem>
        <BreadcrumbItem active>John Doe</BreadcrumbItem>
      </Breadcrumbs>
    `,
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<LumaBreadcrumbs>
  <LumaBreadcrumbItem href="/">Home</LumaBreadcrumbItem>
  <LumaBreadcrumbItem href="/dashboard">Dashboard</LumaBreadcrumbItem>
  <LumaBreadcrumbItem href="/users">Users</LumaBreadcrumbItem>
  <LumaBreadcrumbItem active>John Doe</LumaBreadcrumbItem>
</LumaBreadcrumbs>
        `.trim(),
      },
    },
  },
};

export const CustomSeparator: Story = {
  render: (args) => ({
    components: { Breadcrumbs, BreadcrumbItem },
    setup() {
      return { args };
    },
    template: `
      <Breadcrumbs v-bind="args">
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/products">Produk</BreadcrumbItem>
        <BreadcrumbItem active>Kategori</BreadcrumbItem>
      </Breadcrumbs>
    `,
  }),
  args: {
    separator: '›',
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<LumaBreadcrumbs separator="›">
  <LumaBreadcrumbItem href="/">Home</LumaBreadcrumbItem>
  <LumaBreadcrumbItem href="/products">Produk</LumaBreadcrumbItem>
  <LumaBreadcrumbItem active>Kategori</LumaBreadcrumbItem>
</LumaBreadcrumbs>
        `.trim(),
      },
    },
  },
};
