##### 使用函数方法调用组件

1. 方法一

    在main.js中将创立的组件设置成公共组件

    ```

        // 引入编写的分页组件
        import pagination from "./pagination";

        // 将分页组件挂在到Vue的公共插件当中
        Vue.component('pagination', pagination); 
        
    ```
    
    在页面调用

    ```

        // 分页组件调用
        <pagination />

    ```

2. 方法二

    使用函数生成一个组件 建立pagination.js文件

    ```

        import Vue from 'vue'
        
        // 引入编写的分页组件
        import pagination from './pagination'

        let toastVue

        // 创建组件的方法
        function createToast() {
          // 这里使用了 VUE 来构建一个 vnode
          // 值得注意的是， $mount() 函数没有填写任何的 dom 节点
          // 这样就变成了一个 未挂载 的 vnode
          const vnode = new Vue({
            render: h => h(pagination)
          }).$mount()
          // 手动 将 生成的对应 dom 插进 body 里面
          document.body.appendChild(vnode.$el)
          // 返回当前实例  的 vue 对象
          // 没错，就是 $children[0]
          return vnode.$children[0]
        }

        export function showChange(callback) {
          // 为了让当前的实例 只有一个，防止占用太多内存
          if (!toastVue) {
            toastVue = createToast()
          }
          // 调用组件中的showChange方法
          toastVue.showChange()
          callback && callback()
          return toastVue
        }

        export default showChange

    ```

    在页面调用组件

    ```

        // 引入pagination.js文件
        import pagination from './pagination'

        // 生成pagination组件并调用组建中的showChange方法
        pagination()

    ```