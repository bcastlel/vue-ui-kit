<template>
  <component-page title="Tabs">
    <template #basicUsage>
      <a-tabs v-model="basicUsageActiveTabId" :items="commonTabs" />
    </template>

    <component-usage-example caption="Boxed style">
      <a-tabs
        v-model="boxedStyleActiveTabId"
        :items="commonTabs"
        boxed
      />
    </component-usage-example>

    <component-usage-example caption="Icon option">
      <a-tabs v-model="iconOptionActiveTabId" :items="iconOptionTabs" />
    </component-usage-example>

    <component-usage-example caption="Disabled state">
      <a-tabs v-model="disabledStateActiveTabId" :items="disabledStateTabs" />
    </component-usage-example>
  </component-page>
</template>

<script lang="ts">
import Vue from 'vue';
import ComponentPage from '@/components/page-constructor/ComponentPage.vue';
import ComponentUsageExample from '@/components/page-constructor/ComponentUsageExample.vue';
import ATabs from '@/components/ATabs.vue';
import AccountCircleIcon from '@/assets/account-circle.svg';
import CogIcon from '@/assets/cog.svg';
import { Tab } from '@/models/tabs';

const COMMON_TABS: Tab[] = [
  { id: 'user', text: 'User' },
  { id: 'config', text: 'Config' },
  { id: 'tasks', text: 'Tasks' },
];

const ICON_OPTION_TABS: Tab[] = [
  { id: 'user', text: 'User', icon: AccountCircleIcon },
  { id: 'config', text: 'Config', icon: CogIcon },
  { id: 'tasks', text: 'Tasks' },
];

const DISABLED_STATE_TABS: Tab[] = [
  { id: 'user', text: 'User', icon: AccountCircleIcon },
  { id: 'config', text: 'Config', icon: CogIcon, disabled: true },
  { id: 'tasks', text: 'Tasks' },
];

interface Data {
  basicUsageActiveTabId: Tab['id'];
  boxedStyleActiveTabId: Tab['id'];
  iconOptionActiveTabId: Tab['id'];
  disabledStateActiveTabId: Tab['id'];
}

export default Vue.extend({
  name: 'Tabs',
  components: {
    ComponentPage,
    ComponentUsageExample,
    ATabs,
  },
  data(): Data {
    return {
      basicUsageActiveTabId: COMMON_TABS[0].id,
      boxedStyleActiveTabId: COMMON_TABS[0].id,
      iconOptionActiveTabId: ICON_OPTION_TABS[0].id,
      disabledStateActiveTabId: DISABLED_STATE_TABS[0].id,
    };
  },
  computed: {
    commonTabs(): typeof COMMON_TABS {
      return COMMON_TABS;
    },
    iconOptionTabs(): typeof ICON_OPTION_TABS {
      return ICON_OPTION_TABS;
    },
    disabledStateTabs(): typeof DISABLED_STATE_TABS {
      return DISABLED_STATE_TABS;
    },
  },
});
</script>
