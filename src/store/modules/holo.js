const holo = {
    //独立命名空间
    namespaced:true,
    state : () => ({
        counterN: 99
    }),
    getters: {
        holodoubleCount(state,getters,rootState){
            return state.counterN + rootState.counter
        }
    },
    mutations: {
        holoCounternAdd(state){
            state.counterN++
        }
    },
    actions: {
        holoCounternAddAction(context){
            context.commit("holoCounternAdd")
        }
    }
}
export default holo