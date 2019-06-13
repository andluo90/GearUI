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
                console.log(`click the ${this.name}`);
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
    $item-padding:9px 16px;
    $item-font-size:14px;
    $item-line-height:14px;
    $item-hover-color:#333;

    .g-tab-item {
        display: inline-block;
        color:$item-font-color;
        font-size: $item-font-size;
        line-height: $item-line-height;
        padding: $item-padding;
        border:1px solid #666;
        cursor: pointer;

        &:hover {
            color:$item-hover-color;
        }

        &.active {
            color:orangered;
        }
    }
</style>