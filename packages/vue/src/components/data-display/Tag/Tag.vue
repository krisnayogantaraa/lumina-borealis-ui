<template>
  <span :class="tagClasses" :aria-disabled="disabled || undefined">
    <span class="luma-tag__label">
      <slot />
    </span>
    <button
      v-if="closable"
      type="button"
      class="luma-tag__close-button"
      :disabled="disabled"
      aria-label="Remove tag"
      @click="handleClose"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { LumaTagProps } from './types';
import '@lumina-borealis/core/src/components/tag.css';

defineOptions({
  name: 'LumaTag',
});

const props = withDefaults(defineProps<LumaTagProps>(), {
  variant: 'subtle',
  color: 'neutral',
  size: 'md',
  closable: false,
  disabled: false,
});

const emit = defineEmits<{
  (e: 'close', event: MouseEvent): void;
}>();

const handleClose = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('close', event);
  }
};

const tagClasses = computed(() => {
  return [
    'luma-tag',
    `luma-tag--variant-${props.variant}`,
    `luma-tag--color-${props.color}`,
    `luma-tag--size-${props.size}`,
    props.disabled ? 'luma-tag--disabled' : '',
  ].filter(Boolean);
});
</script>
