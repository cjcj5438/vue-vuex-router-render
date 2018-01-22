<template>
  <div>
    拿到的数据{{num}}
  </div>
</template>

<script>
  export default {
    name: "myplug-use",
    data() {
      return {
        num: 0
      }
    },
    created(){
      this.$bus.on('add',(val)=>{
        this.num=val;
      })
    }
  }
</script>

<style scoped>

</style>
