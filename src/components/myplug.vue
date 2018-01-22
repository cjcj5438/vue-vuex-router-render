<template>
  <div>我的插件开发
    <button @click="handleRandom">随机增加</button>
    <myplugUse></myplugUse>
  </div>
</template>

<script>
  import myplugUse from '../components/myplugUse'
  export default {
    name: "myplug",
    components:{myplugUse},
    methods:{
      handleRandom(){
        const num=Math.floor(Math.random()*100+1)
        this.$bus.emit('add',num);
      }
    }
  }
</script>

<style scoped>

</style>
