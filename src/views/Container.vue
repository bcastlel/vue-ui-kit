<template>
  <component-page title="Container">
    <template #basicUsage>
      All the content of this page is in a container
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
