const { defineConfig } = require("@vue/cli-service");

const name = "vue2App";

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3001,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd",
    },
  },
});