<template>
<div id="message">
  <div class="messageTitle">
    <span class="back">
      <i class="iconfont iconreturn"></i>
      <span class="de_name">金角大王</span>
    </span>
  </div>
  <div class="messageData">
    <div class="dataImg">
      <img src="../../assets/lo1.jpg" alt="">
    </div>
    <div class="dataGift">
      <span class="sgift">收到的礼物</span>
      <div class="gift-icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconpingguo"></use>
        </svg>
        <span>1000</span>
      </div>
    </div>
    <div class="dataGift">
      <span class="sgift">我的礼物</span>
      <div class="gift-icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconpingguo"></use>
        </svg>
        <span>1000</span>
      </div>
    </div>
    <div class="dataGift">
      <span class="sgift seiler">提现</span>
      <div class="sgift seiler">购买礼物</div>
    </div>
    <div class="back_right">
      <i class="iconfont iconnext"></i>
    </div>
  </div>
  <div class="setWrapper">
    <div class="set_nav">
      <span>打赏设置</span>
      <div class="set_inner">
        <div class="oninner">
          <span class="de">男</span><input type="radio" name="func">
        </div>
        <div class="oninner">
          <span class="de">女</span><input type="radio" name="func">
        </div>
        <div class="oninner">
          <span class="de">取消</span><input type="radio" name="func">
        </div>

      </div>

    </div>
    <ul class="setContent">
      <li class="set_li">
        <span>收到礼物记录</span>
        <i class="iconfont iconnext"></i>
      </li>
      <li class="set_li">
        <span>打赏礼物的记录</span>
        <i class="iconfont iconnext"></i>
      </li>
      <li class="set_li">
        <span>打赏分红的记录</span>
        <i class="iconfont iconnext"></i>
      </li>
      <li class="set_li">
        <span>邀请好友的记录</span>
        <i class="iconfont iconnext"></i>
      </li>
      <li class="set_li">
        <span>发动态朋友圈</span>
        <i class="iconfont iconnext"></i>
      </li>
      <li class="set_li">
        <span>发布广告</span>
        <i class="iconfont iconnext"></i>
      </li>
      <li class="set_li">
        <span>提现记录</span>
        <i class="iconfont iconnext"></i>
      </li>
      <li class="set_li">
        <span>账户安全</span>
        <i class="iconfont iconnext"></i>
      </li>
      <li class="set_li">
        <span>消息免打扰</span>
        <mt-switch></mt-switch>
      </li>
      <li class="set_li">
        <span>关于小嘴娃</span>
        <i class="iconfont iconnext"></i>
      </li>
      <li class="set_li">
        <span>客服</span>
        <i class="iconfont iconnext"></i>
      </li>
    </ul>
    <div class="end_submit">退出登录</div>
  </div>
</div>
</template>

<script>
    export default {
        name: "message"
    }
</script>

<style  scoped>
#message{
  width: 100%;
  height: 100%;
  color: #000;
  font-size: .6rem;
  overflow: hidden;
}
  .messageTitle{
    height: 1.4rem;
    line-height: 1.4rem;
  }
  .back{
    height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .iconreturn{
    font-size: 1rem;
  }
  .de_name{
    margin-left: .2rem;
    height: 1.4rem;
    line-height: 1.4rem;
  }
  .messageData{
    height: 4rem;
    margin: .2rem 0;
    padding: 0 .2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #969896;
  }
  .dataImg{
    width: 4rem;
    height: 2.5rem;
  }
  .dataImg img{
    width: 100%;
    height: 100%;
  }
  .dataGift{
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    flex-flow: column;
    align-items: flex-start;
    margin-left: .2rem;
  }
  .sgift{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    margin-bottom: .4rem;
  }
  .seiler{
    background-color: orangered;
    margin-top: .4rem;
  }
  .gift-icon{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
  .icon{
    width: .6rem;
    height: .6rem;
    margin-right: .4rem;
  }
  .iconnext{
    font-size: 1rem;
  }
  .back_right{
    width: 1rem;
    height: 4rem;
    line-height: 4rem;
    margin-left: .6rem;
  }
  .set_nav{
    height: 1.4rem;
    line-height: 1.4rem;
    display: flex;
    justify-content: space-between;
    padding: 0 .4rem;
    align-items: center;
    border-bottom: 1px solid #000;
  }
  .oninner{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: .4rem;
    width: 2.5rem;
  }
  .de{
   margin-right: .2rem;
  }
  .set_inner{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
.setContent{
  list-style: none;
  padding: 0;
  margin: 0;
}
.setContent li{
  font-size: .6rem;
  color: #000;
  height: 2rem;
  line-height: 2rem;
  padding: 0 .4rem;
  text-align: left;
  border-bottom: 1px solid #000;
}
.set_li{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
  .end_submit{
    width: 5rem;
    height: 1.4rem;
    line-height: 1.4rem;
    text-align: center;
    margin: .4rem auto;
    background-color: red;
    border-radius: 10px;
    color: #fffdef;
  }
</style>
