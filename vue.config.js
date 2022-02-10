module.exports = {
  chainWebpack: (config) => {
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
