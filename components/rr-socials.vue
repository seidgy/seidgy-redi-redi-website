<template>
    <div class="rr-socials">
        <a href="" target="_blank"><img src="/images/yt-negative.svg" alt="Youtube"></a>
        <a href="" target="_blank"><img src="/images/in-negative.svg" alt="LinkedIn"></a>
        <a href="" target="_blank"><img src="/images/fb-negative.svg" alt="Facebook"></a>
        <a href="" target="_blank"><img src="/images/ig-negative.svg" alt="Instagram"></a>
    </div>
</template>
<script setup>
const props = defineProps({
})
</script>
<style scoped lang="scss">
    .rr-socials {
        display: flex;
        gap: 30px;
        a {
            text-decoration: none;
        }
    }
</style>