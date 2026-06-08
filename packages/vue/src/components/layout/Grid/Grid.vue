<template>
  <div :class="gridClasses" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { SpaceSize, AlignItems } from '../types';
import '@lumina-borealis/core/src/components/grid.css';

defineOptions({ name: 'LumaGrid', inheritAttrs: false });

export type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

const props = withDefaults(defineProps<{
  /** Jumlah kolom grid (1-12). */
  cols?: GridCols;
  /** Jarak antar item. */
  gap?: SpaceSize;
  /** Perataan vertikal setiap item. */
  align?: AlignItems;
}>(), {
  cols: 12,
  gap: 'md',
});

const gridClasses = computed(() => [
  'luma-grid',
  `luma-grid--cols-${props.cols}`,
  `luma-grid--gap-${props.gap}`,
  props.align ? `luma-grid--align-${props.align}` : '',
]);
</script>
