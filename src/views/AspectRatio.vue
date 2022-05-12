<template>
  <component-page title="Aspect ratio">
    <template #basicUsage>
      <div class="aspect-ratio">
        <div class="aspect-ratio__content">
          This block will always be 16/9 until it is overflowed
        </div>
      </div>
    </template>
  </component-page>
</template>

<script lang="ts">
import Vue from 'vue';
import ComponentPage from '@/components/page-constructor/ComponentPage.vue';

export default Vue.extend({
  name: 'AspectRatio',
  components: {
    ComponentPage,
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/vars';

.aspect-ratio {
  width: 50%;
  min-width: 290px;

  &__content {
    border-radius: 8px;
    border: 1px solid $mono-lighter;
    padding: 5%;
  }
}
</style>
