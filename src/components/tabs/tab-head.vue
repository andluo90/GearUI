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
            //获取子Item的序号及宽度
            "itemData":function () {
                let tmp = {
                    index:[],
                    width:[],
                };
                this.$children.forEach((i)=>{
                    const {width} = i.$el.getBoundingClientRect();
                    tmp.index.push(i.name);
                    tmp.width.push(width)

                });
                console.log(`get data success`);
                return tmp
            }

        },
        mounted () {
            this.eventHub.$on('update:selected', (name) => {

                    const {index:indexArr,width:widthArr} = this.itemData;
                    const index = indexArr.indexOf(name);
                    const width = widthArr[index];
                    this.$refs.line.style.width = `${width}px`;
                    this.$refs.line.style.left = `${index*width}px`;

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