<template>
    <!-- <h2>homep-age:counter={{ $store.state.counter }}</h2> -->
    <!-- 模板中直接使用多个状态 -->
    <h2>name:{{$store.state.name }}</h2>
    <h2>le:{{$store.state.level }}</h2>
    <h2>url:{{$store.state.avatarURL }}</h2>

    <br>
    <h1>采用映射关系</h1>
    <!-- <h2>name:{{ name }}</h2>``
    <h2>le:{{ level }}</h2> -->
    <h2>url:{{ avatarURL }}</h2>

    <!-- <h1>setup采用映射关系</h1> -->
    <!-- <h2>{{ setup_name }}</h2>
    <h2>{{ setup_level }}</h2> -->


    <h1>setup直接解构</h1>
    <h2>{{ name }}</h2>
    <h2>{{ level }}</h2>
</template>
<script>
    // 采用映射关系
    import { toRefs } from "vue";
    import { mapState } from  "vuex"
    export default {
        // old方法
        // computed:{
        //     name(){
        //         return this.$store.state.name
        //     }
        // }
        
        computed:{
            ...mapState(["avatarURL"])
        }
    }
</script>
<script setup>
    // import { computed } from 'vue'
    // import {mapState,useStore} from 'vuex'

    // const {name,level} = mapState(["name","level"])

    // const store = useStore()
    // const setup_name = computed(name.bind({ $store: store}))
    // const setup_level = computed(level.bind({ $store: store}))
    //上面比较麻烦 
    // 可以直接进行解构↓
    import { useStore } from 'vuex' 
    const store = useStore()
    const { name , level} = toRefs(store.state)

</script>


<style scoped>

</style>