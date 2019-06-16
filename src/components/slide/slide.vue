<template>
    <div class="g-slides ">
        <div class="wrapper" :class="animate" ref="wrapper">
            <slot></slot>
        </div>
        <div class="dot">
            <g-icon class="dot-icon" name="back" @click.native="playBack"></g-icon>
            <span v-for="n in totalItems" @click="clickDot(n)" :class="dotIndex===n?'active':''">{{ n }}</span>
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
        props:{
          autoPlay:{
              type:Boolean,
              default:false
          },
          playTime:{
              type:Number,
              default:3
          }
        },
        data(){
            return {
                dotIndex:1,
                totalItems:0,
                currentImgIndex:2,
                totalImgItems:0,
                width:0,
                animate:''

            }
        },
        computed:{
            left:function(){
                return -this.width * (this.currentImgIndex-1) + 'px'
            }
        },
        watch:{
            currentImgIndex:function () {
                this.$refs.wrapper.style.left = this.left;
            }
        },
        methods:{
            init:function(){
                //设置初始数据
                this.totalItems = this.$el.children[0].children.length;
                this.totalImgItems = this.totalItems + 2;
                let {width} = this.$el.getBoundingClientRect();
                this.width = width;
                console.log(this.$el.getBoundingClientRect());
                console.log(this.$el);


                window.s = this;
                this.appendTwoItems();


                this.$refs.wrapper.style.left = -width+'px';
                this.animate = 'no-animate';


                if(this.autoPlay){
                    setInterval(this.playNext,this.playTime*1000)
                }
            },
            appendTwoItems(){
                //添加两个items用来做无缝轮播
                let s = this.$refs.wrapper;
                let firstChild = s.firstChild;
                let lastChild = s.lastChild;
                firstChild = firstChild.cloneNode(firstChild);
                lastChild = lastChild.cloneNode(lastChild);
                s.prepend(lastChild);
                s.append(firstChild);
            },

            playNext:function () {
                if(this.dotIndex === this.totalItems){
                    this.dotIndex = 1;
                }else {
                    this.dotIndex = this.dotIndex + 1;
                }
                this.currentImgIndex = this.currentImgIndex + 1;
                if(this.currentImgIndex === 6){
                    this.$nextTick(()=>{
                        setTimeout(()=>{
                            this.animate = 'no-animate';
                            this.currentImgIndex = this.totalImgItems - this.totalItems;
                        },300)

                    })
                }


            },

            playBack:function () {
                if(this.dotIndex === 1){
                    this.dotIndex = this.totalItems
                }else {
                    this.dotIndex = this.dotIndex - 1
                }
                this.currentImgIndex = this.currentImgIndex - 1;
                if(this.currentImgIndex === 1){
                    this.$nextTick(()=>{
                        setTimeout(()=>{
                            this.animate = 'no-animate';
                            this.currentImgIndex = this.totalItems+1;
                        },300)

                    })
                }

            },
            clickDot:function (n) {
                if(this.dotIndex !== n){
                    this.dotIndex = n;
                    this.currentImgIndex = n+1
                }

            }

        },
        mounted() {
            this.init();
        },
        updated() {
            if(this.animate !== ''){
                setTimeout(()=>{
                    this.animate = '';

                },300);
            }
        }
    }
</script>

<style scoped lang="scss">
    .g-slides {
        overflow: hidden;
        position: relative;
        background-color:#eee;
        .wrapper {
            display: flex;
            position: absolute;
            left:0;
            transition: left 300ms linear;
            &.no-animate {
                transition: none;
            }
        }

        .dot {
            color:#333;
            position: absolute;
            left:50%;
            bottom:5px;
            transform: translate(-50%);
            .dot-icon {
                cursor: pointer;
            }
            span {
                padding:5px 7px;
                cursor: pointer;

                &.active {
                    color: black;
                }
            }
        }
    }

</style>