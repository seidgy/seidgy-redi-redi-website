<template>
    <nuxt-link class="button" :class="{'button--small': size == 'sm', 'button--large': size == 'lg'}" color="primary" visuals="primary">{{ label }}</nuxt-link>
</template>
<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'md'
  },
  label: {
    type: String,
    default: 'Experimente Grátis'
  }
})
</script>
<style scoped lang="scss">
</style>