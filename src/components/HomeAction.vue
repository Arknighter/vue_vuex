<template>
    <h2>homep-age:counter={{ $store.state.counter }}</h2>
    <h2>homep-age:counter={{ name }}</h2>
    <button @click="actionCoutnerBtn">Action按钮  修改counter</button>
    <button @click="actionNameBtn">Action按钮  修改name </button>
    <h2>mapAction</h2>
    <button @click="counterAddAction">Action按钮  修改counter</button>
    <button @click="changeBtnAction('actionMapYjh')">Action按钮  修改name </button>
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default{
    computed:{
        ...mapState(["name"])
    },
    methods:{
        actionCoutnerBtn(){
            this.$store.dispatch("counterAddAction")
        },
        actionNameBtn(){
            this.$store.dispatch("changeBtnAction","actionYjh")
        },
        // ...mapActions(["counterAddAction","changeBtnAction"])
    }
}
</script>

<!-- <script setup>
    //在setup中使用mapActions辅助函数
    import { useStore , mapActions } from 'vuex'
    const store = useStore()
    const actions = mapActions(["counterAddAction","changeBtnAction"])
    const newActions = {}
    Object.keys(actions).forEach(key => {
        newActions[key] = actions[key].bind( { $store: store})
    })
    const {counterAddAction , changeBtnAction } = newActions

    //普通方法
    // function actionCoutnerBtn(){
    //     store.dispatch("counterAddAction")
    // }

</script> -->


<style scoped></style>