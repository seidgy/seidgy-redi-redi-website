<template>
    <div class="rr-store">
        <a href="" target="_blank"><img src="/images/appstore.svg" alt="App Store"></a>
        <a href="" target="_blank"><img src="/images/playstore.svg" alt="Google Play Store"></a>
    </div>
</template>
<script setup>
const props = defineProps({
})
</script>
<style scoped lang="scss">
    .rr-store {
        display: flex;
        gap: 11px;
        a {
            text-decoration: none;
            img {
                width: 76px;
            }
        }
    }
</style>