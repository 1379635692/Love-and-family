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
                <span>选择背景图</span>
               <i class="iconfont iconnext"></i>
            </li>
            <li>
                <span>相册选择</span>
               <i class="iconfont iconnext"></i>
            </li>
            <li>
                <span>拍一张</span>
               <i class="iconfont iconnext"></i>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Backgroundmap",
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
    margin: 1.6rem auto;
}
.setting_set ul{
    list-style-type: none;
    margin-top: .5rem;
    padding: 0;
    padding: 0 1rem;
}
.setting_set ul li{
    height: 1rem;
    line-height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .6rem;
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
