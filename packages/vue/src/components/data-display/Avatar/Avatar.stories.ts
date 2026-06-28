import type { Meta, StoryObj } from '@storybook/vue3';
import LumaAvatar from './Avatar.vue';

/**
 * **LumaAvatar** — Komponen visual untuk menampilkan foto profil pengguna atau inisial fallback jika gambar gagal dimuat.
 */
const meta = {
  title: 'Data Display/LumaAvatar',
  component: LumaAvatar,
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'URL gambar avatar',
    },
    alt: {
      control: 'text',
      description: 'Alternatif deskripsi gambar',
    },
    name: {
      control: 'text',
      description: 'Nama pengguna (digunakan untuk fallback inisial)',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Ukuran avatar',
      table: { defaultValue: { summary: 'md' } },
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
      description: 'Bentuk avatar',
      table: { defaultValue: { summary: 'circle' } },
    },
    status: {
      control: 'select',
      options: ['online', 'offline', 'away', 'busy', undefined],
      description: 'Indikator status aktivitas pengguna',
    },
  },
} satisfies Meta<typeof LumaAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    alt: 'Jane Doe',
    name: 'Jane Doe',
    size: 'md',
    shape: 'circle',
  },
};

export const InitialsFallback: Story = {
  args: {
    name: 'Krisna Yogantara',
    size: 'md',
    shape: 'circle',
  },
};

export const Statuses: Story = {
  render: () => ({
    components: { LumaAvatar },
    template: `
      <div style="display: flex; gap: 1.5rem; align-items: center;">
        <LumaAvatar name="Online User" status="online" />
        <LumaAvatar name="Away User" status="away" />
        <LumaAvatar name="Busy User" status="busy" />
        <LumaAvatar name="Offline User" status="offline" />
      </div>
    `,
  }),
};

export const SizesAndShapes: Story = {
  render: () => ({
    components: { LumaAvatar },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div style="display: flex; gap: 1.5rem; align-items: center;">
          <LumaAvatar name="Small Circle" size="sm" shape="circle" />
          <LumaAvatar name="Medium Circle" size="md" shape="circle" />
          <LumaAvatar name="Large Circle" size="lg" shape="circle" />
        </div>
        <div style="display: flex; gap: 1.5rem; align-items: center;">
          <LumaAvatar name="Small Square" size="sm" shape="square" />
          <LumaAvatar name="Medium Square" size="md" shape="square" />
          <LumaAvatar name="Large Square" size="lg" shape="square" />
        </div>
      </div>
    `,
  }),
};
