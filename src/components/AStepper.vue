<template>
  <ul class="stepper" :class="{ 'stepper_vertical': vertical }">
    <li
      v-for="(item, index) in items"
      :key="item.id"
      class="stepper__item"
      :class="{
        'stepper__item_active': item.id === activeItemId,
        'stepper__item_disabled': isDisabledItem(item, index),
        'stepper__item_filled': item.filled,
      }"
    >
      <div
        class="stepper__item-content"
        :tabindex="isDisabledItem(item, index) ? -1 : 0"
        role="button"
        @click="$emit('update:activeItemId', item.id)"
        @keydown.enter="$emit('update:activeItemId', item.id)"
      >
        <div class="stepper__item-number">
          {{ index + 1 }}
        </div>

        <div class="stepper__item-text">
          {{ item.text }}
        </div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Step } from '@/models/stepper';

export default Vue.extend({
  name: 'AStepper',
  props: {
    items: { type: Array as PropType<Step[]>, required: true },
    activeItemId: { type: [String, Number], required: true },
    nonLinear: Boolean,
    vertical: Boolean,
  },
  methods: {
    isDisabledItem(item: Step, index: number): boolean {
      const previousNonDisabledItem = this.items.slice(0, index).reverse()
        .find(({ disabled }) => !disabled);

      return item.disabled ?? !(this.nonLinear || previousNonDisabledItem?.filled || item.filled
        || item.id === this.activeItemId);
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/vars';

.stepper {
  display: flex;

  $root: &;

  &__item {
    display: flex;
    align-items: center;

    $self: &;

    &:not(:last-child)::after {
      content: '';
      margin-left: 12px;
      margin-right: 12px;
      width: 27px;
      flex-shrink: 0;
      height: 1px;
      background-color: $mono-lightest;
    }

    &-number {
      margin-right: 9px;
      border-radius: 50%;
      border: 2px solid $mono-lightest;
      width: 27px;
      flex-shrink: 0;
      height: 27px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: border-color 0.2s, color 0.1s, background-color 0.2s;
    }

    &-text {
      transition: color 0.1s;
    }

    &_active &-number {
      border-color: $secondary;
    }

    &_disabled {
      #{$self}-content {
        pointer-events: none;
      }

      #{$self}-number,
      #{$self}-text {
        color: $mono-lightest;
      }
    }

    &-content {
      user-select: none;
      display: flex;
      align-items: center;

      &:hover,
      &:focus-visible {
        #{$root}__item-text {
          color: $secondary;
        }
      }
    }

    &_filled {
      #{$self}-number {
        background-color: $mono-lightest;
      }

      &#{$self}_active #{$self}-number,
      &#{$self}_disabled #{$self}-number {
        color: white;
      }

      &#{$self}_active #{$self}-number {
        background-color: $secondary;
      }
    }
  }

  &_vertical {
    &,
    #{$root}__item {
      flex-direction: column;
    }

    #{$root}__item {
      align-items: flex-start;

      &:not(:last-child)::after {
        margin: 12px 0 12px 13px;
        width: 1px;
        height: 27px;
      }
    }
  }
}
</style>
