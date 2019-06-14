<template>
    <div class="g-layout" :class="hasSide?'hasSide':''">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GearLayout",
        data:function () {
            return {
                hasSide:false
            }
        },
        mounted() {
            this.$children.forEach((vm)=>{
                if(vm.$options.name === 'GearSide'){
                    console.log(`This is side`);
                    this.hasSide = true;
                }
            })
        }
    }
</script>

<style scoped lang="scss">
    .g-layout {
        flex-grow: 1;
        display:flex;
        flex-direction:column;
        height: 100%;
        &.hasSide {
            flex-direction: row;
        }
    }
</style>