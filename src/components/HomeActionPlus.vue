<template>
    <h2>homep-age:counter={{ $store.state.counter }}</h2>
    <br><hr>
    <ul>
       <template v-for="item in $store.state.banners" :key="acm">
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
    store.dispatch("fetchHomeMultidataAction")
</script>

<style scoped></style>