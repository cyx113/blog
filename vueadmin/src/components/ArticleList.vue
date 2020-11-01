<template>
   <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="title"
          label="标题">
        </el-table-column>
        <el-table-column
          prop="typeName"
          label="类别">
        </el-table-column>
        <el-table-column
          prop="addTime"
          label="发布时间">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
</template>

<script>
  export default {
  name: 'ArticleList',
    data () {
      return {
        tableData:[],
        typename:{
          1:'vue',
          2:'react',
          3:'js',
          4:'其他'
        }
      }
    },

    methods:{
         handleEdit(index, row) {
           this.$router.push({  //核心语句
                   path:'/addarticle',   //跳转的路径
                   query:{           //路由传参时push和query搭配使用 ，作用时传递参数
                     id:row.id ,
                   }
                 })
         },
         handleDelete(index, row) {
               this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                     confirmButtonText: '确定',
                     cancelButtonText: '取消',
                     type: 'warning',
                     center: true
               }).then(() => {
                     this.$axios.get('/app/delArticle/'+row.id).then(res => {
                           this.$message({type: 'success',message: '删除成功!'});
                           this.alsd()
                     })
                   }).catch(() => {
                     this.$message({
                       type: 'info',
                       message: '已取消删除'
                     });
               });
         },
        alsd(){
          this.$axios.get('/app/getArticleList').then(res => {
              this.tableData=res.data.list
          })
        }
    },
    mounted () {
      this.alsd()
     },
    computed : {

    },
  }
</script>

<style>
</style>
