import type { Meta, StoryObj } from '@storybook/vue3';
import DropdownMenu from './DropdownMenu.vue';
import DropdownMenuTrigger from './DropdownMenuTrigger.vue';
import DropdownMenuContent from './DropdownMenuContent.vue';
import DropdownMenuItem from './DropdownMenuItem.vue';
import DropdownMenuDivider from './DropdownMenuDivider.vue';
import DropdownMenuGroup from './DropdownMenuGroup.vue';
import LumaButton from '../../actions/Button/Button.vue';

/**
 * **LumaDropdownMenu** — Menu Dropdown Floating.
 *
 * Menu aksi yang muncul saat tombol trigger diklik.
 * Menggunakan `@floating-ui/vue` untuk positioning otomatis.
 * Mendukung keyboard (Escape untuk menutup), click-outside,
 * dan sub-komponen composable: Trigger, Content, Item, Divider, Group.
 */
const meta = {
  title: 'Navigation/LumaDropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicDropdown: Story = {
  render: () => ({
    components: {
      DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
      DropdownMenuItem, LumaButton,
    },
    template: `
      <div style="padding: 2rem;">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <LumaButton variant="outline" size="sm">Aksi ▾</LumaButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem @select="() => {}">Edit</DropdownMenuItem>
            <DropdownMenuItem @select="() => {}">Duplikat</DropdownMenuItem>
            <DropdownMenuItem @select="() => {}">Arsipkan</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<LumaDropdownMenu>
  <LumaDropdownMenuTrigger>
    <LumaButton variant="outline">Aksi ▾</LumaButton>
  </LumaDropdownMenuTrigger>
  <LumaDropdownMenuContent>
    <LumaDropdownMenuItem @select="edit">Edit</LumaDropdownMenuItem>
    <LumaDropdownMenuItem @select="duplicate">Duplikat</LumaDropdownMenuItem>
    <LumaDropdownMenuItem @select="archive">Arsipkan</LumaDropdownMenuItem>
  </LumaDropdownMenuContent>
</LumaDropdownMenu>
        `.trim(),
      },
    },
  },
};

export const GroupedWithDivider: Story = {
  render: () => ({
    components: {
      DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
      DropdownMenuItem, DropdownMenuDivider, DropdownMenuGroup, LumaButton,
    },
    template: `
      <div style="padding: 2rem;">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <LumaButton variant="outline" size="sm">Profil ▾</LumaButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup label="Akun">
              <DropdownMenuItem>Profil Saya</DropdownMenuItem>
              <DropdownMenuItem>Pengaturan</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuDivider />
            <DropdownMenuGroup label="Tim">
              <DropdownMenuItem>Undang Anggota</DropdownMenuItem>
              <DropdownMenuItem disabled>Kelola Tim (segera)</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuDivider />
            <DropdownMenuItem danger>Keluar</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<LumaDropdownMenu>
  <LumaDropdownMenuTrigger>
    <LumaButton variant="outline">Profil ▾</LumaButton>
  </LumaDropdownMenuTrigger>
  <LumaDropdownMenuContent>
    <LumaDropdownMenuGroup label="Akun">
      <LumaDropdownMenuItem>Profil Saya</LumaDropdownMenuItem>
      <LumaDropdownMenuItem>Pengaturan</LumaDropdownMenuItem>
    </LumaDropdownMenuGroup>
    <LumaDropdownMenuDivider />
    <LumaDropdownMenuItem danger>Keluar</LumaDropdownMenuItem>
  </LumaDropdownMenuContent>
</LumaDropdownMenu>
        `.trim(),
      },
    },
  },
};

export const PlacementVariant: Story = {
  render: () => ({
    components: {
      DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
      DropdownMenuItem, LumaButton,
    },
    template: `
      <div style="padding: 4rem; display: flex; gap: 1rem; flex-wrap: wrap;">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <LumaButton variant="outline" size="sm">Bottom Start ▾</LumaButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent placement="bottom-start">
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuItem>Item 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <LumaButton variant="outline" size="sm">Bottom End ▾</LumaButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent placement="bottom-end">
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuItem>Item 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <LumaButton variant="outline" size="sm">Top Start ▴</LumaButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent placement="top-start">
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuItem>Item 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<!-- Placement bisa diatur: bottom-start, bottom-end, top-start, dll -->
<LumaDropdownMenu>
  <LumaDropdownMenuTrigger>
    <LumaButton>Menu ▾</LumaButton>
  </LumaDropdownMenuTrigger>
  <LumaDropdownMenuContent placement="bottom-end">
    <LumaDropdownMenuItem>Item 1</LumaDropdownMenuItem>
    <LumaDropdownMenuItem>Item 2</LumaDropdownMenuItem>
  </LumaDropdownMenuContent>
</LumaDropdownMenu>
        `.trim(),
      },
    },
  },
};
