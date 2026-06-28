<template>
  <div class="luma-timeline-item">
    <div class="luma-timeline-item__separator">
      <span :class="['luma-timeline-item__dot', `luma-timeline-item__dot--${dotColor}`]" />
      <span class="luma-timeline-item__line" />
    </div>
    <div class="luma-timeline-item__content">
      <h4 v-if="title || $slots.title" class="luma-timeline-item__title">
        <slot name="title">{{ title }}</slot>
      </h4>
      <p v-if="description || $slots.description" class="luma-timeline-item__description">
        <slot name="description">{{ description }}</slot>
      </p>
      <div v-if="time || $slots.time" class="luma-timeline-item__time">
        <slot name="time">{{ time }}</slot>
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LumaTimelineItemProps } from './types';

defineOptions({
  name: 'LumaTimelineItem',
});

withDefaults(defineProps<LumaTimelineItemProps>(), {
  dotColor: 'neutral',
});
</script>
