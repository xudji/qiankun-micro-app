import "./public-path"
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let vm = null
function render(props = {} ) {
  const { container } = props
  vm = new  Vue({
    render: (h) => h(App)
  })
  // 为了避免 #app 与其他应用的 DOM 冲突，需要限制查找范围
  .$mount(container ? container.querySelector("#app") : "#app")
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap(){
  console.log("Vue2为应用初始化了")
}

export async function mount(props) {
  console.log("Vue2微应用开始渲染了")
  render(props)
}

export async function unmount() {
  render(props)   
}

new Vue({
  render: h => h(App),
}).$mount('#app')
