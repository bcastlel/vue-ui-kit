<template>
  <component-page title="Side panel">
    <template #basicUsage>
      <a-button @click="basicUsageSidePanelVisible = true">
        Show side panel
      </a-button>
    </template>

    <component-usage-example caption="From the left">
      <a-button @click="fromTheLeftSidePanelVisible = true">
        Show side panel
      </a-button>
    </component-usage-example>

    <component-usage-example caption="Hide close button">
      <a-button @click="hideCloseButtonSidePanelVisible = true">
        Show side panel
      </a-button>
    </component-usage-example>

    <a-side-panel
      v-if="basicUsageSidePanelVisible"
      title="Title"
      @close="basicUsageSidePanelVisible = false"
    >
      {{ loremIpsum }}
    </a-side-panel>

    <a-side-panel
      v-if="fromTheLeftSidePanelVisible"
      title="Title"
      left
      @close="fromTheLeftSidePanelVisible = false"
    >
      {{ loremIpsum }}
    </a-side-panel>

    <a-side-panel
      v-if="hideCloseButtonSidePanelVisible"
      title="Title"
      hide-close-button
      @close="hideCloseButtonSidePanelVisible = false"
    >
      {{ loremIpsum }}
    </a-side-panel>
  </component-page>
</template>

<script lang="ts">
import Vue from 'vue';
import ComponentPage from '@/components/page-constructor/ComponentPage.vue';
import ComponentUsageExample from '@/components/page-constructor/ComponentUsageExample.vue';
import AButton from '@/components/AButton.vue';
import ASidePanel from '@/components/ASidePanel.vue';
import { LONG_LOREM_IPSUM } from '@/config';

interface Data {
  basicUsageSidePanelVisible: boolean;
  fromTheLeftSidePanelVisible: boolean;
  hideCloseButtonSidePanelVisible: boolean;
}

export default Vue.extend({
  name: 'SidePanel',
  components: {
    ComponentPage,
    ComponentUsageExample,
    AButton,
    ASidePanel,
  },
  data(): Data {
    return {
      basicUsageSidePanelVisible: false,
      fromTheLeftSidePanelVisible: false,
      hideCloseButtonSidePanelVisible: false,
    };
  },
  computed: {
    loremIpsum(): typeof LONG_LOREM_IPSUM {
      return LONG_LOREM_IPSUM;
    },
  },
});
</script>
