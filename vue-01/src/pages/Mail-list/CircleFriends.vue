<template>
    <!--朋友圈-->
 <div id="friends">
     <div class="nav_guie">
         <span>“表情包”是一种利用图片来表示感情的一种方式。表情包是在社交软件活跃之后，形成的一种流行文化，表情包流行于互联网上面，基本人人都会发表情包。</span>
         <img src="../../assets/qq.jpg" alt="">
         <span>在移动互联网时期，人们以时下流行的明星、语录、动漫、影视截图为素材，配上一系列相匹配的文字，用以表达特定的情感。
2017年7月18日，教育部、国家语委在北京发布《中国语言生活状况报告(2017)》，表情包入选2016年度中国媒体十大新词。</span>
     </div>
<div class="mailUl">
      <ul>
        <li>
          <div class="main_top1">
              <div  class="main_top">
          <div class="main_top_img">
              <img src="../../assets/qq.jpg" alt="">
            </div>
            <span>老婆</span>
              </div>
          
            <span><i class="de">赞</i>&nbsp;180</span>
          </div>
          <div class="main_botton">
            <span>非常好
                非常好
                非常好
                非常好
                非常好
                非常好
                非常好
            </span>
          </div>
          <button class="nav_btn">查看更多</button>
        </li>
          <li>
          <div class="main_top1">
              <div  class="main_top">
          <div class="main_top_img">
              <img src="../../assets/qq.jpg" alt="">
            </div>
            <span>老婆</span>
              </div>
          
            <span><i class="de">赞</i>&nbsp;180</span>
          </div>
          <div class="main_botton">
            <span>非常,你是我的朋友</span>
            <img src="../../assets/lo1.jpg" alt="">
          </div>
          <button class="nav_btn">查看更多</button>
        </li>
<!-- 第三个 -->
         <li>
          <div class="main_top1">
              <div  class="main_top">
          <div class="main_top_img">
              <img src="../../assets/qq.jpg" alt="">
            </div>
            <span>老婆</span>
              </div>
          
            <span><i class="de">赞</i>&nbsp;180</span>
          </div>
          <div class="main_botton">
            <span>表情包之王就是我没错 </span>
          </div>
          <button class="nav_btn">查看更多</button>
       </li>
      </ul>
    </div>
 </div>
</template>

<script>
    export default {
        name: "CircleFriends"
    }
</script>

<style scoped>
#friends{
    color: #000;
    font-size: .56rem;
    width: 100%;
}
.nav_guie{
    display: flex;
    flex-flow: column;
    align-items: center; 
    padding: 1rem;
}
.nav_guie img{
    width: 6rem;
    height: 5rem;
}
.nav_guie span{
    text-align: left;
    text-indent: .6rem;
}
   .mailUl{
    width: 100%;
    height: 100%;
    margin-top: 1rem;
    margin-bottom: 1.4rem;
  }
  .mailUl ul{
    height: auto;
    font-size:.6rem;
    color: #000;
    margin: .5rem auto;
    padding: 0;
  }
  .mailUl ul li{
    margin: 1rem .5rem;
    height: auto;
    list-style: none;
    padding: .3rem 0;
    overflow: hidden;
    border-bottom: 1px solid;
  }
  .de{
      width: 1rem;
      height: 1rem;
      line-height: 1rem;
      text-align:center;
      padding: .2rem;
      border-radius: 50%;
      font-size: .4rem;
      background-color: red;
  }
  .main_top{
    display: flex;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    font-size: .6rem;
    height: 1rem;
    line-height: 1rem;
  }
   .main_top1{
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    font-size: .6rem;
    height: 1rem;
    line-height: 1rem;
    margin: .2rem 0;
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
  margin: 0.2rem auto;
  font-size: .5rem;
}
  .main_botton span{
      text-align: left;
      display: block;
      margin-left: 1rem;
      margin-bottom: .3rem;
      margin-top: .3rem;
  }
  .main_botton img{
      display: block;
      width: 4rem;
      height: 4rem;
      border-radius: 10%;
      margin-bottom: .3rem;
      margin-top: .3rem;
      margin-left: 1rem;
  }
  .bitton_red{
    color: red;
  }
  .nav_btn{
      width: 4rem;
      height: 1rem;
      line-height: 1rem;
      text-align: center;
      border: none;
      float: right;
  }
</style>
