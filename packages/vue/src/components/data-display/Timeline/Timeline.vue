<template>
  <div class="luma-timeline">
    <slot />
  </div>
</template>

<script setup lang="ts">
import '@lumina-borealis/core/src/components/timeline.css';

defineOptions({
  name: 'LumaTimeline',
});
</script>
