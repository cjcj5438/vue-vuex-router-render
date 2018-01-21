<template>
  <div>
    <h4>在组建上使用v-model.实现父子组建双向数据绑定</h4>
    父组件
    {{value}}
    <button @click="handleMinus">-1</button>
    <hr>
    子组件
    <model v-model="value"></model>
  </div>
</template>

<script>
  import model from '../components/model'

  export default {
    components: {model},
    data(){
      return{
        value:100
      }
    },
    methods:{
      handleMinus(){
        this.value--;
      }
    },
    name: "modelfather"
  }
</script>

<style scoped>

</style>
