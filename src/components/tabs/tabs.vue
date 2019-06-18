<template>
    <div class="g-tabs" :class="direction">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "GearTabs",
        props:{
            selected:{
                type:String
            },
            direction:{
                type:String,
                default:'vertical',
                validate(value){
                    return ['vertical','horizon'].indexOf(value) >= 0
                }
            }
        },
        data() {
            return {
                selectedName : this.selected,
                eventHub:new Vue()
            }
        },
        watch:{
            selected:function () {
                this.eventHub.$emit('update:selected',this.selected)
            }
        },
        provide(){
            return {
                eventHub:this.eventHub,
                direction:this.direction

            }
        },
        created(){
            this.eventHub.$on('update:selected',(name)=>{
                if(this.selectedName !== name){
                    this.selectedName = name;
                    this.$emit('select',name)
                }
            })
        },
        mounted() {
            this.eventHub.$emit('update:selected',this.selectedName)
        }

    }
</script>

<style scoped lang="scss">

    .g-tabs{

        &.horizon {
            display: flex;
        }
    }

</style>