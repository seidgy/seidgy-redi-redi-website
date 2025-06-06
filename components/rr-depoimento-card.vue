<template>
    <div class="depoimento">
        <p class="depoimento__text">
            {{ data.depoimento }}
        </p>
        <div class="depoimento__info">
            <div class="depoimento__rating">
                <p class="depoimento__name">{{ data.nome }}</p>
                <div class="depoimento__stars">
                    <img v-for="i in 5" src="/images/star.svg" class="depoimento__star" aria-hidden="true" alt="Estrela">
                </div>
            </div>
            <img src="/images/quotes.svg" alt="Aspas" aria-hidden="true" class="depoimento__quotes">
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});
</script>

<style lang="scss" scoped>
    .depoimento {
        padding: 30px;
        border-radius: 20px;
        display: flex;
        flex-flow: column;
        background-color: white;
        gap: 24px;
    }

        .depoimento__info {
            display: flex;
            flex-flow: row nowrap;
            gap: 12px;
            align-items: center;
        }

        .depoimento__rating {
            flex-grow: 1;
            display: flex;
            flex-flow: column nowrap;
            gap: 2px;
        }

        .depoimento__name {
            font-size: 1.125em;
            font-weight: 600;
        }
        .depoimento__quotes {
            width: 60px;
            height: 60px;
        }

        .depoimento__stars {
            display: flex;
            flex-flow: row nowrap;
            gap: 4px;
            padding-top: 10px;
        }

        .depoimento__star {
            width: 14px;
            height: 14px;
        }
</style>