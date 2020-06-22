# vuex的使用心得
1. 安装vuex
   ```
   npm install vuex --save // 在node环境下使用
   ```
2. 配置vuex
    1. 新建store文件夹，在文件夹下创建index.js文件
    
    2. 在文件下填充依赖
       ```
       import Vue from 'vue';
       import Vuex from 'vuex'
       //使用
       Vue.use(Vuex)
       ```
    3. 创建一个可以对外传递的对象
       ```
       export default new Vuex.Store({
             state: {
             todos: [
                 { id: 1, text: '...', done: true },
                 { id: 2, text: '...', done: false }
               ],
               count: 0
             },
             getters: {
               doneTodos: state => {
                 return state.todos.filter(todo => todo.done)
               }
             },
             // 1.若是要改变state中的值，需要通过mutations方法
             // 2.mutations中的方法必须是同步的，为了方便debug
             mutations: {
               // state为vuex中的state对象，num为传值
               increment (state, num) {
                 // 变更状态
                 state.count += num
               }
             }，
             // actions可以是异步
             actions: {
               // context是一个和 store 实例具有相同方法和属性的对象
               // num是接受的参数
               increment (context, num) {
                 // 调用mutations中的increment方法
                 context.commit('increment')
               }
             }
       })  
       ```
    4. 在main.js文件中引用创建的文件
       ```
       import store from './store'
       new Vue({
         el: '#app',
         store
       })
       ```
    5. 查看vuex中的state值
       ```
       methods: {
           test() {
               // 在控制台输出state中的count值
               console.log(this.$store.state.todos);   
              
               // 在控制台输出通过getters方法返回的值
               console.log(this.$store.getters.doneTodos);
   
               // 调用mutations中的increment方法
               this.$store.commit('increment', 33)  

               // 调用actions中的increment方法
               this.$store.dispatch('increment', 33)
               // 如果actions中的方法是异步,允许使用then
               this.$store.dispatch('increment', 33).then(res => {})
           }
       }
       ```