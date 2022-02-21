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

    <app-breadcrumbs class="home__breadcrumbs" :items="breadcrumbs" />

    <div class="home__aspect-ratio aspect-ratio">
      <div class="home__aspect-ratio-content aspect-ratio__content">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem dolore neque fuga qui placeat nulla cupiditate iste? In ducimus fuga, quos non nesciunt reiciendis placeat excepturi? Reprehenderit dolorum voluptas ut.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppCheckbox from '@/components/AppCheckbox.vue';
import { CheckboxChecked } from '@/models/checkbox';
import AppBreadcrumbs from '@/components/AppBreadcrumbs.vue';
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

  &__breadcrumbs {
    margin-bottom: 18px;
  }

  &__aspect-ratio {
    border: 1px solid #ECECEC;
    padding: 16px;
    width: 256px;

    &::before {
      padding-bottom: 100%; // ratio
    }

    &-content {
      line-height: normal;
    }
  }
}
</style>
