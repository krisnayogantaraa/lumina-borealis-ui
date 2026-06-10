<template>
  <li :class="itemClasses">
    <span class="luma-breadcrumbs__separator">{{ separator }}</span>
    <component
      :is="active ? 'span' : as"
      :class="'luma-breadcrumbs__link'"
      :href="!active && as === 'a' ? href : undefined"
      :to="!active && as !== 'a' ? (to ?? href) : undefined"
      :aria-current="active ? 'page' : undefined"
      v-bind="$attrs"
    >
      <slot />
    </component>
  </li>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';

defineOptions({ name: 'LumaBreadcrumbItem', inheritAttrs: false });

const props = withDefaults(defineProps<{
  /** URL tujuan. */
  href?: string;
  /** Prop to untuk router-link. */
  to?: string | object;
  /** Tag HTML (ganti ke RouterLink jika perlu). */
  as?: string;
  /** Tandai sebagai halaman saat ini (non-clickable). */
  active?: boolean;
}>(), {
  as: 'a',
  active: false,
});

const separator = inject<string>('luma-breadcrumb-separator', '/');

const itemClasses = computed(() => [
  'luma-breadcrumbs__item',
  props.active ? 'luma-breadcrumbs__item--active' : '',
]);
</script>
