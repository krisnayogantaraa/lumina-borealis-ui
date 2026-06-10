<template>
  <button
    :class="tabClasses"
    role="tab"
    :aria-selected="isActive"
    :disabled="disabled"
    @click="handleClick"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed, inject, type Ref } from 'vue';

defineOptions({ name: 'LumaTab', inheritAttrs: false });

const props = withDefaults(defineProps<{
  /** Nilai unik untuk tab ini. */
  value: string;
  /** Nonaktifkan tab. */
  disabled?: boolean;
}>(), {
  disabled: false,
});

const activeTab = inject<Ref<string>>('luma-tabs-active');
const setActiveTab = inject<(value: string) => void>('luma-tabs-set-active');

const isActive = computed(() => activeTab?.value === props.value);

const tabClasses = computed(() => [
  'luma-tabs__tab',
  isActive.value && 'luma-tabs__tab--active',
  props.disabled && 'luma-tabs__tab--disabled',
]);

function handleClick() {
  if (!props.disabled && setActiveTab) {
    setActiveTab(props.value);
  }
}
</script>
