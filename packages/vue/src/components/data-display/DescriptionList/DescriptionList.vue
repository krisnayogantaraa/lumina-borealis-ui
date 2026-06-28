<template>
  <dl :class="listClasses">
    <slot />
  </dl>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { LumaDescriptionListProps } from './types';
import '@lumina-borealis/core/src/components/description-list.css';

defineOptions({
  name: 'LumaDescriptionList',
});

const props = withDefaults(defineProps<LumaDescriptionListProps>(), {
  layout: 'vertical',
  spacing: 'md',
});

const listClasses = computed(() => {
  return [
    'luma-description-list',
    `luma-description-list--${props.layout}`,
    `luma-description-list--spacing-${props.spacing}`,
  ];
});
</script>
