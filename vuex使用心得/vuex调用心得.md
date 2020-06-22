## vuex调用心得

1.  普通调用

    1. 没有模块化的调用方式

    ```
    // 调用mutations中的函数

    this.$store.commit('函数名称')

    // 调用getters中的函数

    this.$store.getters('函数名称')

    // 调用actions中的函数名称

    this.$store.dispatch('函数名称')
    ```
    2. 模块化后的调用

     ```
    // 调用模块中的mutations中的函数

    this.$store.commit('模块名称/函数名称')

    // 调用模块中的getters中的函数

    this.$store.getters('模块名称/函数名称')

    // 调用模块中的actions中的函数名称

    this.$store.dispatch('模块名称/函数名称')
    ```

2. 快捷调用方法

   1. getters方法 

   ```
   import { mapGetters } from 'vuex'

   export default {
     // ...
     computed: {
     // 使用对象展开运算符将 getter 混入    computed 对象中
       ...mapGetters([
         'doneTodosCount',
         'anotherGetter',
         // ...
       ])
     }
   }
   ```
   2. matutions方法

   ```
   import { mapMutations } from 'vuex'

   export default {
     // ...
     methods: {
       ...mapMutations([
         'increment', // 将 `this.increment()` 映射为 `this.   $store.commit('increment')`
   
         // `mapMutations` 也支持载荷：
         'incrementBy' // 将 `this.incrementBy(amount)` 映射为    `this.$store.commit('incrementBy', amount)`
       ]),
       ...mapMutations({
         add: 'increment' // 将 `this.add()` 映射为 `this.   $store.commit('increment')`
       })
     }
   }
   ```
   3. actions方法

      ```
      import { mapActions } from 'vuex'

      export default {
        // ...
        methods: {
          ...mapActions([
            'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
      
            // `mapActions` 也支持载荷：
            'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
          ]),
          ...mapActions({
            increment: 'add' // 将 `this.increment()` 映射为 `this.$store.dispatch('add')`
          })
        }
      }
      ```
      4. 调用模块（mudule）分块后的store
      
      ```
      // 模块分化例子
      export default new Vuex.Store({
        modules: {
          a: ModuleA,
          b: moduleB
        }
      }

      // 调用muduleA中名为add的mutations,例1
      import { mapMutations } from 'vuex'

      export default {
        // ...
        methods: {
          ...mapMutations('a',[
           'add'  // 将 `this.add()` 映射为 `this.   $store.commit('a/add')`
          ]),
          ...mapMutations('a',{
            increment: 'add' // 将 `this.increment()` 映射为 `this.   $store.commit('a/add')`
          })
        }
      }
      // 调用muduleA中名为add的mutations,例2
      import { createNamespacedHelpers } from 'vuex'

      const { mapMutations } = createNamespacedHelpers('a')
      export default {
        // ...
        methods: {
          ...mapMutations([
            'add', // 将 `this.add()` 映射为 `this.   $store.commit('a/add')`
          ]),
          ...mapMutations({
            increment: 'add' // 将 `this.increment()` 映射为 `this.   $store.commit('a/add')`
          })
        }
      }
      ```