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

    <div class="home__button-list">
      <app-button
        class="home__button"
        icon-only
        size="small"
      >
        <template #icon>
          <check-icon />
        </template>
      </app-button>

      <app-button
        class="home__button"
        design="secondary"
        disabled
      >
        <template #icon>
          <minus-icon />
        </template>
        My Button
      </app-button>

      <app-button
        class="home__button"
        size="large"
        reversed
        :loading="buttonLoading"
      >
        <template #icon>
          <minus-icon />
        </template>
        My Button
      </app-button>

      <app-button
        class="home__button"
        design="tertiary"
        size="small"
        @click.native="modalVisible = true"
      >
        Open Modal
      </app-button>
    </div>

    <expansion-panel class="home__expansion-panel">
      <template #caption="{ contentVisible }">
        {{ contentVisible ? 'Collapse content' : 'Expand content' }}
      </template>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis id asperiores, porro nobis doloremque expedita sed atque ab excepturi architecto, optio eligendi nihil ratione repellendus impedit recusandae ut adipisci sint?
    </expansion-panel>

    <progress-circular :value="progressValue">
      {{ progressValue }}
    </progress-circular>

    <app-modal
      v-if="modalVisible"
      content-class="home__modal"
      transition="scale"
      @close="modalVisible = false"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis velit laudantium sint omnis temporibus assumenda inventore qui veniam ducimus, quas totam officia! Sunt totam cupiditate ipsam nobis natus sint voluptate fuga dicta, voluptatem laborum provident exercitationem fugit libero explicabo itaque asperiores nulla incidunt quisquam labore. Odio temporibus quasi earum nisi.
    </app-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppCheckbox from '@/components/AppCheckbox.vue';
import { CheckboxChecked } from '@/models/checkbox';
import AppBreadcrumbs from '@/components/AppBreadcrumbs.vue';
import { BreadcrumbsItem } from '@/models/breadcrumbs';
import AppButton from '@/components/AppButton.vue';
import AppModal from '@/components/AppModal.vue';
import ExpansionPanel from '@/components/ExpansionPanel.vue';
import ProgressCircular from '@/components/ProgressCircular.vue';
import CheckIcon from '@/assets/check.svg';
import MinusIcon from '@/assets/minus.svg';

interface Data {
  checked: CheckboxChecked;
  indeterminate: boolean;
  breadcrumbs: BreadcrumbsItem[];
  buttonLoading: boolean;
  modalVisible: boolean;
  progressValue: number;
  progressInterval: number | null;
}

export default Vue.extend({
  name: 'Home',
  components: {
    AppCheckbox,
    AppBreadcrumbs,
    AppButton,
    AppModal,
    ExpansionPanel,
    ProgressCircular,
    CheckIcon,
    MinusIcon,
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
      buttonLoading: true,
      modalVisible: false,
      progressValue: 0,
      progressInterval: null,
    };
  },
  mounted() {
    setTimeout(() => this.buttonLoading = false, 5000);

    this.progressInterval = setInterval(() => {
      if (this.progressValue === 100) {
        this.progressValue = 0;
        return;
      }

      this.progressValue += 10;
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.progressInterval!);
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
    margin-bottom: 24px;
    border: 1px solid #ECECEC;
    padding: 16px;
    width: 256px;

    &::before {
      padding-bottom: 100%; // ratio
    }
  }

  &__button {
    &-list {
      margin-bottom: 24px;
      display: flex;
      align-items: flex-end;
    }

    &:not(:last-child) {
      margin-right: 15px;
    }
  }

  &__expansion-panel {
    margin-bottom: 24px;
    width: 256px;
  }
}
</style>
