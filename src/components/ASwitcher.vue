<template>
  <label class="switcher" :class="{ 'switcher_disabled': disabled }">
    <input
      v-model="localChecked"
      v-bind="$attrs"
      class="switcher__input"
      type="checkbox"
      :value="value"
      :disabled="disabled"
    >
    <span class="switcher__control" />

    <span v-if="$slots.default ?? label" class="switcher__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { CheckboxValue, CheckboxChecked } from '@/models/checkbox';

export default Vue.extend({
  name: 'ASwitcher',
  inheritAttrs: false,
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
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/vars';

$circle-margin: 4px;
$circle-size: 18px;

.switcher {
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
    border-radius: 16px;
    width: $circle-size * 2 + $circle-margin * 2;
    height: $circle-size + $circle-margin * 2;
    flex-shrink: 0;
    background-color: $grey;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;

    // circle
    &::before {
      content: '';
      margin-left: $circle-margin;
      border-radius: 50%;
      width: $circle-size;
      height: $circle-size;
      background-color: white;
      will-change: transform;
      transition: transform 0.2s;
    }
  }

  &__input {
    position: absolute;
    z-index: -1;
    opacity: 0;

    &:checked + #{$root}__control {
      background-color: $secondary;

      &::before {
        transform: translateX(100%);
      }
    }
  }

  &__label {
    margin-left: 10px;
  }

  &:hover,
  &:focus-within {
    #{$root}__control {
      background-color: darken($grey, 7.5%);
    }

    #{$root}__input:checked + #{$root}__control {
      background-color: $secondary-slightly-darker;
    }
  }
}
</style>
