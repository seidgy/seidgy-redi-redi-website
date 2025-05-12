<template>
    <section class="resources">
        <rr-resource-card>
            <div class="resources__info">
                <h3>Cadastro de produtos</h3>
                <p>Ganhe tempo: fotos, títulos e descrições prontas em segundos.</p>
            </div>
            <img src="/images/resource1.svg" alt="Resource" aria-hidden="true">
        </rr-resource-card>
        <rr-resource-card>
            <div class="resources__info">
                <h3>Promoções no catálogo </h3>
                <p>Crie promoções personalizadas que destacam produtos e atraem clientes.</p>
            </div>
            <img src="/images/resource2.svg" alt="Resource" aria-hidden="true">
        </rr-resource-card>
        <rr-resource-card>
            <div class="resources__info">
                <h3>Gerador de QR Code </h3>
                <p>Imprima e cole na loja: seus clientes terão seu catálogo de produtos sempre à mão!</p>
            </div>
            <img src="/images/resource3.svg" alt="Resource" aria-hidden="true">
        </rr-resource-card>
        <rr-resource-card>
            <div class="resources__info">
                <h3>Cupons de desconto</h3>
                <p>Crie cupons para gerar promoções e ativar o estoque com mais vendas.</p>
            </div>
            <img src="/images/resource4.svg" alt="Resource" aria-hidden="true">
        </rr-resource-card>
        <div class="resources__center"></div>
        <rr-resource-card>
            <div class="resources__info">
                <h3>Posts promocionais</h3>
                <p>Tenha posts prontos toda semana e mantenha sua loja sempre ativa nas redes.</p>
            </div>
            <img src="/images/resource5.svg" alt="Resource" aria-hidden="true">
        </rr-resource-card>
        <rr-resource-card>
            <div class="resources__info">
                <h3>Estatísticas inteligentes</h3>
                <p>Descubra os produtos mais clicados, mais vendidos e os que necessitam de atenção.</p>
            </div>
            <img src="/images/resource6.svg" alt="Resource" aria-hidden="true">
        </rr-resource-card>
        <rr-resource-card>
            <div class="resources__info">
                <h3>Integração com Google e Meta </h3>
                <p>Integração com Google Analytics e Meta Pixel Monitore métricas detalhadas e otimize suas campanhas.</p>
            </div>
            <img src="/images/resource7.svg" alt="Resource" aria-hidden="true">
        </rr-resource-card>
        <rr-resource-card>
            <div class="resources__info">
                <h3>Aplicativo Mobile</h3>
                <p>Gerencie sua loja de qualquer lugar com app para iOS e Android.</p>
            </div>
            <img src="/images/resource8.svg" alt="Resource" aria-hidden="true">
        </rr-resource-card>
    </section>
</template>

<script setup>

</script>   


<style scoped lang="scss">
    .resources {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 20px;
    }

        .resources__info {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .resources__center {
            border-radius: 16px;
            background-image: url(/images/psychodelic1.png);
            background-size: cover;
            background-position: center;
        }
</style>