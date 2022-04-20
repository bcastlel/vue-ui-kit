<template>
  <component-page title="Breadcrumbs">
    <template #basicUsage>
      <a-breadcrumbs :items="breadcrumbs" />
    </template>

    <component-usage-example caption="Custom text divider">
      <a-breadcrumbs :items="breadcrumbs" divider="·" />
    </component-usage-example>

    <component-usage-example caption="Custom icon divider">
      <a-breadcrumbs :items="breadcrumbs">
        <template #divider>
          <chevron-double-right-icon />
        </template>
      </a-breadcrumbs>
    </component-usage-example>
  </component-page>
</template>

<script lang="ts">
import Vue from 'vue';
import ComponentPage from '@/components/page-constructor/ComponentPage.vue';
import ComponentUsageExample from '@/components/page-constructor/ComponentUsageExample.vue';
import ABreadcrumbs from '@/components/ABreadcrumbs.vue';
import { BreadcrumbsItem } from '@/models/breadcrumbs';
import ChevronDoubleRightIcon from '@/assets/chevron-double-right.svg';

export default Vue.extend({
  name: 'Breadcrumbs',
  components: {
    ComponentPage,
    ComponentUsageExample,
    ABreadcrumbs,
    ChevronDoubleRightIcon,
  },
  computed: {
    breadcrumbs(): BreadcrumbsItem[] {
      return [
        { text: 'Home', to: { name: 'home' } },
        { text: 'Breadcrumbs', to: { name: 'breadcrumbs' } },
      ];
    },
  },
});
</script>
