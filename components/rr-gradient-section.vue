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
        background: linear-gradient(to bottom, transparent 0%, #5897C3 45%, #2577B1 60%, #2577B1 100%)
    }
</style>