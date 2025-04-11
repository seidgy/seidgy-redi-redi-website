<template>
    <nuxt-link class="button" :class="{'button--small': size == 'sm', 'button--large': size == 'lg'}" color="primary" visuals="primary">Experimente Grátis</nuxt-link>
</template>
<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'md'
  }
})
</script>
<style scoped lang="scss">
</style>