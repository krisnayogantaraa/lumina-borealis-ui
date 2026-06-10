<template>
  <nav aria-label="Breadcrumb" v-bind="$attrs">
    <ol class="luma-breadcrumbs">
      <slot />
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { provide } from 'vue';
import '@lumina-borealis/core/src/components/breadcrumbs.css';

defineOptions({ name: 'LumaBreadcrumbs', inheritAttrs: false });

const props = withDefaults(defineProps<{
  /** Karakter pemisah antar item. */
  separator?: string;
}>(), {
  separator: '/',
});

provide('luma-breadcrumb-separator', props.separator);
</script>
