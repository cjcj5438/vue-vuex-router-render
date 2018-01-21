import Vue from 'vue';
import Vuex from 'vuex';
// import * as actions from './actions';
// // * 表示将 './actions'模块中的所有接口挂载到actions对象上  as 表示别名的意思
// import * as mutations from './mutations';
// import * as getters from './getters';
// import state from './rootState';
Vue.use(Vuex);
const store = new Vuex.Store({
  // state,
  // getters,
  // actions,
  // mutations
  state: {//保存所有数据的,vuex的约定这里的数据只能读取,不能修改
    count: 1,//不能异步操作时间
    list: [1, 5, 8, 10, 30, 50]
  },
  mutations: {//提供方法的
    increment(state, n = 1) {
      state.count += n;
    },
    decrease(state) {
      state.count--;
    }
  },
  getters: {//类似于计算属性
    filteredList: (state,getters) => {
      return state.list.filter(item => item < 10)
    },
    xxx:state=>{}
  },
  actions: {
    //也是修改state的,但是通过mutations来修改state,从而可以实现异步
    increment(context){

      return new Promise(resolve => {
        setTimeout(()=>{
          context.commit('increment');
          resolve();
        },1000)
      })
    }
  },
});
export default store;
