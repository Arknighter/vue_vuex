import {createStore} from "vuex"
import { CHANGE_INFO } from "./mutation_type"
import homeMudule from './modules/home'
import hoolMudule from './modules/holo'

const store = createStore({
    state: () => ({
        //模拟的数据
        counter:198,
        name:"yjh",
        level:100,
        avatarURL:"http://xxxxxxxxxxxxxxxxxxxx",
        users:[
            {id:111,name: "yjh1",age: 20},
            {id:112,name: "yjh2",age: 22},
            {id:113,name: "yjh3",age: 23},
        ],
        // 接受来自fetch的网络请求数据
        // banners:[],
        // recommends:[]
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
    //修改数据必须用mutations
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
        },
        // changeBanners(state , getBanners){
        //     state.banners = getBanners
        // }
       
    },
    //action对比mutation，不同于  action提交的是mutation，而不是直接变更状态 而action可以包含任意异步操作
    actions:{
        counterAddAction(context){
            // console.log(context.commit)//用于提交mutation

            context.commit("counterAdd")
        },
        changeBtnAction(context,payload){

            context.commit("changeBtn",payload)
        },
        // await的使用 必须是异步函数  所以使用 async 声明一个异步函数
        // 使用 await 等待异步操作完成并返回结果
        // 异步函数自动返回promise
        // async fetchHomeMultidataAction(context){
        //     //方法1
        //     //给 Promise 设置then
        //     // fetch("http://123.207.32.32:8000/home/multidata").then(res =>{
        //     //     res.json().then(data => {
        //     //         console.log(data);
        //     //     })
        //     // })
        //     //方法2  
        //     //Promise的链式调用
        //     // fetch("http://123.207.32.32:8000/home/multidata").then(res => {
        //     //     return res.json()
        //     // }).then(data => {
        //     //     console.log(data)
        //     // })
        //     //方法3
        //     //await/async  promise 语法糖
        //     const res = await fetch("http://123.207.32.32:8000/home/multidata")
        //     const data = await res.json()
        //     // console.log(data)
        //     //修改state数据
        //     context.commit("changeBanners",data.data.banner.list)

        //     // //自动返回promise
        //     // return new Promise( async(resolve,reject) => {
        //     //     //方法3
        //     //     //await/async  promise 语法糖
        //     //     const res = await fetch("http://123.207.32.32:8000/home/multidata")
        //     //     const data = await res.json()
        //     //     // console.log(data)
        //     //     //修改state数据
        //     //     context.commit("changeBanners",data.data.banner.list)

        //     //     resolve("aaa")

        //     // })


        // }
    },
    modules:{
        home:homeMudule,
        holo:hoolMudule
    }
}) 

export default store