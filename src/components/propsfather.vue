<template>
  <div>
    <h5 style="color: red">父组件向子组建传值,子组件怎么接收</h5>
    <h5>父组建的原值{{count}}</h5>
    <hr>
    <props :initCount="count"></props>
  </div>

</template>

<script>
  import props from '../components/props'

  export default {
    components: {props},
    name: "propsfather",
    // props: {//这个正向传递数据的过程，就是通过 props 来实现的。
    //   initCount: Number //这里是number类型
    //   //有时候是对象的话.就实现了双向数据绑定
    // },
    data() {
      return {
        // count: {a: 100} //传递对象是可以被子组件修改的
        count: 100//传递对象是可以被子组件修改的
      }
    },
  }
</script>

<style scoped>

</style>
