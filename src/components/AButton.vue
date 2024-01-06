<template>
  <component
    :is="tag"
    v-bind="mergedAttrs"
    class="button"
    :class="classes"
    :tabindex="loading ? -1 : 0"
    @click="$emit('click')"
  >
    <span v-if="$slots.icon" class="button__icon-wrapper">
      <slot name="icon" />
    </span>
    <span v-if="hasText" class="button__text">
      <slot />
    </span>

    <span v-if="loading" class="button__loader-wrapper">
      <a-progress-circular class="button__loader" indeterminate />
    </span>
  </component>
</template>

<script lang="ts">
import Vue, { VNodeData, PropType } from 'vue';
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
  inheritAttrs: false,
  props: {
    design: {
      type: String as PropType<Design>,
      validator: (value: Design) => DESIGNS.includes(value),
      default: 'primary',
    },
    size: {
      type: String as PropType<Size>,
      validator: (value: Size) => SIZES.includes(value),
      default: 'medium',
    },
    tag: { type: String, default: 'button' },
    outlined: Boolean,
    plain: Boolean,
    reversed: Boolean,
    loading: Boolean,
  },
  computed: {
    mergedAttrs(): VNodeData['attrs'] {
      return {
        type: this.tag === 'button' ? 'button' : undefined,
        ...this.$attrs,
      };
    },
    hasText(): boolean {
      return Boolean(this.$slots.default);
    },
    classes(): VNodeData['class'] {
      return [
        `button_design_${this.design}`,
        `button_size_${this.size}`,
        {
          button_transparent: this.outlined || this.plain,
          button_outlined: this.outlined,
          button_plain: this.plain,
          button_reversed: this.reversed,
          'button_has-no-text': !this.hasText,
          button_loading: this.loading,
        },
      ];
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/vars';

$padding-x: 0.9125em;
$sizes: (
  'small': 30px,
  'medium': 36px,
  'large': 42px,
);
$icon-margin: 0.5em;
$loader-size: calc(1em + 4px);

.button {
  border-radius: 4px;
  border: 1px solid $secondary;
  padding: 0.425em $padding-x;
  min-width: map-get($sizes, 'medium');
  min-height: map-get($sizes, 'medium');
  color: white;
  background-color: $secondary;
  user-select: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
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

  &_size {
    &_small {
      min-width: map-get($sizes, 'small');
      min-height: map-get($sizes, 'small');
      font-size: 14px;
    }

    &_large {
      min-width: map-get($sizes, 'large');
      min-height: map-get($sizes, 'large');
      font-size: 18px;
    }
  }

  &[disabled] {
    opacity: 0.5;
  }

  &__icon-wrapper {
    margin-right: $icon-margin;
    width: 1em;
    height: 1em;
    flex-shrink: 0;

    svg {
      width: 100%;
      max-height: 100%;
      fill: currentColor;
    }
  }

  &__loader {
    &-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    width: $loader-size;
    height: $loader-size;
    color: inherit;
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
    }

    &_tertiary {
      border-color: $mono-lightest;
      color: $primary;
      background-color: $mono-lightest;

      &:hover,
      &:focus-visible {
        border-color: darken($mono-lightest, 7.5%);
        background-color: darken($mono-lightest, 7.5%);
      }
    }
  }

  &_transparent {
    color: $secondary;
    background-color: transparent;

    &:hover,
    &:focus-visible {
      color: $secondary-darker;
      background-color: transparent;
    }

    &#{$root}_design {
      &_secondary {
        color: $mono;

        &:hover,
        &:focus-visible {
          color: $mono-darker;
        }
      }

      &_tertiary {
        color: $primary;

        &:hover,
        &:focus-visible {
          color: $primary-darker;
        }
      }
    }
  }

  &_loading {
    pointer-events: none;

    > :not(#{$root}__loader-wrapper) {
      opacity: 0;
    }
  }

  &_reversed &__icon-wrapper {
    margin-right: 0;
    margin-left: $icon-margin;
    order: 1;
  }

  &_has-no-text &__icon-wrapper {
    margin: 0 -#{$padding-x};
  }

  &_plain {
    border-radius: 0;
    border: none;
    padding: 0;
    min-width: $loader-size;
    min-height: $loader-size;
  }
}
</style>
