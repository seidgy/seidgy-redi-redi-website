<template>
    <div class="rr-socials">
        <a :href="content.textObj['youtube']" target="_blank"><img src="/images/yt-negative.svg" alt="Youtube"></a>
        <a :href="content.textObj['linkedin']" target="_blank"><img src="/images/in-negative.svg" alt="LinkedIn"></a>
        <a :href="content.textObj['facebook']" target="_blank"><img src="/images/fb-negative.svg" alt="Facebook"></a>
        <a :href="content.textObj['instagram']" target="_blank"><img src="/images/ig-negative.svg" alt="Instagram"></a>
    </div>
</template>
<script setup>
const props = defineProps({
    content: {
        type: Object
    }
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