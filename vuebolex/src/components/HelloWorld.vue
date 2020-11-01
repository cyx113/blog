<template>
  <div class="hello">
    <Header></Header>
    <el-row type="flex" justify="center" class='center'>
        <el-col class="comm-left" :xs='24' :sm='16' :md='17' :lg='12' :xl='12'>
           <router-view/>
        </el-col>
        <im
        <el-col class="comm-right" :xs='0' :sm='8' :md='7' :lg='4' :xl='4'>
            <!-- 博主介绍 -->
            <div class="author-div comm-box">
                <el-avatar :size='100' src="http://blogimages.jspang.com/blogtouxiang1.jpg"  />
                <div class="author-introduction">
                    光头程序员，专注于WEB和移动前端开发。要录1000集免费前端视频的傻X。此地维权无门，此时无能为力，此心随波逐流。
                    <el-divider>社交账号</el-divider>
                    <el-avatar :size='28' icon="el-icon-star-off" class="account"  />
                    <el-avatar :size='28' icon="el-icon-remove"  class="account" />
                    <el-avatar :size='28' icon="el-icon-remove"  class="account"  />
                </div>
            </div>
            <!-- 广告 -->
            <div class="ad-div comm-box">
              <div><img src="http://blogimages.jspang.com/flutter_ad2.jpg" width="100%" /></div>
              <div><img src="http://blogimages.jspang.com/Vue_koa_ad1.jpg" width="100%" /></div>
              <div><img src="http://blogimages.jspang.com/WechatIMG12.jpeg" width="100%" /></div>
            </div>
        </el-col>
    </el-row>
    <div class="footer-div">
        <div>系统由 Vue+Node+element驱动 </div>
        <div>cyx.com</div>
    </div>
  </div>
</template>

<script>
  import Header from "../static/head.vue"
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  components: {
      Header
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .comm-left{
    background-color: #FFF;
    padding:.3rem;
    border-radius: .3rem;
    border-bottom:1px solid #eee;
  }
  .comm-right{
    background-color: #FFF;
    margin-left: .5rem;
    padding:.3rem;
    border-radius: .3rem;
    border-bottom:1px solid #eee;

  }
  .comm-main{
    margin-top: .5rem;
  }
  /* 博主介绍 */
  .author-div{
      text-align: center;
      padding: 1rem;
  }
  .author-div div{
      margin-bottom: 1rem;
  }
  .author-introduction{
      font-size:.8rem;
      color: #999;
  }
  .account{
      background-color: #999;
      margin-left: .5rem;
      margin-right: .5rem;
  }
  /* 广告 */
  .ad-div{
      margin-top: .5rem;
  }
  .ad-div div{
      border-radius: .3rem;
      margin-bottom: .2rem;
      overflow: hidden;
  }
  .footer-div{
      text-align: center;
      width: 100%;
      padding: 1rem;
      color:#888;
	  box-sizing: border-box;
  }
</style>
