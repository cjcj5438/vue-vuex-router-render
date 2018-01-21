<template>
  <div>
   <recursionchild :count="count +1" v-if="count <3">{{count}}</recursionchild>
    <p>{{count}}</p>
  </div>
</template>

<script>
  export default {
    name: "recursionchild",
    props: {
      count: {
        type: Number,
        default: 1
      }
    },

  }
</script>

<style scoped>

</style>
