<template>
  <component-page title="Container">
    <template #basicUsage>
      <p>
        All the content of this page is in a container
      </p>
    </template>
  </component-page>
</template>

<script lang="ts">
import Vue from 'vue';
import ComponentPage from '@/components/page-constructor/ComponentPage.vue';

export default Vue.extend({
  name: 'Container',
  components: {
    ComponentPage,
  },
});
</script>
