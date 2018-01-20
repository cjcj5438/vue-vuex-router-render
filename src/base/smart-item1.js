//图片组建选项
var ImgItem = {
  props: ['data'],
  render: function (createElement) {
    return createElement('div', [
      createElement('p', '图片组建'),
      createElement('img', {
        attrs: {
          src: this.data.url
        }
      })
    ])
  }
};
//视频组建
var VideoItem = {
  props: ['data'],
  render: function (createElement) {
    return createElement('div', [
      createElement('p', '视频组件'),
      createElement('video',{
        attrs:{
          src:this.data.url,
          controls:'controls',
          autoplay:'autoplay'
        }
      })
    ])
  }
};

//文本组建
var TextItem={
  props:['data'],
  render:function (createElement) {
    return createElement('div',[
      createElement('p','文本组建'),
      createElement('p',this.data.content)
    ])
  }
};

export default {
  //这里为什么要把functional设置成true 呢?
  //这样他就是无data 无上下文的函数化组建了

  functional:true,//单词不要写错了
  props:{
    data:{
      type:Object,
      required:true
    }
  },
  render:function (createElement, context) {
    function getComponent() {
      var data=context.props.data;
      if (data.type==='img')return ImgItem
      if (data.type==='video')return VideoItem
      return TextItem
    }
    return createElement(
      getComponent(),
      {
        props:{
          data:context.props.data
        }
      },
      context.children
    )
  }
}
