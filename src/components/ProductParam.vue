<template>
    <div class="nav-bar" :class="{'is_fixed':isFixed}">
        <div class="container">
            <div class="pro-title">
                {{title}}
            </div>
            <div class="pro-param">
                <a href="javascript:;">概述</a><span>|</span>
                <a href="javascript:;">参数</a><span>|</span>
                <a href="javascript:;">用户评价</a>
                <slot name="buy"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'nav-bar',
    data(){
      return {
        isFixed:false
      }
    },
    mounted(){
      window.addEventListener('scroll',this.initHeight);
    },
    methods:{
      initHeight(){
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        this.isFixed = scrollTop > 152? true:false;
      }
    },
    destroyed(){
      window.removeEventListener('scroll',this.initHeight,false)
    },
    props:['title']
}
</script>

<style lang="scss">
.nav-bar{
    &.is_fixed{
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 5;
    }
    .container{
        width: 1226px;
        height: 70px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 70px;
        border-top: 1px solid #E5E5E5;
        background-color: #ffffff;
        .pro-title{
            font-size: 18px;
            font-weight: bold;
            color: #333333;
            margin-left: 17px;
        }
        .pro-param{
            margin-right: 17px;
            a{
                font-size: 14px;
                color: #666666;   
            }
            span{
                margin: 0 10px;
            }
        }
    }
}
</style>