export default {
    state: () => ({
        // 接受来自fetch的网络请求数据
        banners: []
    }),
    mutations:{
        changeBanners(state , getBanners){
            state.banners = getBanners
        }
    },
    actions:{
        async fetchHomeMultidataAction(context){
            //方法1
            //给 Promise 设置then
            // fetch("http://123.207.32.32:8000/home/multidata").then(res =>{
            //     res.json().then(data => {
            //         console.log(data);
            //     })
            // })
            //方法2  
            //Promise的链式调用
            // fetch("http://123.207.32.32:8000/home/multidata").then(res => {
            //     return res.json()
            // }).then(data => {
            //     console.log(data)
            // })
            //方法3
            //await/async  promise 语法糖
            const res = await fetch("http://123.207.32.32:8000/home/multidata")
            const data = await res.json()
            // console.log(data)
            //修改state数据
            context.commit("changeBanners",data.data.banner.list)

            // //自动返回promise
            // return new Promise( async(resolve,reject) => {
            //     //方法3
            //     //await/async  promise 语法糖
            //     const res = await fetch("http://123.207.32.32:8000/home/multidata")
            //     const data = await res.json()
            //     // console.log(data)
            //     //修改state数据
            //     context.commit("changeBanners",data.data.banner.list)

            //     resolve("aaa")

            // })


        }
    }
}