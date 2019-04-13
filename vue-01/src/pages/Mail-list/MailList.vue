<template>
    <!--通讯录组件-->
  <div id="MailList">
    <mt-header title="">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <i class="icon iconrandom"></i>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!--通讯录-->
    <div class="mailUl">
      <div class="gre">
        2019-10-12 &nbsp; 晚上10:12
      </div>
      <ul>
        <li>
          <div class="main_top">
            <div class="main_top_img">
              <img src="../../assets/qq.jpg" alt="">
            </div>
            <span>老婆</span>
          </div>
          <div class="main_botton">
            <span>嗯</span>
            <span>早上8:00</span>
          </div>
        </li>
        <li>
          <div class="main_top">
            <div class="main_top_img">
              <img src="../../assets/qq.jpg" alt="">
            </div>
            <span>家人</span>
          </div>
          <div class="main_botton">
            <span>回来吃饭？</span>
            <span>早上8:00</span>
          </div>
        </li>
        <li>
          <div class="main_top">
            <div class="main_top_img">
              <img src="../../assets/qq.jpg" alt="">
            </div>
            <span>前女友张兰</span>
          </div>
          <div class="main_botton">
            <span>张总那么久3不找我万？</span>
            <span>早上8:00</span>
          </div>
        </li>
        <li>
          <div class="main_top">
            <div class="main_top_img">
              <img src="../../assets/qq.jpg" alt="">
            </div>
            <span>朋友张冰</span>
          </div>
          <div class="main_botton">
            <span>有个照片坐不住</span>
            <span>早上8:00</span>
          </div>
        </li>
        <li>
          <div class="main_top">
            <div class="main_top_img">
              <img src="../../assets/qq.jpg" alt="">
            </div>
            <span>老李</span>
          </div>
          <div class="main_botton">
            <span class="bitton_red">(未读)晚上喝酒去？</span>
            <span class="bitton_red">早上8:00</span>
          </div>
        </li>
        <li>
          <div class="main_top">
            <div class="main_top_img">
              <img src="../../assets/qq.jpg" alt="">
            </div>
            <span>老婆</span>
          </div>
          <div class="main_botton">
            <span>嗯</span>
            <span>早上8:00</span>
          </div>
        </li>
        <li>
          <div class="main_top">
            <div class="main_top_img">
              <img src="../../assets/qq.jpg" alt="">
            </div>
            <span>家人</span>
          </div>
          <div class="main_botton">
            <span>回来吃饭？</span>
            <span>早上8:00</span>
          </div>
        </li>
        <li>
          <div class="main_top">
            <div class="main_top_img">
              <img src="../../assets/qq.jpg" alt="">
            </div>
            <span>前女友张兰</span>
          </div>
          <div class="main_botton">
            <span>张总那么久3不找我万？</span>
            <span>早上8:00</span>
          </div>
        </li>
        <li>
          <div class="main_top">
            <div class="main_top_img">
              <img src="../../assets/qq.jpg" alt="">
            </div>
            <span>朋友张冰</span>
          </div>
          <div class="main_botton">
            <span>有个照片坐不住</span>
            <span>早上8:00</span>
          </div>
        </li>
        <li>
          <div class="main_top">
            <div class="main_top_img">
              <img src="../../assets/qq.jpg" alt="">
            </div>
            <span>老李</span>
          </div>
          <div class="main_botton">
            <span class="bitton_red">(未读)晚上喝酒去？</span>
            <span class="bitton_red">早上8:00</span>
          </div>
        </li>
        <li>
          <div class="main_top">
            <div class="main_top_img">
              <img src="../../assets/qq.jpg" alt="">
            </div>
            <span>老婆</span>
          </div>
          <div class="main_botton">
            <span>嗯</span>
            <span>早上8:00</span>
          </div>
        </li>
        <li>
          <div class="main_top">
            <div class="main_top_img">
              <img src="../../assets/qq.jpg" alt="">
            </div>
            <span>家人</span>
          </div>
          <div class="main_botton">
            <span>回来吃饭？</span>
            <span>早上8:00</span>
          </div>
        </li>
        <li>
          <div class="main_top">
            <div class="main_top_img">
              <img src="../../assets/qq.jpg" alt="">
            </div>
            <span>前女友张兰</span>
          </div>
          <div class="main_botton">
            <span>张总那么久3不找我万？</span>
            <span>早上8:00</span>
          </div>
        </li>
        <li>
          <div class="main_top">
            <div class="main_top_img">
              <img src="../../assets/qq.jpg" alt="">
            </div>
            <span>朋友张冰</span>
          </div>
          <div class="main_botton">
            <span>有个照片坐不住</span>
            <span>早上8:00</span>
          </div>
        </li>
        <li>
          <div class="main_top">
            <div class="main_top_img">
              <img src="../../assets/qq.jpg" alt="">
            </div>
            <span>老李</span>
          </div>
          <div class="main_botton">
            <span class="bitton_red">(未读)晚上喝酒去？</span>
            <span class="bitton_red">早上8:00</span>
          </div>
        </li>
      </ul>
    </div>
    <!--尾部导航-->
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
        name: "MailList"
    }
</script>

<style scoped>
  .MailList{
    width: 100%;
    height: 100%;
    color: #000;
    font-size: .56rem;
  }
  .mint-header{
    height: 1.4rem;
    line-height: 1.4rem;
    background-color: white;
    color: black;
    border-bottom: 2px solid #000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 33;
  }
  .mailUl{
    width: 100%;
    height: 100%;
    margin-top: 1.8rem;
    margin-bottom: 1.4rem;
  }
  .gre{
    font-size: .5rem;
    height: .4rem;
    line-height: .4rem;
  }
  .mailUl ul{
    height: auto;
    font-size:.6rem;
    color: #000;
    margin: .5rem auto;
    padding: 0;
  }
  .mailUl ul li{
    margin: .4rem .5rem;
    height: 1.5rem;
    list-style: none;
    padding: 0;
  }
  .main_top{
    display: flex;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    font-size: .6rem;
    font-weight: bold;
    height: 1rem;
    line-height: 1rem;
  }
  .main_top_img{
    width: 1.3rem;
    height: 1rem;
    margin-right: .3rem;
  }
  .main_top_img img{
    width: 100%;
    height: 100%;
  }
.main_botton{
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: .5rem;
}
  .main_botton span{
    margin-left: 1rem;
  }
  .bitton_red{
    color: red;
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
</style>
