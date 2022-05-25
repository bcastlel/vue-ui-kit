<template>
  <component-page title="Pagination">
    <template #basicUsage>
      <a-pagination v-model="basicUsagePage" :length="20" />
    </template>

    <component-usage-example :caption="'Total visible prop (e.g.\xA09)'">
      <a-pagination
        v-model="totalVisiblePropPage"
        :length="80"
        :total-visible="9"
      />
    </component-usage-example>

    <component-usage-example caption="Custom icons">
      <a-pagination v-model="customIconsPage" :length="40">
        <template #prevIcon>
          <menu-left-icon />
        </template>

        <template #nextIcon>
          <menu-right-icon />
        </template>
      </a-pagination>
    </component-usage-example>

    <component-usage-example caption="Disabled option">
      <a-pagination :length="5" disabled />
    </component-usage-example>
  </component-page>
</template>

<script lang="ts">
import Vue from 'vue';
import ComponentPage from '@/components/page-constructor/ComponentPage.vue';
import ComponentUsageExample from '@/components/page-constructor/ComponentUsageExample.vue';
import APagination from '@/components/APagination.vue';
import MenuLeftIcon from '@/assets/menu-left.svg';
import MenuRightIcon from '@/assets/menu-right.svg';

interface Data {
  basicUsagePage: number;
  totalVisiblePropPage: number;
  customIconsPage: number;
}

export default Vue.extend({
  name: 'Pagination',
  components: {
    ComponentPage,
    ComponentUsageExample,
    APagination,
    MenuLeftIcon,
    MenuRightIcon,
  },
  data(): Data {
    return {
      basicUsagePage: 1,
      totalVisiblePropPage: 1,
      customIconsPage: 1,
    };
  },
});
</script>
