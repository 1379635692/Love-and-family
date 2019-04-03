<template>
  <div id="contanir">
    <div class="contanir-phone" :class="{'is-invalid': error}">
      <p class="phone">手机号</p>
      <input
        :type="type"
        :placeholder="placeholder"
        :value="value"
        :name="name"
        @input="$emit('input',$event.target.value)"
      >
    </div>
    <div v-if="error" class="invalid-feedback">{{error}}</div>
    <div class="Code">
      <div class="Code-Verification">
        <p class="phonet-number phone">验证码</p>
        <input  id="codeInput"
        />
      </div>
      <p class="Obtain" v-if="btnTitle" @click="$emit('btnClick')" :disabled="disabled">{{ btnTitle }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name:"inputSubmit",
    props:{
      type: {
        type: String,
        default: "text"
      },
      placeholder:String,
      value:String,
      name:String,
      disabled:Boolean,
      btnTitle:String,  //input框中的文字
      error:String  //验证不正确提示
    }
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
  .invalid-feedback{
    width: 6rem;
    margin:  0 auto;
    font-size: 0.5rem;
    height: .8rem;
    line-height: .8rem;
    color: red;
  }
  .contanir-phone{
    padding-top: 1rem;
    height: 1.2rem;
    line-height: 1.2rem;
    margin:  0 auto;
    width: 90%;
    font-size: .6rem;
  }
  .contanir-phone:after{
    clear: both;
  }
  .phone{
    width:2.5rem;
    height:1.2rem;
    text-align: center;
    line-height: 1.2rem;
    float: left;
    color: #000;
    margin: 0 auto;
  }
  input{
    width: 60%;
    float: left;
    height:1.2rem;
    line-height: 1.2rem;
    color: #999;
    text-indent: 0.3rem;
    border: none;
    outline: none;
  }
  #codeInput{
    width: 60%;
  }
  .Code{
    width: 90%;
    border: 1px solid;
    height: 1.2rem;
    line-height: 1.2rem;
    margin: 1rem auto;
    margin-bottom: .4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    font-size:0.6rem;
  }
  .Code-Verification{
    overflow: hidden;
  }
  .Obtain{
    width: 5rem;
    height: 1.2rem;
    line-height: 1.2rem;
    text-align: center;
    font-size:0.6rem;
    margin: 0;
    color: #fff;
    background-color: #8bc34a;
  }
</style>
