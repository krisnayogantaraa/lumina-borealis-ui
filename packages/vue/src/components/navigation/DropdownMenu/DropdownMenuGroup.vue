<template>
  <div role="group" v-bind="$attrs">
    <div v-if="label" class="luma-dropdown-menu__group-label">{{ label }}</div>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'LumaDropdownMenuGroup', inheritAttrs: false });

defineProps<{
  /** Label opsional untuk grup menu ini. */
  label?: string;
}>();
</script>
