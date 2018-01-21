<template>
  <div>
    {{message}}
    <nothing1 ref="a"></nothing1>
    <nothing1 ref="b"></nothing1>
    <nothing1 ref="c"></nothing1>
  </div>
</template>

<script>
  import b from '../base/bus'
  import nothing1 from '../components/nothing1'

  export default {
    components:{nothing1},
    mounted(){ //这里是mounted函数周期不要写错了
      b.$on('on-message',(msg)=>{
        this.message=msg
      });
      //这样可以操作子组件.使用时要小心,不然会涉及到其他模块引用出现数据不对
      //返回的是数组  要注意
      // console.log(this.$children[0].handleEvent)
      //非父子组建通信-子组建索引
      console.log('nothing1 ref="a"',this.$refs.a)
    },
    data(){
      return{
        message:''
      }
    },
    name: "bus"
  }
</script>

<style scoped>

</style>
