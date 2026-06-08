<template>
  <component
    :is="as"
    :class="linkClasses"
    :href="isNativeAnchor ? href : undefined"
    :to="!isNativeAnchor ? (to ?? href) : undefined"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import '@lumina-borealis/core/src/components/link.css';

defineOptions({ name: 'LumaLink', inheritAttrs: false });

export type LinkColor = 'primary' | 'default' | 'muted';
export type LinkUnderline = 'always' | 'hover' | 'none';

const props = withDefaults(defineProps<{
  /** URL tujuan (untuk tag <a> native). */
  href?: string;
  /** Prop to untuk router-link/NuxtLink. */
  to?: string | object;
  /** Tag HTML yang dirender. Ganti ke 'RouterLink' atau 'NuxtLink' jika butuh client-side routing. */
  as?: string;
  /** Jika true, menambahkan target="_blank" dan rel="noopener noreferrer" secara otomatis. */
  external?: boolean;
  /** Kontrol visibilitas garis bawah. */
  underline?: LinkUnderline;
  /** Warna tautan. */
  color?: LinkColor;
}>(), {
  as: 'a',
  external: false,
  underline: 'hover',
  color: 'primary',
});

const isNativeAnchor = computed(() => props.as === 'a');

const linkClasses = computed(() => [
  'luma-link',
  `luma-link--color-${props.color}`,
  `luma-link--underline-${props.underline}`,
  props.external ? 'luma-link--external' : '',
]);
</script>
