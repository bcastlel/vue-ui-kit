<template>
  <button
    class="button"
    :class="[
      `button_design_${design}`,
      `button_size_${size}`,
      {
        'button_reversed': reversed,
        'button_icon-only': iconOnly,
        'button_loading': loading,
      },
    ]"
    type="button"
    @click="$emit('click')"
  >
    <span v-if="$slots.icon" class="button__icon">
      <slot name="icon" />
    </span>
    <span v-if="$slots.default && !iconOnly" class="button__text">
      <slot />
    </span>

    <span v-if="loading" class="button__loader">
      <a-progress-circular class="button__loader-progress" indeterminate />
    </span>
  </button>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import AProgressCircular from '@/components/AProgressCircular.vue';

const DESIGNS = ['primary', 'secondary', 'tertiary'] as const;
type Design = typeof DESIGNS[number];
const SIZES = ['small', 'medium', 'large'] as const;
type Size = typeof SIZES[number];

export default Vue.extend({
  name: 'AButton',
  components: {
    AProgressCircular,
  },
  props: {
    design: {
      type: String as PropType<Design>,
      validator: (value: Design) => DESIGNS.includes(value),
      default: 'primary',
    },
    size: {
      type: String as PropType<Size>,
      validator: (value: Size): boolean => SIZES.includes(value),
      default: 'medium',
    },
    reversed: Boolean,
    iconOnly: Boolean,
    loading: Boolean,
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/vars';

$heights: (
  'small': 30px,
  'medium': 36px,
  'large': 42px,
);

.button {
  border-radius: 4px;
  border: 1px solid $secondary;
  padding: 0.425em 0.9125em;
  min-height: map-get($heights, 'medium');
  color: white;
  background-color: $secondary;
  user-select: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition:
    border-color 0.2s,
    color 0.1s,
    background-color 0.2s;

  $root: &;

  &:hover,
  &:focus-visible {
    border-color: $secondary-darker;
    background-color: $secondary-darker;
  }

  &_design {
    &_secondary {
      border-color: $mono;
      background-color: $mono;

      &:hover,
      &:focus-visible {
        border-color: $mono-darker;
        background-color: $mono-darker;
      }

      #{$root}__loader {
        color: $mono;
      }
    }

    &_tertiary {
      border-color: $mono;
      color: $mono;
      background-color: transparent;

      &:hover,
      &:focus-visible {
        border-color: $mono-darker;
        color: $mono-darker;
        background-color: transparent;
      }

      #{$root}__loader {
        color: $mono;
      }
    }
  }

  &_size {
    &_small {
      min-height: map-get($heights, 'small');
      font-size: 14px;
    }

    &_large {
      min-height: map-get($heights, 'large');
      font-size: 18px;
    }
  }

  &_reversed #{$root}__icon {
    order: 1;

    &:not(:only-child) {
      margin-right: 0;
      margin-left: 0.5em;
    }
  }

  &_icon-only {
    padding: 0.425em;
    width: map-get($heights, 'medium');

    &#{$root}_size {
      &_small {
        width: map-get($heights, 'small');
      }

      &_large {
        width: map-get($heights, 'large');
      }
    }
  }

  &_loading {
    pointer-events: none;
    background-color: white;
  }

  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
  }

  &__icon {
    width: 1em;
    height: 1em;
    flex-shrink: 0;

    &:not(:only-child) {
      margin-right: 0.5em;
    }

    svg {
      width: 100%;
      max-height: 100%;
      fill: currentColor;
    }
  }

  &__loader {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: $secondary;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    &-progress {
      width: calc(1em + 4px);
      height: calc(1em + 4px);
      color: currentColor;
    }
  }
}
</style>
