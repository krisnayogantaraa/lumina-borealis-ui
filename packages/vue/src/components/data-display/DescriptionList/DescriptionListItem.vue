<template>
  <div class="luma-description-list__item">
    <dt class="luma-description-list__term">
      <slot name="term">{{ term }}</slot>
    </dt>
    <dd class="luma-description-list__details">
      <slot name="details">{{ details }}</slot>
      <slot v-if="!$slots.details" />
    </dd>
  </div>
</template>

<script setup lang="ts">
import type { LumaDescriptionListItemProps } from './types';

defineOptions({
  name: 'LumaDescriptionListItem',
});

defineProps<LumaDescriptionListItemProps>();
</script>
