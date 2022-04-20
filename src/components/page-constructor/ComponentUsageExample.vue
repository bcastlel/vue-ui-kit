<template>
  <div class="component-usage-example">
    <h3 class="component-usage-example__caption">
      {{ caption }}
    </h3>

    <div class="component-usage-example__content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ComponentUsageExample',
  props: {
    caption: { type: String, required: true },
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/vars';

.component-usage-example {
  &__caption {
    margin-bottom: 17px;
    font-size: 30px;
  }

  &__content {
    margin-right: -15px;
    margin-bottom: -15px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;

    > * {
      margin-right: 15px;
      margin-bottom: 15px;
    }
  }
}
</style>
