 <template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
          <a href="javascript:;">MUI</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-if="!username" @click="login()">登录</a>
          <a href="javascript:;" v-if="!username">我的订单</a>
          <a href="javascript:;" class="my-cart" @click='goToCart()'>
            <span class="icon-cart"></span> 
            购物车
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a :href="'/#/product/'+item.id" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" alt=""/>
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>REDMI红米手机</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-2.png" alt=""/>
                    </div>
                    <div class="pro-name">红米</div>
                    <div class="pro-price">5299元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-2.png" alt=""/>
                    </div>
                    <div class="pro-name">红米</div>
                    <div class="pro-price">5299元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-2.png" alt=""/>
                    </div>
                    <div class="pro-name">红米</div>
                    <div class="pro-price">5299元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-2.png" alt=""/>
                    </div>
                    <div class="pro-name">红米</div>
                    <div class="pro-price">5299元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-2.png" alt=""/>
                    </div>
                    <div class="pro-name">红米</div>
                    <div class="pro-price">5299元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-2.png" alt=""/>
                    </div>
                    <div class="pro-name">查看全部</div>
                    <div class="pro-price">查看全部</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-1.jpg" alt=""/>
                    </div>
                    <div class="pro-name">电视</div>
                    <div class="pro-price">5299元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-1.jpg" alt=""/>
                    </div>
                    <div class="pro-name">电视</div>
                    <div class="pro-price">5299元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-1.jpg" alt=""/>
                    </div>
                    <div class="pro-name">电视</div>
                    <div class="pro-price">5299元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-1.jpg" alt=""/>
                    </div>
                    <div class="pro-name">电视</div>
                    <div class="pro-price">5299元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-1.jpg" alt=""/>
                    </div>
                    <div class="pro-name">电视</div>
                    <div class="pro-price">5299元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-1.jpg" alt=""/>
                    </div>
                    <div class="pro-name">查看全部</div>
                    <div class="pro-price">查看全部</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-header",
  data(){
    return{
      username:'',
      phoneList:[]
    }
  },
  mounted(){
    this.getProductList();
  },
  methods:{
    login(){
      this.$router.push('/login');
    },
    getProductList(){
      this.axios.get('/products',{
        params:{
          categoryId:'100012'
        }
      }).then((res)=>{
        console.log(res);
          if(res.list.length>6){
            this.phoneList = res.list.slice(0,6);
          }
        })
    },
    goToCart(){
      this.$router.push('/cart');
    }
  }
};
</script>

<style lang="scss">
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;

    .container {
      width: 1226px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }

      .my-cart {
        width: 110px;
        background-color: #ff0000;
        text-align: center;
        color: #ffffff;

        .icon-cart {
          display: inline-block;
          width: 16px;
          height: 12px;
          background: url("/imgs/icon-cart-checked.png") no-repeat center;
          background-size: 16px 12px;
          margin-right: 4px;
        }
      }
    }
  }
}
.nav-header {
  .container {
    position: relative;
    width: 1226px;
    height: 112px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header-logo {
      display: inline-block;
      width: 55px;
      height: 55px;
      background-color: #ff0000;
      a {
        display: inline-block;
        width: 110px;
        height: 55px;

        &:before {
          content: "";
          display: inline-block;
          width: 55px;
          height: 55px;
          background: url("/imgs/mi-logo.png") repeat center;
          background-size: 55px 55px;
          transition: margin 0.2s;
        }
        &:after {
          content: "";
          display: inline-block;
          width: 55px;
          height: 55px;
          background: url("/imgs/mi-home.png") repeat center;
          background-size: 55px 55px;
        }
        &:hover:before {
          margin-left: -55px;
          transition: margin 0.2s;
        }
      }
    }

    .header-menu {
      display: inline-block;
      width: 643px;
      padding-left: 209px;
      .item-menu {
        display: inline-block;
        color: #333333;
        font-weight: bold;
        font-size: 16px;
        line-height: 112px;
        margin-right: 20px;
        
        span {
          // 鼠标变小手
          cursor: pointer;
        }

        //&表示元素自身，此处表示class为.item-menu的元素
        &:hover {
          color: #ff0000;
          .children {
            width: 1226px;
            height: 220px;
            opacity: 1;
          }
        }

        .children {
          position: absolute;
          width: 1226px;
          //绝对定位元素相对于最近的非 static 祖先元素定位，容器设置了相对定位
          top: 112px;
          left: 0px;
          height: 0px;
          //透明度
          opacity: 0;
          overflow: hidden;
          transition: all .5s;
          box-shadow: 0px 7px 6px 0px rgba(0,0,0,0.11);
          background-color: #ffffff;
          .product{
            //浮动元素不能超过包含他的块元素
            float: left;
            width: 16%;
            height: 220px;
            a{
              display: inline-block;
            }

            .pro-img{
              width: 100%;
              height: 120px;
              img{
                width: auto;
                height: 111px;
                margin-top: 26px;
              }
            }

            .pro-name{
              width: 100%;
              height: 30px;
              font-size: 12px;
              font-weight: bold;
              text-align: center;
            }

            .pro-price{
              width: 100%;
              height: 30px;
              font-size: 12px;
              font-weight: bold;
              text-align: center;
            }
          }
        }
      }
    }

    .header-search {
      width: 319px;
      .wrapper {
        height: 50px;
        border: 1px solid #e0e0e0;
        display: flex;
        align-items: center;
        input {
          border: none;
          box-sizing: border-box;
          border: 1px solid #e0e0e0;
          width: 264px;
          height: 50px;
          padding-left: 14px;
        }
        a {
          display: inline-block;
          width: 18px;
          height: 18px;
          background: url("/imgs/icon-search.png") repeat center;
          background-size: 18px 18px;
          margin-left: 17px;
        }
      }
    }
  }
}
</style>
