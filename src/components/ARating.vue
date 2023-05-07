<template>
  <div class="rating">
    <button
      v-for="(button, index) in length"
      :key="index"
      class="star-button"
      :class="{ 'star-button_selected': (hoverValue || value) >= button }"
      :disabled="readonly"
      :aria-label="`Rating ${button} of ${length}`"
      @mouseenter="hoverValue = button"
      @mouseleave="hoverValue = 0"
      @click="$emit('input', button)"
    >
      <star-icon class="star-button__icon" />
      <star-half-icon
        v-if="readonly && value > button - 1 && value < button"
        class="star-button__icon star-button__icon_half"
      />
    </button>

    <span v-if="$slots.default ?? text" class="rating__text">
      <slot>{{ text }}</slot>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import StarIcon from '@/assets/star.svg';
import StarHalfIcon from '@/assets/star-half.svg';

const DEFAULT_LENGTH = 5;

interface Data {
  hoverValue: number;
}

export default Vue.extend({
  name: 'ARating',
  components: {
    StarIcon,
    StarHalfIcon,
  },
  props: {
    value: { type: Number, default: 0 },
    length: {
      type: Number,
      validator: (value: number) => Number.isInteger(value) && value > 0,
      default: DEFAULT_LENGTH,
    },
    text: { type: String, default: '' },
    readonly: Boolean,
  },
  data(): Data {
    return {
      hoverValue: 0,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/vars';

.rating {
  display: flex;
  align-items: center;

  &__text {
    margin-left: 8px;
  }
}

.star-button {
  width: 36px;
  height: 36px;
  position: relative;

  &__icon {
    width: 100%;
    max-height: 100%;
    fill: $grey;
    transition: fill 0.1s;

    &_half {
      position: absolute;
      left: 0;
      fill: $secondary;
    }
  }

  &_selected &__icon {
    fill: $secondary;
  }
}
</style>
