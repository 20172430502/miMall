import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueCookie from 'vue-cookie'
import store from './store'

axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
/**
 * axios拦截器
 * 接口错误拦截
 */
axios.interceptors.response.use(function(response){
  //返回数据
  let res = response.data;
  if(res.status == 0){//成功
    return res.data;
  }else if(res.status == 10){//未登录
    window.location.href = '/#/login';
  }else{//错误
    alert(res.msg);
    return Promise.reject();
  }
});

Vue.config.productionTip = false
Vue.use(VueAxios,axios);
Vue.use(VueAwesomeSwiper)
Vue.use(VueCookie);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
