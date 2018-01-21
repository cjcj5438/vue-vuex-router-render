<template>
  <div>
    我是子组件
    <button @click="handleAdd">我是子组建</button>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        count:100
      }
    },
    methods:{
      handleAdd(){
        this.count++;
        this.$emit('increase',this.count)
      }
    },
    name: "emit"
  }
</script>

<style scoped>

</style>
