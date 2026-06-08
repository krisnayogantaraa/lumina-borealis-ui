<template>
  <component
    v-if="isComponent"
    :is="resolvedIcon"
    class="luma-icon"
    aria-hidden="true"
    v-bind="$attrs"
  />
  <i
    v-else-if="isStringClass"
    :class="['luma-icon', resolvedIcon]"
    aria-hidden="true"
    v-bind="$attrs"
  ></i>
</template>

<script setup lang="ts">
import { inject, computed, type Component } from 'vue';
import { LUMINA_CONFIG_KEY, type LuminaOptions } from '../../config';

defineOptions({
  name: 'LumaIcon',
  inheritAttrs: false,
});

const props = defineProps<{
  /** 
   * Icon name (string) to be resolved globally,
   * OR a direct Vue Component (e.g. from lucide-vue-next).
   */
  name: string | Component;
}>();

const config = inject<LuminaOptions>(LUMINA_CONFIG_KEY, {});

const resolvedIcon = computed(() => {
  // 1. Jika user mem-pass Vue Component secara langsung (Best practice tree-shaking)
  if (typeof props.name === 'object' || typeof props.name === 'function') {
    return props.name;
  }

  // 2. Jika user mem-pass String ("check", "pi pi-check"), kita panggil Global Resolver
  if (typeof props.name === 'string' && config.icons?.resolver) {
    const resolved = config.icons.resolver(props.name);
    if (resolved) return resolved;
  }

  // 3. Fallback: Kembalikan string secara mentah (asumsi user menulis class penuh)
  return props.name;
});

const isComponent = computed(() => typeof resolvedIcon.value === 'object' || typeof resolvedIcon.value === 'function');
const isStringClass = computed(() => typeof resolvedIcon.value === 'string');
</script>

<style scoped>
.luma-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.25em; /* 1.25em is standard for icons relative to text */
  height: 1.25em;
  flex-shrink: 0;
}
</style>
