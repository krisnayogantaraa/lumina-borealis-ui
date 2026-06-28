<template>
  <div class="luma-accordion">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, provide, watch } from 'vue';
import { accordionInjectionKey, type LumaAccordionProps, type AccordionValue } from './types';
import '@lumina-borealis/core/src/components/accordion.css';

defineOptions({
  name: 'LumaAccordion',
});

const props = withDefaults(defineProps<LumaAccordionProps>(), {
  allowMultiple: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: AccordionValue | AccordionValue[] | null): void;
}>();

// Internal state if v-model is not used
const internalValue = ref<AccordionValue[]>([]);

const openValues = computed({
  get() {
    if (props.modelValue === undefined) {
      return internalValue.value;
    }
    return Array.isArray(props.modelValue) ? props.modelValue : [props.modelValue];
  },
  set(newValue) {
    if (props.modelValue === undefined) {
      internalValue.value = newValue;
    }
    const emitValue = props.allowMultiple
      ? newValue
      : (newValue[0] ?? null);
    emit('update:modelValue', emitValue);
  },
});

const toggleItem = (value: AccordionValue) => {
  const current = openValues.value;
  let next: AccordionValue[];

  if (props.allowMultiple) {
    next = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
  } else {
    next = current.includes(value) ? [] : [value];
  }

  openValues.value = next;
};

provide(accordionInjectionKey, {
  openValues,
  toggleItem,
});
</script>
