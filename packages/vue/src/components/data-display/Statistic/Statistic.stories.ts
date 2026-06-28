import type { Meta, StoryObj } from '@storybook/vue3';
import LumaStatistic from './Statistic.vue';

/**
 * **LumaStatistic** — Komponen visual khusus metrik/statistik dashboard dengan visualisasi angka, label, dan persentase tren (up/down).
 */
const meta = {
  title: 'Data Display/LumaStatistic',
  component: LumaStatistic,
  tags: ['autodocs'],
  args: {
    label: 'Stat Label',
    value: '100',
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Nama label statistik',
    },
    value: {
      control: 'text',
      description: 'Nilai metrik utama',
    },
    helpText: {
      control: 'text',
      description: 'Keterangan tambahan',
    },
    trend: {
      control: 'select',
      options: ['up', 'down', undefined],
      description: 'Arah perkembangan tren',
    },
    trendValue: {
      control: 'text',
      description: 'Persentase/jumlah perubahan tren',
    },
  },
} satisfies Meta<typeof LumaStatistic>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Total Pengunjung',
    value: '14,284',
    helpText: 'bulan ini',
    trend: 'up',
    trendValue: '+12.4%',
  },
};

export const NegativeTrend: Story = {
  args: {
    label: 'Bounce Rate',
    value: '42.3%',
    helpText: 'vs minggu lalu',
    trend: 'down',
    trendValue: '-3.1%',
  },
};

export const DashboardRow: Story = {
  render: () => ({
    components: { LumaStatistic },
    template: `
      <div style="display: flex; gap: 1rem; width: 100%; max-width: 800px;">
        <LumaStatistic style="flex: 1;" label="Aktif User" value="1,248" trend="up" trendValue="+8%" helpText="hari ini" />
        <LumaStatistic style="flex: 1;" label="Pendapatan" value="Rp 4.2M" trend="up" trendValue="+14%" helpText="bulan ini" />
        <LumaStatistic style="flex: 1;" label="Komplain" value="3 kasus" trend="down" trendValue="-20%" helpText="vs bulan lalu" />
      </div>
    `,
  }),
};
