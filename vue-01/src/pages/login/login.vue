<template>
  <div id="contanir">
    <div class="contanir-title">登录</div>
    <inputSubmit
      type="number"
      placeholder="手机号"
      v-model="phone"
      :btnTitle="btnTitle"
      :disabled="disabled"
      :error="errors.phone"
      @btnClick="getVerifyCode"
    />
    <p class="d_txt">温馨提示：未注册XX账号的手机号，登录时将自动注册</p>
    <div class="submit">
      <button @click="handleLogin"  :disabled="isClick">登录</button>
    </div>
    <div class="signIn">
      <div class="signInEd">
        <span></span>
        <p>第三方登录工具</p>
        <span></span>
      </div>
      <div class="tool">
        <div class="winxin">微信</div>
        <div class="qq">QQ</div>
        <div class="weibo">微博</div>
      </div>
    </div>
    <!--<div class="contanir">-->
      <!--<div class="contanir-title">登录</div>-->
      <!--<div class="contanir-phone">-->
        <!--<p class="phone">手机号</p>-->
        <!--<input type="number" placeholder="请输入号码">-->
      <!--</div>-->
      <!--<div class="Code">-->
        <!--<div class="Code-Verification">-->
          <!--<p class="phonet-number phone">验证码</p>-->
          <!--<input type="number" id="codeInput" placeholder="请输入验证码">-->
        <!--</div>-->
        <!--<p class="Obtain">获取验证码</p>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
  import inputSubmit from '../../components/inputSubmit'
    export default {
        name: "login",
      data (){
          return {
            phone:"", //手机号
            verifyCode:"", //验证码
            btnTitle:"获取验证码",
            disabled:false,  //是否可点击
            errors:{}, //验证提示信息
          }
      },
      methods:{
        validatePhone(){
          //判断输入的手机号是否合法
          if(!this.phone) {
            this.errors = {
              phone:"手机号码不能为空"
            }
            // return false
          } else if(!/^1[345678]\d{9}$/.test(this.phone)) {
            this.errors = {
              phone:"请输入正确是手机号"
            }
            // return false
          } else {
            this.errors ={}
            return true
          }
        },
        validateBtn(){
          //倒计时
          let time = 60;
          let timer = setInterval(() => {
            if(time == 0) {
              clearInterval(timer);
              this.disabled = false;
              this.btnTitle = "获取验证码";
            } else {
              this.btnTitle =time + '秒后重试';
              this.disabled = true;
              time--
            }
          },1000)
        },
        getVerifyCode(){
          //获取验证码
          if(this.validatePhone()) {
            this.validateBtn()
            //发送网络请求
            this.$axios.post('/api/posts/sms_send',{
              tpl_id: "",
              key: "",
              phone:this.phone
            }).then(res => {
              console.log(res)
            })
          }},
        handleLogin() {
          //点击发送
          this.errors = {};
          this.$axios.post('/api/posts/sms_back',{
            phone:this.phone,
            code:this.verifyCode
          }).then(res => {
            console.log(res);
            localStorage.setItem('ele_login',true)
            this.$router.push('/')
          }).catch(error =>{
            //返回错误信息
            this.errors ={
              code:error.response.data.msg
            }
          })
        },
      },
      components:{
        inputSubmit
      },
      computed: {
        //手机号和验证码都不能为空
        isClick(){
          if(!this.phone || !this.verifyCode) {
            return true
          } else {
            return false
          }

        }
      },
    }
</script>

<style scoped>
#contanir{
  width: 100%;
  height: auto;
  color: #fff;
  position: relative;
  /*overflow: hidden;*/
}
  .contanir-title{
    width: 4rem;
    margin:  0 auto;
    text-align: center;
    letter-spacing: 0.3rem;
    color: #000;
    font-size: 0.8rem;
    height: 1.6rem;
    line-height: 1.6rem;
  }
  input{
    width: 60%;
    float: left;
    height:1.6rem;
    margin-left: 0.7rem;
    line-height: 1.6rem;
    color: #999;
    font-size:0.6rem;
    text-indent: 0.3rem;
    border: none;
  }
  .submit{
    width: 90%;
    text-align: center;
    height: 1.6rem;
    line-height: 1.6rem;
    margin: 1rem auto;
  }
.submit button{
  font-size: .7rem;
  width: 100%;
  text-align: center;
  border: none;
  height: 1.6rem;
  line-height: 1.6rem;
  background-color:#8bc34a;
  color: #fff;
  letter-spacing: 0.3rem;
  border-radius: 2px;
}
  .d_txt{
    width: 92%;
    height: 1.2rem;
    line-height: 1.2rem;
    margin: 0 auto;
    text-align: left;
    font-size: 0.5rem;
    color: rgba(169,169,169,1);
    overflow: hidden;
  }
  .signIn{
    width: 90%;
    height: 3rem;
    /*border: 1px solid red;*/
    margin: 0 auto;
    position: fixed;
    bottom:2rem;
    left: 0;
    right: 0;
    display: flex;
    flex-wrap: wrap;
  }
  .signInEd{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 0.5rem;
    color: #aeb6be;
  }
.signInEd span{
  width: 30%;
  height: 0.1rem;
  background-color: #e5e5e5;
}
.tool{
  width: 100%;
  /*border: 1px solid greenyellow;*/
  height:2rem;
  color: #000;
  font-size: 0.5rem;
  display: flex;
  justify-content: space-around;
  align-content:center;
  align-items: center;
  align-self: center;
}
.tool div{
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  border-radius: 50%;
  border: 1px solid;
}
  .winxin{
    color: green;
    border-color: green;
  }
  .qq{
    color: #49b9f1;
    border-color: #49b9f1;
  }
  .weibo{
    color: #f7706f;
    border-color: #f7706f;
  }
</style>
