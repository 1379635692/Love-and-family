<template>
  <div>
  <header class="header">
    <div><i class="iconfont iconreturn"></i></div>
    <input type="number" placeholder="添加手机号">
    <div class="header_sear">
      <img src="./img/fa.png" alt="" class="img">
      <div class="header_slog">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>

    <div class="add_wrap">
      <ul>
        <li>
          <span class="sao">通讯录</span>
        </li>
        <li>
          <p>
            <img src="../../assets/lo1.jpg" alt="">
          </p>
          <span>六郎</span>
        </li>
        <li>
          <p>
            <img src="../../assets/lo1.jpg" alt="">
          </p>
          <span>张冰</span>
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
        name: "phonefriends"
    }
</script>

<style scoped>
  .add_wrap{
    margin: 1.4rem 0;
  }
  .header{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 33;
    height: 1.4rem;
    background-color: white;
    color: black;
    border-bottom: 2px solid #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  input{
    border: none;
    background-color: #fff;
  }
  .img{
    width: .8rem;
    height: .8rem;
    margin-right: .6rem;
  }
  .header_sear{
    justify-content: space-between;
    align-items: center;
    display: flex;
  }
  .header_slog{
    width: 1.5rem;
    line-height: 1.4rem;
    height: 1.4rem;
    margin-right: .3rem;
  }
  .header_slog span {
    display: inline-block;
    width: .2rem;
    height: .2rem;
    background-color: #222222;
    border-radius: 50%;
  }
</style>
