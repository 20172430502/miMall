<template>
  <div class="alipay">
    <order-header title="支付宝支付"></order-header>
    <loading></loading>
  <div class="form" v-html="content"></div>
  </div>
</template>
<script>
import OrderHeader from './../components/OrderHeader'
import Loading from './../components/Loading'
  export default{
    name:'alipay',
    components:{
      OrderHeader,
      Loading
    },
    mounted(){
      this.orderPay();
    },
    data(){
      return{
        orderId:this.$route.query.orderId,
        content:''
      }
    },
    methods:{
      orderPay(){
        this.axios.post('/pay',{
          orderId:this.orderId,
          orderName:'仿小米商城支付', //扫码支付时订单名称
          amount:0.01,//单位元
          payType:1 //1支付宝，2微信
        }).then((res)=>{
          this.content = res.content;
          //设置延迟，为上一行content赋值预留充足的时间
          setTimeout(()=>{
            //支付宝的html源码即this.content里是from标签和它的一个脚本，触发该脚本
            document.getElementsByTagName('form')[0].submit();
          },1000);
        }).catch(()=>{

        })
      }
    }
  }
</script>