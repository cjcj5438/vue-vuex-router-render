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
  },
  render:function (createElement) {
    return createElement(
      'h'+this.level,
      [
        createElement(
          'a',
          {
            domProps:{
              href:'#'+this.title
            }
          },
          this.$slots.default
        )
      ]
    )
  }
}
