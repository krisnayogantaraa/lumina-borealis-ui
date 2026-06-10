<template>
  <div :class="['luma-stepper', `luma-stepper--${orientation}`]" v-bind="$attrs">
    <template v-for="(item, index) in items" :key="index">
      <!-- Step -->
      <div 
        class="luma-stepper__step"
        :class="getStepClasses(index)"
      >
        <div class="luma-stepper__indicator">
          <svg v-if="index < modelValue" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span v-else>{{ index + 1 }}</span>
        </div>
        
        <div class="luma-stepper__content">
          <div class="luma-stepper__title">{{ item.title }}</div>
          <div v-if="item.description" class="luma-stepper__description">{{ item.description }}</div>
        </div>
      </div>
      
      <!-- Connector (except for last step) -->
      <div 
        v-if="index < items.length - 1" 
        class="luma-stepper__connector"
        :class="{ 'luma-stepper__connector--completed': index < modelValue }"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import '@lumina-borealis/core/src/components/stepper.css';

defineOptions({ name: 'LumaStepper', inheritAttrs: false });

export interface StepperItem {
  title: string;
  description?: string;
}

const props = withDefaults(defineProps<{
  /** Langkah aktif saat ini (0-indexed). */
  modelValue: number;
  /** Orientasi stepper. */
  orientation?: 'horizontal' | 'vertical';
  /** Daftar langkah. */
  items: StepperItem[];
}>(), {
  orientation: 'horizontal',
});

function getStepClasses(index: number) {
  if (index < props.modelValue) return 'luma-stepper__step--completed';
  if (index === props.modelValue) return 'luma-stepper__step--active';
  return 'luma-stepper__step--upcoming';
}
</script>
