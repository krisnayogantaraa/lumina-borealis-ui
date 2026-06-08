<template>
  <div :class="dividerClasses" role="separator" v-bind="$attrs">
    <span v-if="label" class="luma-divider__label">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { SpaceSize } from '../types';
import '@lumina-borealis/core/src/components/divider.css';

defineOptions({ name: 'LumaDivider', inheritAttrs: false });

export type DividerOrientation = 'horizontal' | 'vertical';

const props = withDefaults(defineProps<{
  /** Arah garis pemisah. */
  orientation?: DividerOrientation;
  /** Teks label di tengah garis (opsional). */
  label?: string;
  /** Jarak di sekitar divider. */
  spacing?: SpaceSize;
}>(), {
  orientation: 'horizontal',
});

const dividerClasses = computed(() => [
  'luma-divider',
  `luma-divider--${props.orientation}`,
  props.label ? '' : 'luma-divider--no-label',
  props.spacing ? `luma-divider--space-${props.spacing}` : '',
]);
</script>
