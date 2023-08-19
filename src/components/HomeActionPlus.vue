<template>
    <h2>homep-age:counter={{ $store.state.counter }}</h2>
    <br><hr>
    <ul>
       <template v-for="item in $store.state.home.banners" :key="item.acm">
        <li> {{ item.title }}</li>
       </template>
    </ul>
</template>

<script>
</script>

<script setup>
    import { useStore } from "vuex"

    //告诉vuex发起网络请求
    const store = useStore()
    store.dispatch("fetchHomeMultidataAction").then(res => {
        console.log("被回调了")
    })
</script>

<style scoped></style>