<template>
  <component :is="as" class="luma-card__title">
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { Component } from 'vue';

defineOptions({
  name: 'LumaCardTitle',
});

withDefaults(defineProps<{
  as?: string | Component;
}>(), {
  as: 'h3',
});
</script>
