<script lang="ts">
import Vue, { PropType, VNode } from 'vue';

const THICKNESSES = ['thin', 'normal', 'bold'] as const;
type Thickness = typeof THICKNESSES[number];

const MIN_VALUE = 0;
const MAX_VALUE = 100;
const VIEW_BOX_SIZE = 24;

const StrokeWidth = {
  THIN: 1,
  NORMAL: 2,
  BOLD: 3,
} as const;

export default Vue.extend({
  name: 'AProgressCircular',
  props: {
    value: {
      type: Number,
      validator: (value: number) => value >= MIN_VALUE && value <= MAX_VALUE,
      default: MIN_VALUE,
    },
    thickness: {
      type: String as PropType<Thickness>,
      validator: (value: Thickness) => THICKNESSES.includes(value),
      default: 'normal',
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
    strokeWidth(): number {
      return StrokeWidth[this.thickness.toUpperCase() as keyof typeof StrokeWidth];
    },
    viewBoxAttr(): string {
      return `0 0 ${VIEW_BOX_SIZE} ${VIEW_BOX_SIZE}`;
    },
    halfOfViewBoxSize(): number {
      return VIEW_BOX_SIZE / 2;
    },
    radius(): number {
      return this.halfOfViewBoxSize - this.strokeWidth / 2;
    },
    circumference(): number {
      return 2 * Math.PI * this.radius;
    },
    offset(): number {
      return (MAX_VALUE - this.normalizedValue) / MAX_VALUE * this.circumference;
    },
  },
  methods: {
    createCircle(isPlaceholder = false): VNode {
      return this.$createElement('circle', {
        class: [
          'progress-circular__circle',
          { 'progress-circular__circle_placeholder': isPlaceholder },
        ],
        attrs: {
          fill: 'none',
          cx: this.halfOfViewBoxSize,
          cy: this.halfOfViewBoxSize,
          r: this.radius,
          'stroke-width': this.strokeWidth,
          'stroke-dasharray': this.circumference,
          'stroke-dashoffset': isPlaceholder ? 0 : this.offset,
        },
      });
    },
    createSvg(): VNode {
      return this.$createElement(
        'svg',
        {
          class: 'progress-circular__svg',
          attrs: {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: this.viewBoxAttr,
          },
        },
        [
          this.indeterminate ? undefined : this.createCircle(true),
          this.createCircle(),
        ],
      );
    },
    createContent(): VNode {
      return this.$createElement(
        'span',
        { class: 'progress-circular__content' },
        this.$slots.default,
      );
    },
  },
  render(h): VNode {
    return h(
      'span',
      {
        class: [
          'progress-circular',
          { 'progress-circular_indeterminate': this.indeterminate },
        ],
        attrs: {
          role: 'progressbar',
          'aria-valuenow': this.indeterminate ? undefined : this.normalizedValue,
          'aria-valuemin': MIN_VALUE,
          'aria-valuemax': MAX_VALUE,
        },
      },
      [
        this.createSvg(),
        this.$slots.default ? this.createContent() : undefined,
      ],
    );
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/vars';

@keyframes rotate-360 {
  to {
    transform: rotate(360deg);
  }
}

.progress-circular {
  width: 64px;
  height: 64px;
  color: $mono-darker;
  vertical-align: middle;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;

  $root: &;

  &__svg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: rotate(-90deg);
  }

  &__circle {
    stroke: currentColor;
    transition: stroke-dashoffset 0.35s linear;

    &_placeholder {
      opacity: 0.3;
    }
  }

  &_indeterminate {
    animation: rotate-360 0.7s linear infinite;

    #{$root}__circle {
      stroke-dashoffset: 23;
      stroke-linecap: round;
    }
  }
}
</style>
