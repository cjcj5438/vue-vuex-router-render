import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//引入路由组建
import render01 from '../components/render01'
import hanshuhuazujian from '../components/hanshuhuazujian'
import tablesort from '../base/tableSort.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/render01',
      name: 'HelloWorld2',
      // meta:{title:'Table'},
      component: render01
      // component: (resolve)=>require(['./component/render01.vue'],resolve)
    }
    ,{
      path: '/hanshuhuazujian',
      name: '函数化组建',
      component: hanshuhuazujian
    },
    {
      path: '/tablesort',
      component: tablesort
    }
  ]
})
