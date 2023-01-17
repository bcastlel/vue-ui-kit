<template>
  <portal>
    <div
      ref="sidePanel"
      v-bind="scopeAttrs"
      :class="[className, contentClass, { [`${className}_left`]: left }]"
      tabindex="0"
      @keydown.esc="close"
    >
      <!-- see https://github.com/LinusBorg/vue-simple-portal#transitions -->
      <transition
        name="side-panel__overlay"
        appear
        @after-leave="emitClose"
      >
        <div
          v-if="visible"
          class="side-panel__overlay"
          @click="close"
        />
      </transition>

      <transition
        name="side-panel__base"
        appear
      >
        <div
          v-if="visible"
          class="side-panel__base"
        >
          <h3 class="side-panel__title">
            {{ title }}
          </h3>

          <div class="side-panel__content">
            <slot :on-close="close" />
          </div>

          <button
            v-if="!hideCloseButton"
            class="side-panel__close"
            type="button"
            @click="close"
          >
            <close-icon class="side-panel__close-icon" />
          </button>
        </div>
      </transition>
    </div>
  </portal>
</template>

<script lang="ts">
import Vue from 'vue';
import { Portal } from '@linusborg/vue-simple-portal';
import CloseIcon from '@/assets/close.svg';
import { getFocusableElement } from '@/utils/get-focusable-element';
import { ComponentOptionsWithScopeId, ComponentScopeAttrs } from '@/models/common';

const CLASS_NAME = 'side-panel';

interface Data {
  visible: boolean;
}

export default Vue.extend({
  name: 'ASidePanel',
  components: {
    Portal,
    CloseIcon,
  },
  props: {
    title: { type: String, required: true },
    contentClass: { type: String, default: '' },
    left: Boolean,
    hideCloseButton: Boolean,
  },
  data(): Data {
    return {
      visible: true,
    };
  },
  computed: {
    className(): typeof CLASS_NAME {
      return CLASS_NAME;
    },
    // see https://github.com/LinusBorg/portal-vue/issues/263
    scopeAttrs(): ComponentScopeAttrs {
      const scopeAttr = (this.$vnode.context?.$options as ComponentOptionsWithScopeId)._scopeId;
      return scopeAttr ? { [scopeAttr]: '' } : null;
    },
  },
  mounted() {
    this.$nextTick(() => this.focusIn(this.$refs.sidePanel as HTMLElement));
  },
  methods: {
    close(): void {
      this.visible = false;
    },
    emitClose(): void {
      const sidePanelElements = document.getElementsByClassName(this.className);
      const currentSidePanelElement = sidePanelElements[sidePanelElements.length - 2] as HTMLElement | undefined;

      this.$emit('close');

      if (currentSidePanelElement) {
        this.$nextTick(() => this.focusIn(currentSidePanelElement));
      }
    },
    focusIn(sidePanelElement: HTMLElement): void {
      const focusableElement = getFocusableElement(sidePanelElement);

      if (focusableElement) {
        focusableElement.focus();
      } else {
        sidePanelElement.focus();
      }
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/vars';

.side-panel {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: flex-end;

  $root: &;

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(black, 0.3);

    &-enter-active,
    &-leave-active {
      transition: opacity 0.3s ease-out;
    }

    &-enter,
    &-leave-to {
      opacity: 0;
    }
  }

  &__base {
    border-radius: 4px 0 0 4px;
    padding: 32px 0 32px 32px;
    width: 90%;
    max-width: 576px;
    background-color: white;
    display: flex;
    flex-direction: column;
    position: relative;

    &-enter-active,
    &-leave-active {
      transition: transform 0.3s ease-out;
    }

    &-enter,
    &-leave-to {
      transform: translateX(100%);
    }
  }

  &__title {
    margin-bottom: 16px;
    margin-right: 60px;
    font-family: Raleway, Verdana, sans-serif;
    font-size: 28px;
    font-weight: 500;
  }

  &__content {
    padding-right: 32px;
    overflow-y: auto;
  }

  &__close {
    position: absolute;
    top: 32px;
    right: 32px;
    width: 20px;
    height: 20px;

    $self: &;

    &-icon {
      fill: $mono;
      transition: fill 0.1s;
    }

    &:hover,
    &:focus-visible {
      #{$self}-icon {
        fill: $mono-darker;
      }
    }
  }

  &_left {
    justify-content: flex-start;

    #{$root}__base {
      border-radius: 0 4px 4px 0;

      &-enter,
      &-leave-to {
        transform: translateX(-100%);
      }
    }
  }
}
</style>
