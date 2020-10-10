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
    this.getUser();
  },
  methods:{
    getUser(){
      this.axios.get('/user').then((res={})=>{
        //浏览器携带cookies信息向服务器发送请求，
        //获取上一次登陆的用信息，避免刷新页面后，登陆用户信息丢失
        //let user = this.$cookie.get("userId");
        /* console.log(user);
        console.log(res); */
        //to-do保存到vuex里面
        this.$store.dispatch('saveUsername',res.username);
      }).catch(()=>{
        
      })
    }
  }
}
</script>

<style>

@import './assets/scss/reset.scss';

</style>
