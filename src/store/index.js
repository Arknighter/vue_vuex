import {createStore} from "vuex"

const store = createStore({
    state: () => ({
        counter:198,
        name:"yjh",
        level:100,
        avatarURL:"http://xxxxxxxxxxxxxxxxxxxx",
        users:[
            {id:111,name: "yjh1",age: 20},
            {id:112,name: "yjh2",age: 22},
            {id:113,name: "yjh3",age: 23},
        ]
    }),
    getters: {
        doubleCounter(state){
            return state.counter*2
        }, 
        toralAge(state){
            //arr.reduce 方法用于根据数组计算单个值
            return state.users.reduce((preValue,item) => {
                return preValue + item.age
            },0)
        },
        //拼接getters
        allmsg(state,getters){
            return `${state.name} 全部人的总年龄：${getters.toralAge}`
        },
        //查找users指定用户
        findUsersid(state){
            // const Users = state.users.find(item => item.id === 111)
            // return  Users
            return function(id){
                return state.users.find(item => item.id === id)
            }
        }
    },

    mutations:{
        counterAdd(state){
            state.counter++
        }
       
    }
})

export default store