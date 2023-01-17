<template>
  <component-page title="Expansion panel">
    <template #basicUsage>
      <a-expansion-panel>
        <template #caption="{ contentVisible }">
          {{ contentVisible ? 'Collapse' : 'Expand' }} content
        </template>

        {{ loremIpsum }}
      </a-expansion-panel>
    </template>

    <component-usage-example caption="Initially expanded">
      <a-expansion-panel initially-expanded>
        <template #caption>
          Toggle Content
        </template>

        {{ loremIpsum }}
      </a-expansion-panel>
    </component-usage-example>

    <component-usage-example caption="Header block option">
      <a-expansion-panel class="header-block-option" header-block>
        <template #caption>
          Toggle Content
        </template>

        {{ loremIpsum }}
      </a-expansion-panel>
    </component-usage-example>
  </component-page>
</template>

<script lang="ts">
import Vue from 'vue';
import ComponentPage from '@/components/page-constructor/ComponentPage.vue';
import ComponentUsageExample from '@/components/page-constructor/ComponentUsageExample.vue';
import AExpansionPanel from '@/components/AExpansionPanel.vue';
import { SHORT_LOREM_IPSUM } from '@/config';

export default Vue.extend({
  name: 'ExpansionPanel',
  components: {
    ComponentPage,
    ComponentUsageExample,
    AExpansionPanel,
  },
  computed: {
    loremIpsum(): typeof SHORT_LOREM_IPSUM {
      return SHORT_LOREM_IPSUM;
    },
  },
});
</script>

<style lang="scss" scoped>
.header-block-option {
  width: 100%;
}
</style>
