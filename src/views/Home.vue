<template>
  <div class="home">
    <h1 class="home__title">
      Home
    </h1>

    <app-checkbox
      v-model="checked"
      label="my default"
      :indeterminate.sync="indeterminate"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppCheckbox from '@/components/AppCheckbox.vue';
import { CheckboxChecked } from '@/models/checkbox';

interface Data {
  checked: CheckboxChecked;
  indeterminate: boolean;
}

export default Vue.extend({
  name: 'Home',
  components: {
    AppCheckbox,
  },
  data(): Data {
    return {
      checked: false,
      indeterminate: true,
    };
  },
});
</script>

<style lang="scss" scoped>
.home {
  &__title {
    margin-bottom: 24px;
  }
}
</style>
