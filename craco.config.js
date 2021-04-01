const CracoLessPlugin = require("craco-less");
const path = require("path");

module.exports = {
  plugins: [
    // 普通.less文件
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: {},
          },
        },
      },
    },
    // CSS Modules
    {
      plugin: CracoLessPlugin,
      options: {
        modifyLessRule: function (lessRule, context) {
          lessRule.test = /\.(module)\.(less)$/;
          lessRule.exclude = /node_modules/;

          return lessRule;
        },
        cssLoaderOptions: {
          modules: {
            compileType: "module",
            localIdentName: "[path][name]__[local]--[hash:base64:5]",
            localIdentContext: path.resolve(__dirname, "src"),
            exportLocalsConvention: "camelCaseOnly",
            auto: true,
          },
        },
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: {},
          },
        },
      },
    },
  ],
};
