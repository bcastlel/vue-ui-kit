<template>
  <component-page title="Rating">
    <template #basicUsage>
      <a-rating v-model="basicUsageValue" />
    </template>

    <component-usage-example caption="Length prop (e.g. 7)">
      <a-rating v-model="lengthPropValue" :length="7" />
    </component-usage-example>

    <component-usage-example caption="Text slot / prop">
      <a-rating v-model="textSlotOrPropValue">
        {{ textSlotOrPropValue }}/5
      </a-rating>
    </component-usage-example>

    <component-usage-example caption="Decimal value support (requires readonly)">
      <a-rating :value="2.4" readonly />
    </component-usage-example>
  </component-page>
</template>

<script lang="ts">
import Vue from 'vue';
import ComponentPage from '@/components/page-constructor/ComponentPage.vue';
import ComponentUsageExample from '@/components/page-constructor/ComponentUsageExample.vue';
import ARating from '@/components/ARating.vue';

interface Data {
  basicUsageValue: number;
  lengthPropValue: number;
  textSlotOrPropValue: number;
}

export default Vue.extend({
  name: 'Rating',
  components: {
    ComponentPage,
    ComponentUsageExample,
    ARating,
  },
  data(): Data {
    return {
      basicUsageValue: 2,
      lengthPropValue: 5,
      textSlotOrPropValue: 1,
    };
  },
});
</script>
