import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
//vue-axios用于将axios集成到Vuejs的小包装器
import VueAxios from 'vue-axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueCookie from 'vue-cookie'
import store from './store'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
/**
 * axios拦截器
 * 接口错误拦截
 */
axios.interceptors.response.use(function(response){
  //返回数据
  let res = response.data;
  let path = location.hash;
  if(res.status == 0){//成功
    return res.data;
  }else if(res.status == 10){//未登录
    if(path!='#/index'){
      window.location.href = '/#/login';
    }
    return Promise.reject(res);
  }else{//错误
    return Promise.reject(res);
  }
});

//$只是一种约定俗成的命名方式
//表示这个属性或者方法存在于 Vue 实例的原型链上：都可以通过this.$+name来调用

Vue.config.productionTip = false;
Vue.use(VueAxios,axios);
Vue.use(VueAwesomeSwiper);
Vue.use(VueCookie);
Vue.prototype.$message = Message;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
