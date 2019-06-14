<template>
    <div class="g-tab-head">
        <slot></slot>
        <div class="line" ref="line"></div>
    </div>
</template>

<script>
    export default {
        name: "GearTabHead",
        inject: ['eventHub'],
        computed:{
            "itemIndex":function () {
                let tmp = [];
                this.$children.forEach((i)=>{
                    tmp.push(i.name)
                });
                return tmp
            }
        },
        mounted () {
            this.eventHub.$on('update:selected', (name, vm) => {
                if(vm !== undefined){
                    let {width} = vm.$el.getBoundingClientRect();
                    console.log(width);

                    const index = this.itemIndex.indexOf(name);
                    this.$refs.line.style.width = `${width}px`;
                    this.$refs.line.style.left = `${index*width}px`;

                }

            })
        }
    }
</script>

<style scoped lang="scss">

    .g-tab-head {
        display: flex;
        position: relative;
        border-bottom: 1px solid #bbbbbb;

        > .line {
            position: absolute;
            bottom: -1px;
            border-bottom: 2px solid cornflowerblue;
            transition: all 350ms;
        }
    }

</style>