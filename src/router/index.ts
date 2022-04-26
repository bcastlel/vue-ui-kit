import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import Breadcrumbs from '@/views/Breadcrumbs.vue';
import Button from '@/views/Button.vue';
import Checkbox from '@/views/Checkbox.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/breadcrumbs',
    name: 'breadcrumbs',
    component: Breadcrumbs,
  },
  {
    path: '/button',
    name: 'button',
    component: Button,
  },
  {
    path: '/checkbox',
    name: 'checkbox',
    component: Checkbox,
  },
];

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
