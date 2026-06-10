<template>
  <div
    v-show="isActive"
    class="luma-tabs__panel"
    role="tabpanel"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, inject, type Ref } from 'vue';

defineOptions({ name: 'LumaTabPanel', inheritAttrs: false });

const props = defineProps<{
  /** Nilai tab yang terkait dengan panel ini. */
  value: string;
}>();

const activeTab = inject<Ref<string>>('luma-tabs-active');

const isActive = computed(() => activeTab?.value === props.value);
</script>
