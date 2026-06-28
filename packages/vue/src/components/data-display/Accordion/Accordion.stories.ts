import type { Meta, StoryObj } from '@storybook/vue3';
import {
  LumaAccordion,
  LumaAccordionItem,
  LumaAccordionTrigger,
  LumaAccordionContent,
} from './index';

/**
 * **LumaAccordion** — Komponen panel lipat (disclosure) untuk menyembunyikan/menampilkan detail konten secara interaktif.
 */
const meta = {
  title: 'Data Display/LumaAccordion',
  component: LumaAccordion,
  tags: ['autodocs'],
  argTypes: {
    allowMultiple: {
      control: 'boolean',
      description: 'Apakah diperbolehkan membuka lebih dari satu panel sekaligus',
      table: { defaultValue: { summary: 'false' } },
    },
  },
} satisfies Meta<typeof LumaAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleOpen: Story = {
  args: { allowMultiple: false },
  parameters: {
    docs: {
      source: {
        code: `
<LumaAccordion :allowMultiple="false">
  <LumaAccordionItem :value="1">
    <LumaAccordionTrigger>Panduan Lumina UI</LumaAccordionTrigger>
    <LumaAccordionContent>
      Lumina UI dirancang dengan prinsip modularitas tinggi. Semua token gaya terpisah di packages/core, memudahkan Anda untuk melakukan brand customization dengan mudah.
    </LumaAccordionContent>
  </LumaAccordionItem>
  <LumaAccordionItem :value="2">
    <LumaAccordionTrigger>Bagaimana cara instalasi?</LumaAccordionTrigger>
    <LumaAccordionContent>
      Anda dapat menginstalnya lewat npm, pnpm, atau yarn. Pastikan Anda mengimpor file CSS utama di entry point aplikasi Anda.
    </LumaAccordionContent>
  </LumaAccordionItem>
  <LumaAccordionItem :value="3">
    <LumaAccordionTrigger>Apakah mendukung Server Side Rendering (SSR)?</LumaAccordionTrigger>
    <LumaAccordionContent>
      Ya, komponen kami dirancang ramah SSR dan kompatibel dengan framework modern seperti Next.js (untuk React) dan Nuxt (untuk Vue).
    </LumaAccordionContent>
  </LumaAccordionItem>
</LumaAccordion>
        `,
      },
    },
  },
  render: (args) => ({
    components: {
      LumaAccordion,
      LumaAccordionItem,
      LumaAccordionTrigger,
      LumaAccordionContent,
    },
    setup() { return { args }; },
    template: `
      <LumaAccordion v-bind="args">
        <LumaAccordionItem :value="1">
          <LumaAccordionTrigger>Panduan Lumina UI</LumaAccordionTrigger>
          <LumaAccordionContent>
            Lumina UI dirancang dengan prinsip modularitas tinggi. Semua token gaya terpisah di packages/core, memudahkan Anda untuk melakukan brand customization dengan mudah.
          </LumaAccordionContent>
        </LumaAccordionItem>
        <LumaAccordionItem :value="2">
          <LumaAccordionTrigger>Bagaimana cara instalasi?</LumaAccordionTrigger>
          <LumaAccordionContent>
            Anda dapat menginstalnya lewat npm, pnpm, atau yarn. Pastikan Anda mengimpor file CSS utama di entry point aplikasi Anda.
          </LumaAccordionContent>
        </LumaAccordionItem>
        <LumaAccordionItem :value="3">
          <LumaAccordionTrigger>Apakah mendukung Server Side Rendering (SSR)?</LumaAccordionTrigger>
          <LumaAccordionContent>
            Ya, komponen kami dirancang ramah SSR dan kompatibel dengan framework modern seperti Next.js (untuk React) dan Nuxt (untuk Vue).
          </LumaAccordionContent>
        </LumaAccordionItem>
      </LumaAccordion>
    `,
  }),
};

export const MultipleOpen: Story = {
  args: { allowMultiple: true },
  parameters: {
    docs: {
      source: {
        code: `
<LumaAccordion :allowMultiple="true">
  <LumaAccordionItem value="a">
    <LumaAccordionTrigger>Section A (Bisa buka bareng)</LumaAccordionTrigger>
    <LumaAccordionContent>
      Detail konten untuk bagian A yang dapat dibuka bersamaan dengan bagian B.
    </LumaAccordionContent>
  </LumaAccordionItem>
  <LumaAccordionItem value="b">
    <LumaAccordionTrigger>Section B (Bisa buka bareng)</LumaAccordionTrigger>
    <LumaAccordionContent>
      Detail konten untuk bagian B yang dapat dibuka bersamaan dengan bagian A.
    </LumaAccordionContent>
  </LumaAccordionItem>
</LumaAccordion>
        `,
      },
    },
  },
  render: (args) => ({
    components: {
      LumaAccordion,
      LumaAccordionItem,
      LumaAccordionTrigger,
      LumaAccordionContent,
    },
    setup() { return { args }; },
    template: `
      <LumaAccordion v-bind="args">
        <LumaAccordionItem value="a">
          <LumaAccordionTrigger>Section A (Bisa buka bareng)</LumaAccordionTrigger>
          <LumaAccordionContent>
            Detail konten untuk bagian A yang dapat dibuka bersamaan dengan bagian B.
          </LumaAccordionContent>
        </LumaAccordionItem>
        <LumaAccordionItem value="b">
          <LumaAccordionTrigger>Section B (Bisa buka bareng)</LumaAccordionTrigger>
          <LumaAccordionContent>
            Detail konten untuk bagian B yang dapat dibuka bersamaan dengan bagian A.
          </LumaAccordionContent>
        </LumaAccordionItem>
      </LumaAccordion>
    `,
  }),
};
