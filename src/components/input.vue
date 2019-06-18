<template>

    <div class="g-input" :class="classes">
        <span v-if="label">{{ label }}</span>
        <input :value="value" @input="onInput($event)" :placeholder="placeholder" :readonly="disable" />
        <template v-if="errMsg">
            <div class="errWrapper">
                <Icon name="error" class="error"></Icon>
                <span  class="error">{{ errMsg }}</span>
            </div>
        </template>
    </div>

    
</template>

<script>
    import Icon from './icon'
    export default {
        name: "GearInput",
        components:{
            Icon
        },
        props:{
            // value:{
            //   type:String
            // },
            disable:{
              type:Boolean,
              default:false
            },
            placeholder:{
                type:String
            },
            label:{
                type:String
            },
            errMsg:{
                type:String
            },
            direction:{
                type:String,
                default:''
            }
        },

        data(){
            return {
                value:''
            }
        },

        computed:{
            classes:function () {
                return [`${this.direction}`,this.disable?'disable':'']
            }
        },
        methods:{
            onInput:function (e) {
                this.value = e.target.value;
                this.$emit('input',e.target.value)
            }
        }
    }

</script>

<style scoped lang="scss">
    $input-height:32px;
    $border-radius:4px;
    $border-color:#999;
    $border-color-hover: #666;
    $font-color:#333;
    $box-shadow-color: rgba(0, 0, 0, 0.5);
    $errMsg-font-size:12px;

    .g-input {
        display: inline-flex;
        align-items: center;
        color: $font-color;
        > :not(:last-child) {margin-right: .5em; }

        > input {
            color: $font-color;
            height: $input-height;
            border-radius: $border-radius;
            border: 1px solid $border-color;
            padding: 0 .4em;

            &:focus {
                box-shadow: inset 0 1px 3px $box-shadow-color; outline: none;
            }
            &:hover {
                border-color: $border-color-hover;
            }

            &::-webkit-input-placeholder { /* WebKit browsers */
                color:    #ccc;
            }
            &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                color:    #ccc;
            }
            &::-moz-placeholder { /* Mozilla Firefox 19+ */
                color:    #ccc;
            }
            &:-ms-input-placeholder { /* Internet Explorer 10+ */
                color:    #ccc;
            }
        }

        > .errWrapper {
            color:#F1453D;
            font-size: $errMsg-font-size;
            display: inline-block;
        }

        &.vertical {
            flex-direction: column;
            align-items: start;

            > :not(:last-child) {margin-right: 0; margin-bottom: .5em;}
        }

        &.disable {
            >input {
                border-color:#66666642;
                cursor:not-allowed;

                &:focus{
                    box-shadow:none;

                }
            }
        }

    }
</style>