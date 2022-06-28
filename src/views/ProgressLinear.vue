<template>
  <component-page title="Progress linear">
    <template #basicUsage>
      <a-progress-linear :value="basicUsageProgressValue">
        {{ basicUsageProgressValue }}
      </a-progress-linear>
    </template>

    <component-usage-example caption="Indeterminate state">
      <a-progress-linear indeterminate />
    </component-usage-example>
  </component-page>
</template>

<script lang="ts">
import Vue from 'vue';
import ComponentPage from '@/components/page-constructor/ComponentPage.vue';
import ComponentUsageExample from '@/components/page-constructor/ComponentUsageExample.vue';
import AProgressLinear from '@/components/AProgressLinear.vue';

interface Data {
  basicUsageProgressValue: number;
  basicUsageProgressInterval: number | null;
  basicUsageProgressIntervalTick: number;
}

export default Vue.extend({
  name: 'ProgressLinear',
  components: {
    ComponentPage,
    ComponentUsageExample,
    AProgressLinear,
  },
  data(): Data {
    return {
      basicUsageProgressValue: 0,
      basicUsageProgressInterval: null,
      basicUsageProgressIntervalTick: 0,
    };
  },
  created() {
    this.basicUsageProgressInterval = setInterval(() => {
      if (this.basicUsageProgressValue === 100) {
        this.basicUsageProgressValue = 0;
        this.basicUsageProgressIntervalTick = 0;
        return;
      }

      switch (this.basicUsageProgressIntervalTick++) {
        case 0: this.basicUsageProgressValue = 20; break;
        case 1: this.basicUsageProgressValue = 70; break;
        default: this.basicUsageProgressValue = 100;
      }
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.basicUsageProgressInterval!);
  },
});
</script>
