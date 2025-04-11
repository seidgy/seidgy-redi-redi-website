<template>
    <div class="rr-cta">
        <div class="center">
            <slot></slot>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
})
</script>
<style scoped lang="scss">
    .rr-cta {
        padding-block: 18px;
        background: linear-gradient(135deg,#AF37FF 0%, #EC56C6 100%);
    }
</style>