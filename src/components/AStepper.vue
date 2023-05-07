<template>
  <ol class="stepper" :class="{ 'stepper_vertical': vertical }">
    <li
      v-for="(item, index) in items"
      :key="item.id"
      class="step"
      :class="{
        'step_active': item.id === value,
        'step_disabled': isDisabledItem(item, index),
        'step_filled': item.filled,
        'step_vertical': vertical,
      }"
    >
      <div
        class="step__content"
        :tabindex="isDisabledItem(item, index) ? -1 : 0"
        role="button"
        @click="$emit('input', item.id)"
        @keydown.enter="$emit('input', item.id)"
      >
        <div class="step__number">
          {{ index + 1 }}
        </div>

        <div class="step__text">
          {{ item.text }}
        </div>
      </div>
    </li>
  </ol>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Step } from '@/models/stepper';

export default Vue.extend({
  name: 'AStepper',
  props: {
    items: { type: Array as PropType<Step[]>, required: true },
    value: { type: [String, Number], required: true },
    nonLinear: Boolean,
    vertical: Boolean,
  },
  methods: {
    isDisabledItem(item: Step, index: number): boolean {
      const previousNonDisabledItem = this.items.slice(0, index).reverse()
        .find(({ disabled }) => !disabled);

      return item.disabled ?? !(this.nonLinear || previousNonDisabledItem?.filled || item.filled
        || item.id === this.value);
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/vars';

.stepper {
  display: flex;
  flex-wrap: wrap;

  &_vertical {
    flex-direction: column;
  }
}

.step {
  display: flex;
  align-items: center;

  $root: &;

  &:not(:last-child)::after {
    content: '';
    margin-left: 12px;
    margin-right: 12px;
    width: 27px;
    flex-shrink: 0;
    height: 1px;
    background-color: $mono-lightest;
  }

  &__number {
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

  &__text {
    transition: color 0.1s;
  }

  &_active &__number {
    border-color: $secondary;
  }

  &_disabled {
    #{$root}__content {
      pointer-events: none;
    }

    #{$root}__number,
    #{$root}__text {
      color: $mono-lightest;
    }
  }

  &__content {
    height: 34px;
    user-select: none;
    display: flex;
    align-items: center;

    &:hover,
    &:focus-visible {
      #{$root}__text {
        color: $secondary;
      }
    }
  }

  &_filled {
    #{$root}__number {
      background-color: $mono-lightest;
    }

    &#{$root}_active #{$root}__number,
    &#{$root}_disabled #{$root}__number {
      color: white;
    }

    &#{$root}_active #{$root}__number {
      background-color: $secondary;
    }
  }

  &_vertical {
    flex-direction: column;
    align-items: flex-start;

    &:not(:last-child)::after {
      margin: 12px 0 12px 13px;
      width: 1px;
      height: 27px;
    }
  }
}
</style>
