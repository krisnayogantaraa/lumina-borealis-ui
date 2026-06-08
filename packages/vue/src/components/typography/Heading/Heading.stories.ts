import type { Meta, StoryObj } from '@storybook/vue3';
import LumaHeading from './Heading.vue';

/**
 * **LumaHeading** — Komponen Judul Standar (H1–H6).
 *
 * Memisahkan **gaya visual** (`level`) dari **tag HTML semantik** (`as`).
 * Ini krusial untuk SEO: Anda bisa membuat teks bergaya H1 yang besar,
 * tapi tetap dirender sebagai `<h2>` demi hierarki heading yang benar.
 */
const meta = {
  title: 'Typography/LumaHeading',
  component: LumaHeading,
  tags: ['autodocs'],
  argTypes: {
    level: { control: { type: 'number', min: 1, max: 6 } },
    as: { control: 'text' },
    align: { control: 'select', options: ['left', 'center', 'right', 'justify'] },
  },
} satisfies Meta<typeof LumaHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllLevels: Story = {
  render: () => ({
    components: { LumaHeading },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <LumaHeading :level="1">Heading Level 1 — Extrabold 3rem</LumaHeading>
        <LumaHeading :level="2">Heading Level 2 — Bold 2.25rem</LumaHeading>
        <LumaHeading :level="3">Heading Level 3 — Bold 1.875rem</LumaHeading>
        <LumaHeading :level="4">Heading Level 4 — Semibold 1.5rem</LumaHeading>
        <LumaHeading :level="5">Heading Level 5 — Semibold 1.25rem</LumaHeading>
        <LumaHeading :level="6">Heading Level 6 — Semibold 1.125rem</LumaHeading>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<LumaHeading :level="1">Heading Level 1</LumaHeading>
<LumaHeading :level="2">Heading Level 2</LumaHeading>
<LumaHeading :level="3">Heading Level 3</LumaHeading>
<LumaHeading :level="4">Heading Level 4</LumaHeading>
<LumaHeading :level="5">Heading Level 5</LumaHeading>
<LumaHeading :level="6">Heading Level 6</LumaHeading>
        `.trim(),
      },
    },
  },
};

export const SemanticOverride: Story = {
  args: { level: 1, as: 'h3' },
  render: (args: any) => ({
    components: { LumaHeading },
    setup() { return { args }; },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <LumaHeading v-bind="args">
          Ini terlihat besar seperti H1, tapi di DOM dirender sebagai &lt;h3&gt;
        </LumaHeading>
        <div style="font-family: var(--luma-font-mono); font-size: 0.8rem; color: var(--luma-text-muted); background: var(--luma-bg-muted); padding: 0.75rem 1rem; border-radius: var(--luma-radius-md);">
          💡 Berguna saat Anda butuh visual besar tapi hierarki SEO heading harus tetap benar.
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<!-- Dirender sebagai <h3> di DOM, tapi bergaya visual H1 -->
<LumaHeading :level="1" as="h3">
  Ini terlihat besar seperti H1, tapi di DOM dirender sebagai h3
</LumaHeading>
        `.trim(),
      },
    },
  },
};

export const CenterAligned: Story = {
  args: { level: 2, align: 'center' },
  render: (args: any) => ({
    components: { LumaHeading },
    setup() { return { args }; },
    template: `
      <LumaHeading v-bind="args">Judul yang Diratakan Tengah</LumaHeading>
    `,
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `<LumaHeading :level="2" align="center">Judul yang Diratakan Tengah</LumaHeading>`,
      },
    },
  },
};
