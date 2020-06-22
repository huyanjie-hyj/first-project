export default  {
    namespaced: true,
    state: () => {
        return {
            count : 0,
            name: '火影劫'
        }
    },
    mutations: {
        add(state) {
            state.count ++
            state.name += '真帅'
            console.log(state);
        }
    },
    actions: {
        funcs(context){
            context.commit('add')
        }
    },
    getters: {
        doubleCount (state, getters) {
            return state.name + state.count
        }
    }
}