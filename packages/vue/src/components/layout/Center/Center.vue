<template>
  <component :is="as" :class="centerClasses" v-bind="$attrs">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import '@lumina-borealis/core/src/components/center.css';

defineOptions({ name: 'LumaCenter', inheritAttrs: false });

const props = withDefaults(defineProps<{
  /** Element tag HTML yang akan di-render. */
  as?: string;
  /** Gunakan display inline-flex alih-alih flex biasa. */
  inline?: boolean;
}>(), {
  as: 'div',
  inline: false,
});

const centerClasses = computed(() => [
  'luma-center',
  props.inline ? 'luma-center--inline' : '',
]);
</script>
