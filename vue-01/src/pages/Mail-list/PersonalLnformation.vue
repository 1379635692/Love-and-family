<template>
<div class="main">
 <div class="personal_title">
     <img src="../../assets/lo1.jpg" alt="">
 </div>
  <div class="swiperTxt">
    <p class="d1">分享你的故事，感受你的紊乱,把你得故事告诉，我在倾听</p>
  </div>
  <!--五星评价-->
  <div class="mainContair">
      <!-- 5 -->
   <div class="star_five">

   </div>
    <!--f2-->
    <div class="mainContairFabulous">
        <span>赞</span>
        <i>180</i>
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
        &gt;
      </div>
    </div>
  </div>
  <!--评论-->
  <div class="miiTio" v-show="butShow">
    <swiperIndex></swiperIndex>
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
        name: "PersonalLnformation",
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
 .personal_title{
     width: 100%;
     height: 8rem;
 }
 .personal_title img{
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
    line-height: 1rem;
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
  .mainContairFabulous{
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color:#000;
    font-size: .3rem;
    color: indianred;

  }
  .mainContairFabulous span{
      margin-right: .5rem
  }
  .star-do{

    height: .4rem;
    line-height: .4rem;
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
   color: indianred;
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
   color: indianred;
    font-size: .9rem;

  }
  .comMentBack:hover{
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
  .star_five{
      width: 100%;
      height: auto;
      /* border: 1px solid */
  }
  .con_text{
      width: 90%;
      margin: .5rem auto;
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
   }
</style>
