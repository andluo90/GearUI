<template>
    <div class="g-slides ">
        <div class="wrapper" :class="animate" ref="wrapper">
            <slot></slot>
        </div>
        <div class="dot">
            <g-icon class="dot-icon" name="back" @click.native="playBack"></g-icon>
            <span v-for="n in totalItems" @click="clickDot(n)" :class="currentIndex===n?'active':''">{{ n }}</span>
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
                currentIndex:1,
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
                console.log(`index change...`);
                this.$refs.wrapper.style.left = this.left;

            }
        },
        methods:{
            init:function(){
                this.totalItems = this.$el.children[0].children.length;
                this.totalImgItems = this.totalItems + 2;
                const {width} = this.$el.getBoundingClientRect();
                this.width = width;

                let s = this.$refs.wrapper;
                let firstChild = s.firstChild;
                let lastChild = s.lastChild;
                firstChild = firstChild.cloneNode(firstChild);
                lastChild = lastChild.cloneNode(lastChild);
                s.prepend(lastChild);
                s.append(firstChild);
                this.$refs.wrapper.style.left = -width+'px';
                this.animate = 'no-animate';


                if(this.autoPlay){
                    setInterval(this.playNext,this.playTime*1000)
                }
            },
            playNext:function () {
                if(this.currentIndex === this.totalItems){
                    this.currentIndex = 1;
                }else {
                    this.currentIndex = this.currentIndex + 1;
                }
                this.currentImgIndex = this.currentImgIndex + 1;
                if(this.currentImgIndex === 6){
                    this.$nextTick(()=>{
                        setTimeout(()=>{
                            this.animate = 'no-animate';
                            this.currentImgIndex = 2;
                        },300)

                    })
                }

                console.log(`index is ${this.currentIndex} , img index is ${this.currentImgIndex}`)

            },
            playBack:function () {
                if(this.currentIndex === 1){
                    this.currentIndex = this.totalItems
                }else {
                    this.currentIndex = this.currentIndex - 1
                }
                this.currentImgIndex = this.currentImgIndex - 1;
                if(this.currentImgIndex === 1){
                    this.$nextTick(()=>{
                        setTimeout(()=>{
                            this.animate = 'no-animate';
                            this.currentImgIndex = 5;
                        },300)

                    })
                }

            },
            clickDot:function (n) {
                if(this.currentIndex !== n){
                    this.currentIndex = n;
                    this.currentImgIndex = n+1
                }

            }

        },
        mounted() {
            this.init();

            window.slide = this; //测试用的
            console.log(`mounted...`);
        },
        updated() {
            if(this.animate !== ''){
                setTimeout(()=>{
                    this.animate = '';
                    console.log(`animate update...`);

                },300);
            }

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