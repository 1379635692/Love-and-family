<template>
<div id="group">
  <mt-header title="">
    <router-link to="/" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
    <i class="icon iconrandom"></i>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
  <div class="add_wrap">
    <ul>
      <li>
        <p>
          <i class="iconfont iconnickname"></i>
        </p>
        <span>添加好友</span>
      </li>
      <li>
        <p>
          <i class="iconfont iconnickname"></i>
        </p>
        <span>新朋友</span>
      </li>
      <li>
        <span class="sao">扫一扫</span>
      </li>
      <li>
        <p>
          <i class="iconfont iconnickname"></i>
        </p>
        <span>建群</span>
      </li>
      <li>
        <p>
          <img src="../../assets/lo1.jpg" alt="">
        </p>
        <span>前女友</span>
      </li>
      <li>
        <p>
          <img src="../../assets/lo1.jpg" alt="">
        </p>
        <span>夜店骄</span>
      </li>
      <li>
        <p>
          <img src="../../assets/lo1.jpg" alt="">
        </p>
        <span>老李</span>
      </li>
      <li>
        <p>
          <img src="../../assets/lo1.jpg" alt="">
        </p>
        <span>王忠</span>
      </li>
    </ul>
  </div>
  <mt-tabbar >
    <mt-tab-item id="聊天">
      聊天
    </mt-tab-item>
    <mt-tab-item id="附近的人">
      附近的人
    </mt-tab-item>
    <mt-tab-item id="通讯录">
      通讯录
    </mt-tab-item>
    <mt-tab-item id="我">
      我
    </mt-tab-item>
  </mt-tabbar>
</div>
</template>

<script>
    export default {
        name: "addFriends"
    }
</script>

<style scoped>
  #group{
    width: 100%;
    height: 100%;
    color: #000;
    font-size: .6rem;
    overflow: hidden;
  }
  .add_wrap{
    margin: 1.4rem 0;
  }
  .mint-header{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 33;
    height: 1.4rem;
    background-color: white;
    color: black;
    border-bottom: 2px solid #000;
  }
  .mint-tabbar{
    position: fixed;
    z-index: 33;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1.4rem;
    line-height: 1.4rem;
    background-color: #e9e9e9;
    font-size: .7rem;
  }
  .mint-tab-item-label{
    font-size: .7rem;
    font-weight: bold;
  }
  .add_wrap ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .add_wrap ul li{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 1.4rem;
    line-height: 1.4rem;
    margin: 0.3rem 0;
    padding: .2rem .6rem;
    border-bottom: 1px solid #969896;
    color: #000;
    font-size: 0.6rem;
  }
  .add_wrap ul li span{
    margin-left: .4rem;
    letter-spacing: .1rem;
  }
  .iconnickname{
    font-size: 1rem;
    color: #fffdef;
  }
  .add_wrap ul li p{
    width: 1.4rem;
    height: 1.2rem;
    line-height: 1.2rem;
    background-color: #55a532;
    margin: 0;
  }
  .add_wrap ul li p img{
    width: 100%;
    height: 100%;
    border-radius: 10%;
  }
  .add_wrap ul li .sao{
    margin-left: 1.5rem;
  }
</style>
