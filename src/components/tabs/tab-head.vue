<template>
    <div class="g-tab-head">
        <slot></slot>
        <div class="line"></div>
    </div>
</template>

<script>
    export default {
        name: "GearTabHead"
    }
</script>

<style scoped lang="scss">

    .g-tab-head {
        display: flex;
    }

</style>