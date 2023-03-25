<template>
  <div class="expansion-panel" :class="{ 'expansion-panel_content-visible': contentVisible }">
    <div
      class="expansion-panel__header"
      :class="{ 'expansion-panel__header_block': headerBlock }"
      tabindex="0"
      role="button"
      :aria-expanded="contentVisible"
      @click="toggleContentVisible"
      @keydown.enter.space="toggleContentVisible"
    >
      <div class="expansion-panel__caption">
        <slot name="caption" :content-visible="contentVisible" />
      </div>

      <div class="expansion-panel__icon-wrapper">
        <slot name="icon">
          <chevron-down-icon />
        </slot>
      </div>
    </div>

    <a-transition-expand>
      <div v-show="contentVisible" class="expansion-panel__content-wrapper">
        <div class="expansion-panel__content">
          <slot />
        </div>
      </div>
    </a-transition-expand>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ATransitionExpand from '@/components/ATransitionExpand.vue';
import ChevronDownIcon from '@/assets/chevron-down.svg';

interface Data {
  contentVisible: boolean;
}

export default Vue.extend({
  name: 'AExpansionPanel',
  components: {
    ATransitionExpand,
    ChevronDownIcon,
  },
  props: {
    initiallyExpanded: Boolean,
    headerBlock: Boolean,
  },
  data(): Data {
    return {
      contentVisible: this.initiallyExpanded,
    };
  },
  methods: {
    toggleContentVisible(): void {
      this.contentVisible = !this.contentVisible;
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/vars';

.expansion-panel {
  &__header {
    user-select: none;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    transition: color 0.15s;

    &_block {
      display: flex;
    }

    &:hover,
    &:focus-visible {
      color: $secondary;
    }
  }

  &__caption {
    margin-right: 6px;
    font-weight: 700;
  }

  &__icon-wrapper {
    width: 24px;
    height: 24px;

    svg {
      width: 100%;
      max-height: 100%;
      fill: currentColor;
      transition: transform 0.2s;
    }
  }

  &__content {
    padding-top: 6px;
  }

  &_content-visible &__icon-wrapper svg {
    transform: rotate(-180deg);
  }
}
</style>
