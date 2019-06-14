<template>
    <div class="g-tabs">
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
        provide(){
            return {
                eventHub:this.eventHub
            }
        },
        created(){
            this.eventHub.$on('update:selected',(name)=>{
                if(this.selectedName !== name){
                    this.selectedName = name;
                }
            })
        },
        mounted() {
            console.log(`select ${this.selected}`);
            this.eventHub.$emit('update:selected',this.selectedName)
        }

    }
</script>

<style scoped lang="scss">

    .g-tabs{
        max-width: 500px;
    }

</style>