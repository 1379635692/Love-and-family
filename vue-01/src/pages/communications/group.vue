<template>
    <div id="group">
      <header class="header">
        <div><i class="iconfont iconreturn"></i></div>
        <input type="number" placeholder="">
        <div class="header_sear">
          <img src="./img/fa.png" alt="" class="img">
          <div class="header_slog">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
      <!--群设置-->
      <div class="groupWrapper">
        <ul class="groupSettle">
          <li class="groupWrapperLi">
            <div class="lisetting"><span>设置群名:</span><input type="text"></div>
            <span class="button_txt">确定</span>
          </li>
          <li>
            <img src="../../assets/lo1.jpg" alt="">
            <img src="../../assets/lo1.jpg" alt="">
            <img src="../../assets/lo1.jpg" alt="">
            <img src="../../assets/lo1.jpg" alt="">
          </li>
          <li class="groupWrapperLi">
            <div class="liTxt">
              <img src="../../assets/lo1.jpg" alt="">
              <span class="liTxt_name">前女友刘兰</span>
            </div>
            <input type="radio">
          </li>
          <li class="groupWrapperLi">
            <div class="liTxt">
              <img src="../../assets/lo1.jpg" alt="">
              <span class="liTxt_name">老李</span>
            </div>
            <input type="radio">
          </li>
          <li class="groupWrapperLi">
            <div class="liTxt">
              <img src="../../assets/lo1.jpg" alt="">
              <span class="liTxt_name">夜店骄</span>
            </div>
            <input type="radio">
          </li>
          <li class="groupWrapperLi">
            <div class="liTxt">
              <img src="../../assets/lo1.jpg" alt="">
              <span class="liTxt_name">春节</span>
            </div>
            <input type="radio">
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "group"
    }
</script>

<style scoped>
#group{
  width: 100%;
  height: 100%;
  color: #000;
  font-size: .6rem;
  overflow: hidden;
}
.header{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 33;
  height: 1.4rem;
  background-color: white;
  color: black;
  border-bottom: 2px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
input{
  border: none;
  background-color: #fff;
  height: 1.2rem;
  line-height: 1.2rem;
}
.img{
  width: .8rem;
  height: .8rem;
  margin-right: .6rem;
}
.header_sear{
  justify-content: space-between;
  align-items: center;
  display: flex;
}
.header_slog{
  width: 1.5rem;
  line-height: 1.4rem;
  height: 1.4rem;
  margin-right: .3rem;
}
.header_slog span {
  display: inline-block;
  width: .2rem;
  height: .2rem;
  background-color: #222222;
  border-radius: 50%;
}
.groupWrapper{
  color: #000;
  font-size: .6rem;
  overflow: hidden;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
.groupSettle{
  padding: 0;
  margin: 0;
  list-style: none;
}
.groupSettle li{
  height: 1.4rem;
  line-height: 1.4rem;
  border-bottom: 1px solid #222222;
  padding: .2rem .4rem;
  text-align: left;
}
.groupSettle li img{
  width: 1.4rem;
  height: 1.4rem;
  margin: 0 .2rem;
}
.groupWrapperLi{
  display: flex;
  height: 1.4rem;
  line-height: 1.4rem;
  justify-content: space-between;
  align-items: center;
}
.lisetting{
  height: 1.4rem;
  line-height: 1.4rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.lisetting span{
  display: inline-block;
  width: 3rem;
  height: 1.4rem;
  line-height: 1.4rem;
}
.button_txt{
  width: 1.5rem;
  height: .8rem;
  text-align: center;
  line-height: .8rem;
  background-color: #55a532;
  color: #fffdef;
  padding: 0.2rem;
}
.liTxt{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.liTxt_name{
  margin-left: .4rem;
}

</style>
