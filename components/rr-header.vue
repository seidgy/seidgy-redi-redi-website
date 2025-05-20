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
        padding-block: 20px 0;
        background-size: cover;
        background-position: center;
        overflow-x: hidden;
        @media (max-width: 36em) {
          background-position: center left;
        }
    }
</style>