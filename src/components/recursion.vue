<template>
  <div>组建递归
    <re4 :count="1"></re4>
  </div>

</template>

<script>
  import re4 from '../components/recursionchild'

  export default {
    components: {re4},
    name: "recursion"
  }
</script>

<style scoped>

</style>
