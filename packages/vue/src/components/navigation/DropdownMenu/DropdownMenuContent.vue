<template>
  <div
    v-if="isOpen"
    ref="floatingRef"
    class="luma-dropdown-menu__panel"
    :style="floatingStyles"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { inject, ref, computed, type Ref } from 'vue';
import { useFloating, offset, flip, shift, autoUpdate } from '@floating-ui/vue';

defineOptions({ name: 'LumaDropdownMenuContent', inheritAttrs: false });

export type Placement = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';

const props = withDefaults(defineProps<{
  /** Posisi panel relatif terhadap trigger. */
  placement?: Placement;
  /** Jarak offset dari trigger (pixel). */
  offsetPx?: number;
}>(), {
  placement: 'bottom-start',
  offsetPx: 4,
});

const isOpen = inject<Ref<boolean>>('luma-dropdown-is-open', ref(false));

const referenceRef = ref<HTMLElement | null>(null);
const floatingRef = ref<HTMLElement | null>(null);

// Find trigger element (parent's first .luma-dropdown-menu__trigger)
const referenceEl = computed(() => {
  const container = floatingRef.value?.closest('.luma-dropdown-menu');
  return container?.querySelector('.luma-dropdown-menu__trigger') as HTMLElement | null;
});

const { floatingStyles } = useFloating(referenceEl, floatingRef, {
  placement: props.placement,
  middleware: [offset(props.offsetPx), flip(), shift({ padding: 8 })],
  whileElementsMounted: autoUpdate,
});
</script>
