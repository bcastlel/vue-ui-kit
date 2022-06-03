<template>
  <div class="component-page">
    <div class="head">
      <div class="container">
        <div class="head__body">
          <button
            class="head__back"
            @click="$previousRoute.name ? $router.back() : $router.push({ name: 'home' })"
          >
            <arrow-left-icon />
          </button>

          <h1 class="head__title">
            {{ title }}
          </h1>
        </div>
      </div>
    </div>

    <div
      class="content"
      :class="{ 'content_enlarged-example-gap': enlargedExampleGap }"
    >
      <div class="container">
        <component-usage-example caption="Basic usage">
          <slot name="basicUsage" />
        </component-usage-example>

        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ComponentUsageExample from './ComponentUsageExample.vue';
import ArrowLeftIcon from '@/assets/arrow-left.svg';

export default Vue.extend({
  name: 'ComponentPage',
  components: {
    ComponentUsageExample,
    ArrowLeftIcon,
  },
  props: {
    title: { type: String, required: true },
    enlargedExampleGap: Boolean,
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/vars';

.head {
  padding: 65px 0 50px;
  background-color: $secondary-lightest;

  &__body {
    display: flex;
    align-items: center;
  }

  &__back {
    margin-left: -3px;
    margin-right: 15px;
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    color: $secondary;
    transition: color 0.1s;

    &:hover,
    &:focus-visible {
      color: $secondary-darker;
    }

    @media (max-width: $xs-breakpoint) {
      margin-right: 13px;
      width: 26px;
      height: 26px;
    }

    svg {
      width: 100%;
      max-height: 100%;
      fill: currentColor;
    }
  }

  &__title {
    font-family: Raleway, Verdana, sans-serif;
    font-size: 45px;
    font-weight: 500;
    line-height: 1.1;

    @media (max-width: $xs-breakpoint) {
      font-size: 39px;
    }
  }
}

.content {
  padding: 45px 0 65px;

  &_enlarged-example-gap .component-usage-example {
    ::v-deep .component-usage-example__content {
      margin-bottom: -20px;

      > * {
        margin-right: 25px;
        margin-bottom: 20px;
      }
    }
  }

  .component-usage-example:not(:last-child) {
    margin-bottom: 45px;
  }
}
</style>
