<template>
    <div class="switch-redi" aria-hidden="true">
        <rr-minimal-logo fill="rgba(255, 255, 255, 0.5)"></rr-minimal-logo>
        <img src="/images/think.webp" alt="Animation" />
    </div>
</template>
<script setup>
</script>
<style scoped lang="scss">
    .switch-redi {
        background: linear-gradient(90deg, #8C35D3 0.61%, #481B6D 177.74%);
        padding: 4px 4px 4px 8px;
        border-radius: 18.17px;
        display: flex;
        align-items: center;
        gap: 6px;
        height: 36px;
        & > img {
            width: 28px;
            height: 28px;
        }
        :deep(.rr-logo) {
            width: 10px;
        }
    }
</style>