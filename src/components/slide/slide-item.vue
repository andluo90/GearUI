<template>
    <div class="g-slide-item img">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GearSlideItem"
    }
</script>

<style scoped lang="scss">
    .g-slide-item {
        flex-shrink: 0;
    }
</style>