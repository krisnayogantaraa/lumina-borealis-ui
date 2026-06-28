<template>
  <kbd class="luma-kbd">
    <slot />
  </kbd>
</template>

<script setup lang="ts">
import '@lumina-borealis/core/src/components/kbd.css';

defineOptions({
  name: 'LumaKbd',
});
</script>
