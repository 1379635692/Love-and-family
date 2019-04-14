<template>

  <div id="nearby">
    <div class="end_nearby">
    <div class="nearby_name">
      <img src="../../assets/lo1.jpg" alt="">
      <span>文艺创作者</span>
      </div>
      <div class="con_text">
      <div class="con_nab">
           <span>新起之秀干倒互联网一大片</span>
       </div>
      <div class="con_img">
          <img src="../../assets/lo1.jpg" alt="">
            <img src="../../assets/lo1.jpg" alt="">
              <img src="../../assets/lo1.jpg" alt="">
      </div>
     </div>
    </div>
  <!-- 2 -->
 <div class="end_nearby">
    <div class="nearby_name">
      <img src="../../assets/lo1.jpg" alt="">
      <span>文艺创作者</span>
      </div>
      <div class="con_text">
      <div class="con_nab">
           <span>新起之秀干倒互联网一大片</span>
       </div>
      <div class="con_img">
          <img src="../../assets/lo1.jpg" alt="">
            <img src="../../assets/lo1.jpg" alt="">
              <img src="../../assets/lo1.jpg" alt="">
      </div>
     </div>
    </div>
  <!-- 3 -->
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
        name: "nearby"
      
    }
</script>

<style scoped>
#nearby{
  font-size: .6rem;
  color: #000;
}
  .con_text{
      width: 90%;
      margin: 0 auto;
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
  .con_img:last-child{
    margin-bottom: 1.4rem;
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
       margin-left: 1rem;
       color: #000;
   }
   .nearby_name{
     display: flex;
     justify-content: flex-start;
     align-items: center;
     height: 2rem;
     line-height: 2rem;
     font-size: .7rem;
     font-weight: bold;
     margin: .1rem .8rem
   }
   .nearby_name span{
     margin-left: .3rem;
   }
   .nearby_name img{
     width: 2rem;
     height: 1.5rem;
     border-radius: 10%;
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
</style>
