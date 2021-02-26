/* eslint-disable no-unused-vars */
// const PrerenderSPAPlugin = require('prerender-spa-plugin');
// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require('path')
const appConfig = require('./src/config/app.config.js')
// const pxtovw = require('postcss-px-to-viewport');

function resolve (dir) {
  return path.join(__dirname, dir)
}

const isProd = process.env.NODE_ENV === 'production'
const isDebug = process.env.VUE_APP_DEBUG === 'debug'
const assetsCDN = {
  // webpack build externals
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    vuex: 'Vuex',
    axios: 'axios'
  },
  css: [],
  js: [
    '//cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js',
    '//cdn.jsdelivr.net/npm/vue-router@3.2.0/dist/vue-router.min.js',
    '//cdn.jsdelivr.net/npm/vuex@3.4.0/dist/vuex.min.js',
    '//cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js'
  ]
}

module.exports = {
  publicPath: '/',
  assetsDir: 'assets',
  productionSourceMap: false,
  // configureWebpack: config => {
  //   if (process.env.NODE_ENV !== 'production') return;
  //   return {
  //     plugins: [
  //       new PrerenderSPAPlugin({
  //         staticDir: path.join(__dirname, 'dist'),
  //         routes: appConfig.SEORoutes,
  //         renderer: new Renderer({
  //           inject: { foo: 'bar' },
  //           headless: false,
  //           renderAfterDocumentEvent: 'render-event'
  //         })
  //       }),
  //     ],
  //   };
  // },
  chainWebpack: config => {
    // src 目录
    config.resolve.alias
      .set('@$', resolve('src'))
    // svg
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')

    config.module
      .rule('eslint')
      .use('eslint-loader')
      .loader('eslint-loader')
      .tap(options => {
        options.fix = true
        return options
      })

    // cdn 加速
    config.plugin('html').tap(args => {
      args[0].cdn = isProd ? assetsCDN : {}
      args[0].title = appConfig.title
      args[0].debug = isDebug
      return args
    }).end()
    // if (isProd) {
    //   config.externals(assetsCDN.externals)
    // }
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            // hack: `true; @import "${resolve('./src/assets/css/common.less')}";`
          },
          javascriptEnabled: true,
        }
      }
      // postcss: {
      //   //给postcss-loader传递选项
      //   plugins: [
      //     new pxtovw({
      //       unitToConvert: 'px', //需要转换的单位，默认为"px"；
      //       viewportWidth: 1000, //设计稿的视口宽度
      //       unitPrecision: 5, //单位转换后保留的小数位数
      //       propList: ['*'], //要进行转换的属性列表,*表示匹配所有,!表示不转换
      //       viewportUnit: 'vw', //转换后的视口单位
      //       fontViewportUnit: 'vw', //转换后字体使用的视口单位
      //       selectorBlackList: [], //不进行转换的css选择器，继续使用原有单位
      //       minPixelValue: 1, //设置最小的转换数值
      //       mediaQuery: false, //设置媒体查询里的单位是否需要转换单位
      //       replace: true, //是否直接更换属性值，而不添加备用属性
      //       exclude: [/node_modules/] //忽略某些文件夹下的文件
      //     })
      //   ]
      // }
    }
  }
}
