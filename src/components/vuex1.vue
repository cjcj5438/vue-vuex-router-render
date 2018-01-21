<template>
  <div>
    我是vuex1

    <p>怎么调用store 的mutations里面的方法呢?</p>
    <button @click="handleClick">+1</button>
    {{count}}
    <button @click="handleDelete">-1</button>
    {{filtered}}
    <button @click="handleActionAdd">ation +1</button>
  </div>
</template>

<script>
  export default {
    name: "vuex1",
    computed: {//读vuex  建议在计算属性上
      count() {
        return this.$store.state.count
      },
      filtered(){
        return this.$store.getters.filteredList
      }
    },
    methods:{
      handleClick(){ //vuex 写  存到data(){}
        this.$store.commit('increment')
      },
      handleDelete(){
        this.$store.commit('decrease')
      },
      handleActionAdd(){
        this.$store.dispatch('increment').then(()=>{
          console.log(this.$store.state.count)
        })
      }
    }
  }
</script>

<style scoped>

</style>
