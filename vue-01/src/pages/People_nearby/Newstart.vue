<template>
<div class="main">
     <mt-header title="">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <i class="icon iconrandom"></i>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  <div class="con_text">
      <div class="con_nab">
           <span>2/25</span>
           <span>新起之秀干倒互联网一大片</span>
      </div>
      <div class="con_img">
          <img src="../../assets/lo1.jpg" alt="">
            <img src="../../assets/lo1.jpg" alt="">
              <img src="../../assets/lo1.jpg" alt="">
      </div>  
  </div>
  <div class="con_text">
      <div class="con_nab">
           <span>2/25</span>
           <span>新起之秀干倒互联网一大片</span>
      </div>
      <div class="con_img">
          <img src="../../assets/lo1.jpg" alt="">
            <img src="../../assets/lo1.jpg" alt="">
              <img src="../../assets/lo1.jpg" alt="">
      </div>
  </div>
  <!-- 2 -->
  <div class="con_text">
      <div class="con_nab">
           <span>2/25</span>
           <span>新起之秀干倒互联网一大片</span>
      </div>
      <div class="con_img">
          <img src="../../assets/lo1.jpg" alt="">
            <img src="../../assets/lo1.jpg" alt="">
              <img src="../../assets/lo1.jpg" alt="">
      </div>
  </div>
  <!-- 3 -->
  <div class="con_text">
      <div class="con_nab">
           <span>2/25</span>
           <span>新起之秀干倒互联网一大片</span>
      </div>
      <div class="con_img">
          <img src="../../assets/lo1.jpg" alt="">
            <img src="../../assets/lo1.jpg" alt="">
              <img src="../../assets/lo1.jpg" alt="">
      </div>
  </div>
  <!-- 4 -->
  <div class="con_text">
      <div class="con_nab">
           <span>2/25</span>
           <span>新起之秀干倒互联网一大片</span>
      </div>
      <div class="con_img">
          <img src="../../assets/lo1.jpg" alt="">
            <img src="../../assets/lo1.jpg" alt="">
              <img src="../../assets/lo1.jpg" alt="">
      </div>
  </div>
<!--尾部导航栏-->
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
        name: "Newstart"
    }
</script>

<style scoped>
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
  .main{
   width: 100%;
    color: black;
    padding-bottom: 1.4rem;
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
  .star_five{
      width: 100%;
      height: auto;

  }
  .con_text{
      width: 90%;
      margin: 1.4rem auto;
  }
  .con_img{
      width: 100%;
      height: 3rem;
  }
  .con_img img{
      width: 3rem;
      height: 2.5rem;
      border-radius: 10%;
      margin:  0 .6rem;
  }
  .con_nab{
      height: 2rem;
      font-size: .56rem;
      color: #000;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0 .6rem;
  }
   .con_nab span:first-child{
       margin-right: 1rem;
       color: #000;
       font-weight:bold;
       font-size: 1rem;
   }
</style>
