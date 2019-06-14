<template>
    <div class="g-row" :class="classes" :style="style" >
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GearRow",
        props:{
            gap:{
                type:Number
            },
            align:{
                type:String,
                validate(value){
                    return ['end','start','center'].indexOf(value) >= 0
                }
            }
        },
        computed:{
            classes(){
                return this.align?`align-${this.align}`:''
            },
            style(){
                const margin = -this.gap/2+'px';
                return {
                    marginLeft:margin,
                    marginRight:margin
                }
            }
        },
        mounted() {
            this.$children.forEach((vm)=>{
                vm.gap = this.gap
            })
        }
    }
</script>

<style scoped lang="scss">
    .g-row {
        display: flex;
        margin-bottom: 15px;
        &.align-center {
            justify-content: center;
        }
        &.align-start {
            justify-items: flex-start;
        }
        &.align-stop {
            justify-items: flex-end;
        }
    }
</style>