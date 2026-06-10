<template>
  <div class="luma-dropdown-menu__trigger" @click="toggle" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';

defineOptions({ name: 'LumaDropdownMenuTrigger', inheritAttrs: false });

const toggle = inject<() => void>('luma-dropdown-toggle', () => {});
</script>
