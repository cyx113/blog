<template>
  <div id="app">
    <el-container>
          <el-header>Header</el-header>
          <el-container>
            <el-aside width="200px">
                <el-menu :default-openeds="['1']" :router="true" background-color="#D3DCE6">
                     <el-submenu index="1">
                       <template slot="title"><i class="el-icon-document"></i>文章操作</template>
                         <el-menu-item index="/" >添加文章</el-menu-item>
                         <el-menu-item index="/articleList" >文章列表</el-menu-item>
                     </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
              <router-view/>
            </el-main>
          </el-container>
        </el-container>

  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
     this.$axios.get('/app/isetCsrf').then(res => {
           console.log(res.data.csrf);
           sessionStorage.setItem('csrfToken', res.data.csrf)
     })
  },
}
</script>

<style>
html,body,#app,.is-vertical {
  width: 100%;
  height: 100%;
  margin: 0;
}
code {
      display: inline-block;
          background-color: #fff5f5;
          border-radius: 3px;
          padding-left: 5px;
          padding-right: 5px;
          color: #ff502c;
          margin: 0px 3px;
          line-height: 1.1rem;
          font-size: .87rem;
}
  pre>code{
    width: 100%;
    border: 0px !important;
    background-color: #283646 !important;
    color: #FFF;
  }
  .is-vertical>.el-container{
      height:calc(100% - 60px);
    }
    .el-header{
      background-color: #B3C0D1;
      color: #333;
      text-align: center;
      line-height: 60px;
    }

    .el-aside {
      background-color: #D3DCE6;
      color: #333;
      text-align: center;
      line-height: 200px;
    }

    .el-main {
      background-color: #E9EEF3;
      color: #333;
    }
</style>
