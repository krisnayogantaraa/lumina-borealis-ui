<template>
  <div
    class="luma-accordion-item__content"
    :aria-hidden="!itemContext.isOpen.value"
  >
    <div class="luma-accordion-item__content-inner">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { accordionItemInjectionKey } from './types';

defineOptions({
  name: 'LumaAccordionContent',
});

const itemContext = inject(accordionItemInjectionKey);
if (!itemContext) {
  throw new Error('LumaAccordionContent must be placed inside a LumaAccordionItem component.');
}
</script>
