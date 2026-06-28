import type { Meta, StoryObj } from '@storybook/vue3';
import LumaEmptyState from './EmptyState.vue';
import { LumaButton } from '../../actions/Button';

/**
 * **LumaEmptyState** — Komponen visual serbaguna untuk menampilkan area kosong, baik ketika data belum ada, hasil pencarian kosong, atau user tidak memiliki akses.
 */
const meta = {
  title: 'Data Display/LumaEmptyState',
  component: LumaEmptyState,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Judul pesan empty state',
    },
    description: {
      control: 'text',
      description: 'Penjelasan/deskripsi detail',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Ukuran empty state',
      table: { defaultValue: { summary: 'md' } },
    },
  },
} satisfies Meta<typeof LumaEmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithAction: Story = {
  args: {
    title: 'Belum Ada Data',
    description: 'Mulai dengan menambahkan data baru ke dalam sistem.',
  },
  render: (args) => ({
    components: { LumaEmptyState, LumaButton },
    setup() { return { args }; },
    template: `
      <LumaEmptyState v-bind="args">
        <template #icon>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <line x1="12" y1="8" x2="12" y2="16" />
            <line x1="8" y1="12" x2="16" y2="12" />
          </svg>
        </template>
        <template #actions>
          <LumaButton variant="primary" size="sm">Tambah Data</LumaButton>
        </template>
      </LumaEmptyState>
    `,
  }),
};

export const ReadOnly: Story = {
  args: {
    title: 'Tidak Ada Data',
    description: 'Saat ini belum ada data yang tersedia untuk ditampilkan.',
  },
  render: (args) => ({
    components: { LumaEmptyState },
    setup() { return { args }; },
    template: `
      <LumaEmptyState v-bind="args">
        <template #icon>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="8" y1="12" x2="16" y2="12" />
          </svg>
        </template>
      </LumaEmptyState>
    `,
  }),
};

export const NoTransactions: Story = {
  args: {
    title: 'Belum Ada Transaksi',
    description: 'Riwayat transaksi Anda akan muncul di sini setelah ada aktivitas.',
  },
  render: (args) => ({
    components: { LumaEmptyState },
    setup() { return { args }; },
    template: `
      <LumaEmptyState v-bind="args">
        <template #icon>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        </template>
      </LumaEmptyState>
    `,
  }),
};

export const SearchNoResults: Story = {
  args: {
    title: 'Hasil Tidak Ditemukan',
    description: 'Coba ubah kata kunci atau filter pencarian Anda.',
  },
  render: (args) => ({
    components: { LumaEmptyState, LumaButton },
    setup() { return { args }; },
    template: `
      <LumaEmptyState v-bind="args">
        <template #icon>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
        </template>
        <template #actions>
          <LumaButton variant="outline" size="sm">Reset Filter</LumaButton>
        </template>
      </LumaEmptyState>
    `,
  }),
};

export const SmallSize: Story = {
  args: {
    title: 'Tidak ada item',
    description: 'Daftar ini masih kosong.',
    size: 'sm',
  },
  render: (args) => ({
    components: { LumaEmptyState },
    setup() { return { args }; },
    template: `
      <div style="max-width: 400px; border: 1px dashed var(--luma-border-default); border-radius: 8px;">
        <LumaEmptyState v-bind="args">
          <template #icon>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
          </template>
        </LumaEmptyState>
      </div>
    `,
  }),
};
