<template>
    <div class="rr-decor-card">
        <slot></slot>
        <rr-minimal-logo></rr-minimal-logo>
    </div>
</template>
<script setup>
const props = defineProps({
})
</script>
<style scoped lang="scss">
    .rr-decor-card {
        background-color: #D9DBEB;
        width: 100%;
        height: 230px;
        overflow: hidden;
        position: relative;
        border-radius: 22px;

        & > :deep(.rr-logo) {
            position: absolute;
            z-index: 0;
            bottom: -112px;
            right: -41px;
            width: 283px;
            height: 283px;
            path {
                fill: #CBCFE3;
            }
        }
    }
</style>