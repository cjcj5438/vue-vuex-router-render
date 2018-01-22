const install = function (Vue) {
  const Bus = new Vue({
    methods: {
      emit(event, ...arg) {//做一些数据提交
        this.$emit(event, ...arg);
      },
      // on 和off 是用来做回调的
      on(event, callback) {
        this.$on(event, callback)
      },
      off(event, callback) {
        this.$off(event, callback)
      }
    }
  });
  Vue.prototype.$bus = Bus;
};
export default install;
