<template>
    <div class="g-tab-head">
        <slot></slot>
        <div class="line" ref="line"></div>
    </div>
</template>

<script>
    export default {
        name: "GearTabHead",
        inject: ['eventHub','direction'],
        data(){
            return {
                itemData:{
                    index:[],
                    width:[],
                    height:[]
                }
            }
        },

        created(){
            this.eventHub.$on('updated:xxx',(name,dataObject)=>{
                console.log(`xxx`);
                console.log(name);
                console.log(dataObject);
            })
        },


        mounted () {
            this.$children.forEach((i)=>{
                const {width,height} = i.$el.getBoundingClientRect();
                // if(width === 0 || height === 0){
                //     console.log(`width is ${width} , height is ${height}`);
                //     console.log(i.$el)
                // }
                this.itemData.index.push(i.name);
                this.itemData.width.push(width);
                this.itemData.height.push(height)

            });
            this.eventHub.$on('update:selected', (name) => {
                const {index:indexArr,width:widthArr,height:heightArr} = this.itemData;
                const index = indexArr.indexOf(name);
                if(this.direction === 'horizon'){

                    const height = heightArr[index];
                    this.$refs.line.style.height = `${height}px`;
                    this.$refs.line.style.top = `${index*height}px`;
                }else{
                    const width = widthArr[index];
                    this.$refs.line.style.width = `${width}px`;
                    this.$refs.line.style.left = `${index*width}px`;
                }


            });
        }
    }
</script>

<style scoped lang="scss">

    $border-right:#bbb;

    .horizon {
        > .g-tab-head {
            position: relative;
            flex-direction: column;
            border-right:1px solid $border-right;
            border-bottom:none;

            > .line {
                position: absolute;
                right: -1px;
                border-right: 2px solid cornflowerblue;
                border-bottom: none;
                transition: all 350ms;
            }
        }
    }
    .vertical {
        > .g-tab-head {
            position: relative;
            display: flex;
            flex-direction: row;
            border-bottom:1px solid $border-right;

            > .line {
                position: absolute;
                bottom: -1px;
                border-bottom: 2px solid cornflowerblue;
                transition: all 350ms;
            }
        }
    }


</style>