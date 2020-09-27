<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="">加入我们</a><span>|</span>
      <a href="">联系商家</a>
    </div>
    <div class="copyright">
      © mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号
    </div>
  </div>
</template>
<script>
  export default{
    name:'nav-footer'
  }
</script>

<style lang="scss">
  .footer{
    height: 234px;
    border-top: 4px solid #FF6600;
    background-color: #333333;
    color: #999999;
    font-size: 16px;
    text-align: center;
    margin: 0 auto;
    .footer-logo{
      margin-top: 48px;
      margin-bottom: 31px;
      img{
        display: inline-block;
        width: 53px;
        height: 36px;
        margin-bottom: 13px;
      }
    }

    .footer-link{
      display: inline-block;
      a{
        color: #999;
      }
      span{
        margin: 0 10px;
      }
    }

    .copyright{
      color: #999;
      margin-top: 10px;
    }
  }

</style>
