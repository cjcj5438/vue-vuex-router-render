<template>
  <div>
    <p>我是组件nothing1</p>
    <button @click="handleEvent">传递事件</button>
  </div>
</template>

<script>
  import bs from '../base/bus'

  export default {
    name: "nothing1",
    data() {
      return {
        handleEvent() {
          bs.$emit('on-message','我是nothing1的内容');

        }
      }
    },
    //操作父组建 ,但是实际上不允许的  ,会涉及到其他组建
    mounted(){
      // console.log(this.$parent)
    }
  }
</script>

<style scoped>

</style>
