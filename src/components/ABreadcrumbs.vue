<template>
  <ul class="breadcrumbs">
    <li
      v-for="(item, index) in items"
      :key="item.text"
      class="breadcrumbs__item"
      :class="{ 'breadcrumbs__item_disabled': isDisabledItem(item, index) }"
    >
      <component
        :is="getItemTextComponent(item)"
        class="breadcrumbs__item-text"
        :href="item.href"
        :to="item.to"
        :tabindex="isDisabledItem(item, index) ? -1 : undefined"
      >
        {{ item.text }}
      </component>

      <div v-if="!isLastItem(index)" class="breadcrumbs__item-divider">
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

const DEFAULT_DIVIDER = '/';

export default Vue.extend({
  name: 'ABreadcrumbs',
  props: {
    items: { type: Array as PropType<BreadcrumbsItem[]>, required: true },
    divider: { type: String, default: DEFAULT_DIVIDER },
  },
  methods: {
    getItemTextComponent(item: BreadcrumbsItem) {
      if (item.to) {
        return 'router-link';
      }

      if (item.href) {
        return 'a';
      }

      return 'div';
    },
    isLastItem(index: number): boolean {
      return index === this.items.length - 1;
    },
    isDisabledItem(item: BreadcrumbsItem, index: number): boolean {
      return item.disabled ?? this.isLastItem(index);
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/vars';

.breadcrumbs {
  padding: 6px 0;
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  &__item {
    display: flex;
    align-items: center;

    &-divider {
      margin: 0 12px;
      color: $mono;

      svg {
        width: 1.15em;
        height: 1.15em;
        vertical-align: bottom;
        fill: currentColor;
      }
    }

    &_disabled &-text {
      opacity: 0.5;
      pointer-events: none;
    }
  }
}
</style>
