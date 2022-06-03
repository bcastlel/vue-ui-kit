// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Vue from 'vue';
import { Route } from 'vue-router';

declare module 'vue/types/vue' {
  // eslint-disable-next-line no-shadow
  interface Vue {
    $previousRoute: Route;
  }
}
