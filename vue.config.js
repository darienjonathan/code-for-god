const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [".js", ".json", ".vue", "*"],
      alias: {
        "@": path.join(__dirname, "src")
      }
    }
  },
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Paket Natal Online 2020";
      return args;
    });
  }
};
