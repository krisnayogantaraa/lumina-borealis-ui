<template>
  <p class="luma-card__description">
    <slot />
  </p>
</template>

<script setup lang="ts">
defineOptions({
  name: 'LumaCardDescription',
});
</script>
