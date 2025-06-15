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
        min-width: 120px;
    }
    @media(max-width: 36em) {
        width: 100%;
        gap: 9px;
        p {
            flex-grow: 1;
        }
    }
}

    .rr-icone--lg {
        gap: 14px;
        .rr-icone__icon {
            width: 58px;
            height: 58px;
            img {
                width: 20px;
            }
        }
        p {
            font-size: 1.5em;
        }
        @media(max-width: 36em) {
            gap: 8px;
            .rr-icone__icon {
                width: 38px;
                height: 38px;
            }
            p {
                font-size: 0.875em;
            }
        }
    }
</style>