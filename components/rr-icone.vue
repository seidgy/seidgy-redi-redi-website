<template>
    <div :class="`rr-icone rr-icone--${estilo}`">
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
    estilo: {
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
    .rr-icone__icon {
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

    .rr-icone--lg {
        gap: 14px;
        .rr-icone__icon {
            width: 58px;
            height: 58px;
        }
        p {
            font-size: 1.5em;
        }
    }
</style>