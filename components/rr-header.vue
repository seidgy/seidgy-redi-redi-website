<template>
    <section class="rr-header" :style="image ? `background-image: url(${image})`:''">
        <rr-menu></rr-menu>
        <slot></slot>
    </section>
</template>
<script setup>
const props = defineProps({
  image: {
    type: String,
    default: ''
  }
})
</script>
<style scoped lang="scss">
    .rr-header {
        padding-block: 50px 120px;
        background-size: cover;
        background-position: center;
    }
</style>