import type { Meta, StoryObj } from '@storybook/vue3';
import LumaContainer from './Container.vue';

/**
 * **LumaContainer** — Pembungkus halaman agar terpusat di tengah layar.
 * 
 * Otomatis memberikan \`max-width\`, \`margin: auto\`, dan ruang *padding* sisi kiri-kanan
 * agar konten tidak menempel ke ujung layar.
 */
const meta = {
  title: 'Layout/LumaContainer',
  component: LumaContainer,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl', 'full'] },
  },
} satisfies Meta<typeof LumaContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultContainer: Story = {
  args: { size: 'lg' },
  render: (args: any) => ({
    components: { LumaContainer },
    setup() { return { args }; },
    template: `
      <div style="background: var(--luma-bg-muted); padding: 2rem 0;">
        <LumaContainer v-bind="args">
          <div style="background: var(--luma-bg-base); border: 1px dashed var(--luma-color-primary); padding: 2rem; border-radius: var(--luma-radius-md); text-align: center; font-family: var(--luma-font-sans);">
            Ini adalah area di dalam Container.<br>
            Coba ubah <strong>size</strong> di panel Controls untuk melihat lebarnya berubah (sm, md, lg, xl).
          </div>
        </LumaContainer>
      </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<LumaContainer size="lg">
  <main>
    <h1>Judul Halaman</h1>
    <p>Konten di sini...</p>
  </main>
</LumaContainer>
        `.trim(),
      },
    },
  },
};
