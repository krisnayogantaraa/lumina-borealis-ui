<template>
  <div class="luma-tabs__list" role="tablist" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'LumaTabList', inheritAttrs: false });
</script>
