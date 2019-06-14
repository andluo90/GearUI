<template>
    <div class="g-col" :class="classes" :style="style">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GearCol",
        props:{
            span:{
                type:Number
            }
        },
        data() {
            return {
                gap:0
            }
        },
        computed:{
            classes(){
                return this.span?`col-${this.span}`:''
            },
            style(){
                const margin = this.gap/2+'px';
                return {marginLeft:margin,marginRight:margin}
            }
        }
    }
</script>

<style scoped lang="scss">

    .g-col {
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }

        outline: 1px solid pink;
        background-color:#eee;
        height:40px;


    }

</style>