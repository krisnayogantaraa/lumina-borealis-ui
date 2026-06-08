<template>
  <div :class="containerClasses" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import '@lumina-borealis/core/src/components/container.css';

defineOptions({ name: 'LumaContainer', inheritAttrs: false });

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

const props = withDefaults(defineProps<{
  /** Ukuran maksimal lebar container. */
  size?: ContainerSize;
}>(), {
  size: 'lg',
});

const containerClasses = computed(() => [
  'luma-container',
  `luma-container--${props.size}`,
]);
</script>
