<template>
    <!--聊天界面-->
  <div id="seting">
       <mt-header title="">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <i class="icon iconrandom"></i>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="setting_set">
        <ul>
            <li>
                <span>置顶聊天</span>
               <mt-switch ></mt-switch>
            </li>
              <li>
                <span>消息免打扰</span>
               <mt-switch ></mt-switch>
            </li>
             <li>
                <p>创建聊天背景</p>
            </li>
             <li>
                <span>删除聊天记录</span>
                <span>确定</span>
            </li>
             <li>
                <span>删除他（她）</span>
                <span>确定</span>
            </li>
             <li>
                <span>投诉</span>
               <i class="iconfont iconnext"></i>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "setting",
      data(){
          return{
            
          }
      },
    }
</script>

<style scoped>
#seting{
    width: 100%;
    height: 100%;
    font-size: .6rem;
    color: #000;
}
.mint-header{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 33;
  height: 1.4rem;
  background-color: white;
  color: black;
  border-bottom: 2px solid #000;
}
.setting_set{
    width: 100%;
    margin: 1.4rem auto;
    padding: .6rem 0
}
.setting_set ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
    padding: 0 1rem;
}
.setting_set ul li{
    height: 2rem;
    line-height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .7rem;
    margin: .4rem 0;
}
.setting_set ul li span{
    text-align: left;
    width: 5rem;
    height: 100%;
}
.setting_set ul li span:last-child{
    font-size: .56rem;
    text-align: right;
}
.iconnext{
    width: 2rem;
    height: 100%;
    text-align: right;
}
</style>
