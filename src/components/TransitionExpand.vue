<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TransitionExpand',
  functional: true,
  render(createElement, context) {
    const data = {
      props: {
        ...context.props,
        name: 'expand',
      },
      on: {
        ...context.listeners,
        enter(element: HTMLElement): void {
          const { width } = getComputedStyle(element);

          element.style.width = width;
          element.style.position = 'absolute';
          element.style.visibility = 'hidden';
          element.style.height = 'auto';

          const { height } = getComputedStyle(element);

          element.style.removeProperty('width');
          element.style.removeProperty('position');
          element.style.removeProperty('visibility');
          element.style.height = '0';

          void getComputedStyle(element); // force reflow

          requestAnimationFrame(() => element.style.height = height);
        },
        afterEnter(element: HTMLElement): void {
          element.style.height = 'auto';
        },
        leave(element: HTMLElement): void {
          const { height } = getComputedStyle(element);

          element.style.height = height;

          void getComputedStyle(element); // force reflow

          requestAnimationFrame(() => element.style.height = '0');
        },
      },
    };

    return createElement('transition', data, context.children);
  },
});
</script>

<style scoped>
* {
  will-change: height;
  transform: translateZ(0);
}
</style>

<style>
.expand-enter-active,
.expand-leave-active {
  overflow: hidden;
  transition: height .3s;
}

.expand-enter,
.expand-leave-to {
  height: 0;
}
</style>
