<template>
  <component-page title="Progress circular" enlarged-example-gap>
    <template #basicUsage>
      <a-progress-circular :value="basicUsageProgressValue">
        {{ basicUsageProgressValue }}
      </a-progress-circular>
    </template>

    <component-usage-example caption="Different thicknesses">
      <a-progress-circular :value="25" thickness="thin" />

      <a-progress-circular :value="50" />

      <a-progress-circular :value="75" thickness="bold" />
    </component-usage-example>

    <component-usage-example caption="Indeterminate state">
      <a-progress-circular indeterminate />
    </component-usage-example>
  </component-page>
</template>

<script lang="ts">
import Vue from 'vue';
import ComponentPage from '@/components/page-constructor/ComponentPage.vue';
import ComponentUsageExample from '@/components/page-constructor/ComponentUsageExample.vue';
import AProgressCircular from '@/components/AProgressCircular.vue';

interface Data {
  basicUsageProgressValue: number;
  basicUsageProgressInterval: number | null;
}

export default Vue.extend({
  name: 'ProgressCircular',
  components: {
    ComponentPage,
    ComponentUsageExample,
    AProgressCircular,
  },
  data(): Data {
    return {
      basicUsageProgressValue: 0,
      basicUsageProgressInterval: null,
    };
  },
  created() {
    this.basicUsageProgressInterval = setInterval(() => {
      if (this.basicUsageProgressValue === 100) {
        this.basicUsageProgressValue = 0;
        return;
      }

      this.basicUsageProgressValue += 10;
    }, 1000);
  },
});
</script>
