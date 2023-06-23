import Vue from 'vue';
import { registerMicroApps, start } from 'qiankun';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
registerMicroApps([
  {
    name: 'reactApp',
    entry: '//localhost:3000',
    container: '#container',
    activeRule: '/app-react',
  },
  {
    name: 'vueApp',
    entry: '//localhost:8080',
    container: '#container',
    activeRule: '/app-vue',
  },
  {
    name: 'angularApp',
    entry: '//localhost:4200',
    container: '#container',
    activeRule: '/app-angular',
  },
]);
// 启动 qiankun
start();

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
