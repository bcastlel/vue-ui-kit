<template>
  <ol class="breadcrumbs">
    <li
      v-for="(item, index) in items"
      :key="item.text"
      class="breadcrumb"
      :class="{ 'breadcrumb_disabled': isDisabledItem(item, index) }"
    >
      <component
        :is="getItemTextComponent(item)"
        class="breadcrumb__text"
        :href="item.href"
        :to="item.to"
        :tabindex="isDisabledItem(item, index) ? -1 : undefined"
      >
        {{ item.text }}
      </component>

      <div v-if="!isLastItem(index)" class="breadcrumb__divider">
        <slot name="divider">
          {{ divider }}
        </slot>
      </div>
    </li>
  </ol>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Breadcrumb } from '@/models/breadcrumbs';

const DEFAULT_DIVIDER = '/';

export default Vue.extend({
  name: 'ABreadcrumbs',
  props: {
    items: { type: Array as PropType<Breadcrumb[]>, required: true },
    divider: { type: String, default: DEFAULT_DIVIDER },
  },
  methods: {
    getItemTextComponent(item: Breadcrumb) {
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
    isDisabledItem(item: Breadcrumb, index: number): boolean {
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
}

.breadcrumb {
  display: flex;
  align-items: center;

  &__divider {
    margin: 0 12px;
    color: $mono;

    svg {
      width: 1.15em;
      height: 1.15em;
      vertical-align: bottom;
      fill: currentColor;
    }
  }

  &_disabled &__text {
    opacity: 0.5;
    pointer-events: none;
  }
}
</style>
