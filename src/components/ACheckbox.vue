<template>
  <label
    class="checkbox"
    :class="{
      'checkbox_disabled': disabled,
      'checkbox_indeterminate': localIndeterminate,
    }"
  >
    <input
      v-model="localChecked"
      class="checkbox__input"
      type="checkbox"
      :value="value"
      :disabled="disabled"
    >
    <span class="checkbox__control">
      <check-icon class="checkbox__control-icon checkbox__control-icon_checked" />
      <minus-icon class="checkbox__control-icon checkbox__control-icon_indeterminate" />
    </span>

    <span v-if="$slots.default ?? label" class="checkbox__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import CheckIcon from '@/assets/check.svg';
import MinusIcon from '@/assets/minus.svg';
import { CheckboxValue, CheckboxChecked } from '@/models/checkbox';

export default Vue.extend({
  name: 'ACheckbox',
  components: {
    CheckIcon,
    MinusIcon,
  },
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: {
      type: [Boolean, Array] as PropType<CheckboxChecked>,
      default: false,
    },
    // eslint-disable-next-line vue/require-default-prop
    value: null as CheckboxValue,
    label: { type: String, default: '' },
    disabled: Boolean,
    indeterminate: Boolean,
  },
  computed: {
    localChecked: {
      get(): CheckboxChecked {
        return this.checked;
      },
      set(checked: CheckboxChecked) {
        this.$emit('change', checked);
      },
    },
    localIndeterminate: {
      get(): boolean {
        return this.indeterminate;
      },
      set(indeterminate: boolean) {
        this.$emit('update:indeterminate', indeterminate);
      },
    },
  },
  watch: {
    localChecked(): void {
      if (this.localIndeterminate) {
        this.localIndeterminate = false;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/vars';

.checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  $root: &;

  &_disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &__control {
    border-radius: 2px;
    border: 2px solid $grey;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    position: relative;
    transition-property: background-color, border-color;
    transition-duration: 0.2s;

    &-icon {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      fill: white;
      transition: opacity 0.2s;
    }
  }

  &__input {
    position: absolute;
    z-index: -1;
    opacity: 0;

    &:checked + #{$root}__control {
      border-color: $secondary;
      background-color: $secondary;

      #{$root}__control-icon {
        opacity: 0;

        &_checked {
          opacity: 1;
        }
      }
    }
  }

  &__label {
    margin-left: 10px;
  }

  &:hover,
  &:focus-within {
    #{$root}__control {
      border-color: $secondary;
    }

    #{$root}__input:checked + #{$root}__control {
      border-color: darken($secondary, 7.5%);
      background-color: darken($secondary, 7.5%);
    }
  }

  &_indeterminate {
    #{$root}__input + #{$root}__control {
      border-color: $mono;
      background-color: $mono;

      #{$root}__control-icon {
        opacity: 0;

        &_indeterminate {
          opacity: 1;
        }
      }
    }

    &:hover,
    &:focus-within {
      #{$root}__input + #{$root}__control {
        border-color: darken($mono, 7.5%);
        background-color: darken($mono, 7.5%);
      }
    }
  }
}
</style>
