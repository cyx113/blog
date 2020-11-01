import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
        path: '/articleList',
        component: resolve => require(['../components/ArticleList.vue'], resolve),
    },{
        path: '/addarticle',
        component: resolve => require(['../components/AddArticle.vue'], resolve),
    }
  ]
})
