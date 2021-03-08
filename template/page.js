module.exports = {
  title: '客服权限',
  icon: '',
  descriptions: '一个由single-spa实现微前端分离出来的项目',
  keywords: '客服权限',
  css: [
    '//cdn.bootcdn.net/ajax/libs/element-ui/2.14.1/theme-chalk/index.min.css'
  ],
  script: [
    '//cdn.bootcdn.net/ajax/libs/vue/2.6.11/vue.js',
    '//cdn.bootcdn.net/ajax/libs/element-ui/2.14.1/index.min.js',
    '//cdn.bootcdn.net/ajax/libs/vue-router/3.4.8/vue-router.min.js',
    '//cdn.bootcdn.net/ajax/libs/lodash.js/4.17.20/lodash.min.js',
    '//cdn.bootcdn.net/ajax/libs/axios/0.21.1/axios.min.js'
  ],
  assetsRetryConfig:
    "{domain: ['cdn.bootcdn.net', 'unpkg.com', 'cdn.bootcdn.net']}"
};
