<template>
  <div class="luma-stat">
    <span class="luma-stat__label">{{ label }}</span>
    <span class="luma-stat__value">{{ value }}</span>
    <span v-if="helpText || trend || $slots.helpText" class="luma-stat__help-text">
      <span
        v-if="trend"
        :class="['luma-stat__trend', `luma-stat__trend--${trend}`]"
      >
        <svg
          v-if="trend === 'up'"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <svg
          v-else
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
        {{ trendValue }}
      </span>
      <slot name="helpText">{{ helpText }}</slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import type { LumaStatisticProps } from './types';
import '@lumina-borealis/core/src/components/statistic.css';

defineOptions({
  name: 'LumaStatistic',
});

defineProps<LumaStatisticProps>();
</script>
