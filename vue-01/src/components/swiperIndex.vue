<template>
<div class="mian">
  <comMentBox></comMentBox>
<ul class="mianComment">
  <li class="mianCommentList" v-for="item in list" :key="item.id">
    <span class="badGe">评论人： {{ item.name }}</span>
    <div class="Commentary">
      {{ item.content }}
    </div>

  </li>
</ul>
</div>
</template>
<script>
  import comMentBox from './comMentBox'
    export default {
        name: "swiperIndex",
      data(){
          return {
            list:[
              {id:1,name:'小明',content:'放学别走！'},
              {id:2,name:'小新',content:'打台球去！'},
              {id:3,name:'小北',content:'放学一起走！'},
              {id:4,name:'小黑',content:'放学轰趴去！'},
            ]
          }
      },
    //   created:{
    //     this.loadComments()
    // }
      methods:{
          loadComments: function () {
            let list = JSON.parse( localStorage.getItem('cmts') || '[]')
            this.list = list
          }
      },
      components:{
        comMentBox
      }

    }
</script>

<style scoped>
.mian{
  width: 100%;
  margin: 0 auto;
  font-size: .6rem;
  color: #000;
}
  .mianComment{
    width: 90%;
    margin: 0 auto;
    height: 1.4rem;
    list-style: none;
    padding: 0;
  }
  .mianCommentList{
    border-bottom: 1px solid #666;
    width: 100%;
    height: 1.4rem;
    line-height: .75rem;
    margin: .4rem 0;
    text-align: left;
  }
  .badGe{
    display: block;
    font-size: .5rem;
  }
  .Commentary{
    text-indent: .4rem;
  }
</style>
