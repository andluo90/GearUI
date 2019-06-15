<template>
    <button class="g-button" :class="classes">
        <g-icon v-if="!loading && icon" class='icon-button' :name='icon'></g-icon>
        <g-icon v-if="loading " class='icon-button loading' name='loading'></g-icon>
        <span>
            <slot class='text'></slot>
        </span>
    </button>
</template>
<script>
    import Icon from './icon'

    export default {
        name: 'GearButton',
        components: {
            'g-icon': Icon
        },
        props: {
            "loading":{
                type:Boolean,
                default:false
            },
            "icon": {
                type: String
            },
            "position":{
                type:String,
                default:'left',
                validator(value){
                    return value === 'left' || value === 'right'
                }
            },
            "disable":{
                type:Boolean,
                default:false
            }


        },
        computed:{
            "classes":function () {
                const disable = this.disable ? 'disable' : ''
                const postion = this.position === 'right' ? `icon-${this.position}`:''
                return [disable,postion]
            }
                
            
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

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    .g-button {
        font-size: $font-size;
        color:$font-color;
        height: $button-height;
        padding:0 1em;
        background:$button-bg;
        border:1px solid $border-color;
        border-radius: $border-radius;

        display: inline-flex;
        align-items: center;
        vertical-align: top;


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

        > .icon-button {
            margin-right:.3em;
        }

        &.icon-right {
            > .icon-button {
                order:2;
                margin-left:.3em;
                margin-right:0;
            }
            > .text {
               order:1;
            }
        }

        > .loading {
            animation: spin 3s infinite linear;
        }

        &.disable {
            background-color: #eee;
            border-color: #ccc;
            color: #bbb;
            cursor: not-allowed;
        }
    }

</style>