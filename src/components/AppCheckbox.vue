<template>
  <label
    class="checkbox"
    :class="{
      'checkbox_checked': isChecked,
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

    <span v-if="$slots.default || label" class="checkbox__label">
      <slot v-if="$slots.default" />
      <template v-else>{{ label }}</template>
    </span>
  </label>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import CheckIcon from '@/assets/check.svg';
import MinusIcon from '@/assets/minus.svg';

type Value = string | number;

export default Vue.extend({
  name: 'AppCheckbox',
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
      type: [Boolean, Array] as PropType<boolean | Value[]>,
      required: true,
    },
    label: { type: String, default: '' },
    value: { type: [String, Number], default: '' },
    disabled: { type: Boolean, default: false },
    indeterminate: { type: Boolean, default: false },
  },
  computed: {
    localChecked: {
      get(): boolean | Value[] {
        return this.checked;
      },
      set(checked: boolean | Value[]) {
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
    isChecked(): boolean {
      if (Array.isArray(this.localChecked)) {
        return this.localChecked.includes(this.value);
      }

      return this.localChecked;
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

  &:hover,
  &:focus-within {
    &:not(#{$root}_checked):not(#{$root}_indeterminate) #{$root}__control {
      border-color: $primary;
    }
  }

  &_checked {
    #{$root}__control {
      border-color: $primary;
      background-color: $primary;

      &-icon {
        opacity: 0;

        &_checked {
          opacity: 1;
        }
      }
    }
  }

  &_indeterminate {
    #{$root}__control {
      border-color: $mono;
      background-color: $mono;

      &-icon {
        opacity: 0;

        &_indeterminate {
          opacity: 1;
        }
      }
    }
  }

  &_disabled {
    opacity: 0.5;
    cursor: default;
    pointer-events: none;
  }

  &__input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  &__control {
    border-radius: 2px;
    border: 2px solid #CCC;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    position: relative;
    transition-property: background-color, border-color;
    transition-duration: .2s;

    &-icon {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      fill: white;
      transition: opacity .2s;
    }
  }

  &__label {
    margin-left: 10px;
  }
}
</style>
