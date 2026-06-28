import type { Meta, StoryObj } from '@storybook/vue3';
import { LumaTimeline, LumaTimelineItem } from './index';

/**
 * **LumaTimeline** — Komponen visual kronologis untuk melacak riwayat pengiriman paket, log aktivitas user, atau milestone proyek.
 */
const meta = {
  title: 'Data Display/LumaTimeline',
  component: LumaTimeline,
  tags: ['autodocs'],
} satisfies Meta<typeof LumaTimeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `
<LumaTimeline>
  <LumaTimelineItem
    title="Pesanan Diterima"
    description="Pesanan telah diterima oleh sistem dan sedang dikemas di gudang utama."
    time="Senin, 10:15 WIB"
    dotColor="success"
  />
  <LumaTimelineItem
    title="Paket Diserahkan ke Kurir"
    description="Kurir J&T Express telah menjemput paket dari gudang."
    time="Senin, 14:30 WIB"
    dotColor="primary"
  />
  <LumaTimelineItem
    title="Dalam Perjalanan"
    description="Paket sedang dikirim menuju kota tujuan (Jakarta Barat)."
    time="Selasa, 08:00 WIB"
    dotColor="warning"
  />
  <LumaTimelineItem
    title="Sedang Diantar"
    description="Kurir sedang mengantarkan paket ke alamat tujuan Anda."
    time="Hari ini, 09:12 WIB"
    dotColor="neutral"
  />
</LumaTimeline>
        `,
      },
    },
  },
  render: () => ({
    components: { LumaTimeline, LumaTimelineItem },
    template: `
      <div style="max-width: 500px;">
        <LumaTimeline>
          <LumaTimelineItem
            title="Pesanan Diterima"
            description="Pesanan telah diterima oleh sistem dan sedang dikemas di gudang utama."
            time="Senin, 10:15 WIB"
            dotColor="success"
          />
          <LumaTimelineItem
            title="Paket Diserahkan ke Kurir"
            description="Kurir J&T Express telah menjemput paket dari gudang."
            time="Senin, 14:30 WIB"
            dotColor="primary"
          />
          <LumaTimelineItem
            title="Dalam Perjalanan"
            description="Paket sedang dikirim menuju kota tujuan (Jakarta Barat)."
            time="Selasa, 08:00 WIB"
            dotColor="warning"
          />
          <LumaTimelineItem
            title="Sedang Diantar"
            description="Kurir sedang mengantarkan paket ke alamat tujuan Anda."
            time="Hari ini, 09:12 WIB"
            dotColor="neutral"
          />
        </LumaTimeline>
      </div>
    `,
  }),
};
