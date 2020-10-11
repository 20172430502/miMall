<template>
  <div class="orderList">
    <order-header title="订单列表"></order-header>
  </div>
</template>
<script>
import OrderHeader from '../components/OrderHeader'
  export default{
    name:'order-list',
    components:{
      OrderHeader
    },
  }
</script>