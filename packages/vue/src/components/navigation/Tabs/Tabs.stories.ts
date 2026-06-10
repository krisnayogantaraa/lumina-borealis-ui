import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import Tabs from './Tabs.vue';
import TabList from './TabList.vue';
import Tab from './Tab.vue';
import TabPanel from './TabPanel.vue';
import LumaText from '../../typography/Text/Text.vue';

/**
 * **LumaTabs** — Navigasi konten dengan tab.
 *
 * Menggunakan sistem sub-komponen: \`Tabs\`, \`TabList\`, \`Tab\`, dan \`TabPanel\`.
 * Memiliki 3 variant visual: \`underline\` (default), \`pills\`, dan \`enclosed\`.
 */
const meta = {
  title: 'Navigation/LumaTabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['underline', 'pills', 'enclosed'],
      description: 'Gaya visual tab',
    },
    modelValue: {
      control: 'text',
      description: 'Tab aktif saat ini',
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UnderlineTabs: Story = {
  render: (args) => ({
    components: { Tabs, TabList, Tab, TabPanel, LumaText },
    setup() {
      const activeTab = ref('overview');
      return { args, activeTab };
    },
    template: `
      <Tabs v-bind="args" v-model="activeTab">
        <TabList>
          <Tab value="overview">Ringkasan</Tab>
          <Tab value="features">Fitur</Tab>
          <Tab value="pricing">Harga</Tab>
        </TabList>
        <TabPanel value="overview">
          <LumaText variant="body-md">Ini adalah tab ringkasan produk. Lorem ipsum dolor sit amet.</LumaText>
        </TabPanel>
        <TabPanel value="features">
          <LumaText variant="body-md">Daftar fitur produk yang kami tawarkan sangat lengkap.</LumaText>
        </TabPanel>
        <TabPanel value="pricing">
          <LumaText variant="body-md">Harga mulai dari Rp 100.000 per bulan.</LumaText>
        </TabPanel>
      </Tabs>
    `,
  }),
  args: {
    modelValue: 'overview',
    variant: 'underline',
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<script setup>
import { ref } from 'vue';
const activeTab = ref('overview');
</script>

<template>
  <LumaTabs variant="underline" v-model="activeTab">
    <LumaTabList>
      <LumaTab value="overview">Ringkasan</LumaTab>
      <LumaTab value="features">Fitur</LumaTab>
      <LumaTab value="pricing">Harga</LumaTab>
    </LumaTabList>
    <LumaTabPanel value="overview">Konten ringkasan</LumaTabPanel>
    <LumaTabPanel value="features">Konten fitur</LumaTabPanel>
    <LumaTabPanel value="pricing">Konten harga</LumaTabPanel>
  </LumaTabs>
</template>
        `.trim(),
      },
    },
  },
};

export const PillsTabs: Story = {
  ...UnderlineTabs,
  args: {
    modelValue: 'overview',
    variant: 'pills',
  },
};

export const EnclosedTabs: Story = {
  ...UnderlineTabs,
  args: {
    modelValue: 'overview',
    variant: 'enclosed',
  },
};

export const DisabledTab: Story = {
  args: {
    modelValue: 'account',
  },
  render: (args) => ({
    components: { Tabs, TabList, Tab, TabPanel, LumaText },
    setup() {
      const activeTab = ref('account');
      return { args, activeTab };
    },
    template: `
      <Tabs v-bind="args" v-model="activeTab">
        <TabList>
          <Tab value="account">Akun</Tab>
          <Tab value="password">Password</Tab>
          <Tab value="billing" disabled>Billing (Segera Hadir)</Tab>
        </TabList>
        <TabPanel value="account">
          <LumaText variant="body-md">Pengaturan akun Anda.</LumaText>
        </TabPanel>
        <TabPanel value="password">
          <LumaText variant="body-md">Ubah kata sandi Anda di sini.</LumaText>
        </TabPanel>
      </Tabs>
    `,
  }),
};
