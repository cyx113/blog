import Vue from 'vue'
import Router from 'vue-router'
import Tindex from '@/components/tindex.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: ' Tindex',
      component:  Tindex
    },{
        path: '/list',
        component: resolve => require(['../components/list.vue'], resolve),
    },{
        path: '/detailed',
        component: resolve => require(['../components/detailed.vue'], resolve),
    }
  ]
})
