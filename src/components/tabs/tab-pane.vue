<template>
    <div class="g-tab-pane" :class="active?'active':''">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tab-pane",
        inject: ['eventHub'],
        props:{
            name:{
                type:String
            }
        },
        data:function () {
            return {
                active:false
            }
        },
        created() {
            this.eventHub.$on('update:selected',(name)=>{
                this.active = this.name === name;
            })
        }
    }
</script>

<style scoped lang="scss">

    .g-tab-pane {
        padding:16px;
        min-height: 200px;
        color:#333;
        /*border:1px solid blanchedalmond;*/
        display: none;
        &.active {
            display:block;
        }
    }

</style>