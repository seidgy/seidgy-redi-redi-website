<template>
    <nuxt-link target="_blank" :to="getCountryLink(country, 'entrar')" class="button" :class="{'button--xs': size == 'xs', 'button--small': size == 'sm', 'button--large': size == 'lg'}" color="primary" visuals="primary">{{ label }}</nuxt-link>
</template>
<script setup>
import { getCountryLink } from '~/utils/useCountryLinks'
const { data: countryData } = await useFetch('/api/country')
const country = countryData.value?.country
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