<template>
    <button class="g-button">
        <g-icon name="set"></g-icon>
        <slot>按钮</slot>
    </button>
</template>
<script>
    import Icon from './icon'
    export default {
        name:'GearButton',
        components:{
            'g-icon':Icon
        }
    }
</script>

<style lang="scss" scoped >
    $font-size:14px;
    $font-color: #333;
    $button-height:32px;
    $border-color: #999;
    $button-bg: white;
    $border-radius:4px;
    $active-bg:#eee;
    $border-color-hover: #666;


    .g-button {
        font-size: $font-size;
        color:$font-color;
        height: $button-height;
        padding:0 1em;
        background:$button-bg;
        border:1px solid $border-color;
        border-radius: $border-radius;



        &:focus{
            outline: none;
        }
        &:hover {
            cursor: pointer;
            border-color:$border-color-hover;
        }
        &:active {
            background-color:$active-bg;
        }
    }

</style>