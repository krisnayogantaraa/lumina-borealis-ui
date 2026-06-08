<template>
  <component :is="tag" :class="headingClasses" v-bind="$attrs">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { TextAlign } from '../types';
import '@lumina-borealis/core/src/components/heading.css';

defineOptions({ name: 'LumaHeading', inheritAttrs: false });

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

const props = withDefaults(defineProps<{
  /** Level visual (1 = paling besar, 6 = paling kecil). */
  level?: HeadingLevel;
  /** Tag HTML yang akan dirender. Default-nya mengikuti level (h1-h6). */
  as?: string;
  /** Perataan teks. */
  align?: TextAlign;
}>(), {
  level: 2,
});

/** Tag HTML yang akan dirender — default ke `h{level}`. */
const tag = computed(() => props.as ?? `h${props.level}`);

const headingClasses = computed(() => [
  'luma-heading',
  `luma-heading--level-${props.level}`,
  props.align ? `luma-heading--align-${props.align}` : '',
]);
</script>
