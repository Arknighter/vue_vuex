import {createStore} from "vuex"

const store = createStore({
    state: () => ({
        counter:198,
        name:"yjh",
        level:100,
        avatarURL:"http://xxxxxxxxxxxxxxxxxxxx"
    }),
    mutations:{
        counterAdd(state){
            state.counter++
        }
    }
})

export default store