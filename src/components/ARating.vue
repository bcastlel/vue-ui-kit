<template>
  <div class="rating" :class="{ 'rating_readonly': readonly }">
    <button
      v-for="(button, index) in length"
      :key="index"
      class="rating__button"
      :class="{ 'rating__button_selected': (hoverValue || value) >= button }"
      :aria-label="`Rating ${button} of ${length}`"
      @mouseenter="hoverValue = button"
      @mouseleave="hoverValue = 0"
      @click="$emit('input', button)"
    >
      <star-icon class="rating__button-icon" />
      <star-half-icon
        v-if="readonly && value > button - 1 && value < button"
        class="rating__button-icon rating__button-icon_half"
      />
    </button>
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
  &__button {
    width: 36px;
    height: 36px;
    position: relative;

    &-icon {
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

    &_selected &-icon {
      fill: $secondary;
    }
  }

  &_readonly {
    pointer-events: none;
  }
}
</style>
