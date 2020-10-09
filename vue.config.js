const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [".js", ".json", ".vue", "*"],
      alias: {
        "@": path.join(__dirname, "src")
      }
    }
  }
};
