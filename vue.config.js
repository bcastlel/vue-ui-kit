const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      /* https://github.com/webpack-contrib/stylelint-webpack-plugin#getting-started */
      new StylelintPlugin({ extensions: ['vue', 'scss'] }),
    ],
  },
  chainWebpack: (config) => {
    /* https://github.com/JuniorTour/vue-template-babel-compiler#1-vue-cli */
    const vueRule = config.module.rule('vue');

    vueRule
      .use('vue-loader')
      .tap((options) => {
        options.compiler = require('vue-template-babel-compiler');
        return options;
      });

    /* https://github.com/visualfanatic/vue-svg-loader#vue-cli */
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
};
