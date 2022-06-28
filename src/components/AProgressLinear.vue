<script lang="ts">
import Vue, { VNode } from 'vue';

const MIN_VALUE = 0;
const MAX_VALUE = 100;

export default Vue.extend({
  name: 'AProgressLinear',
  props: {
    value: {
      type: Number,
      validator: (value: number) => value >= MIN_VALUE && value <= MAX_VALUE,
      default: MIN_VALUE,
    },
    indeterminate: Boolean,
  },
  computed: {
    normalizedValue(): number {
      if (this.value > MAX_VALUE) {
        return MAX_VALUE;
      }

      if (this.value < MIN_VALUE) {
        return MIN_VALUE;
      }

      return this.value;
    },
  },
  methods: {
    createBar(): VNode {
      return this.$createElement(
        'span',
        {
          class: 'progress-linear__bar',
          style: { width: this.indeterminate ? undefined : `${this.normalizedValue}%` },
        },
      );
    },
    createContent(): VNode {
      return this.$createElement(
        'span',
        { class: 'progress-linear__content' },
        this.$slots.default,
      );
    },
  },
  render(h): VNode {
    return h(
      'span',
      {
        class: [
          'progress-linear',
          {
            'progress-linear_indeterminate': this.indeterminate,
            'progress-linear_half-completed': !this.indeterminate && this.value >= MAX_VALUE / 2,
          },
        ],
        attrs: {
          role: 'progressbar',
          'aria-valuenow': this.indeterminate ? undefined : this.normalizedValue,
          'aria-valuemin': MIN_VALUE,
          'aria-valuemax': MAX_VALUE,
        },
      },
      [
        this.createBar(),
        this.$slots.default ? this.createContent() : undefined,
      ],
    );
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/vars';

@keyframes translate-x {
  from {
    transform: translateX(-100%);
  }

  to {
    left: 100%;
    transform: translateX(100%);
  }
}

.progress-linear {
  border-radius: 0.7143em;
  width: 240px;
  height: 1.4286em;
  font-size: 14px;
  color: $primary;
  background-color: $mono-lightest;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: color 0.1s linear;

  &__bar {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: $secondary;
    transition: width 0.35s ease-out;
  }

  &__content {
    position: relative;
  }

  &_half-completed {
    color: white;
  }

  &_indeterminate &__bar {
    width: 33.3333%;
    animation: translate-x 1.4s linear infinite;
  }
}
</style>
