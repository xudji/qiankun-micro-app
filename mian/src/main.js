import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { registerMicroApps, start } from "qiankun";


Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

// 注册微应用
registerMicroApps([
  // {
  //   name: "reactApp", // 微应用的名称
  //   entry: "//localhost:3000", // 微应用访问地址
  //   container: "#sub-container", // 微应用渲染到哪个容器内部
  //   activeRule: "/react", // 微应用激活的路由地址
  // },
  {
    name: "vue2App",
    entry: "//localhost:3001",
    container: "#sub-container",
    activeRule: "/vue2",
  },
  // {
  //   name: "vue3App",
  //   entry: "//localhost:3002",
  //   container: "#sub-container",
  //   activeRule: "/vue3",
  // },
]);

start();
