<template>
  <div class="service">
    <div class="container">
      <ul>
        <li><span class="icon-setting"></span>预约维修服务</li>
        <li><span class="icon-7day"></span>7天无理由退货</li>
        <li><span class="icon-15day"></span>15天免费换货</li>
        <li><span class="icon-post"></span>满150元包邮</li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    name:'service-bar'
  }
</script>
<style lang="scss">
  .service{
    padding:33px 0;
    color:#666666;
    font-size:16px;
    .container{
      width: 1226px;
      height: 112px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      ul{
        width: 100%;
        li{
          display:inline-block;
          width:24%;
          text-align:center;
          border-right:1px solid #E5E5E5;

          span{
            display:inline-block;
            width:20px;
            height:20px;
            vertical-align: middle;
            margin-right:8px;
          }

          .icon-setting{
            display: inline-block;
            width: 20px;
            height: 20px;
            background: url('/imgs/icon-setting.png') no-repeat center;
            background-size: 20px;
          }

          .icon-7day{
            display: inline-block;
            width: 20px;
            height: 20px;
            background: url('/imgs/icon-7day.png') no-repeat center;
            background-size: 20px;
          }

          .icon-15day{
            display: inline-block;
            width: 20px;
            height: 20px;
            background: url('/imgs/icon-15day.png') no-repeat center;
            background-size: 20px;
          }

          .icon-post{
            display: inline-block;
            width: 20px;
            height: 20px;
            background: url('/imgs/icon-post.png') no-repeat center;
            background-size: 20px;
          }
        }
      }
      
    }
    

  }
</style>