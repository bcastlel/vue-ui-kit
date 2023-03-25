<template>
  <component-page title="Stepper">
    <template #basicUsage>
      <a-stepper :items="commonSteps" :active-item-id.sync="basicUsageActiveStepId" />
    </template>

    <component-usage-example caption="Disabled and filled states">
      <a-stepper :items="extendedSteps" :active-item-id.sync="disabledAndFilledStatesActiveStepId" />
    </component-usage-example>

    <component-usage-example caption="Non linear option">
      <a-stepper
        :items="commonSteps"
        :active-item-id.sync="nonLinearActiveStepId"
        non-linear
      />
    </component-usage-example>

    <component-usage-example caption="Vertical style">
      <a-stepper
        :items="commonSteps"
        :active-item-id.sync="verticalStyleActiveStepId"
        vertical
      />
    </component-usage-example>
  </component-page>
</template>

<script lang="ts">
import Vue from 'vue';
import ComponentPage from '@/components/page-constructor/ComponentPage.vue';
import ComponentUsageExample from '@/components/page-constructor/ComponentUsageExample.vue';
import AStepper from '@/components/AStepper.vue';
import { Step } from '@/models/stepper';

const COMMON_STEPS: Step[] = [
  { id: 'selectingSettings', text: 'Select campaign settings' },
  { id: 'creatingAdGroup', text: 'Create an ad group' },
  { id: 'creatingAd', text: 'Create an ad' },
];

const EXTENDED_STEPS: Step[] = [
  { id: 'selectingSettings', text: 'Select campaign settings', filled: true },
  { id: 'creatingAdGroup', text: 'Create an ad group', disabled: true },
  { id: 'creatingAd', text: 'Create an ad' },
];

interface Data {
  basicUsageActiveStepId: Step['id'];
  disabledAndFilledStatesActiveStepId: Step['id'];
  nonLinearActiveStepId: Step['id'];
  verticalStyleActiveStepId: Step['id'];
}

export default Vue.extend({
  name: 'Stepper',
  components: {
    ComponentPage,
    ComponentUsageExample,
    AStepper,
  },
  data(): Data {
    return {
      basicUsageActiveStepId: COMMON_STEPS[0].id,
      disabledAndFilledStatesActiveStepId: EXTENDED_STEPS[0].id,
      nonLinearActiveStepId: COMMON_STEPS[0].id,
      verticalStyleActiveStepId: COMMON_STEPS[0].id,
    };
  },
  computed: {
    commonSteps(): Step[] {
      return COMMON_STEPS;
    },
    extendedSteps(): Step[] {
      return EXTENDED_STEPS;
    },
  },
});
</script>
