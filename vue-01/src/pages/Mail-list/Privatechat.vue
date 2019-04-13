<template>
    <!--聊天界面-->
  <div id="privateChat">
    <mt-header title="">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <i class="icon iconrandom"></i>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="chat_ul" v-bind:class="{on: active }">
      <div class="gre">
        2019-10-12 &nbsp; 晚上10:12
      </div>
      <ul class="chat_ul_list">
        <li>
          <div class="list_li_nav nav_1">
            <span class="list_img">
            <img src="../../assets/qq.jpg" alt="">
          </span>
            <span class="list_txt">
            你最近在忙什么？
          </span>
          </div>
          <div class="list_li_nav nav-2">
            <span class="img_po list_img">
            <img src="../../assets/lo1.jpg" alt="">
          </span>
            <span class="text_on list_txt">
            在研发一个项目，在深圳融资。
          </span>
          </div>
        </li>
        <li>
          <div class="list_li_nav nav_1">
            <span class="list_img">
            <img src="../../assets/qq.jpg" alt="">
          </span>
            <div class="red-wrap">
               <span class="redEnvelopes">
              <div class="red_img">
               <img src="../../assets/交易 .png" alt="">
              </div>
              <div class="red_name">
                <p>点击确认收钱</p>
                <p>￥12000</p>
              </div>
          </span>
              <div class="red_title">微信转账</div>
              <div class="fang"></div>
            </div>
          </div>
          <div class="list_li_nav nav-2">
            <span class="img_po list_img">
            <img src="../../assets/lo1.jpg" alt="">
          </span>
            <div class="red-wrap">
               <span class="redEnvelopes">
              <div class="gou1 red_img">
               <img src="../../assets/gou.png" alt="">
              </div>
              <div class="red_name">
                <p>已领取</p>
                <p>￥12000</p>
              </div>
          </span>
              <div class="red_title">微信转账</div>
              <div class="fang1"></div>
            </div>
          </div>
        </li>

      </ul>
    </div>
    <!--尾部输入-->
<div class="tabbar_prifie">
  <div class="tabbar">
    <div class="tabbar_con1">
      <span><i class="iconfont iconsoundsize"></i></span>
      <span><input type="text"></span>
    </div>
    <div class="tabbar_con2">
      <span @click="shows"><i class="iconfont iconaddto"></i></span>
      <span><i class="iconfont iconchild"></i></span>
    </div>
  </div>
  <div class="tabbar_add" v-show="ok">
    <span class="on">拍摄</span>
    <span>红包</span>
    <span>相册</span>
    <span>视频</span>
    <span>收藏</span>
    <span>位置</span>
  </div>
</div>

  </div>
</template>

<script>
    export default {
        name: "Privatechat",
      data(){
          return{
            ok:false,
            active:false
          }
      },
      methods:{
         shows:function () {
         this.ok = !this.ok
           this.active = !this.active
        }
       }
    }
</script>

<style scoped>
#privateChat{
  width: 100%;
  height: 100%;
  font-size: .6rem;
  color: #000;
  overflow: hidden;
}
.mint-header{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 1.4rem;
  background-color: white;
  color: black;
  border-bottom: 2px solid #000;
}
.gre{
  font-size: .5rem;
  height: .4rem;
  line-height: .4rem;
  margin-top: .4rem;
}
  .chat_ul{
    margin-top: 1.8rem;
    margin-bottom: 1.4rem;
  }
  .chat_ul_list{
    list-style: none;
    margin: .4rem auto;
    padding: 0;
    font-size: .6rem;

  }
.chat_ul_list li{
  height: auto;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
}
  .list_li_nav{
    width: 100%;
    height: 50%;
    font-size: .6rem;
    position: relative;
    margin: .5rem 0;
  }
  .list_img{
    width: 1.2rem;
    height: 1rem;
    margin: 0 .5rem;
    border-radius: 7px;
  }
.list_li_nav img{
  width: 100%;
  height: 100%;
}
  .img_po{
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
  }
.img_po img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
  .nav_1{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: .5rem;
  }
  .nav-2{
    display: flex;
    align-items: center;
    flex-flow: row-reverse;
    padding-right: .5rem;
}
  .list_txt{
    border-radius: 18px;
    font-size: .6rem;
    padding: .3rem;
    text-align: left;
    color: #000;
    background-color: indianred;
  }
  .text_on{
    background-color: #e9e9e9;
  }
  .tabbar_prifie{
    width: 100%;
    position:fixed;
    bottom: 0;
    left: 0;
    right: 0;
 }
.tabbar{
  height: 1.4rem;
  line-height: 1.4rem;
  background-color: #e9e9e9;
  font-size: .6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 .6rem;
}
  .iconfont{
    font-size: 1rem;
    vertical-align: middle;
    margin: 0 .4rem;
  }
  .tabbar_con1{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
.tabbar_con2{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
input{
  width: 100%;
  border: none;
  height: 100%;
  background-color: #e9e9e9;
}
 .tabbar_add{
   height: 5rem;
   padding: .6rem 1.3rem 2rem 1.3rem;
   display: flex;
   flex-wrap: wrap;
   justify-content: flex-start;
   align-items: center;
   background-color: #fff;
 }
.tabbar_add span{
  width: 1.5rem;
  height: 1rem;
  line-height: 1rem;
  border: 4px solid #999999;
  border-radius: 15%;
  padding: .2rem;
  margin: .5rem .4rem;
  color: #999999;
}
.tabbar_add span.on{
    color: #000;
  }
  .on{
    margin-bottom: 9rem;
  }
  /*红包*/
.redEnvelopes{
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: .6rem;
  margin-bottom: .3rem;
}
  .red_img{
    width: 2rem;
    height: 2rem;
    margin-left: .6rem;
  }
.red_img img{
  width: 100%;
  height: 100%;
  color: red;
}
  .red_name{
    width: 5rem;
    margin-right: .5rem;
    padding: .2rem .4rem;
  }
.red_name p{
  font-weight: 200;
  margin: 0;
  text-align: left;
  padding: .4em 0;
}
  .red-wrap{
    background-color: #fa9c3e;
    position: relative;
    color: #ffffff;
    font-size: .6rem;
    display: flex;
    flex-flow: column;
    align-items: center;
  }
  .red_title{
    width: 100%;
    margin: 0 auto;
    background-color: #fff;
    font-size: .4rem;
    font-weight: 200;
    text-align: left;
    padding: .2rem 0;
    color: #000;
    border-bottom: 1px solid #e9e9e9;
    border-right: 1px solid #e9e9e9;
    border-left: 1px solid #e9e9e9;
    text-indent: .4rem;
  }
  .fang{
    position: absolute;
    top: 1.72rem;
    left: -0.2rem;
    width:0;
    height:0;
    border-top:.3rem solid transparent;
    border-bottom:.3rem solid transparent;
    border-right:.3rem solid #fa9c3e;

  }
.fang1{
  position: absolute;
  top: 1.72rem;
  right: -0.2rem;
  width:0;
  height:0;
  border-top:.3rem solid transparent;
  border-bottom:.3rem solid transparent;
  border-left:.3rem solid #fa9c3e;

}
  .gou1{
    border: 2px solid #fff;
    border-radius: 50%;
  }
.gou1 img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>
