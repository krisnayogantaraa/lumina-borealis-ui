<template>
  <button
    :class="itemClasses"
    :disabled="disabled"
    @click="handleClick"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';

defineOptions({ name: 'LumaDropdownMenuItem', inheritAttrs: false });

const props = withDefaults(defineProps<{
  /** Nonaktifkan item ini. */
  disabled?: boolean;
  /** Tampilkan item dengan warna danger. */
  danger?: boolean;
}>(), {
  disabled: false,
  danger: false,
});

const emit = defineEmits<{
  (e: 'select'): void;
}>();

const close = inject<() => void>('luma-dropdown-close', () => {});

const itemClasses = computed(() => [
  'luma-dropdown-menu__item',
  props.disabled && 'luma-dropdown-menu__item--disabled',
  props.danger && 'luma-dropdown-menu__item--danger',
]);

function handleClick() {
  if (!props.disabled) {
    emit('select');
    close();
  }
}
</script>
