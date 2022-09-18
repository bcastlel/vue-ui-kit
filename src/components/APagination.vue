<template>
  <div class="pagination-wrapper">
    <nav
      class="pagination"
      :class="{ 'pagination_disabled': disabled }"
      aria-label="Pagination"
    >
      <button
        class="pagination__arrow"
        type="button"
        :disabled="value === 1 || disabled"
        aria-label="Previous page"
        @click="$emit('input', value - 1)"
      >
        <slot name="prevIcon">
          <chevron-left-icon />
        </slot>
      </button>

      <component
        :is="page ? 'button' : 'span'"
        v-for="(page, index) in pages"
        :key="index"
        class="pagination__item"
        :class="{
          'pagination__item_active': page === value,
          'pagination__item_blank': !page,
        }"
        :type="page ? 'button' : undefined"
        :disabled="page ? disabled : undefined"
        :aria-label="getItemAriaLabel(page)"
        @click="page ? $emit('input', page) : ''"
      >
        {{ page ?? '&hellip;' }}
      </component>

      <button
        class="pagination__arrow"
        type="button"
        :disabled="value === length || disabled"
        aria-label="Next page"
        @click="$emit('input', value + 1)"
      >
        <slot name="nextIcon">
          <chevron-right-icon />
        </slot>
      </button>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ChevronLeftIcon from '@/assets/chevron-left.svg';
import ChevronRightIcon from '@/assets/chevron-right.svg';

const MIN_TOTAL_VISIBLE = 7;

type Page = number | null;

export default Vue.extend({
  name: 'APagination',
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
  },
  props: {
    value: {
      type: Number,
      validator: (value: number) => Number.isInteger(value),
      default: 0,
    },
    length: {
      type: Number,
      validator: (value: number) => Number.isInteger(value) && value > 0,
      required: true,
    },
    totalVisible: {
      type: Number,
      validator: (value: number) => Number.isInteger(value) && value >= MIN_TOTAL_VISIBLE,
      default: MIN_TOTAL_VISIBLE,
    },
    disabled: Boolean,
  },
  computed: {
    pages(): Page[] {
      const EDGE_PAGE_COUNT = 2;

      if (this.length <= this.totalVisible) {
        return this.getPagesByRange(1, this.length);
      }

      const lastVisibleLeftPageByDefault = this.totalVisible - EDGE_PAGE_COUNT;
      const firstVisibleRightPageByDefault = this.length - lastVisibleLeftPageByDefault + 1;

      if (this.value < lastVisibleLeftPageByDefault) {
        return [...this.getPagesByRange(1, lastVisibleLeftPageByDefault), null, this.length];
      }

      if (this.value > firstVisibleRightPageByDefault) {
        return [1, null, ...this.getPagesByRange(firstVisibleRightPageByDefault, this.length)];
      }

      const centeredPageCountWithoutCurrent = this.totalVisible - EDGE_PAGE_COUNT * 2 - 1;
      const centeredLeftPageCount = Math.ceil(centeredPageCountWithoutCurrent / 2);

      const firstCenteredLeftPage = this.value - centeredLeftPageCount;
      const lastCenteredRightPage = this.value + centeredPageCountWithoutCurrent - centeredLeftPageCount;

      return [
        1,
        null,
        ...this.getPagesByRange(firstCenteredLeftPage, this.value),
        ...this.getPagesByRange(this.value + 1, lastCenteredRightPage),
        null,
        this.length,
      ];
    },
  },
  methods: {
    getPagesByRange(from: number, to: number): Page[] {
      const pages: Page[] = [];

      for (let page = from; page <= to; page++) {
        pages.push(page);
      }

      return pages;
    },
    getItemAriaLabel(page: Page): string | undefined {
      if (!page) {
        return undefined;
      }

      return page === this.value
        ? `Current page, page ${page}`
        : `Go to page ${page}`;
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/vars';

$item-margin: 12px;
$item-size: 36px;

.pagination {
  margin-bottom: -#{$item-margin};
  margin-right: -#{$item-margin};

  &_disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &__arrow,
  &__item {
    margin-bottom: $item-margin;
    margin-right: $item-margin;
    border-radius: 4px;
    border: 1px solid $mono-lightest;
    padding: 0 6px;
    height: $item-size;
    vertical-align: bottom;
    color: $primary;
    transition: border-color 0.2s;

    &:hover,
    &:focus-visible {
      border-color: $secondary;
    }
  }

  // stylelint-disable-next-line no-descending-specificity
  &__item {
    min-width: $item-size;

    &_active {
      border-color: $secondary;
      color: white;
      background-color: $secondary;
    }

    &_blank {
      border: none;
      display: inline-flex;
      justify-content: center;
      align-items: flex-end;
    }
  }

  // stylelint-disable-next-line no-descending-specificity
  &__arrow {
    width: $item-size;
    display: inline-flex;
    align-items: center;

    &[disabled] {
      opacity: 0.5;
    }

    svg {
      width: 100%;
      max-height: 100%;
      fill: currentColor;
    }
  }
}
</style>
