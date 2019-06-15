<template>
    <div class="g-slides">
        <div class="wrapper" ref="wrapper">
            <slot></slot>
        </div>
        <div class="dot">
            <g-icon class="dot-icon" name="back" @click.native="playBack"></g-icon>
            <span v-for="n in totalItems" @click="clickDot(n)">{{ n }}</span>
            <g-icon class="dot-icon" name="forward" @click.native="playNext"></g-icon>

        </div>
    </div>
</template>

<script>
    import Icon from '../icon'
    export default {
        name: "GearSlides",
        components:{
            'g-icon':Icon
        },
        data(){
            return {
                currentIndex:1,
                totalItems:0,
                width:0
            }
        },
        computed:{
            left:function(){
                return -this.width * (this.currentIndex-1) + 'px'
            }
        },
        watch:{
            currentIndex:function () {
                console.log(`index change...`);
                this.$refs.wrapper.style.left = this.left;

            }
        },
        methods:{
            playNext:function () {
                if(this.currentIndex === this.totalItems){
                    this.currentIndex = 1
                }else {
                    this.currentIndex = this.currentIndex + 1
                }

            },
            playBack:function () {
                if(this.currentIndex === 1){
                    this.currentIndex = this.totalItems
                }else {
                    this.currentIndex = this.currentIndex - 1
                }

            },
            clickDot:function (n) {
                if(this.currentIndex !== n){
                    this.currentIndex = n;
                }

            }

        },
        mounted() {
            this.totalItems = this.$el.children[0].children.length;
            const {width} = this.$el.getBoundingClientRect();
            this.width = width;
            window.slide = this; //测试用的
            console.log(`mounted...`);
        },
        updated() {
            console.log(`updated ... `);
        }
    }
</script>

<style scoped lang="scss">
    .g-slides {
        overflow: hidden;
        position: relative;
        .wrapper {
            display: flex;
            position: absolute;
        }

        .dot {
            color:#333;
            position: absolute;
            left:50%;
            bottom:0;
            transform: translate(-50%);
            .dot-icon {
                cursor: pointer;
            }
            span {
                padding:5px 7px;
                cursor: pointer;
            }
        }
    }

</style>