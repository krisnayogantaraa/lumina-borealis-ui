<template>
  <div class="luma-button-group" role="group" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide, computed, toRefs } from 'vue';
import { buttonGroupInjectionKey, type ButtonVariant, type ButtonSize, type ButtonGroupContext } from '../Button/types';
import '@lumina-borealis/core/src/components/button-group.css';

defineOptions({
  name: 'LumaButtonGroup',
  inheritAttrs: false,
});

const props = defineProps<{
  /** Varian default untuk semua LumaButton di dalam grup ini. */
  variant?: ButtonVariant;
  /** Ukuran default untuk semua LumaButton di dalam grup ini. */
  size?: ButtonSize;
}>();

// Provide reactive computed values agar child buttons otomatis update
// saat props ButtonGroup berubah (termasuk saat diubah dari Storybook controls)
provide(buttonGroupInjectionKey, {
  variant: computed(() => props.variant),
  size: computed(() => props.size),
});
</script>
