<template>
  <span :class="badgeClasses">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { LumaBadgeProps } from './types';
import '@lumina-borealis/core/src/components/badge.css';

defineOptions({
  name: 'LumaBadge',
});

const props = withDefaults(defineProps<LumaBadgeProps>(), {
  variant: 'subtle',
  color: 'neutral',
});

const badgeClasses = computed(() => {
  return [
    'luma-badge',
    `luma-badge--variant-${props.variant}`,
    `luma-badge--color-${props.color}`,
  ];
});
</script>
