<template>
  <component-page title="Switcher" enlarged-example-gap>
    <template #basicUsage>
      <a-switcher v-model="basicUsageChecked" label="Switcher" />
    </template>

    <component-usage-example caption="Model as array">
      <p class="model-as-array-text">
        Checked: {{ modelAsArrayChecked }}
      </p>

      <a-switcher
        v-model="modelAsArrayChecked"
        label="First"
        value="first"
      />

      <a-switcher
        v-model="modelAsArrayChecked"
        label="Second"
        value="second"
      />

      <a-switcher
        v-model="modelAsArrayChecked"
        label="Third"
        value="third"
      />
    </component-usage-example>

    <component-usage-example caption="Label slot">
      <a-switcher v-model="labelSlotChecked">
        <span class="label-slot-highlighter">Switch</span>er
      </a-switcher>
    </component-usage-example>

    <component-usage-example caption="Disabled option">
      <a-switcher checked disabled>
        Checked
      </a-switcher>

      <a-switcher disabled>
        Unchecked
      </a-switcher>
    </component-usage-example>
  </component-page>
</template>

<script lang="ts">
import Vue from 'vue';
import ComponentPage from '@/components/page-constructor/ComponentPage.vue';
import ComponentUsageExample from '@/components/page-constructor/ComponentUsageExample.vue';
import ASwitcher from '@/components/ASwitcher.vue';

interface Data {
  basicUsageChecked: boolean;
  modelAsArrayChecked: string[];
  labelSlotChecked: boolean;
}

export default Vue.extend({
  name: 'Switcher',
  components: {
    ComponentPage,
    ComponentUsageExample,
    ASwitcher,
  },
  data(): Data {
    return {
      basicUsageChecked: false,
      modelAsArrayChecked: ['first'],
      labelSlotChecked: false,
    };
  },
});
</script>

<style lang="scss" scoped>
.model-as-array-text {
  width: 100%;
}

.label-slot-highlighter {
  font-weight: 700;
}
</style>
