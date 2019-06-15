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
            },
            offset:{
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
                const {span,offset} = this;
                const colClass = span ? `col-${span}` : '';
                const offsetClass = offset ? `offset-${offset}`:'';
                return [colClass,offsetClass]
            },
            style(){
                const {gap} = this;
                if(gap === 0){
                    return {}
                }
                let padding = gap/2+'px';
                return {paddingLeft:padding,paddingRight:padding}
            }
        }
    }
</script>

<style scoped lang="scss">

    .g-col {

        display: flex;
        justify-content: center;
        align-items: center;

        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }

        }
        $offset-class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$offset-class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }

        }






    }

</style>