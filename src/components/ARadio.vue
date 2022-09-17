<template>
  <label class="radio" :class="{ 'radio_disabled': disabled }">
    <input
      v-model="localChecked"
      class="radio__input"
      type="radio"
      :value="value"
      :disabled="disabled"
    >
    <span class="radio__control" />

    <span v-if="$slots.default ?? label" class="radio__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ARadio',
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    /* eslint-disable vue/require-default-prop */
    checked: null as any,
    value: null as any,
    /* eslint-enable vue/require-default-prop */
    label: { type: String, default: '' },
    disabled: Boolean,
  },
  computed: {
    localChecked: {
      get(): any {
        return this.checked;
      },
      set(checked: any) {
        this.$emit('change', checked);
      },
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/vars';

.radio {
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
    border-radius: 50%;
    border: 2px solid $grey;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    position: relative;
    transition: border-color 0.2s;

    // circle
    &::before {
      content: '';
      // in this case translate(-50%, -50%) doesn`t center on all resolutions
      margin-top: -10px;
      margin-left: -10px;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: scale(0);
      background-color: $secondary;
      will-change: transform;
      transition: transform 0.2s;
    }
  }

  &:hover,
  &:focus-within {
    #{$root}__control {
      border-color: $secondary;
    }
  }

  &__input {
    position: absolute;
    z-index: -1;
    opacity: 0;

    &:checked + #{$root}__control {
      border-color: $secondary;

      &::before {
        transform: scale(0.5);
      }
    }
  }

  &__label {
    margin-left: 10px;
  }
}
</style>
