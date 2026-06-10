import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import Stepper from './Stepper.vue';
import LumaButton from '../../actions/Button/Button.vue';

/**
 * **LumaStepper** — Navigasi wizard bertahap.
 *
 * Menampilkan progress langkah-langkah dalam sebuah alur.
 * Mendukung orientasi horizontal dan vertikal.
 */
const meta = {
  title: 'Navigation/LumaStepper',
  component: Stepper,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'number', description: 'Langkah aktif saat ini (0-indexed)' },
    orientation: { control: 'select', options: ['horizontal', 'vertical'], description: 'Orientasi stepper' },
  },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = [
  { title: 'Data Diri', description: 'Masukkan info pribadi' },
  { title: 'Alamat', description: 'Pilih lokasi pengiriman' },
  { title: 'Pembayaran', description: 'Pilih metode bayar' },
  { title: 'Selesai' },
];

export const HorizontalStepper: Story = {
  render: (args) => ({
    components: { Stepper },
    setup() {
      return { args };
    },
    template: `
      <div style="padding: 2rem;">
        <Stepper v-bind="args" />
      </div>
    `,
  }),
  args: {
    modelValue: 1, // Active is step 2
    orientation: 'horizontal',
    items: defaultItems,
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<LumaStepper
  :model-value="1"
  :items="[
    { title: 'Data Diri', description: 'Masukkan info pribadi' },
    { title: 'Alamat', description: 'Pilih lokasi pengiriman' },
    { title: 'Pembayaran', description: 'Pilih metode bayar' },
    { title: 'Selesai' }
  ]"
/>
        `.trim(),
      },
    },
  },
};

export const VerticalStepper: Story = {
  ...HorizontalStepper,
  args: {
    modelValue: 2, // Active is step 3
    orientation: 'vertical',
    items: defaultItems,
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<LumaStepper
  :model-value="2"
  orientation="vertical"
  :items="..."
/>
        `.trim(),
      },
    },
  },
};

export const InteractiveStepper: Story = {
  render: (args) => ({
    components: { Stepper, LumaButton },
    setup() {
      const activeStep = ref(0);
      return { args, activeStep, items: defaultItems };
    },
    template: `
      <div style="padding: 2rem; display: flex; flex-direction: column; gap: 2rem;">
        <Stepper v-bind="args" :items="items" v-model="activeStep" />
        
        <div style="display: flex; gap: 1rem; justify-content: flex-end;">
          <LumaButton 
            variant="outline" 
            :disabled="activeStep === 0"
            @click="activeStep--"
          >
            Kembali
          </LumaButton>
          <LumaButton 
            variant="primary" 
            :disabled="activeStep === items.length - 1"
            @click="activeStep++"
          >
            Lanjut
          </LumaButton>
        </div>
      </div>
    `,
  }),
  args: {
    modelValue: 0,
    items: defaultItems,
    orientation: 'horizontal',
  },
};
