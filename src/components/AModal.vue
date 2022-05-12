<template>
  <portal>
    <div
      ref="modal"
      v-bind="scopeAttrs"
      :class="[className, contentClass]"
      tabindex="0"
      @keydown.esc="close"
    >
      <!-- https://github.com/LinusBorg/vue-simple-portal#transitions -->
      <transition
        name="fade"
        appear
        @after-leave="emitClose"
      >
        <div
          v-if="visible"
          class="modal__overlay"
          @click.self="close"
        />
      </transition>

      <transition :name="transition" appear>
        <div v-if="visible" class="modal__base">
          <div class="modal__content">
            <slot :on-close="close" />
          </div>

          <button
            v-if="!hideCloseButton"
            class="modal__close"
            type="button"
            @click="close"
          >
            <close-icon class="modal__close-icon" />
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

const CLASS_NAME = 'modal';

interface Data {
  visible: boolean;
}

export default Vue.extend({
  name: 'AModal',
  components: {
    Portal,
    CloseIcon,
  },
  props: {
    contentClass: { type: String, default: '' },
    hideCloseButton: { type: Boolean },
    transition: { type: String, default: 'fade' },
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
    // https://github.com/LinusBorg/portal-vue/issues/263
    scopeAttrs(): ComponentScopeAttrs {
      const scopeAttr = (this.$vnode.context?.$options as ComponentOptionsWithScopeId)._scopeId;
      return scopeAttr ? { [scopeAttr]: '' } : null;
    },
  },
  mounted() {
    this.$nextTick(() => this.focusIn(this.$refs.modal as HTMLElement));
  },
  methods: {
    close(): void {
      this.visible = false;
    },
    emitClose(): void {
      const modalElements = document.getElementsByClassName(this.className);
      const currentModalElement = modalElements[modalElements.length - 2] as HTMLElement | undefined;

      this.$emit('close');

      if (currentModalElement) {
        this.$nextTick(() => this.focusIn(currentModalElement));
      }
    },
    focusIn(modalElement: HTMLElement): void {
      const focusableElement = getFocusableElement(modalElement);

      if (focusableElement) {
        focusableElement.focus();
      } else {
        modalElement.focus();
      }
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/vars';

.modal {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(black, 0.3);
  }

  &__base {
    border-radius: 4px;
    padding: 36px 0 32px 32px;
    width: 90%;
    max-width: 576px;
    max-height: 90%;
    background-color: white;
    display: flex;
    position: relative;
  }

  &__content {
    padding-right: 32px;
    overflow-y: auto;
  }

  &__close {
    position: absolute;
    top: 9px;
    right: 9px;
    width: 20px;
    height: 20px;

    $self: &;

    &:hover,
    &:focus-visible {
      #{$self}-icon {
        fill: $mono-darker;
      }
    }

    &-icon {
      fill: $mono;
      transition: fill 0.1s;
    }
  }
}
</style>
