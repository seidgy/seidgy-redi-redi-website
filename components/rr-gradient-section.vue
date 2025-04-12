<template>
    <section class="gradient-section">
        <slot></slot>
    </section>
</template>

<script setup>

</script>   


<style scoped lang="scss">
    .gradient-section {
        padding-block: 65px;
        background: linear-gradient(to bottom, transparent 0%, #5897C3 40%, #2577B1 50%, #2577B1 100%)
    }
</style>