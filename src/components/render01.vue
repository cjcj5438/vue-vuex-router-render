<template>
  <div>
    <anchor :level="1" title="特性1">特性1</anchor>
    <anchor :level="2" title="特性2">特性2</anchor>
    <anchor :level="3" title="特性3">特性3</anchor>
    <anchor :level="4" title="特性4">特性4</anchor>
    <anchor :level="5" title="特性5">特性5</anchor>
    <anchor :level="6" title="特性6">特性6</anchor>
  </div>
</template>

<script>
  // import anchor from '../base/anchor'
  import anchor from '../base/anchor.js'

  export default {
    name: "render01",
    components: {
      anchor
    }
  }
</script>

<style scoped>

</style>
