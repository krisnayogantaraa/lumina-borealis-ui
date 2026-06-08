<template>
  <component :is="as" :class="textClasses" v-bind="$attrs">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { TextAlign } from '../types';
import '@lumina-borealis/core/src/components/text.css';

defineOptions({ name: 'LumaText', inheritAttrs: false });

export type TextVariant = 'body-lg' | 'body-md' | 'body-sm' | 'caption';
export type TextWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
export type TextColor = 'default' | 'muted' | 'subtle' | 'primary' | 'danger' | 'success' | 'warning';

const props = withDefaults(defineProps<{
  /** Tag HTML yang dirender (p, span, div, small, strong, dll). */
  as?: string;
  /** Variasi ukuran teks. */
  variant?: TextVariant;
  /** Ketebalan font. */
  weight?: TextWeight;
  /** Warna semantik teks. */
  color?: TextColor;
  /** Perataan teks. */
  align?: TextAlign;
  /** Jika true, teks yang terlalu panjang dipotong dengan ellipsis. */
  truncated?: boolean;
}>(), {
  as: 'p',
  variant: 'body-md',
  weight: 'normal',
  color: 'default',
});

const textClasses = computed(() => [
  'luma-text',
  `luma-text--${props.variant}`,
  `luma-text--weight-${props.weight}`,
  `luma-text--color-${props.color}`,
  props.align ? `luma-text--align-${props.align}` : '',
  props.truncated ? 'luma-text--truncated' : '',
]);
</script>
