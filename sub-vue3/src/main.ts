import { createApp, App } from "vue";

import {
    renderWithQiankun,
    qiankunWindow,
    QiankunProps
} from 'vite-plugin-qiankun/dist/helper'

import app from  './App.vue'

let root: App;

function render(props: any) {
    const { container} = props
    root = createApp(app)
    const c = container ? container.querySelector('#app') : document.getElementById("app")
    root.mount(c) 
}
renderWithQiankun({
    mount(props) {
        console.log('Vue3微应用开始渲染啦~');
        render(props);
    },
    bootstrap: function (): void | Promise<void> {
        throw new Error("Function not implemented.");
    },
    unmount: function (props: QiankunProps): void | Promise<void> {
        throw new Error("Function not implemented.");
    },
    update: function (props: QiankunProps): void | Promise<void> {
        throw new Error("Function not implemented.");
    }
})

if(!qiankunWindow.__POWERED_BY_QIANKUN__) {
    render({})
}