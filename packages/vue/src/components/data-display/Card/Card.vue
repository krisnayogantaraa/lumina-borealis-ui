<template>
  <component
    :is="as"
    :class="cardClasses"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { LumaCardProps } from './types';
import '@lumina-borealis/core/src/components/card.css';

defineOptions({
  name: 'LumaCard',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<LumaCardProps>(), {
  as: 'div',
  variant: 'elevated',
  padding: 'md',
});

const cardClasses = computed(() => {
  return [
    'luma-card',
    `luma-card--variant-${props.variant}`,
    `luma-card--padding-${props.padding}`,
  ];
});
</script>
