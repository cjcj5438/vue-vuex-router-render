<template>
  <div>
    <button @click="handleClick">+1</button>
    <br>
    <span>我改变自己的值并传递值给父组建{{currentValue}}</span>
  </div>
</template>

<script>
  export default {
    name: "model",
    props:{
      value:{//必须交value 和input 是一一对应的
        type:Number
      }
    },
    data() {
      return {
        currentValue: this.value
      }
    },
    watch:{//作用是监听父组件value值改变
      value(val){
        this.currentValue=val
      }
    },
    methods: {
      handleClick() {
        this.currentValue++;
        //这里必须叫input 不能叫别的
        this.$emit('input', this.currentValue)
      }
    }
  }
</script>

<style scoped>

</style>
