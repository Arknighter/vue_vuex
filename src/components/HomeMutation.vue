<template>
   <h2>mutation</h2>
   <h2>store name: {{ $store.state.name }}</h2>
   <h2>store level: {{ $store.state.level }}</h2>
   <button @click="changeBtn('yjh123')">修改store.name</button>
   <button @click="changeInfo({name:'yjh321123123',level:'991'})">修改info</button>
</template>


<script  setup>
import { CHANGE_INFO } from "@/./store/mutation_type"
import { mapMutations ,useStore} from "vuex";
    // export default {
    //     methods:{
    //         changeBtn(){
    //             this.$store.commit("changeBtn","yjhnew2023")
    //         },
    //         changeInfo(){
    //             this.$store.commit(CHANGE_INFO,{
    //                 name:"newyjh20230123",
    //                 level:996
    //             })
    //         },
    //         ...mapMutations(["changeBtn","changeInfo"])
    //     }
    // }

    //setup
    const store = useStore()
    const mutations = mapMutations(["changeBtn","changeInfo"])
    const newmutations = {}
    Object.keys(mutations).forEach( key => {
        newmutations[key] = mutations[key].bind({ $store: store})
    })
    const { changeBtn, changeInfo } = newmutations

</script>



<style scoped>


</style>