<template>
  <div >
    <div v-for="item in mylist">
      <div class="list-title" @click="onclick(item.id)">{{item.title}}</div>
          <div class="list-icon">
            <span><i class="el-icon-date"></i>{{item.addTime}} </span>
            <span><i class="el-icon-folder-opened"></i> {{item.typeName}}</span>
            <span><i class="el-icon-user"></i> {{item.viewCount}}人</span>
          </div>
          <div class="list-context">{{item.articleCointent}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      mylist:[]
    }
  },
  components: {},
  mounted(){
    this.$axios.get('/app/getArticleList').then(res => {
          this.mylist=res.data.list;
    })
  },
  methods: {
    onclick(e){
      this.$router.push({  //核心语句
              path:'/detailed',   //跳转的路径
              query:{           //路由传参时push和query搭配使用 ，作用时传递参数
                id:e,
              }
            })
    }
  }
}
</script>

<style scoped>
  .list-title{
      font-size:1.3rem;
      color: #1e90ff;
      padding: 0 0.5rem;
      cursor:pointer;
  }
  .list-context{
      color:#777;
      padding:.5rem;
  }
  .list-icon{
      padding:.5rem 0;
      color:#AAA;
  }
  .list-icon span{
      display: inline-block;
      padding: 0 10px;
  }
</style>
