import Vue, { VNode } from 'vue';
import { router } from '@/router';
import App from '@/App.vue';

// eslint-disable-next-line vue/require-name-property
new Vue({
  router,
  render: (h): VNode => h(App),
}).$mount('#app');
