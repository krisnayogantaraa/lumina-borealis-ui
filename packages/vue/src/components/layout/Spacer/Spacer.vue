<template>
  <component :is="as" class="luma-spacer" v-bind="$attrs">
    <slot />
  </component>
</template>

<script setup lang="ts">
import '@lumina-borealis/core/src/components/spacer.css';

defineOptions({ name: 'LumaSpacer', inheritAttrs: false });

withDefaults(defineProps<{
  /** Element tag HTML yang akan di-render. */
  as?: string;
}>(), {
  as: 'div',
});
</script>
