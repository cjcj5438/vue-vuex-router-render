<template>
  <div>
    <h4 style="color: red">子组件向父组件传值 (是通过自定义事件来 传值的)</h4>
    我是父组建
    <h3 >我从子组建拿到的值{{childrenCount}}</h3>
    <hr>
    <!--组件事件不要绑定错误-->
    <emit @increase="getIncrease"></emit>
    <!--<emit @increase.native="getIncrease"></emit>//加了.native 可以监听组件click事件的同时,也可以监听DOM事件了-->
  </div>
</template>

<script>
  import emit from '../components/emit'

  export default {
    components: {emit},
    data(){
      return {
        childrenCount:''
      }
    },
    methods:{
      getIncrease(data){
        console.log(data)
        console.log(this.$route.path)
        this.childrenCount=data
      }
    },
    name: "emitfather"
  }

</script>

<style scoped>

</style>
