<template>
  <button
    type="button"
    class="luma-accordion-item__trigger"
    :aria-expanded="itemContext.isOpen.value"
    @click="handleClick"
  >
    <slot />
    <svg
      class="luma-accordion-item__chevron"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { accordionInjectionKey, accordionItemInjectionKey } from './types';

defineOptions({
  name: 'LumaAccordionTrigger',
});

const accordionContext = inject(accordionInjectionKey);
const itemContext = inject(accordionItemInjectionKey);

if (!accordionContext || !itemContext) {
  throw new Error('LumaAccordionTrigger must be placed inside a LumaAccordionItem component.');
}

const handleClick = () => {
  accordionContext.toggleItem(itemContext.value);
};
</script>
