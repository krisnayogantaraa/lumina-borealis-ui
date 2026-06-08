<template>
  <component :is="as" :class="stackClasses" v-bind="$attrs">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { SpaceSize, AlignItems, JustifyContent } from '../types';
import '@lumina-borealis/core/src/components/stack.css';

defineOptions({ name: 'LumaStack', inheritAttrs: false });

export type StackDirection = 'vertical' | 'horizontal';

const props = withDefaults(defineProps<{
  /** Tag HTML yang di-render. */
  as?: string;
  /** Arah tumpukan. */
  direction?: StackDirection;
  /** Jarak antar item. */
  gap?: SpaceSize;
  /** Perataan sumbu silang (cross axis). */
  align?: AlignItems;
  /** Perataan sumbu utama (main axis). */
  justify?: JustifyContent;
  /** Apakah item boleh turun baris. */
  wrap?: boolean;
}>(), {
  as: 'div',
  direction: 'vertical',
  gap: 'md',
  wrap: false,
});

const stackClasses = computed(() => [
  'luma-stack',
  `luma-stack--${props.direction}`,
  `luma-stack--gap-${props.gap}`,
  props.align ? `luma-stack--align-${props.align}` : '',
  props.justify ? `luma-stack--justify-${props.justify}` : '',
  props.wrap ? 'luma-stack--wrap' : 'luma-stack--nowrap',
]);
</script>
