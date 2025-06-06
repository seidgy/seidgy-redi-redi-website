<template>
    <div class="rr-icone">
        <div class="rr-icone__icon">
            <img :src="icone.imagem" :alt="icone.alt" />
        </div>
        <p>{{ icone.alt }}</p>
    </div>
</template>
<script setup>
const props = defineProps({
    icone: {
        type: Object,
        required: true
    },
    style: {
        type: String,
        default: ''
    }
})
</script>
<style lang="scss" scoped>
.rr-icone {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 10px;
    &__icon {
        width: 47px;
        height: 47px;
        background-color: #A7C9C7;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        border-radius: 50%;
    }
    p {
        line-height: 1em;
    }
}
</style>