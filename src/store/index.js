import {createStore} from "vuex"
import { CHANGE_INFO } from "./mutation_type"
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
        //原则不要在mutations执行 异步操作
        counterAdd(state){
            state.counter++
        },
        changeBtn(state,payload){
            state.name = payload
        },
        // [CHANGE_INFO](state,payload){
        //     state.name = payload.name,
        //     state.level = payload.level
        // },
        changeInfo(state,payload){
            state.name = payload.name,
            state.level = payload.level
        }
       
    },
    //action对比mutation，不同于  action提交的是mutation，而不是直接变更状态 而action可以包含任意异步操作
    actions:{
        counterAddAction(context){
            // console.log(context.commit)//用于提交mutation

            context.commit("counterAdd")
        },
        changeBtnAction(context,payload){

            context.commit("changeBtn",payload)
        }
    }
}) 

export default store