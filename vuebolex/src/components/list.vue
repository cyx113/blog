<template>
  <div >
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div v-for="item in mylist" >
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
      mylist:[],
      title:""
    }
  },
  components: {},
  mounted(){
    this.getData()
  },
  watch: {
    $route(){
      this.getData()
    },
  },
  methods: {
    getData(){
      switch(this.$route.query.id){
        case '1': this.title='vue';break;
        case '2': this.title='react';break;
        case '3': this.title='js';break;
        case '4': this.title='其他';break;
      }
      this.$axios.get('/app/getArticleListID/'+this.$route.query.id).then(res => {
         this.mylist=res.data.list;
      })
    },
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
