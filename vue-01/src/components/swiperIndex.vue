<template>
<div class="mian">
  <comMentBox @func="loadComments"></comMentBox>
<ul class="mianComment">
  <li class="mianCommentList" v-for="item in list" :key="item.id">
    <span class="badGe">评论人： {{ item.name }}</span>
<!-- <<<<<<< HEAD -->
    <!--<Star :score="item.number" :size="24" />-->
    <span> {{item.number }}</span>
<!-- ======= -->
<!-- >>>>>>> d5aa2096c6533af97b80190a138cf03c098301e4 -->
    <div class="Commentary">
      {{ item.content }}
    </div>

  </li>
</ul>
</div>
</template>
<script>
  import comMentBox from './comMentBox'
// <<<<<<< HEAD
  // import Star from './Star/Star'
// =======
// >>>>>>> d5aa2096c6533af97b80190a138cf03c098301e4
    export default {
        name: "swiperIndex",
      data(){
          return {
            list:[
              {id:Date.now(),name:'小明',content:'放学别走！'},
              {id:Date.now(),name:'小新',content:'打台球去！'},
              {id:Date.now(),name:'小北',content:'放学一起走！'},
              {id:Date.now(),name:'小黑',content:'放学轰趴去！'},
            ]
          }
      },
      created(){
        this.loadComments()
    },
      methods:{
          loadComments: function () {
            let list = JSON.parse( localStorage.getItem('cmts') || '[]')
            this.list = list
          }
      },
      components:{
// <<<<<<< HEAD
        comMentBox,
        // Star入
      },
      created(){
        console.log(this)
        this.loadComments()
    },
// =======
components:{
 comMentBox
}
       
      }
// >>>>>>> d5aa2096c6533af97b80190a138cf03c098301e4

    // }
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
    font-size: .5rem;
    text-indent: .4rem;
  }
</style>
