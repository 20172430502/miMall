<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      res:{}
    }
  },
  mounted(){
    //本地加载请求静态json文件的形式
    /* this.axios.get('/mock/user/login.json').then((res)=>{
      this.res = res;
    }) */

    //使用easy-mock平台
    //在main.js配置axios.defaults.baseURL = "http..."
    /* this.axios.get('/user/login').then((res)=>{
      this.res = res;
    }) */

    //集成mockJS
    //不发送请求，在代码阶段进行ajax拦截
     this.axios.get('/user/login').then((res)=>{
      this.res = res;
    })
  }
}
</script>
