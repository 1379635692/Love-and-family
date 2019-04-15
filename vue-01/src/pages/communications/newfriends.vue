<template>
  <!--新朋友-->
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
    <div class="add_wrap">
      <ul>
        <li>
          <p class="po_1">
            新朋友
          </p>

        </li>
        <li>
         <div class="wrap_li">
           <div class="li_img">
             <img src="../../assets/lo1.jpg" alt="">
           </div>
           <div class="li_name">
             <span>六郎</span>
             <p>我姐让我加你</p>
           </div>
           </div>
           <div class="button">同意</div>
        </li>
        <li>
          <div class="wrap_li">
            <div class="li_img">
              <img src="../../assets/lo1.jpg" alt="">
            </div>
            <div class="li_name">
              <span>六郎</span>
              <p>我姐让我加你</p>
            </div>
          </div>
          <div class="button">同意</div>
        </li>
        <li>
          <div class="wrap_li">
            <div class="li_img">
              <img src="../../assets/lo1.jpg" alt="">
            </div>
            <div class="li_name">
              <span>六郎</span>
              <p>我姐让我加你</p>
            </div>
          </div>
          <div class="fal_me">已同意</div>
        </li>
        <li>
          <div class="wrap_li">
            <div class="li_img">
              <img src="../../assets/lo1.jpg" alt="">
            </div>
            <div class="li_name">
              <span>六郎</span>
              <p>我姐让我加你</p>
            </div>
          </div>
          <div class="fal_me">已同意</div>
        </li>
        <li>
          <div class="wrap_li">
            <div class="li_img">
              <img src="../../assets/lo1.jpg" alt="">
            </div>
            <div class="li_name">
              <span>六郎</span>
              <p>我姐让我加你</p>
            </div>
          </div>
          <div class="fal_me">已同意</div>
        </li>
        <li>
          <div class="wrap_li">
            <div class="li_img">
              <img src="../../assets/lo1.jpg" alt="">
            </div>
            <div class="li_name">
              <span>六郎</span>
              <p>我姐让我加你</p>
            </div>
          </div>
          <div class="button">同意</div>
        </li>
        <li>
          <div class="wrap_li">
            <div class="li_img">
              <img src="../../assets/lo1.jpg" alt="">
            </div>
            <div class="li_name">
              <span>六郎</span>
              <p>我姐让我加你</p>
            </div>
          </div>
          <div class="fal_me">已同意</div>
        </li>
        <li>
          <div class="wrap_li">
            <div class="li_img">
              <img src="../../assets/lo1.jpg" alt="">
            </div>
            <div class="li_name">
              <span>六郎</span>
              <p>我姐让我加你</p>
            </div>
          </div>
          <div class="fal_me">已同意</div>
        </li>
        <li>
          <div class="wrap_li">
            <div class="li_img">
              <img src="../../assets/lo1.jpg" alt="">
            </div>
            <div class="li_name">
              <span>六郎</span>
              <p>我姐让我加你</p>
            </div>
          </div>
          <div class="fal_me">已同意</div>
        </li>
        <li>
          <div class="wrap_li">
            <div class="li_img">
              <img src="../../assets/lo1.jpg" alt="">
            </div>
            <div class="li_name">
              <span>六郎</span>
              <p>我姐让我加你</p>
            </div>
          </div>
          <div class="button">同意</div>
        </li>
        <li>
          <div class="wrap_li">
            <div class="li_img">
              <img src="../../assets/lo1.jpg" alt="">
            </div>
            <div class="li_name">
              <span>六郎</span>
              <p>我姐让我加你</p>
            </div>
          </div>
          <div class="fal_me">已同意</div>
        </li>
        <li>
          <div class="wrap_li">
            <div class="li_img">
              <img src="../../assets/lo1.jpg" alt="">
            </div>
            <div class="li_name">
              <span>六郎</span>
              <p>我姐让我加你</p>
            </div>
          </div>
          <div class="fal_me">已同意</div>
        </li>
        <li>
          <div class="wrap_li">
            <div class="li_img">
              <img src="../../assets/lo1.jpg" alt="">
            </div>
            <div class="li_name">
              <span>六郎</span>
              <p>我姐让我加你</p>
            </div>
          </div>
          <div class="fal_me">已同意</div>
        </li>
      </ul>
    </div>
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
        name: "newfriends"
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
  .add_wrap ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .add_wrap ul li{
    font-size: .6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .4rem .6rem;
    border-bottom: 1px solid #000;
    height: 1.4rem;
    line-height: 1.4rem;
    margin: .2rem 0;
  }
  .wrap_li{
    display: flex;
    height: 1.4rem;
    line-height: 1.4rem;
    justify-content: space-between;
    align-items: center;
  }
  .li_img{
    width: 1.4rem;
    height: 1.2rem;
  }
  .li_name{
    height: 1.4rem;
    line-height: .8rem;
    display: flex;
    margin-left: .4rem;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
    font-size: .56rem;
  }
  .li_name span{
    font-weight: bold;
    font-size: .6rem;
  }
  .li_name p{
    height: 1.2rem;
    width: 5rem;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    margin: 0;
  }
  .li_img img {
    width: 100%;
    height: 100%;
  }
  .add_wrap{
    margin: 1.4rem 0;
  }
  .po_1{
    margin-left: 1.5rem;
  }
  .button{
    width: 1.5rem;
    height: .8rem;
    text-align: center;
    line-height: .8rem;
    background-color: #55a532;
    color: #fffdef;
    padding: 0.2rem;
  }
  .fal_me{
    width: 2rem;
    height: .8rem;
    text-align: center;
    line-height: .8rem;
    color: #000;
    font-size: .56rem;
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
  input{
    border: none;
    background-color: #fff;
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
</style>
