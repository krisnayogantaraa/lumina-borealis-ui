<template>
  <div class="luma-dropdown-menu" ref="containerRef" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, provide, readonly, onMounted, onBeforeUnmount } from 'vue';
import '@lumina-borealis/core/src/components/dropdown-menu.css';

defineOptions({ name: 'LumaDropdownMenu', inheritAttrs: false });

const isOpen = ref(false);
const containerRef = ref<HTMLElement | null>(null);

const toggle = () => { isOpen.value = !isOpen.value; };
const open = () => { isOpen.value = true; };
const close = () => { isOpen.value = false; };

/** Click-outside handler */
function onClickOutside(e: MouseEvent) {
  if (containerRef.value && !containerRef.value.contains(e.target as Node)) {
    close();
  }
}

/** Escape key handler */
function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && isOpen.value) {
    close();
  }
}

onMounted(() => {
  document.addEventListener('click', onClickOutside, true);
  document.addEventListener('keydown', onKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside, true);
  document.removeEventListener('keydown', onKeydown);
});

provide('luma-dropdown-is-open', readonly(isOpen));
provide('luma-dropdown-toggle', toggle);
provide('luma-dropdown-open', open);
provide('luma-dropdown-close', close);
</script>
