<template>
    <section class="marketing">
        <div class="center">
            <div class="marketing__mosaic">
                <div class="mosaic mosaic--1"></div>
                <div class="mosaic mosaic--2"></div>
                <div class="mosaic mosaic--3"></div>
                <img src="/images/vector-grad-5.svg" class="vector vector--1" alt="Vector" aria-hidden="true" />
                <img src="/images/vector-grad-6.svg" class="vector vector--2" alt="Vector" aria-hidden="true" />
            </div>
            <div class="marketing__info">
                <h2>+20% de aumento na média de pedidos recebidos</h2>
                <p>* Com a Redi você pode aumentar em 20% o número de pedidos da sua loja. Transformando catálogos em verdadeiras ferramentas de vendas com ajuda da nossa inteligência artificial e automações.</p>
                <rr-trial-button color="white" size="sm"></rr-trial-button>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>   


<style scoped lang="scss">
    .marketing {
        & > .center{
            display: grid;
            grid-template-columns: auto auto;
            gap: 48px;
        }
        padding-bottom: 145px;
    }

        .marketing__mosaic {
            display: grid;
            grid-template-columns: 305px 259px;
            grid-template-rows: 280px 216px;
            gap: 24px;
            position: relative;
        }

            .mosaic {
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                border-radius: 20px;
                position: relative;
                z-index: 1;
            }

            .mosaic--1 {
                background-size: 100% auto;
                background-position: bottom right;
                background-image: url(/images/diagonal-image.png);
            }

            .mosaic--2 {
                background-image: url(/images/psychodelic1.png);
            }

            .mosaic--3 {
                background-image: url(/images/psychodelic3.png);
                grid-column: span 2;
            }

            .vector {
                position: absolute;
            }

                .vector--1 {
                    top: 0;
                    left: 249px;
                    transform: translateY(-50%);
                }

                .vector--2 {
                    top: 218px;
                    left: 0;
                    transform: translateX(-50%);
                }


        .marketing__info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            h2, p {
                color: var(--white-color);
            }
            p {
                font-size: 1.5em;
                font-weight: 500;
            }
        }
        
</style>