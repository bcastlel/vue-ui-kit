<template>
  <component-page title="Button">
    <template #basicUsage>
      <a-button>Button</a-button>
    </template>

    <component-usage-example caption="Different designs">
      <a-button>
        Primary
      </a-button>

      <a-button design="secondary">
        Secondary
      </a-button>

      <a-button design="tertiary">
        Tertiary
      </a-button>
    </component-usage-example>

    <component-usage-example caption="Outlined style">
      <a-button outlined>
        Primary
      </a-button>

      <a-button design="secondary" outlined>
        Secondary
      </a-button>

      <a-button design="tertiary" outlined>
        Tertiary
      </a-button>
    </component-usage-example>

    <component-usage-example caption="Plain style">
      <a-button plain>
        Primary
      </a-button>

      <a-button design="secondary" plain>
        Secondary
      </a-button>

      <a-button design="tertiary" plain>
        Tertiary
      </a-button>
    </component-usage-example>

    <component-usage-example caption="Disabled option">
      <a-button disabled>
        Primary
      </a-button>

      <a-button design="secondary" disabled>
        Secondary
      </a-button>

      <a-button design="tertiary" disabled>
        Tertiary
      </a-button>
    </component-usage-example>

    <component-usage-example caption="Different sizes">
      <a-button size="small">
        Small
      </a-button>

      <a-button>
        Medium
      </a-button>

      <a-button size="large">
        Large
      </a-button>
    </component-usage-example>

    <component-usage-example caption="Icon slot">
      <a-button>
        <template #icon>
          <check-icon />
        </template>
        Button
      </a-button>

      <a-button reversed>
        <template #icon>
          <check-icon />
        </template>
        Reversed
      </a-button>
    </component-usage-example>

    <component-usage-example caption="Icon-only style">
      <a-button aria-label="Check">
        <template #icon>
          <check-icon />
        </template>
      </a-button>
    </component-usage-example>

    <component-usage-example caption="Loading option">
      <a-button loading>
        Primary
      </a-button>

      <a-button design="secondary" loading>
        Secondary
      </a-button>

      <a-button design="tertiary" loading>
        Tertiary
      </a-button>
    </component-usage-example>

    <component-usage-example caption="Custom tag (or component)">
      <a-button
        tag="a"
        href="https://github.com/bcastlel/vue-ui-kit"
        target="_blank"
      >
        Anchor
      </a-button>

      <a-button
        design="secondary"
        tag="router-link"
        :to="{ name: 'breadcrumbs' }"
      >
        Router link
      </a-button>
    </component-usage-example>
  </component-page>
</template>

<script lang="ts">
import Vue from 'vue';
import ComponentPage from '@/components/page-constructor/ComponentPage.vue';
import ComponentUsageExample from '@/components/page-constructor/ComponentUsageExample.vue';
import AButton from '@/components/AButton.vue';
import CheckIcon from '@/assets/check.svg';

export default Vue.extend({
  name: 'Button',
  components: {
    ComponentPage,
    ComponentUsageExample,
    AButton,
    CheckIcon,
  },
});
</script>
