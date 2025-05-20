<template>
    <section class="marketing">
        <div class="center">
            <div class="marketing__mosaic">
                <div class="mosaic mosaic--1"></div>
                <div class="mosaic mosaic--2"></div>
                <div class="mosaic mosaic--3">
                    <img src="/images/IA.webp" alt="Vamos vender mais juntos?">
                </div>
                <img src="/images/vector-grad-5.svg" class="vector vector--1" alt="Vector" aria-hidden="true" />
                <img src="/images/vector-grad-6.svg" class="vector vector--2" alt="Vector" aria-hidden="true" />
            </div>
            <div class="marketing__info">
                <div class="flex flex--col flex--start flex--44">
                    <h2>+20% de aumento na média de pedidos recebidos*</h2>
                    <p>* Lojas que usam a RediRedi e seguem nossas recomendações inteligentes aumentam, em média, 20% o número de pedidos.</p>
                </div>
                 <div class="flex flex--col flex-center flex--16">
                    <rr-trial-button></rr-trial-button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>   


<style scoped lang="scss">
    .marketing {
        @media (max-width: 36em) {
            overflow-x: hidden;
        }
        & > .center{
            display: grid;
            grid-template-columns: auto auto;
            gap: 70px;
            align-items: center;
            @media (max-width: 36em) {
                grid-template-columns: 1fr;
            }
        }
        padding-bottom: 145px;
    }

        .marketing__mosaic {
            display: grid;
            grid-template-columns: 303px 259px;
            grid-template-rows: 280px 216px;
            gap: 24px;
            position: relative;
            @media (max-width: 36em) {
                grid-template-columns: auto 40%;
                grid-template-rows: 195px 185px;
            }
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
                display: flex;
                align-items: center;
                justify-content: center;
                img {
                    width: 80%;
                }
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
            gap: 57px;
            align-items: flex-start;
            @media (max-width: 36em) {
                gap: 44px;
            }
            h2, p {
                color: var(--white-color);
            }
            p {
                font-size: 1.5em;
                font-weight: 500;
            }
        }
        
</style>