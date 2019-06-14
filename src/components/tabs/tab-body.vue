<template>
    <div class="g-tab-body">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GearTabBody"
    }
</script>

<style scoped lang="scss">

    .horizon {
        .g-tab-body {
            flex-grow: 1;
        }
    }

</style>