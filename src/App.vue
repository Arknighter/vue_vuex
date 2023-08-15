<template>
    <h2>app</h2>
    <h2>homep-age:counter={{ $store.state.counter }}</h2>
    <button @click="counterBtn">+1</button>
    <home-page></home-page>
</template>
<script setup>
    import HomePage from "./components/HomePage.vue"
    import { useStore} from "vuex"

    const store = useStore()
    function counterBtn(){
        //不能直接修改，最好是使用Mutation
        //store.state.counter++

        //调用Mutation的方法
        store.commit("counterAdd")
    }


</script>
<style scoped>

</style>