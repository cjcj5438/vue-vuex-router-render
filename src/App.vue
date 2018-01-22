<template>
  <div id="app">
    <p>render-demo</p>
    <router-link to="/">HelloWorld</router-link>
    <router-link to="/render01">render01</router-link>
    <router-link to="/hanshuhuazujian">函数化组建</router-link>
    <router-link to="/tablesort">表格排序</router-link>
    <p>组件-demo</p>
    <router-link to="/props">props(父向子)</router-link>
    <router-link to="/emitfather">emit(子向父)</router-link>
    <router-link to="/model">组件上使用v-model</router-link>
    <router-link to="/bus">非相关组件的传值</router-link>
    <router-link to="/bus2">非父子组建通信-子组建索引</router-link>
    <router-link to="/slot01">简单slot demo</router-link>
    <router-link to="/recursion">组建递归demo</router-link>
    <router-link to="/slot01Inline">内联模板</router-link>
    <router-link to="/asyn">asyn异步组建加载</router-link>

    <p>路由模块-route</p>
    <router-link to="/router01">路由</router-link>
    <p>store Vuex-demo</p>
    <router-link to="/vuex1">其他组件拿vuex的值</router-link>
    <router-link to="/myplug">我的插件</router-link>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  p{
    color: green;
  }
</style>
