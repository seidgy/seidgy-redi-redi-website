<template>
    <div class="rr-store">
        <a :href="appStore" target="_blank"><img src="/images/appstore.svg" alt="App Store"></a>
        <a :href="playStore" target="_blank"><img src="/images/playstore.svg" alt="Google Play Store"></a>
    </div>
</template>
<script setup>
const props = defineProps({
    appStore: {
        type: String,
        required: true
    },
    playStore: {
        type: String,
        required: true
    },
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