<template>
    <!--附近的人-->
  <div id="Peoplenearby">
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
        <span class="main_botton">
          600m
          </span>
        <span class="btn_bulit">美丽心情</span>
      </li>
        <li>
          <div class="main_top">
            <div class="main_top_img">
              <img src="../../assets/qq.jpg" alt="">
            </div>
            <span>同学老婆</span>
          </div>
          <span class="main_botton">
          600m
          </span>
          <span class="btn_bulit">美丽心情</span>
        </li>
        <li>
          <div class="main_top">
            <div class="main_top_img">
              <img src="../../assets/qq.jpg" alt="">
            </div>
            <span>老师</span>
          </div>
          <span class="main_botton">
          600m
          </span>
          <span class="btn_bulit">美丽心情</span>
        </li>
        <li>
          <div class="main_top">
            <div class="main_top_img">
              <img src="../../assets/qq.jpg" alt="">
            </div>
            <span>老婆</span>
          </div>
          <span class="main_botton">
          600m
          </span>
          <span class="btn_bulit">美丽心情</span>
        </li>
        <li>
          <div class="main_top">
            <div class="main_top_img">
              <img src="../../assets/qq.jpg" alt="">
            </div>
            <span>老婆</span>
          </div>
          <span class="main_botton">
          600m
          </span>
          <span class="btn_bulit">美丽心情</span>
        </li>
        <li>
          <div class="main_top">
            <div class="main_top_img">
              <img src="../../assets/qq.jpg" alt="">
            </div>
            <span>老婆</span>
          </div>
          <span class="main_botton">
          600m
          </span>
          <span class="btn_bulit">美丽心情</span>
        </li>
        <li>
          <div class="main_top">
            <div class="main_top_img">
              <img src="../../assets/qq.jpg" alt="">
            </div>
            <span>同学老婆</span>
          </div>
          <span class="main_botton">
          600m
          </span>
          <span class="btn_bulit">美丽心情</span>
        </li>
        <li>
          <div class="main_top">
            <div class="main_top_img">
              <img src="../../assets/qq.jpg" alt="">
            </div>
            <span>老师</span>
          </div>
          <span class="main_botton">
          600m
          </span>
          <span class="btn_bulit">美丽心情</span>
        </li>
        <li>
          <div class="main_top">
            <div class="main_top_img">
              <img src="../../assets/qq.jpg" alt="">
            </div>
            <span>老婆</span>
          </div>
          <span class="main_botton">
          600m
          </span>
          <span class="btn_bulit">美丽心情</span>
        </li>
        <li>
          <div class="main_top">
            <div class="main_top_img">
              <img src="../../assets/qq.jpg" alt="">
            </div>
            <span>老婆</span>
          </div>
          <span class="main_botton">
          600m
          </span>
          <span class="btn_bulit">美丽心情</span>
        </li>
        <li>
          <div class="main_top">
            <div class="main_top_img">
              <img src="../../assets/qq.jpg" alt="">
            </div>
            <span>老师</span>
          </div>
          <span class="main_botton">
          600m
          </span>
          <span class="btn_bulit">美丽心情</span>
        </li>
        <li>
          <div class="main_top">
            <div class="main_top_img">
              <img src="../../assets/qq.jpg" alt="">
            </div>
            <span>老婆</span>
          </div>
          <span class="main_botton">
          600m
          </span>
          <span class="btn_bulit">美丽心情</span>
        </li>
        <li>
          <div class="main_top">
            <div class="main_top_img">
              <img src="../../assets/qq.jpg" alt="">
            </div>
            <span>老婆</span>
          </div>
          <span class="main_botton">
          600m
          </span>
          <span class="btn_bulit">美丽心情</span>
        </li>
      </ul>
    </div>
    <!--尾部导航-->
    <div class="tabbar"></div>

  </div>
</template>

<script>
    export default {
        name: "Peoplenearby"
    }
</script>

<style scoped>
  .Peoplenearby{
    width: 100%;
    height: 100%;
    color: #000;
    position: relative;
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
    margin: .2rem auto;
    padding: 0;
    margin-bottom: 1.4rem;
  }
  .mailUl ul li{
    padding: .4rem .5rem;
    height: 1.4rem;
    line-height: 1.4rem;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 10px solid #e9e9e9;
  }
  .main_top{
    width: 6rem;
    height: 1.4rem;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    font-size: .6rem;
    font-weight: bold;
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
    width: 2rem;
    height: 1.4rem;
    line-height: 1.4rem;
    text-align: center;
    display: flex;
    font-weight: bold;
    justify-content: space-between;
    align-items: center;
    font-size: .5rem;
  }
  .tabbar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1.4rem;
    line-height: 1.4rem;
    background-color: #e9e9e9;
  }
.btn_bulit{
  text-align: center;
  height: 1.4rem;
  line-height: 2rem;
  font-size: .4rem;
  font-weight: bold;
}
</style>
