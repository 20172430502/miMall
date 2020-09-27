<template>
  <div>
    <nav-header></nav-header>
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
  import NavHeader from './../components/NavHeader'
  import ServiceBar from './../components/ServiceBar'
  import NavFooter from './../components/NavFooter'
  
  export default{
    name:'home',
    components:{
      NavHeader,
      ServiceBar,
      NavFooter
    }
  }
</script>