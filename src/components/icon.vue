<template>
    <svg class="icon" aria-hidden="true">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>

<script>
    import './svg'
    export default {
        name: "GearIcon",
        props:{
            name:{
                type:String
            }
        }
    }
</script>

<style scoped lang="scss">
    .icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

</style>