<template>
  <div>
    <h4 style="color: red">子组件向父组件传值</h4>
    我是父组建
    <h3 @increase="getIncrease">我从子组建拿到的值</h3>
    <hr>
    <emit></emit>
  </div>
</template>

<script>
  import emit from '../components/emit'

  export default {
    components: {emit},
    methods:{
      getIncrease(count){
        console.log(count)
      }
    },
    name: "emitfather"
  }

</script>

<style scoped>

</style>
