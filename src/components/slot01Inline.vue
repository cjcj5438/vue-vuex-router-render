<template>
  <div>
    <h4>高级用法-内联模板 </h4>
    <h5>引用模板 把内容当作模板;而不是当作内容分发了
      同时作用域变成了该引用模板,而不是当前.vue的作用域了</h5>
    <slotchild inline-template>
      <!--加了 inline-template 就取到了123-->
      <div slot="a">456</div>
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
    mounted(){
      // DOTO: slot的访问
      // 当只用一个slot时 this.$slots.default
      // 当只用有多个slot时 this.$slots.a
    }
  }
</script>

<style scoped>

</style>
