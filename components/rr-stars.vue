<template>
    <div class="stars" :class="`stars--${size}`" aria-hidden="true">
        <div  v-for="i in 5">
            <img src="/images/star.svg" alt="Estrela" v-if="qt >= i" />
            <img src="/images/star-disabled.svg" alt="Estrela" v-else />
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    qt: {
        type: Number,
        default: 5
    },
    size: {
        type: String,
        default: 'md'
    }
})
</script>
<style scoped lang="scss">
    .stars {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        gap: 2px;
    }

        .stars--sm {
            gap: 1.5px;
            height: 5px;
            img {
                width: 5px;
            }
        }

        .stars--md {
            height: 7px;
            img {
                width: 7px;
            }
        }

        .stars--lg {
            gap: 4px;
            height: 12px;
            img {
                width: 12px;
            }
        }
</style>