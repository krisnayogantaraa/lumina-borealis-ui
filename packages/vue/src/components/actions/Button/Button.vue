<template>
  <button
    :type="type"
    :class="buttonClasses"
    :disabled="isDisabled"
    :aria-disabled="isDisabled || undefined"
    :aria-busy="loading || undefined"
    v-bind="$attrs"
  >
    <!-- Left Icon Slot / Component -->
    <span v-if="hasLeftIcon" class="luma-button__icon luma-button__icon--left">
      <slot name="icon-left">
        <LumaIcon v-if="icon && iconPos === 'left' && typeof icon !== 'boolean'" :name="icon" />
      </slot>
    </span>

    <!-- Main Content -->
    <span v-if="!iconOnly" class="luma-button__content" :class="{ 'luma-button__content--hidden': loading }">
      <slot>Button</slot>
    </span>

    <!-- Right Icon Slot / Component -->
    <span v-if="hasRightIcon" class="luma-button__icon luma-button__icon--right">
      <slot name="icon-right">
        <LumaIcon v-if="icon && iconPos === 'right' && typeof icon !== 'boolean'" :name="icon" />
      </slot>
    </span>

    <!-- Loading Spinner Overlay -->
    <span v-if="loading" class="luma-button__spinner" aria-hidden="true">
      <svg
        class="luma-button__spinner-icon"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-dasharray="31.4 31.4"
        />
      </svg>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed, useSlots, inject } from 'vue';
import { buttonGroupInjectionKey, type LumaButtonProps } from './types';
import LumaIcon from '../../icon/Icon.vue';
import '@lumina-borealis/core/src/index.css';

defineOptions({
  name: 'LumaButton',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<LumaButtonProps>(), {
  type: 'button',
  disabled: false,
  loading: false,
  iconPos: 'left',
  iconOnly: false,
});

const groupContext = inject(buttonGroupInjectionKey, null);

const actualVariant = computed(() => props.variant ?? groupContext?.variant ?? 'primary');
const actualSize = computed(() => props.size ?? groupContext?.size ?? 'md');

const slots = useSlots();

const hasLeftIcon = computed(() => !!slots['icon-left'] || !!(props.icon && props.iconPos === 'left'));
const hasRightIcon = computed(() => !!slots['icon-right'] || !!(props.icon && props.iconPos === 'right'));

/**
 * Computed: apakah tombol harus disabled?
 * Button juga otomatis disabled saat sedang loading
 * agar user tidak bisa double-click.
 */
const isDisabled = computed(() => props.disabled || props.loading);

/**
 * Computed: menggabungkan semua class CSS
 * berdasarkan kombinasi props variant, size, dan state.
 */
const buttonClasses = computed(() => {
  return [
    'luma-button',
    `luma-button--${actualVariant.value}`,
    `luma-button--${actualSize.value}`,
    {
      'luma-button--disabled': props.disabled,
      'luma-button--loading': props.loading,
      'luma-button--icon-only': props.iconOnly,
      'luma-button--icon-left': hasLeftIcon.value,
      'luma-button--icon-right': hasRightIcon.value,
    },
  ];
});
</script>


