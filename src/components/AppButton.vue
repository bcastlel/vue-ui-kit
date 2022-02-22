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
  >
    <span v-if="$slots.icon" class="button__icon">
      <slot name="icon" />
    </span>
    <span v-if="$slots.default && !iconOnly" class="button__text">
      <slot />
    </span>

    <span v-if="loading" class="button__loader">...</span>
  </button>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

type Design = 'primary' | 'secondary' | 'tertiary';
type Size = 'small' | 'medium' | 'large';

export default Vue.extend({
  name: 'AppButton',
  props: {
    design: { type: String as PropType<Design>, default: 'primary' },
    size: { type: String as PropType<Size>, default: 'medium' },
    reversed: { type: Boolean, default: false },
    iconOnly: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
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
  border: 1px solid $primary;
  padding: 0.425em 0.9125em;
  min-height: map-get($heights, 'medium');
  line-height: normal;
  color: white;
  background-color: $primary;
  user-select: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition:
    border-color .2s,
    color .1s,
    background-color .2s;

  $root: &;

  &:hover,
  &:focus-visible {
    border-color: $primary-darker;
    background-color: $primary-darker;
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
      border-color: $primary;
      color: $primary;
      background-color: transparent;

      &:hover,
      &:focus-visible {
        border-color: $primary-darker;
        color: $primary-darker;
        background-color: transparent;

        #{$root}__icon svg {
          fill: $primary-darker;
        }
      }

      #{$root}__icon svg {
        fill: $primary;
      }

      #{$root}__loader {
        margin: 1px;
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
  }

  &[disabled] {
    opacity: .5;
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
      height: 100%;
      fill: white;
      transition: fill .1s;
    }
  }

  &__loader {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: $primary;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
