<template>
    <section class="resources">
        <rr-resource-card>
            <div class="resources__info">
                <h3>{{ content.textObj['cadastro de produtos'] }}</h3>
                <p>{{ content.textObj['cadastro de produtos subtitle'] }}</p>
            </div>
            <img :src="content.imageObj['registro de produtos'].url" :alt="content.imageObj['registro de produtos'].alt" aria-hidden="true">
        </rr-resource-card>
        <rr-resource-card>
            <div class="resources__info">
                <h3>{{ content.textObj['promocoes no catalogo'] }}</h3>
                <p>{{ content.textObj['promocoes no catalogo subtitle'] }}</p>
            </div>
            <img :src="content.imageObj['promocoes no catalogo'].url" :alt="content.imageObj['promocoes no catalogo'].alt" aria-hidden="true">
        </rr-resource-card>
        <rr-resource-card>
            <div class="resources__info">
                <h3>{{ content.textObj['gerador de QR code'] }}</h3>
                <p>{{ content.textObj['gerador de QR code subtitle'] }}</p>
            </div>
            <img :src="content.imageObj['gerador de QR code'].url" :alt="content.imageObj['gerador de QR code'].alt" aria-hidden="true">
        </rr-resource-card>
        <rr-resource-card>
            <div class="resources__info">
                <h3>{{ content.textObj['cupons de desconto'] }}</h3>
                <p>{{ content.textObj['cupons de desconto subtitle'] }}</p>
            </div>
            <img :src="content.imageObj['cupons de desconto'].url" :alt="content.imageObj['cupons de desconto'].alt" aria-hidden="true">
        </rr-resource-card>
        <div class="resources__center"></div>
        <rr-resource-card>
            <div class="resources__info">
                <h3>{{ content.textObj['posts promocionais'] }}</h3>
                <p>{{ content.textObj['posts promocionais subtitle'] }}</p>
            </div>
            <img src="/images/resource5.svg" alt="Resource" aria-hidden="true">
        </rr-resource-card>
        <rr-resource-card>
            <div class="resources__info">
                <h3>{{ content.textObj['estatisticas inteligentes'] }}</h3>
                <p>{{ content.textObj['estatisticas inteligentes subtitle'] }}</p>
            </div>
            <img :src="content.imageObj['estatisticas inteligentes'].url" :alt="content.imageObj['estatisticas inteligentes'].alt" aria-hidden="true">
        </rr-resource-card>
        <rr-resource-card>
            <div class="resources__info">
                <h3>{{ content.textObj['integracao google meta'] }}</h3>
                <p>{{ content.textObj['integracao google meta subtitle'] }}</p>
            </div>
            <img src="/images/resource7.svg" alt="Resource" aria-hidden="true">
        </rr-resource-card>
        <rr-resource-card>
            <div class="resources__info">
                <h3>{{ content.textObj['aplicativo mobile'] }}</h3>
                <p>{{ content.textObj['aplicativo mobile subtitle'] }}</p>
            </div>
            <img src="/images/resource8.svg" alt="Resource" aria-hidden="true">
        </rr-resource-card>
    </section>
</template>

<script setup>
const props = defineProps({
    content: {
        type: Object
    }
})
</script>   


<style scoped lang="scss">
    .resources {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 20px;
        @media (max-width: 36em) {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
        }
    }

        .resources__info {
            display: flex;
            flex-direction: column;
            gap: 16px;
            h3 {
                max-width: 160px;
            }
        }

        .resources__center {
            border-radius: 16px;
            background-image: url(/images/psychodelic1.png);
            background-size: cover;
            background-position: center;
        }
</style>