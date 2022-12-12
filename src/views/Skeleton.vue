<template>
  <component-page title="Skeleton">
    <template #basicUsage>
      <div class="skeleton-sample skeleton">
        <div class="skeleton-sample__image skeleton__item" />

        <div class="skeleton-sample__info">
          <div class="skeleton-sample__info-head">
            <div class="skeleton-sample__preview skeleton__item skeleton__item_circle" />

            <div class="skeleton-sample__controls">
              <div class="skeleton-sample__control skeleton__item skeleton__item_square" />
              <div class="skeleton-sample__control skeleton__item skeleton__item_square" />
            </div>
          </div>

          <div class="skeleton-sample__info-text">
            <div class="skeleton-sample__paragraph skeleton__item" />
            <div class="skeleton-sample__paragraph skeleton__item" />
            <div class="skeleton-sample__paragraph skeleton__item" />
          </div>
        </div>
      </div>
    </template>
  </component-page>
</template>

<script lang="ts">
import Vue from 'vue';
import ComponentPage from '@/components/page-constructor/ComponentPage.vue';

export default Vue.extend({
  name: 'Skeleton',
  components: {
    ComponentPage,
  },
});
</script>

<style lang="scss" scoped>
.skeleton-sample {
  width: 240px;

  &__info {
    padding: 0 12px;

    &-head {
      margin-bottom: 16px;
      display: flex;
      align-items: center;
    }
  }

  &__image {
    margin-bottom: 12px;
    height: 160px;
  }

  &__preview {
    margin-right: 16px;
    width: 40px;
    height: 40px;
  }

  &__controls {
    display: flex;
    align-items: center;
  }

  &__control {
    width: 16px;
    height: 12px;

    &:not(:last-child) {
      margin-right: 8px;
    }
  }

  &__paragraph {
    height: 14px;

    &:nth-child(2) {
      width: 40%;
    }

    &:nth-child(3) {
      width: 75%;
    }

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
}
</style>
