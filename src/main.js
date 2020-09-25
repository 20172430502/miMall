import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

//根据前端的跨域方式（此处为代理方式）做调整
//axios.defaults.baseURL = process.env.API_ROOT;
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
  }
});

Vue.config.productionTip = false
Vue.use(VueAxios,axios);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
