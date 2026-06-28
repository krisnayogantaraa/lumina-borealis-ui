<template>
  <div :class="emptyStateClasses" role="status">
    <div v-if="$slots.icon" class="luma-empty-state__icon">
      <slot name="icon" />
    </div>
    <h3 class="luma-empty-state__title">{{ title }}</h3>
    <p v-if="description" class="luma-empty-state__description">
      {{ description }}
    </p>
    <div v-if="$slots.default" class="luma-empty-state__description">
      <slot />
    </div>
    <div v-if="$slots.actions" class="luma-empty-state__actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { LumaEmptyStateProps } from './types';
import '@lumina-borealis/core/src/components/empty-state.css';

defineOptions({
  name: 'LumaEmptyState',
});

const props = withDefaults(defineProps<LumaEmptyStateProps>(), {
  size: 'md',
});

const emptyStateClasses = computed(() => [
  'luma-empty-state',
  `luma-empty-state--size-${props.size}`,
]);
</script>
