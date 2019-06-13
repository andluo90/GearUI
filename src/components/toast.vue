<template>
    <div class="toast-wrapper" :class="`position-${position}`">
        <div class="g-toast" >
            <span class="content"><slot>提示信息</slot></span>
            <template v-if="!autoClose">
                <span class="assist"></span>
                <span class="close" @click="close">关闭</span>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GearToast",
        props:{
          position:{
              type:String,
              default:'bottom',
              validate(value){
                  value = value.toLowerCase();
                  return ['top','bottom','middle'].indexOf(value) >= 0
              }
          },
          autoClose:{
              type:Boolean,
              default:false
          },
          duration:{
              type:Number,
              default:2
          }

        },
        methods:{
            'close':function () {
                this.$el.remove();
                this.$destroy();
            }
        },
        mounted() {
            if(this.autoClose){
                setTimeout(this.close,this.duration*1000)
            }
        }


    }
</script>

<style scoped lang="scss">
    $height:40px;
    $width:288px;
    $font-color:#fff;
    $font-size:14px;
    $bg-color:rgba(0,0,0,0.74);
    $border-radius:4px;
    $box-shadow:0px 0px 3px 0px rgba(0,0,0,0.50);
    $animation-duration: 300ms;

    .toast-wrapper{
        position: fixed;
        left:50%;
        transform: translateX(-50%);

        &.position-bottom{

            bottom:0;

            > .g-toast{
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                animation: slide-up $animation-duration;
            }
        }

        &.position-top{

            top:0;
            > .g-toast {
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                animation: slide-down $animation-duration;
            }
        }
        &.position-middle{
            top:50%;
            transform: translateX(-50%) translateY(-50%);
            > .g-toast{
                animation: fade-in $animation-duration;
            }
        }
    }

    .g-toast {
        font-size: $font-size;
        color:$font-color;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height:$height;
        width: $width;
        background-color:$bg-color;
        border-radius: 4px;
        box-shadow: $box-shadow;







        > .content {
            flex-grow: 4;
            text-align: center;
        }

        > .assist {
            border-left:1px solid #999;
            height: 100%;
        }

        > .close {
            flex-grow: 1;
            text-align: center;
            cursor: pointer;
        }
    }

    @keyframes slide-up {
        0% {opacity: 0; transform: translateY(100%);}
        100% {opacity: 1;transform: translateY(0%);}
    }
    @keyframes slide-down {
        0% {opacity: 0; transform: translateY(-100%);}
        100% {opacity: 1;transform: translateY(0%);}
    }
    @keyframes fade-in {
        0% {opacity: 0; }
        100% {opacity: 1;}
    }
</style>