<template>
  <nav aria-label="Pagination" class="luma-pagination" v-bind="$attrs">
    <!-- Prev Button -->
    <button
      class="luma-pagination__nav"
      :disabled="modelValue <= 1"
      @click="setPage(modelValue - 1)"
      aria-label="Halaman sebelumnya"
    >
      <span aria-hidden="true">&lsaquo;</span>
    </button>

    <!-- Page Numbers & Ellipsis -->
    <template v-for="(item, index) in paginationRange" :key="index">
      <!-- Ellipsis -->
      <span v-if="item === '...'" class="luma-pagination__ellipsis">
        &hellip;
      </span>
      
      <!-- Page Number -->
      <button
        v-else
        class="luma-pagination__item"
        :class="{ 'luma-pagination__item--active': item === modelValue }"
        :aria-current="item === modelValue ? 'page' : undefined"
        @click="setPage(item as number)"
      >
        {{ item }}
      </button>
    </template>

    <!-- Next Button -->
    <button
      class="luma-pagination__nav"
      :disabled="modelValue >= totalPages"
      @click="setPage(modelValue + 1)"
      aria-label="Halaman selanjutnya"
    >
      <span aria-hidden="true">&rsaquo;</span>
    </button>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import '@lumina-borealis/core/src/components/pagination.css';

defineOptions({ name: 'LumaPagination', inheritAttrs: false });

const props = withDefaults(defineProps<{
  /** Halaman aktif saat ini (1-indexed) */
  modelValue: number;
  /** Total seluruh item */
  total: number;
  /** Jumlah item per halaman */
  perPage?: number;
  /** Jumlah tombol halaman di sekitar halaman aktif */
  siblingCount?: number;
}>(), {
  perPage: 10,
  siblingCount: 1,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void;
}>();

const totalPages = computed(() => Math.ceil(props.total / props.perPage));

function setPage(page: number) {
  if (page >= 1 && page <= totalPages.value) {
    emit('update:modelValue', page);
  }
}

/**
 * Logika Ellipsis (menghasilkan array seperti [1, '...', 4, 5, 6, '...', 10])
 */
const paginationRange = computed(() => {
  const totalPageCount = totalPages.value;
  const siblingCount = props.siblingCount;
  const currentPage = props.modelValue;

  // Total pages we want to show without ellipsis:
  // 1 (first) + 1 (last) + 2 (ellipsis placeholders) + (siblingCount * 2) + 1 (current page)
  const totalPageNumbers = siblingCount + 5;

  // Case 1: Total pages less than what we want to show. Return all pages.
  if (totalPageCount <= totalPageNumbers) {
    return Array.from({ length: totalPageCount }, (_, i) => i + 1);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

  const showLeftEllipsis = leftSiblingIndex > 2;
  const showRightEllipsis = rightSiblingIndex < totalPageCount - 1;

  const firstPageIndex = 1;
  const lastPageIndex = totalPageCount;

  // Case 2: No left ellipsis, show right ellipsis
  if (!showLeftEllipsis && showRightEllipsis) {
    const leftItemCount = 3 + 2 * siblingCount;
    const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
    return [...leftRange, '...', totalPageCount];
  }

  // Case 3: Show left ellipsis, no right ellipsis
  if (showLeftEllipsis && !showRightEllipsis) {
    const rightItemCount = 3 + 2 * siblingCount;
    const rightRange = Array.from(
      { length: rightItemCount },
      (_, i) => totalPageCount - rightItemCount + i + 1
    );
    return [firstPageIndex, '...', ...rightRange];
  }

  // Case 4: Both left and right ellipsis
  if (showLeftEllipsis && showRightEllipsis) {
    const middleRange = Array.from(
      { length: rightSiblingIndex - leftSiblingIndex + 1 },
      (_, i) => leftSiblingIndex + i
    );
    return [firstPageIndex, '...', ...middleRange, '...', lastPageIndex];
  }

  return [];
});
</script>
