<template>
  <div class="home">
    <h1 class="home__title">
      Home
    </h1>

    <app-checkbox
      v-model="checked"
      class="home__checkbox"
      label="my default"
      :indeterminate.sync="indeterminate"
    />

    <app-breadcrumbs :items="breadcrumbs" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppCheckbox from '@/components/AppCheckbox.vue';
import AppBreadcrumbs from '@/components/AppBreadcrumbs.vue';
import { CheckboxChecked } from '@/models/checkbox';
import { BreadcrumbsItem } from '@/models/breadcrumbs';

interface Data {
  checked: CheckboxChecked;
  indeterminate: boolean;
  breadcrumbs: BreadcrumbsItem[];
}

export default Vue.extend({
  name: 'Home',
  components: {
    AppCheckbox,
    AppBreadcrumbs,
  },
  data(): Data {
    return {
      checked: false,
      indeterminate: true,
      breadcrumbs: [
        { text: 'link 1', to: '/link1' },
        { text: 'link 2', to: '/link2' },
        { text: 'link 3', to: '/link3' },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.home {
  &__title {
    margin-bottom: 24px;
  }

  &__checkbox {
    margin-bottom: 18px;
  }
}
</style>
