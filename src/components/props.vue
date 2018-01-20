<template>
  <div>
    <h2>我是子组件</h2>
    <h2>从父组件拿到的值{{initCount}}</h2>
    <h2>从父组件拿到的值,后进行修改{{count}}</h2>
    <button @click="change">修改父值?</button>
  </div>
</template>

<script>
  //子组建
  //自组件可以按引用传递,不能改变父组件的按值传递
  export default {
    props: ['initCount'],//按值传递
    // props:{//按引用传递
    //   initCount:{
    //     type:Object,
    //     default:function () {
    //       return ()=>{}
    //     }
    //   }
    // },
    data(){
      return {
        //为什么要这么写,不直接写count="任何值"?
        // 因为子组建不能修改props值,所以要count:this.initCount
        // count:this.initCount//传递非Array 和object 不能被子组件修改
        count:this.initCount
        // count:this.initCount.a
      }
    },
    //要改变的话
    methods:{
      change(){
        this.count++;
        // this.initCount.a++;
      }
    },


  }
</script>

<style scoped>

</style>
