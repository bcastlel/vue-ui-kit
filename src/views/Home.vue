<template>
  <div class="home">
    <div class="intro">
      <div class="container">
        <div class="intro__body">
          <vue-logo-icon class="intro__logo" />

          <h1 class="intro__title">
            Vue UI Kit
          </h1>
        </div>
      </div>
    </div>

    <div class="components">
      <div class="container">
        <div class="components__grid">
          <div class="components__col">
            <h2 class="components__caption">
              Components
            </h2>

            <ul class="components__item-list">
              <li class="components__item">
                <router-link :to="{ name: 'breadcrumbs' }">
                  Breadcrumbs
                </router-link>
              </li>

              <li class="components__item">
                <router-link :to="{ name: 'button' }">
                  Button
                </router-link>
              </li>

              <li class="components__item">
                <router-link :to="{ name: 'checkbox' }">
                  Checkbox
                </router-link>
              </li>

              <li class="components__item">
                <router-link :to="{ name: 'expansion-panel' }">
                  Expansion panel
                </router-link>
              </li>

              <li class="components__item">
                <router-link :to="{ name: 'modal' }">
                  Modal
                </router-link>
              </li>

              <li class="components__item">
                <router-link :to="{ name: 'pagination' }">
                  Pagination
                </router-link>
              </li>

              <li class="components__item">
                <router-link :to="{ name: 'progress-circular' }">
                  Progress circular
                </router-link>
              </li>

              <li class="components__item">
                <router-link :to="{ name: 'progress-linear' }">
                  Progress linear
                </router-link>
              </li>

              <li class="components__item">
                <router-link :to="{ name: 'radio' }">
                  Radio
                </router-link>
              </li>

              <li class="components__item">
                <router-link :to="{ name: 'rating' }">
                  Rating
                </router-link>
              </li>

              <li class="components__item">
                <router-link :to="{ name: 'side-panel' }">
                  Side panel
                </router-link>
              </li>

              <li class="components__item">
                <router-link :to="{ name: 'stepper' }">
                  Stepper
                </router-link>
              </li>

              <li class="components__item">
                <router-link :to="{ name: 'switcher' }">
                  Switcher
                </router-link>
              </li>

              <li class="components__item">
                <router-link :to="{ name: 'tabs' }">
                  Tabs
                </router-link>
              </li>

              <li class="components__item">
                <router-link :to="{ name: 'uploader' }">
                  Uploader
                </router-link>
              </li>
            </ul>
          </div>

          <div class="components__col">
            <h2 class="components__caption">
              Blocks
            </h2>

            <ul class="components__item-list">
              <li class="components__item">
                <router-link :to="{ name: 'container' }">
                  Container
                </router-link>
              </li>

              <li class="components__item">
                <router-link :to="{ name: 'aspect-ratio' }">
                  Aspect ratio
                </router-link>
              </li>

              <li class="components__item">
                <router-link :to="{ name: 'skeleton' }">
                  Skeleton
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import VueLogoIcon from '@/assets/vue-logo.svg';

export default Vue.extend({
  name: 'Home',
  components: {
    VueLogoIcon,
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/vars';

.intro {
  padding: 100px 0 50px;
  background-color: $secondary-lightest;

  @media (max-width: $s-breakpoint) {
    padding-top: 65px;
  }

  &__body {
    text-align: center;
  }

  &__logo {
    width: 300px;
    height: 300px;

    @media (max-width: $xs-breakpoint) {
      width: 290px;
      height: 290px;
    }
  }

  &__title {
    font-family: Raleway, Verdana, sans-serif;
    font-size: 56px;
    font-weight: 600;
  }
}

.components {
  padding: 45px 0 65px;

  &__grid {
    margin: -15px;
    display: flex;
    flex-wrap: wrap;
  }

  &__col {
    padding: 15px;
    width: 50%;

    @media (max-width: $s-breakpoint) {
      width: 100%;
    }
  }

  &__caption {
    margin-bottom: 17px;
    font-size: 42px;
  }

  &__item {
    &-list {
      padding-left: 28px;
      list-style: disc inside;
    }

    font-size: 19px;

    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
}
</style>
