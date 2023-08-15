<template>
    <!-- <h2>homep-age:counter={{ $store.state.counter }}</h2> -->
    <!-- 模板中直接使用多个状态 -->
    <h2>name:{{$store.state.name }}</h2>
    <h2>le:{{$store.state.level }}</h2>
    <h2>url:{{$store.state.avatarURL }}</h2>

    <br>
    <!-- // 采用映射关系 -->
    <h2>name:{{ name }}</h2>``
    <h2>le:{{ level }}</h2>
    <h2>url:{{ avatarURL }}</h2>
</template>
<script>
    // 采用映射关系
    import { mapState } from  "vuex"
    export default {
        // old方法
        // computed:{
        //     name(){
        //         return this.$store.state.name
        //     }
        // }
        
        computed:{
            ...mapState(["name","level","avatarURL"])
        }
    }

</script>
<style scoped>

</style>