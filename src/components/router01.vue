<template>
  <div>
    <router-link to="/router01/about">1固定链接跳转到about</router-link>
    <router-link :to="url">2动态绑定跳转链接</router-link>
    <router-link to="/router01/about" tag="span">3修改跳转链接的标签改为span</router-link>
    <router-link to="/router01/about" replace>4清除跳转历史.不允许浏览器返回</router-link>
    <router-link to="/router01/about" active-class="classname">5跳到当前路由,添加一个 class样式</router-link>
    <router-link to="/router01/user">路由取值</router-link>
    <button @click="handleClick">6通过按钮来跳转</button>
    <router-view/>
  </div>
</template>

<script>
  import about from '../components/about'
  import index from '../components/index'
  import user from '../components/user'

  export default {
    name: "router01",
    data() {
      return {
        url: '/router01/about'
      }
    },
    methods:{
      handleClick(){
        // this.$router.push('/router01/user/100')
        //  this.$router.replace('/router01/user/100')
         this.$router.go(-2) //退后2页
      }
    }
  }
</script>

<style scoped>

</style>
