<template>
  <component-page title="Radio" enlarged-example-gap>
    <template #basicUsage>
      <a-radio
        v-model="basicUsageChecked"
        value="first"
        label="First"
      />

      <a-radio
        v-model="basicUsageChecked"
        value="second"
        label="Second"
      />

      <a-radio
        v-model="basicUsageChecked"
        value="third"
        label="Third"
      />
    </template>

    <component-usage-example caption="Label slot">
      <a-radio v-model="labelSlotChecked" value="left">
        <span class="label-slot-highlighter">Le</span>ft
      </a-radio>

      <a-radio v-model="labelSlotChecked" value="right">
        <span class="label-slot-highlighter">Ri</span>ght
      </a-radio>
    </component-usage-example>

    <component-usage-example caption="Disabled option">
      <a-radio label="Checked" disabled />

      <a-radio
        value="unchecked"
        label="Unchecked"
        disabled
      />
    </component-usage-example>
  </component-page>
</template>

<script lang="ts">
import Vue from 'vue';
import ComponentPage from '@/components/page-constructor/ComponentPage.vue';
import ComponentUsageExample from '@/components/page-constructor/ComponentUsageExample.vue';
import ARadio from '@/components/ARadio.vue';
import { RadioChecked } from '@/models/radio';

interface Data {
  basicUsageChecked: RadioChecked;
  labelSlotChecked: RadioChecked;
}

export default Vue.extend({
  name: 'Radio',
  components: {
    ComponentPage,
    ComponentUsageExample,
    ARadio,
  },
  data(): Data {
    return {
      basicUsageChecked: 'first',
      labelSlotChecked: 'left',
    };
  },
});
</script>

<style lang="scss" scoped>
.label-slot-highlighter {
  font-weight: 700;
}
</style>
