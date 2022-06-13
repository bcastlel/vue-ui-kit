import Vue from 'vue';
import { router } from '@/router';
import App from '@/App.vue';

// eslint-disable-next-line vue/require-name-property
new Vue({
  router,
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  render: (h) => h(App),
}).$mount('#app');
