import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import Pagination from './Pagination.vue';

/**
 * **LumaPagination** — Navigasi halaman.
 *
 * Komponen untuk menavigasi dataset besar. Dilengkapi dengan logika ellipsis otomatis.
 */
const meta = {
  title: 'Navigation/LumaPagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    total: { control: 'number', description: 'Total seluruh item' },
    perPage: { control: 'number', description: 'Jumlah item per halaman' },
    siblingCount: { control: 'number', description: 'Jumlah halaman di sekitar halaman aktif' },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicPagination: Story = {
  render: (args) => ({
    components: { Pagination },
    setup() {
      const page = ref(1);
      return { args, page };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div>Halaman aktif: {{ page }}</div>
        <Pagination v-bind="args" v-model="page" />
      </div>
    `,
  }),
  args: {
    modelValue: 1,
    total: 100,
    perPage: 10,
    siblingCount: 1,
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<script setup>
import { ref } from 'vue';
const page = ref(1);
</script>

<template>
  <LumaPagination :total="100" :per-page="10" v-model="page" />
</template>
        `.trim(),
      },
    },
  },
};

export const CompactPagination: Story = {
  ...BasicPagination,
  args: {
    modelValue: 1,
    total: 100,
    perPage: 10,
    siblingCount: 0,
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination yang lebih ringkas dengan `siblingCount=0`.',
      },
    },
  },
};

export const LargeDataset: Story = {
  ...BasicPagination,
  args: {
    modelValue: 1,
    total: 5000,
    perPage: 50,
    siblingCount: 2,
  },
  parameters: {
    docs: {
      description: {
        story: 'Menangani jumlah halaman yang banyak (100 halaman) dengan siblingCount lebih lebar.',
      },
    },
  },
};
