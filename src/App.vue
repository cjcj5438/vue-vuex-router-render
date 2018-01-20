<template>
  <div id="app">
    <router-link to="/">HelloWorld</router-link>
    <router-link to="/render01">render01</router-link>
    <router-link to="/hanshuhuazujian">函数化组建</router-link>
    <router-link to="/tablesort">表格排序</router-link>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
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
</style>
