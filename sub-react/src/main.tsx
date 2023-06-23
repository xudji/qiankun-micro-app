import React from "react";
import ReactDOM, { Root } from "react-dom/client";
import App from "./App";

import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

let root: Root;

function render(props: any) {
  const { container } = props;
  root = ReactDOM.createRoot(
    container
      ? container.querySelector("#root")
      : document.getElementById("root")
  );

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

renderWithQiankun({
  mount(props) {
    console.log("React微应用开始渲染啦~");
    render(props);
  },
  bootstrap() {
    console.log("React微应用初始化啦~");
  },
  unmount(props: any) {
    console.log("React微应用开始卸载啦~");
    root.unmount();
  },
  update(props: any) {
    console.log("React微应用开始更新啦~");
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
