<template>
  <component-page title="Breadcrumbs">
    <template #basicUsage>
      <a-breadcrumbs :items="commonBreadcrumbs" />
    </template>

    <component-usage-example caption="Custom text divider">
      <a-breadcrumbs :items="commonBreadcrumbs" divider="·" />
    </component-usage-example>

    <component-usage-example caption="Custom icon divider">
      <a-breadcrumbs :items="commonBreadcrumbs">
        <template #divider>
          <chevron-double-right-icon />
        </template>
      </a-breadcrumbs>
    </component-usage-example>

    <component-usage-example caption="Native anchor tag support">
      <a-breadcrumbs
        :items="[
          { text: 'Repository', href: 'https://github.com/bcastlel/vue-ui-kit' },
          { text: 'Home', to: { name: 'home' } },
          { text: 'Breadcrumbs', to: { name: 'breadcrumbs' } },
        ]"
      />
    </component-usage-example>

    <component-usage-example caption="Plain text support">
      <a-breadcrumbs
        :items="[
          { text: 'App' },
          { text: 'Home', to: { name: 'home' } },
          { text: 'Breadcrumbs', to: { name: 'breadcrumbs' } },
        ]"
      />
    </component-usage-example>
  </component-page>
</template>

<script lang="ts">
import Vue from 'vue';
import ComponentPage from '@/components/page-constructor/ComponentPage.vue';
import ComponentUsageExample from '@/components/page-constructor/ComponentUsageExample.vue';
import ABreadcrumbs from '@/components/ABreadcrumbs.vue';
import { Breadcrumb } from '@/models/breadcrumbs';
import ChevronDoubleRightIcon from '@/assets/chevron-double-right.svg';

const COMMON_BREADCRUMBS: Breadcrumb[] = [
  { text: 'Home', to: { name: 'home' } },
  { text: 'Breadcrumbs', to: { name: 'breadcrumbs' } },
];

export default Vue.extend({
  name: 'Breadcrumbs',
  components: {
    ComponentPage,
    ComponentUsageExample,
    ABreadcrumbs,
    ChevronDoubleRightIcon,
  },
  computed: {
    commonBreadcrumbs(): typeof COMMON_BREADCRUMBS {
      return COMMON_BREADCRUMBS;
    },
  },
});
</script>
