<template>
  <component-page title="Uploader">
    <template #basicUsage>
      <a-uploader v-model="basicUsageFile" />
    </template>

    <component-usage-example caption="Model as array">
      <a-uploader v-model="modelAsArrayFiles" />
    </component-usage-example>

    <component-usage-example caption="Accept attr support (e.g. .xlsx, .xls)">
      <a-uploader v-model="acceptAttrSupportFile" accept=".xlsx, .xls" />
    </component-usage-example>

    <component-usage-example caption="Disabled option">
      <a-uploader v-model="disabledOptionFile" disabled />
    </component-usage-example>
  </component-page>
</template>

<script lang="ts">
import Vue from 'vue';
import ComponentPage from '@/components/page-constructor/ComponentPage.vue';
import ComponentUsageExample from '@/components/page-constructor/ComponentUsageExample.vue';
import AUploader from '@/components/AUploader.vue';

interface Data {
  basicUsageFile: File | null;
  modelAsArrayFiles: File[];
  acceptAttrSupportFile: File | null;
  disabledOptionFile: File | null;
}

export default Vue.extend({
  name: 'Uploader',
  components: {
    ComponentPage,
    ComponentUsageExample,
    AUploader,
  },
  data(): Data {
    return {
      basicUsageFile: null,
      modelAsArrayFiles: [],
      acceptAttrSupportFile: null,
      disabledOptionFile: null,
    };
  },
});
</script>

<style lang="scss" scoped>
.uploader {
  width: calc(100% - 15px);
  flex-shrink: 0;
}
</style>
