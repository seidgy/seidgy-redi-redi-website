<template>
    <div class="resource-card">
        <slot></slot>
    </div>
</template>

<script setup>

</script>   


<style scoped lang="scss">
    .resource-card {
      background-color: #D9DBEB;
      border-radius: 16px;
      padding: 30px 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
</style>