## vuex中使用module
1. 使用module的原因

   在做项目的时候如果有多个模块的状态值需要设置和变动，store对象就会变得过于臃肿，不于后续的开发维护

   为了解决这个问题，vuex允许把store文成几个模块（module）。每个模块都拥有自己的state，mutations，actions，getter

2. 模块化的方法
  
   
   ```
   // 创建一个变量对象

   {

    // 和Vue中的data方法一样，为了保证每个state中的值只对本身的对象有效

    state: () => {
        return {
            count : 0,
            name: '火影劫'
        }
    },

    // state表示本对象中的state
    // getters表示本对象中的getters
    // rootState表示根对象中rootState
    // rootGetters表示根对象中rootGetters

    mutations: {
        add(state, getters, rootState, rootGetters) {
            state.count ++
            state.name += '真帅'
        }
    },
    getters: {
        doubleCount (state, getters, rootState, rootGetters) {
            return state.name
        }
    },
    actions: {

        // dispatch, commit, getters为本对象的方法
        // rootGetters为根对象的方法

        someAction ({ dispatch, commit, getters, rootGetters }) {

            // 调用根对象的actions和mutations方法
            
            commit('someMutation', null, { root: true }) 
            dispatch('someOtherAction', null, { root: true })
        }
    }
   }
   ```