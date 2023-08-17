<template>
    <h2>app</h2>
    <!-- <h2>homep-age:counter={{ $store.state.counter }}</h2>
    <button @click="counterBtn">+1</button>
    <home-page></home-page> -->
    <home-getter></home-getter>


</template>
<script setup>
    import HomePage from "./components/HomePage.vue"
    import HomeGetter from "./components/HomeGetter.vue"
    import { useStore} from "vuex"

</script>
<style scoped>

</style>