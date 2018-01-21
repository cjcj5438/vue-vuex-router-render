import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//引入路由组建
import render01 from '../components/render01'
import hanshuhuazujian from '../components/hanshuhuazujian'
import tablesort from '../base/tableSort.vue'
import props from '../components/propsfather'
import emitfather from '../components/emitfather'
import model from '../components/modelfather'
import bus from '../components/bus'
import bus2 from '../components/bus2'
import slot01 from '../components/slot01'
import recursion from '../components/recursion'
import slot01Inline from '../components/slot01Inline'
import asyn from '../components/asyn'
import vuex1 from '../components/vuex1'

Vue.use(Router);
const Routers=[
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
  },
  {
    path: '/hanshuhuazujian',
    name: '函数化组建',
    component: hanshuhuazujian
  },
  {
    path: '/tablesort',
    component: tablesort
  },
  {
    path: '/props',
    component: props
  },
  {
    path: '/emitfather',
    component: emitfather
  },
  {
    path: '/model',
    component: model
  },
  {
    path: '/bus',
    component: bus
  },
  {
    path: '/bus2',
    component: bus2
  },
  {
    path: '/slot01',
    component: slot01
  },
  {
    path: '/recursion',
    component: recursion
  },
  {
    path: '/slot01Inline',
    component: slot01Inline
  },
  {
    path: '/asyn',
    component: asyn
  },
  {
    path: '/router01',
    meta: {
      title: '首页导航'
    },
    component: (resolve) => require(['../components/router01.vue'], resolve)
    // beforeEnter: (to, from, next) => {}
    // 子路由
    , children: [
      {
        path: "about",
        meta: {
          title: '关于'
        },
        component: (resolve) => require(['../components/about.vue'], resolve)
      },
      {
        path: "index",
        meta: {
          title: '首页'
        },
        component: (resolve) => require(['../components/index.vue'], resolve)
      },
      {
        path: "user/:id",
        meta: {
          title: '用户页'
        },
        component: (resolve) => require(['../components/user.vue'], resolve)
      },
      // 当进入到home时，下面的组件显示
      {
        path: "",
        meta: {
          title: '关于'
        },
        component: (resolve) => require(['../components/about.vue'], resolve)
      }
    ]
  },
  {
    path: '/vuex1',
    component: vuex1
  },
];
const RouterConfig={
  mode: "history",
  routes: Routers,
};
const router=new Router(RouterConfig);
// 这是全局
// router.beforeEach((to,from,next)=>{
  // to要去的页面 from 即将要离开的路由
  // window.document.title=to.meta.title
  // next(); //调用next 让他进入下一个生命周期
  // 判断是否登陆了
  // if(window.localStorage.getItem('token')){
  //   next()
  // }else{
  //   next('/login');
  //   // next(false)
  // }
// });
//路由发生之后了
// router.afterEach((to,from,next)=>{
// window.scrollTo(0,0)
// })
export default router
