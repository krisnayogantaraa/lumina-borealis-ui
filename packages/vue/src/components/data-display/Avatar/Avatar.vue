<template>
  <div :class="avatarClasses">
    <img
      v-if="src && !hasError"
      :src="src"
      :alt="alt || name || 'avatar'"
      class="luma-avatar__image"
      @error="handleError"
    />
    <span v-else class="luma-avatar__fallback">
      {{ initials || '?' }}
    </span>

    <span
      v-if="status"
      :class="['luma-avatar__badge', `luma-avatar__badge--${status}`]"
      :aria-label="`Status: ${status}`"
      :title="`Status: ${status}`"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { LumaAvatarProps } from './types';
import '@lumina-borealis/core/src/components/avatar.css';

defineOptions({
  name: 'LumaAvatar',
});

const props = withDefaults(defineProps<LumaAvatarProps>(), {
  alt: '',
  size: 'md',
  shape: 'circle',
});

const hasError = ref(false);

const handleError = () => {
  hasError.value = true;
};

const initials = computed(() => {
  if (!props.name) return '';
  const parts = props.name.trim().split(/\s+/);
  if (parts.length === 0) return '';
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
});

const avatarClasses = computed(() => {
  return [
    'luma-avatar',
    `luma-avatar--size-${props.size}`,
    `luma-avatar--shape-${props.shape}`,
  ];
});
</script>
