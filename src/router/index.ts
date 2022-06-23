import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import Breadcrumbs from '@/views/Breadcrumbs.vue';
import Button from '@/views/Button.vue';
import Checkbox from '@/views/Checkbox.vue';
import ExpansionPanel from '@/views/ExpansionPanel.vue';
import Modal from '@/views/Modal.vue';
import Pagination from '@/views/Pagination.vue';
import ProgressCircular from '@/views/ProgressCircular.vue';
import Radio from '@/views/Radio.vue';
import Rating from '@/views/Rating.vue';
import Switcher from '@/views/Switcher.vue';
import Container from '@/views/Container.vue';
import AspectRatio from '@/views/AspectRatio.vue';

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
  {
    path: '/expansion-panel',
    name: 'expansion-panel',
    component: ExpansionPanel,
  },
  {
    path: '/modal',
    name: 'modal',
    component: Modal,
  },
  {
    path: '/pagination',
    name: 'pagination',
    component: Pagination,
  },
  {
    path: '/progress-circular',
    name: 'progress-circular',
    component: ProgressCircular,
  },
  {
    path: '/radio',
    name: 'radio',
    component: Radio,
  },
  {
    path: '/rating',
    name: 'rating',
    component: Rating,
  },
  {
    path: '/switcher',
    name: 'switcher',
    component: Switcher,
  },
  {
    path: '/container',
    name: 'container',
    component: Container,
  },
  {
    path: '/aspect-ratio',
    name: 'aspect-ratio',
    component: AspectRatio,
  },
];

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  scrollBehavior(to, from, savedPosition) {
    return savedPosition ?? { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  Vue.prototype.$previousRoute = from;
  next();
});
