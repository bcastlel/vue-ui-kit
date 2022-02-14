<template>
  <ul class="breadcrumbs">
    <li
      v-for="(item, index) in items"
      :key="item.text"
      class="breadcrumbs__item"
    >
      <router-link
        class="breadcrumbs__link"
        :class="{ 'breadcrumbs__link_disabled': isLastItem(index) }"
        :to="item.to"
        :tabindex="isLastItem(index) ? -1 : undefined"
      >
        {{ item.text }}
      </router-link>

      <div v-if="!isLastItem(index)" class="breadcrumbs__divider">
        <slot name="divider">
          {{ divider }}
        </slot>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { BreadcrumbsItem } from '@/models/breadcrumbs';

export default Vue.extend({
  name: 'AppBreadcrumbs',
  props: {
    items: { type: Array as PropType<BreadcrumbsItem[]>, required: true },
    divider: { type: String, default: '/' },
  },
  methods: {
    isLastItem(index: number): boolean {
      return index === this.items.length - 1;
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/vars';

.breadcrumbs {
  padding: 6px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  &__item {
    font-size: 14px;
    display: flex;
    align-items: center;
  }

  &__link_disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &__divider {
    margin: 0 12px;
    color: $mono;

    svg {
      width: 16px;
      height: 16px;
      vertical-align: middle;
      fill: $mono;
    }
  }
}
</style>
