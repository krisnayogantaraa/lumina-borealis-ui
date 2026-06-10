<template>
  <div :class="['luma-tabs', `luma-tabs--${variant}`]" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide, computed } from 'vue';
import '@lumina-borealis/core/src/components/tabs.css';

defineOptions({ name: 'LumaTabs', inheritAttrs: false });

const props = withDefaults(defineProps<{
  /** Nilai tab yang sedang aktif. */
  modelValue: string;
  /** Gaya visual tab. */
  variant?: 'underline' | 'pills' | 'enclosed';
}>(), {
  variant: 'underline',
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const activeTab = computed(() => props.modelValue);
const setActiveTab = (value: string) => {
  emit('update:modelValue', value);
};

provide('luma-tabs-active', activeTab);
provide('luma-tabs-set-active', setActiveTab);
provide('luma-tabs-variant', props.variant);
</script>
