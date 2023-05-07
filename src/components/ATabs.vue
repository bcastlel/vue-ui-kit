<template>
  <div class="tabs-wrapper">
    <ul class="tabs" :class="{ 'tabs_boxed': boxed }">
      <li
        v-for="item in items"
        :key="item.id"
        class="tab"
        :class="{
          'tab_active': item.id === value,
          'tab_disabled': item.disabled,
          'tab_boxed': boxed,
        }"
      >
        <button
          class="tab__content"
          :disabled="item.disabled"
          @click="$emit('input', item.id)"
        >
          <component :is="item.icon" class="tab__icon" />

          <span class="tab__text">{{ item.text }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Tab } from '@/models/tabs';

export default Vue.extend({
  name: 'ATabs',
  props: {
    items: { type: Array as PropType<Tab[]>, required: true },
    value: { type: [String, Number], required: true },
    boxed: Boolean,
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/vars';

.tabs {
  display: inline-flex;
  flex-wrap: wrap;

  &_boxed {
    margin-bottom: 1px;
    margin-left: 1px;
  }
}

.tab {
  $root: &;

  &__content {
    border-bottom: 1px solid $mono-lightest;
    padding: 6px 16px;
    height: 40px;
    color: $primary;
    display: flex;
    align-items: center;
    transition-property: border-color, color, background-color;
    transition-duration: 0.2s;

    &:hover,
    &:focus-visible {
      color: $secondary;
    }
  }

  &__icon {
    margin-right: 6px;
    width: 24px;
    fill: currentColor;
  }

  &_active &__content {
    border-color: $secondary;
    color: $secondary;
  }

  &_disabled &__content {
    color: $mono-lightest;
  }

  &_boxed {
    #{$root}__content {
      margin-bottom: -1px;
      margin-left: -1px;
      border: 1px solid $mono-lightest;

      &:hover,
      &:focus-visible {
        color: $primary;
        background-color: rgba($mono-lightest, 0.2);
      }
    }

    &#{$root}_active #{$root}__content {
      &:hover,
      &:focus-visible {
        color: $secondary;
        background-color: rgba($secondary, 0.075);
      }
    }
  }
}
</style>
