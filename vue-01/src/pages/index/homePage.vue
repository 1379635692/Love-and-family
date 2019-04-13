<template>
<div class="main">
  <mt-header title="">
    <router-link to="/" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
  <mt-swipe :auto="4000" class="mtSwiper">
  <mt-swipe-item class=" mtSwiperTest"><img src="../../assets/lo1.jpg" alt=""></mt-swipe-item>
  <mt-swipe-item class=" mtSwiperTest" ><img src="../../assets/qq.jpg" alt=""></mt-swipe-item>
  <mt-swipe-item class=" mtSwiperTest"><img src="../../assets/lo1.jpg" alt=""></mt-swipe-item>
</mt-swipe>
  <div class="swiperTxt">
    <p class="d1">分享你的故事，感受你的紊乱,把你得故事告诉，我在倾听</p>
  </div>
  <!--五星评价-->
  <div class="mainContair">
    <div class="mainContairStars">
      <span>风一样的女子</span>
      <span class="star-do">动态</span>
    </div>
    <!--f2-->
    <div class="mainContairFabulous">
      <p class="fiveStars">
        <em>五星数量</em>
        <i>80</i>
      </p>
      <p class="thumbsUp">
        <em>点赞</em>
        <i>180</i>
      </p>
    </div>
  </div>
  <!--das-->
  <div class="comG">
    <div class="comMent">
      <div class="comMentTest">
        <h4>点评</h4>
        <span class="d2">心理天使</span>
        <i class="d3">五星</i>
      </div>
      <div class="comMentBack" @click=open>
        &gt
      </div>
    </div>
  </div>
  <!--评论-->
  <div class="miiTio" v-show="butShow">
    <swiperIndex></swiperIndex>
  </div>
  <!--da-->
  <div class="goodFriend">
    <button>打赏</button>
    <button>验证加好友</button>
  </div>

  <mt-swipe :auto="4000" class="mtSwiper">
    <mt-swipe-item class=" mtSwiperTest"><img src="../../assets/lo1.jpg" alt=""></mt-swipe-item>
    <mt-swipe-item class=" mtSwiperTest" ><img src="../../assets/qq.jpg" alt=""></mt-swipe-item>
    <mt-swipe-item class=" mtSwiperTest"><img src="../../assets/lo1.jpg" alt=""></mt-swipe-item>
  </mt-swipe>
  <div class="swiperTxt">
    <p class="d1">分享你的故事，感受你的紊乱,把你得故事告诉，我在倾听</p>
  </div>
  <!--五星评价-->
  <div class="mainContair">
    <div class="mainContairStars">
      <span>风一样的女子</span>
      <span class="star-do">动态</span>
    </div>
    <!--f2-->
    <div class="mainContairFabulous">
      <p class="fiveStars">
        <em>五星数量</em>
        <i>80</i>
      </p>
      <p class="thumbsUp">
        <em>点赞</em>
        <i>180</i>
      </p>
    </div>
  </div>
  <!--das-->
  <div class="comG">
    <div class="comMent">
      <div class="comMentTest">
        <h4>点评</h4>
        <span class="d2">心理天使</span>
        <i class="d3">五星</i>
      </div>
      <div class="comMentBack" @click=open>
        &gt
      </div>
    </div>
  </div>
  <!--评论-->
  <div class="miiTio" v-show="butShow">
    <swiperIndex></swiperIndex>
  </div>
  <!--da-->
  <div class="goodFriend">
    <button>打赏</button>
    <button>验证加好友</button>
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
  import swiperIndex from '../../components/swiperIndex'
    export default {
        name: "homePage",
      data (){
          return {
            items: [],
            newitem: '',
            butShow:false
          }
          },
      components:{
        swiperIndex
      },
      methods: {
        liClick: function (item) {
          item.isFinish = !item.isFinish;
        },
        clickKey: function () {
          this.items.push({
            event: this.newitem,
            isFinish: false
          })
          this.newitem = '';
        },
        open :function () {
          this.butShow = !this.butShow
        }
      }
    }
</script>

<style scoped>
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
  ul{
    width: 100%;
    margin: 0;
    padding: 0;
  }
  ul li{
    list-style: none;
    line-height: 1.4rem;
    font-size: .6rem;
    text-align: left;
    border: 1px solid;
    width: 90%;
    margin: .3rem auto;
  }
  button{
    width: 20%;
    height: 1.2rem;
    line-height: 1.2rem;
    text-align: center;
    border: none;
  }
  /*main*/
  .main{
   width: 100%;
    color: black;
    padding-bottom: 1.4rem;
  }
  .mtSwiper{
    height: 10rem;
    margin-top: 1.4rem;
  }
  .mtSwiperTest{
    line-height: 10rem;
  }
  .mtSwiperTest img{
    width: 100%;
    height: 100%;
  }
  /*简单介绍*/
  .swiperTxt{
    width: 100%;
    height: 2rem;
  }
  .swiperTxt .d1{
    color: #000;
    height: 2rem;
    font-size: .56rem;
    margin: 0 .2rem;
  }
  .mainContair{
    height: 1.3rem;
    line-height: 1.3rem;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    font-size: 0.5rem;
    align-self: center;
    padding: 0.2rem;
  }

  .mainContairStars{
    width: 40%;
    color: #000;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .3rem;
  }
  .mainContairFabulous{
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color:#000;
    font-size: .3rem;

  }
  .star-do{

    height: .4rem;
    line-height: .4rem;
    width: 1rem;
    border: 2px solid #000;
    border-radius: 25%;
    padding: .2rem;
  }
  em{
    margin-right: 0.4rem;
  }
  .comG{
    background-color: #fff;
    overflow: hidden;
    border: 2px solid #000;
    border-radius: 10%;
    color: #000;
    margin: 0 .3rem;
  }
  .comMent{
    width: 90%;
    height: 1rem;
    line-height: 1rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
  }
  .comMentTest{
    width: 70%;
    height: 1.4rem;
    line-height: 1.4rem;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    overflow: hidden;
    font-size:.56rem;
  }
  h4{
    margin: 0;
    padding: 0;
    font-size: 0.6rem;
    font-weight: 500;
  }
  .d2{
    font-size: 0.5rem;
    margin-left: 1.5rem;
  }
  .d3{
    font-size: 0.5rem;
    margin-left: 1rem;
  }
  .comMentTest:after{
    content: "";
    clear: both;
  }
  .comMentBack{
    width: 30%;
    line-height: 1.4rem;
    text-align: right;
    color: #000;
    font-size: .9rem;

  }
  .comMentBack:hover{
    cursor: pointer;
  }
  .goodFriend{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: .5rem 0;
    height: 2rem;
    color: #fff;
    border: 1px solid ;
  }
  .goodFriend button{
    width: 4rem;
    height: 1.2rem;
    line-height: 1.2rem;
    background-color: #fff;
    border: 2px solid #000;
    text-align: center;
    color: #000;
    border-radius: 10px;

  }
  .goodFriend button:hover{
    cursor: pointer;
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
