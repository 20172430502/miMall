<template>
  <div class="order-list">
    <order-header title="订单列表"></order-header>
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <div class="order" v-for="(order,index) in list" :key="index">
            <div class="order-title">
              <div class="item-info fl">
                {{order.createTime}}
                <span>|</span>
                {{order.receiverName}}
                <span>|</span>
                订单号：{{order.orderNo}}
                <span>|</span>
                {{order.paymentTypeDesc}}
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{order.payment}}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix" v-for="(item,index) in order.orderItemVoList" :key="index">
              <div class="good-box fl">
                <div class="good-list">
                  <div class="good-img">
                    <img :src="item.productImage">
                  </div>
                  <div class="good-name">
                    <div class="p-name">{{item.productName}}</div>
                    <div class="p-money">{{item.currentUnitPrice}} X {{item.quantity}}元</div>
                  </div>
                </div>
              </div>
              <div class="good-state fr" v-if="order.status==20">
                <a href="javascript:;">{{order.statusDesc}}</a>
              </div>
              <div class="good-state fr" v-if="order.status==10">
                <a href="javascript:;" @click="goPay(order.orderNo)">{{order.statusDesc}}</a>
              </div>
            </div>
          </div>
          <loading v-if="loading"></loading>
          <!-- 分页器分页
            <el-pagination
            class="posination"
            background
            layout="prev, pager, next"
            :pageSize="pageSize"
            :total="total"
            @current-change="handleChange"
            >
          </el-pagination> -->
          <div class="scroll-more"
            v-infinite-scroll="scrollMore" 
            infinite-scroll-disabled="busy" 
            infinite-scroll-distance="410">
            <img src="/imgs/loading-svg/loading-spinning-bubbles.svg" v-if="loading">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import OrderHeader from './../components/OrderHeader'
  import Loading from './../components/Loading'
  import { Pagination } from 'element-ui'
  import infiniteScroll from 'vue-infinite-scroll'
  export default{
    name:'order-list',
    components:{
      OrderHeader,
      Loading,
      [Pagination.name]:Pagination
    },
    directives: {
      infiniteScroll
    },
    data(){
      return {
        list:[],
        loading:false,
        pageSize:3,
        pageNum:1,
        total:0,
        //busy为true不触发，busy为false触发
        busy:true
      }
    },
    mounted(){
      //this.getOrderList();
      this.getList();
    },
    methods:{
      /* getOrderList(){
        this.loading = true;
        this.axios.get('/orders',{
          params:{
            pageNum:this.pageNum,
            pageSize:this.pageSize
          }    
        }).then((res)=>{
          this.loading = false;
          this.list = res.list;
          this.total = res.total;
        }).catch(()=>{
          this.loading = false;
        })
      }, */
      getList(){
        this.loading = true;
        this.axios.get('/orders',{
          params:{
            pageNum:this.pageNum,
            pageSize:this.pageSize
          }    
        }).then((res)=>{
          this.loading = false;
          this.list = this.list.concat(res.list);
          if(res.hasNextPage){
            this.busy = false;
          }else{
            this.busy = true;
          }
        }).catch(()=>{
        })
      },
      goPay(orderNo){
        this.$router.push({
          path:'/order/pay',
          query:{
            orderNo
          }
        })
      },
      /* 第一种分页方式---分页器分页
      handleChange(pageNum){
        this.pageNum = pageNum;
        this.getOrderList();
      } 
      */
     /*第二种分页方式 --- 滚动条分页*/
     scrollMore(){
       this.busy = true;
       setTimeout(()=>{
         this.pageNum++;
         this.getList();
       },500);
     }
    }
  }
</script>
<style lang="scss">
  .order-list{
    .wrapper{
      width: 1226px;
      margin: 0 auto;
      background-color:#F5F5F5;
      padding-top:33px;
      padding-bottom:110px;
      .order-box{
        .order{
          border: 1px solid #E4E4E4;
          background-color:#ffffff;
          margin-bottom:31px;
          &:last-child{
            margin-bottom:0;
          }
          .order-title{
            height: 74px;
            line-height: 74px;
            background-color:#FFFAF7;
            padding:0 43px;
            font-size:16px;
            color:#666666;
            .item-info{
              span{
                margin:0 9px;
              }
            }
            .money{
              font-size:26px;
              color:#333333;
            }
          }
          .order-content{
            padding:0 43px;
            .good-box{
              width:88%;
              .good-list{
                display: flex;
                align-items: center;
                height:145px;
                .good-img{
                  width:112px;
                  img{
                    width:100%;
                  }
                }
                .good-name{
                  font-size:20px;
                  color:#333333;
                }
              }
            }
            .good-state{
              height: 145px;
              line-height: 145px;
              font-size: 20px;
              color:#FF6600;
              a{
                color:#FF6600;
              }
            }
          }
        }
        .pagination{
          text-align:right;
        }
        .el-pagination.is-background .el-pager li:not(.disabled).active{
          background-color: #FF6600;
        }
        .el-button--primary{
          background-color: #FF6600;
          border-color: #FF6600;
        }
        .load-more,.scroll-more{
          text-align:center;
        }
      }
    }
    .posination{
      text-align: right;
    }
    .scroll-more{
      text-align: center;
    }
    .fl{
      float: left;
    }
    .fr{
      float: right;
    }
    .clearfix::after{
      content: " ";
      clear: both;
      display: block;
    }
  }
</style>