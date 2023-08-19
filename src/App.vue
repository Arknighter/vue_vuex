<template>
    <h2>app</h2>
    <!-- <h2>homep-age:counter={{ $store.state.counter }}</h2>
    <button @click="counterBtn">+1</button>
    <home-page></home-page> -->
    <!-- <home-getter></home-getter> -->
    <!-- <HomeMuation></HomeMuation> -->
    <!-- <HomeAction></HomeAction> -->
    <!-- <HomeActionPlus></HomeActionPlus> -->
    <HomePageModule></HomePageModule>
</template>
<script setup>
    import HomePage from "./components/HomePage.vue"
    import HomeGetter from "./components/HomeGetter.vue"
    import HomeMuation from "./components/HomeMutation.vue"
    import HomeAction from "./components/HomeAction.vue"
    import HomeActionPlus from "./components/HomeActionPlus.vue"
    import HomePageModule from "./components/HomePageModules.vue"
    import { useStore} from "vuex"

</script>
<style scoped>

</style>