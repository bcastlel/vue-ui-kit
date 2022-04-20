<template>
  <component-page title="Button">
    <template #basicUsage>
      <app-button>Button</app-button>
    </template>

    <component-usage-example caption="Different designs">
      <app-button>
        Primary
      </app-button>

      <app-button design="secondary">
        Secondary
      </app-button>

      <app-button design="tertiary">
        Tertiary
      </app-button>
    </component-usage-example>

    <component-usage-example caption="Disabled option">
      <app-button disabled>
        Primary
      </app-button>

      <app-button design="secondary" disabled>
        Secondary
      </app-button>

      <app-button design="tertiary" disabled>
        Tertiary
      </app-button>
    </component-usage-example>

    <component-usage-example caption="Different sizes">
      <app-button size="small">
        Small
      </app-button>

      <app-button>
        Medium
      </app-button>

      <app-button size="large">
        Large
      </app-button>
    </component-usage-example>

    <component-usage-example caption="Icon slot">
      <app-button>
        <template #icon>
          <check-icon />
        </template>
        Button
      </app-button>

      <app-button reversed>
        <template #icon>
          <check-icon />
        </template>
        Reversed
      </app-button>
    </component-usage-example>

    <component-usage-example caption="Icon-only style">
      <app-button icon-only>
        <template #icon>
          <check-icon />
        </template>
      </app-button>
    </component-usage-example>

    <component-usage-example caption="Loading option">
      <app-button loading>
        Primary
      </app-button>

      <app-button design="secondary" loading>
        Secondary
      </app-button>

      <app-button design="tertiary" loading>
        Tertiary
      </app-button>
    </component-usage-example>
  </component-page>
</template>

<script lang="ts">
import Vue from 'vue';
import ComponentPage from '@/components/page-constructor/ComponentPage.vue';
import ComponentUsageExample from '@/components/page-constructor/ComponentUsageExample.vue';
import AppButton from '@/components/AButton.vue';
import CheckIcon from '@/assets/check.svg';

export default Vue.extend({
  name: 'Button',
  components: {
    ComponentPage,
    ComponentUsageExample,
    AppButton,
    CheckIcon,
  },
});
</script>
