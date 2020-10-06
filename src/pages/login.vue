<template>
  <div class="login">
    <div class="container">
      <a href="/#/index"><img src="/imgs/login-logo.png"></a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="checked">帐号登录</span><span class="sep-line">|</span><span>扫码登录</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入帐号" v-model="username">
          </div>
          <div class="input">
            <input type="password" placeholder="请输入密码" v-model="password">
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">登录</a>
          </div>
          <div class="tips">
            <div class="sms" @click="register">手机短信登录/注册</div>
            <div class="reg">立即注册<span>|</span>忘记密码？</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">
        <a href="javascript:;">加入我们</a><span>|</span>
        <a href="javascript:;">联系我们</a>
      </div>
      <p class="copyright">Copyright ©2019 mi.futurefe.com All Rights Reserved.</p>
    </div>
  </div>
</template>
<script>
  export default{
    name:'login',
    data(){
      return {
        username:'',
        password:'',
        userId:''
      }
    },
    methods:{
      login(){
        let username = this.username;
        let password = this.password;
        this.axios.post('/user/login',{
          username,
          password
        }).then((res)=>{
          this.$cookie.set('userId',res.id,{expires:7});
          this.$store.dispatch('saveUsername',res.username);
          this.$router.push('/index');
        })
      },
      register(){
        this.axios.post('/user/register',{
          username:'chi',
          password:'123456',
          email:'chi@163.com'
        }).then((res)=>{
          console.log(res);
        })
      }
    }
  }
</script>
<style lang="scss">
.login{
  .container{
    width: 1226px;
    margin: auto;
  }
  .wrapper{
    width: 100%;
    height: auto;
    background: url('/imgs/login-bg.jpg') no-repeat center;
    .container{
      position: relative;
      width: 1226px;
      height:576px;
      margin: auto;
      .login-form{
        width:350px;
        height:450px;
        background-color:#ffffff;
        position:absolute;
        bottom:60px;
        right:0;
        padding-left: 31px;
        padding-right: 31px;
        h3{
          display: inline-block;
          height: 23px;
          line-height:23px;
          font-size: 24px;
          font-weight: bold;
          text-align: center;
          margin:40px 30px 49px;
          .checked{
            color:#FF6600;
          }
          .sep-line{
            margin:0 32px;
          }
        }
        .input{
          display:inline-block;
          width:100%;
          height:50px;
          border:1px solid #E5E5E5;
          margin-bottom:30px;
          input{
            width: 100%;
            height: 100%;
            border: none;
            padding-left: 10px ;
          }
        }
        .btn{
          width:100%;
          line-height:50px;
          margin-top:10px;
          font-size:16px;
        }
        .tips{
          margin-top:20px;
          display:flex;
          justify-content:space-between;
          align-items: center;
          font-size:14px;
          cursor:pointer;
          .sms{
            color:#FF6600;
          }
          .reg{
            color:#999999;
            span{
              margin:0 7px;
            }
          }
        }
      }
    }
  }
  .footer{
    height:85px;
    padding-top:30px;
    color:#999999;
    font-size:16px;
    text-align:center;
    .footer-link{
      a{
        color:#999999;
        display:inline-block;
      }
      span{
        margin:0 10px;
      }
    }
    .copyright{
      margin-top:13px;
    }
  }
}
</style>