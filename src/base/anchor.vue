<template>
  <div>
    <!--需求  h1到h6 的锚点 跳转-->
    <h1 v-if="level===1">
      <a :href="'#'+ title">
        <slot></slot>
      </a>
    </h1>
    <h2 v-if="level===2">
      <a :href="'#'+ title">
        <slot></slot>
      </a>
    </h2>
    <h3 v-if="level===3">
      <a :href="'#'+ title">
        <slot></slot>
      </a>
    </h3>
    <h4 v-if="level===4">
      <a :href="'#'+ title">
        <slot></slot>
      </a>
    </h4>
    <h5 v-if="level===5">
      <a :href="'#'+ title">
        <slot></slot>
      </a>
    </h5>
    <h6 v-if="level===6">
      <a :href="'#'+ title">
        <slot></slot>
      </a>
    </h6>
  </div>
</template>

<script>
  export default {
    props: {
      level: {//锚点等级 (1-6)
        type: Number,
        required: true
      },
      title: {//锚点标题
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>

</style>
