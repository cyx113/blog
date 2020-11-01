<template>
  <!-- 头部 -->
  <div class="header">
      <el-row type="flex" justify="center">
          <el-col  :xs='24' :sm='10' :md='10' :lg='10' :xl='10'class="heander-title">
              <span class="header-logo">小陈</span>
              <span class="header-txt">专注前端开发。</span>
          </el-col>

          <el-col class="memu-div" :xs='0' :sm='14' :md='14' :lg='8' :xl='6'>
              <el-menu  mode="horizontal" :router="true">
                  <el-menu-item  index="/">
                      <i class="el-icon-s-home"></i>
                      首页
                  </el-menu-item>
                  <el-menu-item  index="/list?id=1">
                      <i class="el-icon-ice-tea"></i>
                      vue
                  </el-menu-item>
                  <el-menu-item  index="/list?id=2">
                      <i class="el-icon-ice-drink"></i>
                      react
                  </el-menu-item>
                  <el-menu-item  index="/list?id=3">
                      <i class="el-icon-milk-tea"></i>
                      js
                  </el-menu-item>
                  <el-menu-item  index="/list?id=4">
                      <i class="el-icon-apple"></i>
                      其他
                  </el-menu-item>
              </el-menu>
          </el-col>
      </el-row>
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
    },
    methods: {
    }
  }
</script>

<style>
  .header{
      background-color: #fff;
      padding: .4rem;
      overflow: hidden;
      height: 3.4rem;
      border-bottom:1px solid #ccc;
  }
  .heander-title{
    padding-top: 1.2rem;
  }
  .header-logo{
      color:#1e90ff;
      font-size: 1.8rem;
      text-align: left;

  }
  .header-txt{
      font-size: 0.9rem;
      color: #999;
      display: inline-block;
      padding-left: 0.3rem;
  }
  .el-menu{
      line-height: 2.6rem;

  }
  .el-menu-item{
      font-size:1rem !important;
      padding-left:1rem;
      padding-right:1rem;

  }
</style>
