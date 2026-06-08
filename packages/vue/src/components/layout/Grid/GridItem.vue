<template>
  <component :is="as" :class="gridItemClasses" v-bind="$attrs">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { AlignItems } from '../types';
import '@lumina-borealis/core/src/components/grid-item.css';

defineOptions({ name: 'LumaGridItem', inheritAttrs: false });

const props = withDefaults(defineProps<{
  /** Element tag HTML yang akan di-render. */
  as?: string;
  /** Jumlah kolom yang ditempati (1-12). */
  span?: number | string;
  /** Jumlah kolom kosong sebelum item ini (1-11). */
  offset?: number | string;
  /** Jumlah baris vertikal yang ditempati. */
  rowSpan?: number | string;
  /** Penjajaran vertikal individual untuk item ini. */
  alignSelf?: AlignItems;
}>(), {
  as: 'div',
});

const gridItemClasses = computed(() => [
  'luma-grid-item',
  props.span ? `luma-grid-item--span-${props.span}` : '',
  props.offset ? `luma-grid-item--offset-${props.offset}` : '',
  props.rowSpan ? `luma-grid-item--row-span-${props.rowSpan}` : '',
  props.alignSelf ? `luma-grid-item--align-self-${props.alignSelf}` : '',
]);
</script>
