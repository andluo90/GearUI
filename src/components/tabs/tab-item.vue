<template>
    <div class="g-tab-item" :class="active?'active':''" @click="click">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GearTabItem",
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
        methods:{
            click:function () {
                this.eventHub.$emit('update:selected',this.name)
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
    $item-font-color:#666;
    $item-height:32px;
    $item-padding:20px 8px;
    $item-font-size:14px;
    $item-line-height:14px;
    $item-hover-color:#333;
    $min-width:80px;

    .g-tab-item {
        /*<!--min-width: $min-width;-->*/
        text-align: center;
        color:$item-font-color;
        font-size: $item-font-size;
        line-height: $item-line-height;
        padding: $item-padding;

        cursor: pointer;

        &:hover {
            color:$item-hover-color;
        }

        &.active {
            color:#333;
            font-weight: bold;
        }
    }
</style>