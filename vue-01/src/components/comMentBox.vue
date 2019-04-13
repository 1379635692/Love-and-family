<template>
  <div class="mian">
    <div class="form-group">
      <label>评论人：</label>
      <input type="text" class="form-group btn-form" v-model="user">
    </div>

    <div class="form-group">
      <label>评论内容：</label>
      <textarea class="form-group btn-form" v-model="content"></textarea>
    </div>

    <div class="form-group">
      <input type="button" value="发表评论" class="btn-btn" @click='postComment'>
    </div>
  </div>
</template>
<script>
    export default {
      name: "comMent",
      data() {
        return {
          user:'',
          content:'',
        }
      },
      methods:{
        postComment:function () {
          //发表评论的方法
          //评论数据存放到localstorage中
          //组织出一个最新的评论数据对象
          // 把第二步得到的评论对象。保存到localStorage中
          // localStrage 只支持存放字符串数据， json.stringify
          // 在保存最新的评论数据之前，先从localStrage 获取到之前的评论数据 转换一个数组对象
          // 把最新的评论push进去到这个数组
          //如果获取到的localStorage中的评论字符串为空不存在,则返回一个 '[]' 让json.parse去转换
          // 把最新的评论列表数组，再次调用 JSON.stringify 转为数组字符串 然后调用localStorge.setItem（）
          let comment ={ id: Date.now(), name: this.user, content:this.content }

          //从localStorage 中获取所以评论
          let list = JSON.parse( localStorage.getItem('cmts') || '[]')
          list.unshift(comment)

          //重新保存最新的评论
          localStorage.setItem('cmts',JSON.stringify(list))

          this.user = this.content = ""

          this.$emit("func")
        }
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
  .form-group{
    width: 90%;
    margin: .4rem auto;
    display: flex;
    flex-wrap: wrap;
    font-size: .6rem;
  }
  input{
    width: 100%;
    height: 1rem;
    line-height:1rem;
    border: 1px solid;
  }
  .btn-form{
    height: 1rem;
    line-height: 1rem;
  }
  .btn-btn{
    width: 4rem;
    height: 1.2rem;
    line-height: 1.2rem;
    text-align: center;
    background-color: dodgerblue;
    margin:  0 auto;
    color: #fff;
  }
  textarea{
    border: 1px solid;
  }
</style>
