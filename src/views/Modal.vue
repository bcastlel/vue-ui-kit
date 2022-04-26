<template>
  <component-page title="Modal">
    <template #basicUsage>
      <a-button @click.native="basicUsageModalVisible = true">
        Show Modal
      </a-button>
    </template>

    <component-usage-example caption="Custom transition">
      <a-button @click.native="customTransitionModalVisible = true">
        Show Modal
      </a-button>
    </component-usage-example>

    <component-usage-example caption="Hide close button">
      <a-button @click.native="hideCloseButtonModalVisible = true">
        Show Modal
      </a-button>
    </component-usage-example>

    <a-modal v-if="basicUsageModalVisible" @close="basicUsageModalVisible = false">
      {{ loremIpsum }}
    </a-modal>

    <a-modal
      v-if="customTransitionModalVisible"
      transition="scale"
      @close="customTransitionModalVisible = false"
    >
      {{ loremIpsum }}
    </a-modal>

    <a-modal
      v-if="hideCloseButtonModalVisible"
      hide-close-button
      @close="hideCloseButtonModalVisible = false"
    >
      {{ loremIpsum }}
    </a-modal>
  </component-page>
</template>

<script lang="ts">
import Vue from 'vue';
import ComponentPage from '@/components/page-constructor/ComponentPage.vue';
import ComponentUsageExample from '@/components/page-constructor/ComponentUsageExample.vue';
import AButton from '@/components/AButton.vue';
import AModal from '@/components/AModal.vue';

const LOREM_IPSUM = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis velit laudantium sint omnis temporibus assumenda inventore qui veniam ducimus, quas totam officia! Sunt totam cupiditate ipsam nobis natus sint voluptate fuga dicta, voluptatem laborum provident exercitationem fugit libero explicabo itaque asperiores nulla incidunt quisquam labore. Odio temporibus quasi earum nisi.';

interface Data {
  basicUsageModalVisible: boolean;
  customTransitionModalVisible: boolean;
  hideCloseButtonModalVisible: boolean;
}

export default Vue.extend({
  name: 'Modal',
  components: {
    ComponentPage,
    ComponentUsageExample,
    AButton,
    AModal,
  },
  data(): Data {
    return {
      basicUsageModalVisible: false,
      customTransitionModalVisible: false,
      hideCloseButtonModalVisible: false,
    };
  },
  computed: {
    loremIpsum(): typeof LOREM_IPSUM {
      return LOREM_IPSUM;
    },
  },
});
</script>
