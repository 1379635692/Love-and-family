<template>
<div class="main">
  <mt-header title="">
    <router-link to="/" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
  <mt-swipe :auto="4000" class="mtSwiper">
    <mt-swipe-item class=" mtSwiperTest">1</mt-swipe-item>
    <mt-swipe-item class=" mtSwiperTest" >2</mt-swipe-item>
    <mt-swipe-item class=" mtSwiperTest">3</mt-swipe-item>
  </mt-swipe>
  <div class="swiperTxt">
    <p class="d1">分享你的故事，感受你的紊乱</p>
  </div>
  <!--五星评价-->
  <div class="mainContair">
    <div class="mainContairStars">

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
    <div class="releaseLess">
      <input class="addTo" type="text" v-model="newitem" >
      <button v-on:click="clickKey">发布</button>
    </div>

    <!--品论添加生成列表-->
    <ul>
      <li v-for="item in items" v-text="item.event"
          v-bind:class="{red:item.isFinish}" v-on:click="liClick(item)"></li>
    </ul>
  </div>

  <!--da-->
  <div class="goodFriend">
    <button>打赏</button>
    <button>验证加好友</button>
  </div>
<!--weibu-->
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
        name: "homePage",
      data (){
          return {
            items: [],
            newitem: '',
            butShow:false
          }
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
  /*添加评论*/
  .addTo{
    width: 60%;
    height: 1rem;
    /*margin: 0.2rem auto;*/
    border: 1px solid;
    color: #000;
    font-size: 0.6rem;
    text-indent: .2rem;
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
  .miiTio{

  }
  .releaseLess{
    width: 90%;
    margin: 0.3rem auto;
    display: flex;
    justify-content: space-between;
    align-self: center;

  }
  button{
    width: 20%;
    height: 1.2rem;
    line-height: 1.2rem;
    text-align: center;
    border: none;
    background-color: red;
  }
  /*main*/
  .main{
   width: 100%;
    color: black;
  }
  .mtSwiper{
    border: 1px solid;
    height: 7rem;
  }
  .mtSwiperTest{
    line-height: 7rem;
  }
  /*简单介绍*/
  .swiperTxt{
    width: 100%;
    height: 1.2rem;
  }
  .swiperTxt .d1{
    color: #000;
    font-size: .6rem;
    line-height: 1.2rem;
    background-color: burlywood;
    margin: 0;
  }
  .mainContair{
    height: 1.3rem;
    line-height: 1.3rem;
    border: 1px solid red;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    font-size: 0.5rem;
    align-self: center;
    padding: 0.2rem;
  }

  .mainContairStars{
    width: 50%;
    color: red;
    overflow: hidden;
    border: 1px solid;
  }
  .mainContairFabulous{
    border: 1px solid;
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:red;

  }
  em{
    margin-right: 0.4rem;
  }
  .comG{
    width: 100%;
    background-color: burlywood;
    overflow: hidden;
  }
  .comMent{
    width: 90%;
    height: 1.4rem;
    line-height: 1.4rem;
    margin: 0 auto;
    color: #fff;
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
    justify-content: left;
    align-content: center;
    overflow: hidden;
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
    color: #fff;
    font-size: .9rem;

  }
  .comMentBack:hover{
    cursor: pointer;
  }
  .goodFriend{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 1rem 0;
    height: 2rem;
    color: #fff;
    border: 1px solid ;
  }
  .goodFriend button{
    width: 6rem;
    height: 2rem;
    line-height: 2rem;
    background-color: red;
    text-align: center;
    border: none;
    color: #fff;

  }
  .goodFriend button:hover{
    cursor: pointer;
  }
</style>
