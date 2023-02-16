<template>
  <component-page title="Checkbox" enlarged-example-gap>
    <template #basicUsage>
      <a-checkbox v-model="basicUsageChecked" label="Checkbox" />
    </template>

    <component-usage-example caption="Model as array">
      <p class="model-as-array-text">
        Checked: {{ modelAsArrayChecked }}
      </p>

      <a-checkbox
        v-model="modelAsArrayChecked"
        label="First"
        value="first"
      />

      <a-checkbox
        v-model="modelAsArrayChecked"
        label="Second"
        value="second"
      />

      <a-checkbox
        v-model="modelAsArrayChecked"
        label="Third"
        value="third"
      />
    </component-usage-example>

    <component-usage-example caption="Label slot">
      <a-checkbox v-model="labelSlotChecked">
        Check<span class="label-slot-highlighter">box</span>
      </a-checkbox>
    </component-usage-example>

    <component-usage-example caption="Indeterminate state">
      <a-checkbox
        v-model="indeterminateStateChecked"
        label="Checkbox"
        :indeterminate.sync="indeterminateStateIndeterminate"
      />
    </component-usage-example>

    <component-usage-example caption="Disabled option">
      <a-checkbox
        label="Checked"
        checked
        disabled
      />

      <a-checkbox
        label="Indeterminate"
        disabled
        indeterminate
      />

      <a-checkbox
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
import ACheckbox from '@/components/ACheckbox.vue';

interface Data {
  basicUsageChecked: boolean;
  modelAsArrayChecked: string[];
  labelSlotChecked: boolean;
  indeterminateStateChecked: boolean;
  indeterminateStateIndeterminate: boolean;
}

export default Vue.extend({
  name: 'Checkbox',
  components: {
    ComponentPage,
    ComponentUsageExample,
    ACheckbox,
  },
  data(): Data {
    return {
      basicUsageChecked: false,
      modelAsArrayChecked: ['first'],
      labelSlotChecked: false,
      indeterminateStateChecked: false,
      indeterminateStateIndeterminate: true,
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
