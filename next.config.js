const withImages = require("next-images");
const debug = process.env.NODE_ENV !== "production";

module.exports = withImages({
  esModule: true,
  devIndicators: {
    autoPrerender: false
  }
});

module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" }
    };
  },
  //assetPrefix: '',
  assetPrefix: !debug ? "/Next-gh-page-example/" : "",
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    // console.log('webpack');
    // console.log(config.module.rules, dev);
    config.module.rules = config.module.rules.map(rule => {
      if (rule.loader === "babel-loader") {
        rule.options.cacheDirectory = false;
      }
      return rule;
    });
    // Important: return the modified config
    return config;
  } /*,
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // console.log('webpackDevMiddleware');
    // console.log(config);
    // Important: return the modified config
    return config
  }, */
};
