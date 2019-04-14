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
          <div class="main_fit">
         <div class="main_top_img">
              <img src="../../assets/qq.jpg" alt="">
            </div>
              <div class="fit_1">
               <span>老婆</span>
               <span>嗯</span>
              </div>
           
          </div>
            <span>早上8:00</span>
        </li>
        <li>
          <div class="main_fit">
         <div class="main_top_img">
              <img src="../../assets/qq.jpg" alt="">
            </div>
              <div class="fit_1">
               <span>二老婆</span>
               <span>我是你姐姐</span>
              </div>
           
          </div>
            <span>早上8:00</span>
        </li>
        <!-- 3 -->
          <li>
          <div class="main_fit">
         <div class="main_top_img">
              <img src="../../assets/qq.jpg" alt="">
            </div>
              <div class="fit_1">
               <span>闺蜜</span>
               <span class="bitton_red">（未读）我喜欢上你了 </span>
              </div>
           
          </div>
            <span class="bitton_red">早上8:00</span>
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
    padding: .4rem .5rem;
    height: 1.5rem;
    /* padding: .2rem 0; */
    list-style: none;
    border-bottom: 1px solid #999;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .main_fit{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .fit_1{
    display: flex;
    flex-flow: column;
    align-items: flex-start;
  }
  .fit_1 span{
    width: 7rem;
    height: .8rem;
    line-height: .8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
  }
   .fit_1 span:first-child{
     font-size: .6rem;
     font-weight: bold;
     color: #000;
   }
  .main_top_img{
    width: 2rem;
    height: 1.5rem;
    margin-right: .3rem;
  }
  .main_top_img img{
    width: 100%;
    height: 100%;
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
