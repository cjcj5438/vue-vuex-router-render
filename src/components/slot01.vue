<template>
  <div>
    <slotchild>
      <div slot="a">{{message}}</div>
      <div slot="b">你好</div>
    </slotchild>
  </div>
</template>

<script>
  import slotchild from '../components/slot01child'
  //slot 默认 在当前vue文件下作用域
  export default {
    components:{
      slotchild
    },
    data(){
      return{
        message:'word'
      }
    },
    mounted(){
      // DOTO: slot的访问
      // 当只用一个slot时 this.$slots.default
      // 当只用有多个slot时 this.$slots.a
    },
    name: "slot01"
  }
</script>

<style scoped>

</style>
