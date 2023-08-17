<template>
    <h2>homep-age:counter={{ $store.state.counter }}</h2>
    <!-- <h2>doubleCouter =  {{ $store.getters.doubleCounter }}</h2> -->
    <h2>doubleCouter =  {{ doubleCounter }}</h2>
    <h2>users 总年龄 {{ $store.getters.toralAge }}</h2>
    <h2>拼接测试 {{ allmsg }}</h2>
    <h2>用户id=111的信息 {{ $store.getters.findUsersid(111) }}</h2>
    <h2>用户id=111的信息 {{ findUsersid(112) }}</h2>
</template>
<script>
import { mapGetters } from 'vuex'

export default{
    
    //  map映射
    computed:{
        ...mapGetters(["doubleCounter"]),
        ...mapGetters(["findUsersid"])
        
    }
}
</script>
<script setup>
import { computed, toRefs } from 'vue';
import { useStore,mapGetters } from 'vuex'
    const store = useStore()

    // const { allmsg : allmsgFn} = mapGetters(["allmsg"])
    // const allmsg = computed(allmsgFn.bind({ $store: store}))


    //直接进行解构
    // const { allmsg } = toRefs(store.getters)

    //针对某一个getters 属性使用computed
    const allmsg  = computed(() => store.getters.allmsg)

</script>



<style scoped>


</style>