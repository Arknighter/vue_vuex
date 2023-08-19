<template>
    <h2>homep-age:counter={{ $store.state.counter }}</h2>
    <h2>holosjs'couter = {{ $store.state.holo.counterN }}</h2>
    <h2>holosjs'couter = {{ $store.getters["holo/holodoubleCount"] }}</h2>
    <button @click="counterAdd">改变基础的store中counter属性</button>
    <button @click="holoCounternAddAction">holo.js  action</button>
</template>
<script>
import { mapActions, mapMutations } from 'vuex';

    export default {
        methods:{
                ...mapMutations(["counterAdd"]), 
                //命名空间  调用holo命名空间action的   holoCounternAddAction   
                ...mapActions('holo',["holoCounternAddAction"])  
        }
    }

</script>
<!-- 
<script setup>
    improt { useStore } from 'vuex'
    const store  = useStore()


    // <button @click="Action">holo.js  action</button>
    function Action(){
        store.dispatch("holo/holoCounternAddAction")
    }

</script> -->


<style scoped></style>