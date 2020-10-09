<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo">
        <a href="/#/index"></a>
      </div>
      <div class="title">
        <h2>{{title}}</h2>
      </div>
      <div class="username">
        <a href="javascript:;">{{username}}</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:'order-header',
    props:['title'],
    computed:{
      username(){
        return this.$store.state.username;
      }
    }
  }
</script>
<style lang="scss">
.order-header{
  padding: 30px 0;
  .container{
    width: 1226px;
    margin: 0 auto;
    .header-logo {
      display: block;
      width: 55px;
      height: 55px;
      background-color: #ff6600;
      float: left;
      a {
        display: inline-block;
        width: 110px;
        height: 55px;

        &:before {
          content: "";
          display: inline-block;
          width: 55px;
          height: 55px;
          background: url("/imgs/mi-logo.png") no-repeat center;
          background-size: 55px 55px;
          transition: margin 0.2s;
        }
        &:after {
          content: "";
          display: inline-block;
          width: 55px;
          height: 55px;
          background: url("/imgs/mi-home.png") no-repeat center;
          background-size: 55px 55px;
        }
        &:hover:before {
          margin-left: -55px;
          transition: margin 0.2s;
        }
      }
    }
    .title{
      display: block;
      height: 55px;
      line-height: 55px;
      font-size: 28px;
      font-weight: bold;
      float: left;
      margin-left: 54px;
    }
    .username{
      display: block;
      height: 55px;
      line-height: 55px;
      float: right;
      a{
        color: #666666;
        font-size: 16px;
      }
    }
  }
  .clearfix::after{
    content:"";
    display:block;
    clear:both;
  }
}
</style>