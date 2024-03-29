import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

/* eslint-disable @typescript-eslint/explicit-function-return-type */
const Home = () => import(/* webpackChunkName: "views/Home" */ '@/views/Home.vue');
const Breadcrumbs = () => import(/* webpackChunkName: "views/Breadcrumbs" */ '@/views/Breadcrumbs.vue');
const Button = () => import(/* webpackChunkName: "views/Button" */ '@/views/Button.vue');
const Checkbox = () => import(/* webpackChunkName: "views/Checkbox" */ '@/views/Checkbox.vue');
const ExpansionPanel = () => import(/* webpackChunkName: "views/ExpansionPanel" */ '@/views/ExpansionPanel.vue');
const Modal = () => import(/* webpackChunkName: "views/Modal" */ '@/views/Modal.vue');
const Pagination = () => import(/* webpackChunkName: "views/Pagination" */ '@/views/Pagination.vue');
const ProgressCircular = () => import(/* webpackChunkName: "views/ProgressCircular" */ '@/views/ProgressCircular.vue');
const ProgressLinear = () => import(/* webpackChunkName: "views/ProgressLinear" */ '@/views/ProgressLinear.vue');
const Radio = () => import(/* webpackChunkName: "views/Radio" */ '@/views/Radio.vue');
const Rating = () => import(/* webpackChunkName: "views/Rating" */ '@/views/Rating.vue');
const SidePanel = () => import(/* webpackChunkName: "views/SidePanel" */ '@/views/SidePanel.vue');
const Stepper = () => import(/* webpackChunkName: "views/Stepper" */ '@/views/Stepper.vue');
const Switcher = () => import(/* webpackChunkName: "views/Switcher" */ '@/views/Switcher.vue');
const Tabs = () => import(/* webpackChunkName: "views/Tabs" */ '@/views/Tabs.vue');
const Uploader = () => import(/* webpackChunkName: "views/Uploader" */ '@/views/Uploader.vue');
const Container = () => import(/* webpackChunkName: "views/Container" */ '@/views/Container.vue');
const AspectRatio = () => import(/* webpackChunkName: "views/AspectRatio" */ '@/views/AspectRatio.vue');
const Skeleton = () => import(/* webpackChunkName: "views/Skeleton" */ '@/views/Skeleton.vue');
/* eslint-enable @typescript-eslint/explicit-function-return-type */

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
    path: '/progress-linear',
    name: 'progress-linear',
    component: ProgressLinear,
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
    path: '/side-panel',
    name: 'side-panel',
    component: SidePanel,
  },
  {
    path: '/stepper',
    name: 'stepper',
    component: Stepper,
  },
  {
    path: '/switcher',
    name: 'switcher',
    component: Switcher,
  },
  {
    path: '/tabs',
    name: 'tabs',
    component: Tabs,
  },
  {
    path: '/uploader',
    name: 'uploader',
    component: Uploader,
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
  {
    path: '/skeleton',
    name: 'skeleton',
    component: Skeleton,
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

router.afterEach((to, from) => {
  Vue.prototype.$previousRoute = from;
});
