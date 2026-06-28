<template>
  <div :class="['luma-accordion-item', { 'luma-accordion-item--open': isOpen }]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, inject, provide } from 'vue';
import { accordionInjectionKey, accordionItemInjectionKey, type AccordionValue } from './types';

defineOptions({
  name: 'LumaAccordionItem',
});

const props = defineProps<{
  value: AccordionValue;
}>();

const accordionContext = inject(accordionInjectionKey);
if (!accordionContext) {
  throw new Error('LumaAccordionItem must be placed inside a LumaAccordion component.');
}

const isOpen = computed(() => accordionContext.openValues.value.includes(props.value));

provide(accordionItemInjectionKey, {
  value: props.value,
  isOpen,
});
</script>
