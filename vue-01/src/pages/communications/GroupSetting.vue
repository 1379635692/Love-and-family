<template>
    <div id="setting">
      <header class="header">
        <div><i class="iconfont iconreturn"></i></div>
        <input type="number" placeholder="">
        <div class="header_sear">
          <img src="./img/fa.png" alt="" class="imgs">
          <div class="header_slog">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
      <div class="connWrapper">
        <div class="action_img">
          <span class="img"><img src="../../assets/lo1.jpg" alt=""></span>
          <span class="img"><img src="../../assets/lo1.jpg" alt=""></span>
          <span class="img"><img src="../../assets/lo1.jpg" alt=""></span>
          <span class="img"><img src="../../assets/lo1.jpg" alt=""></span>
          <span class="img"><img src="../../assets/lo1.jpg" alt=""></span>
          <span class="img"><img src="../../assets/lo1.jpg" alt=""></span>
          <span class="img"><img src="../../assets/lo1.jpg" alt=""></span>
          <span class="img"><img src="../../assets/lo1.jpg" alt=""></span>
          <div class="img_tie">+</div>
          <div class="img_tie">-</div>
      </div>
        <ul class="setContent">
          <li>群聊名称</li>
          <li class="set_li">
            <span>公告</span>
            <mt-switch></mt-switch>
          </li>
          <li class="set_li">
            <span>群管理</span>
            <mt-switch></mt-switch>
          </li>
          <li class="set_li">
            <span>消息免打扰</span>
            <mt-switch></mt-switch>
          </li>
          <li>
            <span>设置聊天背景</span>
          </li>
          <li>
            <span>我在本群的昵称</span>
          </li>
          <li class="set_li">
            <span>置顶</span>
            <mt-switch></mt-switch>
          </li>
          <li class="set_li">
            <span>保存通讯录</span>
            <mt-switch></mt-switch>
          </li>
          <li class="set_li">
            <span>清空聊天记录</span>
            <mt-switch></mt-switch>
          </li>
          <li>
            <span>投诉</span>
          </li>
        </ul>
        <div class="end_group">解散</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "GroupSetting"
    }
</script>

<style  scoped>
#setting{
  width: 100%;
  height: 100%;
  color: #000;
  font-size: .6rem;
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
.imgs{
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
.connWrapper{
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
.action_img{
  display: flex;
  flex-wrap: wrap;
  padding: .4rem .8rem;
  border-bottom: .2rem solid #969896;
}
  .img{
    width: 1.4rem;
    height: 1.4rem;
    margin: .4rem .6rem;
  }
.img img{
  width: 100%;
  height: 100%;
}
  .img_tie{
    display: inline-block;
    width: 1.4rem;
    height: 1.4rem;
    line-height: 1.4rem;
    text-align: center;
    border-radius: 4px;
    margin: .4rem .6rem;
    font-size: 1.5rem;
    border: 1px solid #000;
  }
  .setContent{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .setContent li{
    font-size: .6rem;
    color: #000;
    height: 2rem;
    line-height: 2rem;
    padding: 0 .4rem;
    text-align: left;
    border-bottom: 1px solid #000;
  }
  .set_li{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .end_group{
    width: 100%;
    color: red;
    height: 1.4rem;
    line-height: 1.4rem;
    text-align: center;
    margin-top: .4rem;
  }
</style>
