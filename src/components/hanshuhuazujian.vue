<template>
  <div>
    <p>函数化组建</p>
    <smart-item :data="data"></smart-item>
    <button @click="change('img')">切换成图片组建</button>
    <button @click="change('video')">切换成视频组件</button>
    <button @click="change('text')">切换成文本组件</button>

  </div>
</template>

<script>
  import smartItem from '../base/smart-item1'

  export default {
    components: {smartItem},
    data() {
      return {
        data: {}
      }
    },
    methods:{
      change (type) {
        if(type==='img'){
          this.data={
            type:'img',
            url:'//www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png'
          }

        }else if(type==='video'){
          this.data={
            type:'video',
            url:'https://cdn1.evernote.com/evernote.com/video/homepage/homepage-hero-video.mp4'
          }
        }else{
          this.data={
            type:'text',
            content:'这是我的写的文本'
          }
        }
      }
    },
    created(){
      this.change('img')
    },
    name: "hanshuhuazujian"
  }
</script>

<style scoped>

</style>
