import Vue from 'vue';
import App from './App.vue';
import router from './router';
import singleSpaVue from 'single-spa-vue';

Vue.config.productionTip = false;

const appOptions = {
  // 挂载到父项目对应id中
  el: '#spa-container',
  render: h => h(App),
  router,
  abc: '123'
};
const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: appOptions
});

// 直接挂载会有冲突
// 如果是基座项目调用,就会存在singleSpaNavigate,否则不存在
if (!window.singleSpaNavigate) {
  delete appOptions.el;
  new Vue(appOptions).$mount('#app');
}

// 父项目注册时,会将参数传过来,可以自定义传参
export const bootstrap = props => {
  console.log(props, 'bootstrap');
  return vueLifecycles.bootstrap(props);
};
export const mount = props => {
  console.log(props, 'mount');
  return vueLifecycles.mount(props);
};
export const unmount = vueLifecycles.unmount;
