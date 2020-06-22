import Vue from 'vue';
import Vuex from 'vuex'
//使用
Vue.use(Vuex)
import ModuleA from './module'
const options = {}
export default new Vuex.Store({
    modules: {
      a: ModuleA
    }
    // ,
    // state: {
    //     todos: [
    //       { id: 1, text: '...', done: true },
    //       { id: 2, text: '...', done: false }
    //     ],
    //     count: 0
    //   },
    //   getters: {
    //     doneTodos: state => {
    //       return state.todos.filter(todo => todo.done)
    //     }
    //   },
    //   mutations: {
    //     increment (state, num) {
    //       // 变更状态
    //       state.count += num
    //     }
    //   },
    //   actions: {
    //     // context是一个和 store 实例具有相同方法和属性的对象
    //     // num是接受的参数
    //     increment (context, num) {
    //       // 调用mutations中的increment方法
    //       context.commit('increment',num)
    //     }
    //   }
})