<template>
  <div >
    <div class="detailed-title">{{context.title}}</div>
    <div class="list-icon center">
      <span><i class="el-icon-date"></i> {{context.addTime}}</span>
      <span><i class="el-icon-folder"></i> {{context.typeName}}</span>
      <span><i class="el-icon-s-custom"></i>{{context.viewCount}}</span>
    </div>
    <div class="article" v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
import marked from '../assets/marked.js'
import markdown from'../assets/sj.js'
export default {
  name: 'App',
  data () {
    return {
      context:{}
    }
  },
  computed : {
        compiledMarkdown() {
          return marked(this.context.introduce|| '');
        }

  },
  mounted(){
    this.$axios.get('/app/getArticleById/'+this.$route.query.id).then(res => {
        let data=res.data.list[0];
        this.context=data

    })
  },
  methods: {
  }
}
</script>

<style scoped>
 .detailed-title {
     font-size: 1.6rem;
     text-align: center;
     padding: 1rem;
 }
 .center {
     text-align: center;
 }
 .list-icon {
     padding: .5rem 0;
     color: #ccc;
 }
 .list-icon span{
   margin-right:1vw;
 }
</style>
