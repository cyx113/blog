<template>
  <div class="hello">
    <!-- 头部 -->
    <div class="head">文章标题:
      <input type="text" name="" v-model="msg">
      <el-button @click="release" type="success" round>发布</el-button>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{type}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="vue">vue</el-dropdown-item>
          <el-dropdown-item command="react">react</el-dropdown-item>
          <el-dropdown-item command="js">js</el-dropdown-item>
          <el-dropdown-item command="其他">其他</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!-- 简介 -->
    <div class="content">
      <div class="content-left"><textarea  v-model="jiajei"></textarea></div>
      <div v-html= "compiledMarkdown" class="content-right"></div>
    </div>
    <div class="xina"></div>
    <div class="content foot">
      <div class="content-left"><textarea  v-model="neir"></textarea></div>
      <div v-html= "compiled" class="content-right"></div>
    </div>
  </div>
</template>

<script>
import marked from'../assets/marked.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '',
      type:'文章类型',
      typeid:0,
      jiajei:"",
      neir:'',
      insertId:0
    }
  },
  methods:{
    handleCommand(command) {
      switch(command){
        case 'vue': this.typeid=1;break;
        case 'react': this.typeid=2;break;
        case 'js': this.typeid=3;break;
        case '其他': this.typeid=4;break;
      }
       this.type=command
     },
     // 发布事件
     release(){
       if(this.typeid==0){
           this.$notify({title: '警告',message: '必须选择文章类别',type: 'warning'});
           return false
       }else if(!this.msg){
           this.$notify({title: '警告',message: '文章名称不能为空',type: 'warning'});
           return false
       }else if(!this.neir){
         this.$notify({title: '警告',message: '文章内容不能为空',type: 'warning'});
           return false
       }else if(!this.jiajei){
         this.$notify({title: '警告',message: '简介不能为空',type: 'warning'});
           return false
       };
       let dataProps={}   //传递到接口的参数
       dataProps._csrf=sessionStorage.getItem('csrfToken'),
       dataProps.typeId=this.typeid,
       dataProps.title=this.msg,
       dataProps.articleCointent=this.jiajei,
       dataProps.introduce=this.neir,
       dataProps.addTime=parseInt(Date.now()/1000),
       dataProps.viewCount=1234

       if(this.insertId==0){
         this.$axios({url:'/app/index',method: 'post',
              data:dataProps,     //参数
              headers: {'x-csrf-token': sessionStorage.getItem('csrfToken')}
         }).then(res => {
           //请求成功后的处理数
              this.insertId=res.data.insertId;
              if(res.data.isScuccess){
                  this.$notify({title: '成功', message: '文章发布成功',type: 'success'});
               }else{
                  this.$notify.error({title: '错误',message: '文章发布失败'});
               }
         }).catch(err => { console.log(err)     //请求失败后的处理数
         })
       }else{
         dataProps.id=this.insertId
         this.$axios({url:'/app/updateArticle',method: 'post',
              data:dataProps,      //参数
              headers: {'x-csrf-token': sessionStorage.getItem('csrfToken')}
         }).then(res => {
           //请求成功后的处理数
           if(res.data.isScuccess){
               this.$notify({title: '成功', message: '文章修改成功',type: 'success'});
            }else{
               this.$notify.error({title: '错误',message: '文章修改失败'});
            }
         }).catch(err => { console.log(err)     //请求失败后的处理数
         })
       }

     }
  },
  mounted () {
    
  },
  computed : {
    compiledMarkdown() {
      return marked(this.jiajei || '');
    },
    compiled(){
      return marked(this.neir || '');
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    width: 100%;
    height: 100%;

  }
  .head{
    width:100% ;
    height:7% ;
    text-align: center;
    font-size: 23px;
    font-weight: 700;
    position:relative;

   }
   .head input{
    width: 70%;
    height: 25px;
    margin-left: 20px;
   }
   .head .el-button{
    position: absolute;
    top: -20px;
    right: 0px;
   }
   .content{
    width: 100%;
    height:20%;
    margin-bottom:  0.5%;
    display: flex;
    box-sizing: border-box;
   }
   .content-left{
    width:35%;
    height:100% ;

   }
   .content-left textarea{
    width: 100%;
    height:100% ;
    box-sizing: border-box;
   }
   .content-right{
    width:48%;
    height:100% ;
    flex-grow:1;
    overflow: auto;
    box-sizing: border-box;

   }
   .xina{
    height: 0;
    border-bottom: 5px red solid;
   }
   .foot{
    height:68%;
    margin-top: 0.5%;
    box-sizing: border-box;
    background-color: #ddd;
   }

</style>
