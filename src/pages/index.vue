<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a class="menu-item-list" href="javascript;:">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item,index) in menuList" :key="index">
                  <li v-for="(sub,i) in item" :key="i">
                    <a :href="'/#/product/'+sub.id">
                      <img v-lazy="sub.img">
                      {{sub.name}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a class="menu-item-list" href="javascript;:">手机 电话卡</a>
            </li>
            <li class="menu-item">
              <a class="menu-item-list" href="javascript;:">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a class="menu-item-list" href="javascript;:">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a class="menu-item-list" href="javascript;:">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a class="menu-item-list" href="javascript;:">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a class="menu-item-list" href="javascript;:">电源 配件</a>
            </li>
            <li class="menu-item">
              <a class="menu-item-list" href="javascript;:">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper v-bind:options="swiperOption">
          <swiper-slide v-for="(item,index) in slideList" v-bind:key="index">
            <a v-bind:href="'/#/product/'+item.id"><img v-lazy="item.img"></a>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a :href="'/#/product/'+item.id" v-for="(item,index) in adsList" :key="index">
          <img v-lazy="item.img">
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img v-lazy="'/imgs/banner-1.png'" alt="">
        </a>
      </div>
      <div class="product-box">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35"><img v-lazy="'/imgs/mix-alpha.jpg'"></a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(item,i) in phoneList" :key="i">
              <span class="new-pro">新品</span>
              <div class="item-img">
                <img v-lazy="item.mainImage">
              </div>
              <div class="item-info">
                <h3>{{item.name}}</h3>
                <p>{{item.subtitle}}</p>
                <p class="price" @click="changeModalState(item.id)">{{item.price}}元</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <modal 
        title="提示"
        sureText="查看购物车"
        btnType="1"
        modalType="middle"
        :showModal="showModal"
        @doChange = "closeModal"
        @sure = "goToCart">
        <template v-slot:body>
          <p>添加商品成功</p>
        </template>
      </modal>
    </div>
    <service-bar></service-bar>
  </div>
</template>
<script>
import ServiceBar from './../components/ServiceBar'
import { swiper, swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Modal from './../components/Modal'
  export default{
    name:'index',
    data(){
      return {
        swiperOption:{
          autoplay:true,
          loop:true,
          effect:'cube',
          cubeEffect: {
            shadowOffset: 100,
            shadowScale: 0.6
          },
          pagination: {
            el: '.swiper-pagination',
            clickable:true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        },
        slideList:[
          {
            id:'42',
            img:'/imgs/slider/slide-1.jpg'
          },
          {
            id:'45',
            img:'/imgs/slider/slide-2.jpg'
          },
          {
            id:'46',
            img:'/imgs/slider/slide-3.jpg'
          },
          {
            id:'',
            img:'/imgs/slider/slide-4.jpg'
          },
          {
            id:'',
            img:'/imgs/slider/slide-5.jpg'
          }
        ],
        menuList:[
          [
            {
              id:'30',
              img:'/imgs/item-box-1.png',
              name:'小米cc9'
            },
            {
              id:'31',
              img:'/imgs/item-box-2.png',
              name:'小米8青春版'
            },
            {
              id:'32',
              img:'/imgs/item-box-3.jpg',
              name:'redmi k20 pro'
            },
            {
              id:'33',
              img:'/imgs/item-box-4.jpg',
              name:'移动4G+专区'
            }
          ],
          [
            {
              id:'30',
              img:'/imgs/item-box-1.png',
              name:'小米cc9'
            },
            {
              id:'31',
              img:'/imgs/item-box-2.png',
              name:'小米8青春版'
            },
            {
              id:'32',
              img:'/imgs/item-box-3.jpg',
              name:'redmi k20 pro'
            },
            {
              id:'33',
              img:'/imgs/item-box-4.jpg',
              name:'移动4G+专区'
            }
          ],
          [
            {
              id:'30',
              img:'/imgs/item-box-1.png',
              name:'小米cc9'
            },
            {
              id:'31',
              img:'/imgs/item-box-2.png',
              name:'小米8青春版'
            },
            {
              id:'32',
              img:'/imgs/item-box-3.jpg',
              name:'redmi k20 pro'
            },
            {
              id:'33',
              img:'/imgs/item-box-4.jpg',
              name:'移动4G+专区'
            }
          ],
          [
            {
              id:'30',
              img:'/imgs/item-box-1.png',
              name:'小米cc9'
            },
            {
              id:'31',
              img:'/imgs/item-box-2.png',
              name:'小米8青春版'
            },
            {
              id:'32',
              img:'/imgs/item-box-3.jpg',
              name:'redmi k20 pro'
            },
            {
              id:'33',
              img:'/imgs/item-box-4.jpg',
              name:'移动4G+专区'
            }
          ],
          [
            {
              id:'30',
              img:'/imgs/item-box-1.png',
              name:'小米cc9'
            },
            {
              id:'31',
              img:'/imgs/item-box-2.png',
              name:'小米8青春版'
            },
            {
              id:'32',
              img:'/imgs/item-box-3.jpg',
              name:'redmi k20 pro'
            },
            {
              id:'33',
              img:'/imgs/item-box-4.jpg',
              name:'移动4G+专区'
            }
          ],
          [
            {
              id:'30',
              img:'/imgs/item-box-1.png',
              name:'小米cc9'
            },
            {
              id:'31',
              img:'/imgs/item-box-2.png',
              name:'小米8青春版'
            },
            {
              id:'32',
              img:'/imgs/item-box-3.jpg',
              name:'redmi k20 pro'
            },
            {
              id:'33',
              img:'/imgs/item-box-4.jpg',
              name:'移动4G+专区'
            }
          ]
        ],
        adsList:[
          {
            id:33,
            img:'/imgs/ads/ads-1.png'
          },{
            id:48,
            img:'/imgs/ads/ads-2.jpg'
          },{
            id:45,
            img:'/imgs/ads/ads-3.png'
          },{
            id:47,
            img:'/imgs/ads/ads-4.jpg'
          }
        ],
        phoneList:[],
        showModal:false
      }
    },
    components: {
      swiper , 
      swiperSlide,
      Modal,
      ServiceBar
    },
    mounted(){
      this.getPhoneList();
    },
    methods:{
      getPhoneList(){
        this.axios.get('/products',{
          params:{
            categoryId:100012,
            pageSize:14
          }
        }).then((res)=>{
          this.phoneList = res.list.slice(6,14);
        })
      },
      changeModalState(id){
        this.axios.post('/carts',{
          productId:id,
          selected:true
        }).then(()=>{
          this.showModal = true;
        }).catch(()=>{
          this.$router.push('/login');
        }) 
      },
      closeModal(){
        this.showModal = false;
      },
      goToCart(){
        this.$router.push('/cart');
      }
    }
    
  }
</script>

<style lang="scss">
.index{
  .container{
    width: 1226px;
    margin: auto;
    .swiper-box{
      position: relative;
      width: 1226px;
      height: 451px;
      .nav-menu{
        position: absolute;
        width: 264px;
        height: 409px;
        left: 0;
        top: 0;
        z-index: 3;
        padding: 26px 0;
        background-color: #55585A7A;
        .menu-wrap{
          .menu-item{
            height: 50px;
            line-height: 50px;
            .menu-item-list{
              display: inline-block;
              width: 234px;
              position: relative;
              font-size: 16px;
              color: #ffffff;
              padding-left: 30px;
              &:after{
                position: absolute;
                content: ' ';
                right: 30px;
                top: 17.5px;
                display: inline-block;
                width: 10px;
                height: 15px;
                background: url('/imgs/icon-arrow.png') no-repeat center;
                background-size:10px 15px;
              }
            }
            &:hover{
              background-color: #FF6600;
              .children{
                display: block;
              }
            }
            .children{
                display: none;
                position: absolute;
                width: 962px;
                height: 458px;
                top: 0;
                left: 264px;
                border: 1px solid #E5E5;
                background-color: #ffffff;
                ul{
                  display: flex;
                  justify-content: space-between;
                  height: 75px;
                  li{
                    height: 75px;
                    line-height: 75px;
                    flex: 1;
                    padding-left: 23px;
                    z-index: 1;
                    a{
                      color: black;
                      font-size: 14px;
                      img{
                        width: 35px;
                        height: auto;
                        vertical-align: middle;
                        margin-right: 15px;
                      }
                    }
                    
                  }
                }
              }
          }
        }
      }
      .swiper-container{
        .swiper-button-prev{
          left: 274px;
        }
        img{
          width: 100%;
          height: 100%;
        }
      }
    }

    .ads-box{
      display: flex;
      justify-content: space-between;
      align-items: center;
      img{
        display: inline-block;
        width: 296px;
        height: 167px;
        margin-top: 20px;
        margin-bottom: 25px;
      }
    }

    .banner{
      img{
        display: inline-block;
        width: 1226px;
        height: 130px;
        margin-bottom: 50px;
      }
    }

    .product-box{
      h2{
        font-size: 22px;
        height: 21px;
        line-height: 21px;
        color: #333333;
        margin-bottom: 20px;
      }
      .wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .banner-left{
          width: 224px;
          height: 619px;
          img{
            display: inline-block;
            width: 224px;
            height: 619px;
          }
        }

        .list-box{
          width: 986px;
          display: flex;
          flex-wrap:wrap;
          .list{
            width: 236px;
            height: 302px;
            text-align: center;
            span{
              display: inline-block;
              width: 67px;
              height: 24px;
              font-size: 14px;
              line-height: 24px;
              color: #ffffff;
              &.new-pro{
                background-color: #7ECF68;
              }
              &.kill-pro{
                background-color: #E82626;
              }
            }

            .item-img{
              img{
                display: inline-block;
                width: 236px;
                height: 195px;
              }
            }

            .item-info{
              h3{
                font-size: 14px;
                color: #333333;
                line-height: 14px;
                font-weight: bold;
              }
              p{
                color: #999999;
                line-height: 13px;
                margin: 6px auto 13px;
              }
              .price{
                color: #F20A0A;
                font-size: 14px;
                cursor: pointer;
                &:after{
                  content: ' ';
                  display: inline-block;
                  width: 22px;
                  height: 22px;
                  background: url('/imgs/icon-cart-hover.png') no-repeat center;
                  background-size: 22px;
                  margin-left: 15px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>