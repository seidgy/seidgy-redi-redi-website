<template>
    <section class="features">
        <div>
            <div class="feature-card" style="background-image: url(/images/psychodelic1.png);" aria-hidden="true"></div>
            <div class="feature-card" style="background: linear-gradient(270deg, #672197 -9.04%, #AD37FD 111.95%), linear-gradient(90deg, #AF37FF 0%, #502D95 140.79%);" aria-hidden="true">
                <img src="/images/switch-redi.svg" alt="Switch">
            </div>
            <div class="feature-card" style="background-image: url(/images/petrol.png);">
                <p>Confiado por empresas ao redor do mundo</p>
            </div>
        </div>
        <div>
            <div class="feature-card" style="background-image: url(/images/flags.png);">
                <p>15+ países usando a RediRedi</p>
            </div>
            <div class="feature-card" style="background-image: url(/images/smartphone.png);">
                <p>170 mil catálogos criados</p>
            </div>
            <div class="feature-card" style="background-image: url(/images/fractal.png);">
                <p>98% de clientes satisfeitos</p>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>   


<style scoped lang="scss">
    .features {
        padding-block: 100px;
        display: grid;
        grid-template-rows: 1fr 1fr;
        gap: 24px;
        & > div {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            gap: 24px;
        }
        & > div:first-child {
            display: grid;
            grid-template-columns: 1fr 1fr 2fr;
            gap: 24px;
        }
        @media (max-width: 36em) {
            grid-template-rows: 1fr;
            & > div {
                display: grid;
                grid-template-columns: 1fr;
                gap: 24px;
            }
            & > div:first-child {
                display: grid;
                grid-template-columns: 1fr;
                gap: 24px;
            }
        }
    }

        .feature-card {
            border-radius: 16px;
            display: flex;
            align-items: center;
            background-size: cover;
            background-position: center;
            padding: 80px 40px;
            & > p {
                font-size: 2.625em;
                font-weight: 600;
                letter-spacing: -1.69px;
                color: var(--white-color);
                max-width: 350px;
            }
            & > img {
                width: 160px;
                margin: 0 auto;
            }
        }
</style>