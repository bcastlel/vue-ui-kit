<template>
  <ul class="tabs">
    <li
      v-for="item in items"
      :key="item.id"
      class="tabs__item"
      :class="{
        'tabs__item_active': item.id === value,
        'tabs__item_disabled': item.disabled,
      }"
    >
      <button
        class="tabs__item-content"
        :disabled="item.disabled"
        @click="$emit('input', item.id)"
      >
        <component :is="item.icon" class="tabs__item-icon" />

        <span class="tabs__item-text">{{ item.text }}</span>
      </button>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Tab } from '@/models/tabs';

export default Vue.extend({
  name: 'ATabs',
  props: {
    items: { type: Array as PropType<Tab[]>, required: true },
    value: { type: [String, Number], required: true },
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/vars';

.tabs {
  display: inline-flex;
  flex-wrap: wrap;

  &__item {
    &-content {
      border-bottom: 1px solid $mono-lightest;
      padding: 6px 16px;
      height: 40px;
      color: $primary;
      display: flex;
      align-items: center;
      transition-property: border-color, color;
      transition-duration: 0.2s;

      &:hover,
      &:focus-visible {
        color: $secondary;
      }
    }

    &-icon {
      margin-right: 6px;
      width: 24px;
      fill: currentColor;
    }

    &_active &-content {
      color: $secondary;
      border-color: $secondary;
    }

    &_disabled &-content {
      color: $mono-lightest;
    }
  }
}
</style>
