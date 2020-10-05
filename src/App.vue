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
      this.axios.get('/user').then((res)=>{
        let user = this.$cookie.get("userId");
        console.log(user);
        console.log(res);
        //to-do保存到vuex里面
        
      })
    }
  }
}
</script>

<style>

@import './assets/scss/reset.scss';

</style>
