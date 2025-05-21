<template>
    <div class="hero-try-section" aria-hidden="true">
        <rr-trial-button  :label="content.textObj['botao experimente']"></rr-trial-button>
        <div class="hero-try-section__content">
            <div class="logo-circle" aria-hidden="true">
                <rr-minimal-logo fill="hsla(273, 64%, 52%, 1)"></rr-minimal-logo>
            </div>
            <img src="/images/base.svg" alt="Sua base de clientes" class="base-clientes">
            <img src="/images/hero-iphone-ptbr.webp" alt="Exemplo display IPhone" class="iphone not-mobile" aria-hidden="true" />
            <img src="/images/hero-iphone-mobile-ptbr.webp" alt="Exemplo display IPhone" class="iphone not-desktop" aria-hidden="true" />
            <div class="hero-try-content">
                <img src="/images/vector-grad-vertical.svg" alt="Gradient" class="hero-try-content__grad hero-try-content__grad--1" aria-hidden="true" />
                <img src="/images/vector-grad-vertical.svg" alt="Gradient" class="hero-try-content__grad hero-try-content__grad--2" aria-hidden="true" />
                <div class="hero-try__horizontal-content">
                    <div class="hero-try-content__card">
                        <div class="hero-try-content__picture" style="background-image: url(/images/dog-food.webp)"></div>
                        <div class="hero-try-content__info">
                            <p class="text--xs text--b text--display">{{ content.textObj['porta saquinho'] }}</p>
                            <p class="text--2xs text--display text--medium">{{ content.textObj['valor 29,90'] }}</p>
                        </div>
                    </div>
                    <rr-switch></rr-switch>
                    <div class="hero-try-content__card">
                        <div class="hero-try-content__picture" style="background-image: url(/images/smile1.webp)"></div>
                        <div class="hero-try-content__info">
                            <p class="text--xs text--b text--display">Maria</p>
                            <rr-stars></rr-stars>
                            <p class="text--2xs text--display text--medium">{{ content.textObj['cliente qualificado'] }}</p>
                        </div>
                    </div>
                </div>
                <div class="hero-try-content__card hero-try-content__card--horizontal">
                    <div class="hero-try-content__picture" style="background-image: url(/images/smile1.webp)"></div>
                    <div class="hero-try-content__info">
                        <div class="hero-try-content__card-tags">
                            <p class="text--3xs text--display text--b text--white hero-try-content__card-tag">{{ content.textObj['compra mensal'] }}</p>
                            <p class="text--3xs text--display text--b text--white hero-try-content__card-tag">{{ content.textObj['possui cachorro'] }}</p>
                        </div>
                        <p class="text--xl text--b text--display">Maria</p>
                        <rr-stars size="lg"></rr-stars>
                        <p class="text--sm text--display">{{ content.textObj['cliente qualificado'] }}</p>
                    </div>
                    <div class="hero-try-content__info hero-try-content__info--padding">
                        <div class="hero-try-content__picture hero-try-content__picture--square" style="background-image: url(/images/dog-food.webp)"></div>
                        <p class="text text--3xs text--sb text--gray text--uppercase">{{ content.textObj['porta saquinho'] }}</p>
                    </div>
                </div>
                <div class="hero-try__horizontal-content hero-try-content__tags">
                    <p class="text--2xs text--display text--sb text--white hero-try-content__tag">{{ content.textObj['enviar mensagem'] }}</p>
                    <p class="text--2xs text--display text--sb text--white hero-try-content__tag">{{ content.textObj['criar promocao'] }}</p>
                    <p class="text--2xs text--display text--sb text--white hero-try-content__tag">{{ content.textObj['fechar venda'] }}</p>
                </div>
            </div>
            <div class="hero-try-content__card hero-try-content__card--xs pos pos--1">
                <div class="hero-try-content__picture" style="background-image: url(/images/smile2.png)"></div>
                <div class="hero-try-content__info">
                    <p class="text--3xs text--b text--display">Davi</p>
                    <rr-stars size="sm" :qt="3"></rr-stars>
                </div>
            </div>
            <div class="hero-try-content__card hero-try-content__card--sm pos pos--2">
                <div class="hero-try-content__picture" style="background-image: url(/images/smile3.png)"></div>
                <div class="hero-try-content__info">
                    <p class="text--2xs text--b text--display">João</p>
                    <rr-stars size="md" :qt="4"></rr-stars>
                </div>
            </div>
            <div class="hero-try-content__card hero-try-content__card--sm hero-try-content__card--transparent pos pos--3">
                <div class="hero-try-content__picture" style="background-image: url(/images/smile4.png)"></div>
                <div class="hero-try-content__info">
                    <p class="text--2xs text--b text--display">Rosa</p>
                    <rr-stars size="md" :qt="2"></rr-stars>
                </div>
            </div>
            <div class="hero-try-content__card hero-try-content__card--xs hero-try-content__card--transparent pos pos--4">
                <div class="hero-try-content__picture" style="background-image: url(/images/smile5.png)"></div>
                <div class="hero-try-content__info">
                    <p class="text--3xs text--b text--display">Renato</p>
                    <rr-stars size="sm" :qt="1"></rr-stars>
                </div>
            </div>
            <div class="hero-try-content__card hero-try-content__card--sm hero-try-content__card--transparent pos pos--5">
                <div class="hero-try-content__picture" style="background-image: url(/images/smile6.png)"></div>
                <div class="hero-try-content__info">
                    <p class="text--2xs text--b text--display">Roberto</p>
                    <rr-stars size="md" :qt="3"></rr-stars>
                </div>
            </div>
            <div class="hero-try-content__card pos pos--6">
                <div class="hero-try-content__picture" style="background-image: url(/images/smile1.webp)"></div>
                <div class="hero-try-content__info">
                    <p class="text--xs text--b text--display">Maria</p>
                    <rr-stars size="lg" :qt="5"></rr-stars>
                    <p class="text--2xs text--b text--display">{{ content.textObj['cliente qualificado'] }}</p>
                </div>
            </div>
            <div class="hero-try-content__card hero-try-content__card--sm hero-try-content__card--transparent pos pos--7">
                <div class="hero-try-content__picture" style="background-image: url(/images/smile7.png)"></div>
                <div class="hero-try-content__info">
                    <p class="text--2xs text--b text--display">Rosana</p>
                    <rr-stars size="md" :qt="3"></rr-stars>
                </div>
            </div>
            <div class="hero-try-content__card hero-try-content__card--xs hero-try-content__card--transparent pos pos--8">
                <div class="hero-try-content__picture" style="background-image: url(/images/smile8.png)"></div>
                <div class="hero-try-content__info">
                    <p class="text--3xs text--b text--display">Danielle</p>
                    <rr-stars size="sm" :qt="3"></rr-stars>
                </div>
            </div>
            <div class="hero-try-content__card hero-try-content__card--xs hero-try-content__card--transparent pos pos--9">
                <div class="hero-try-content__picture" style="background-image: url(/images/smile9.png)"></div>
                <div class="hero-try-content__info">
                    <p class="text--3xs text--b text--display">Poli</p>
                    <rr-stars size="sm" :qt="3"></rr-stars>
                </div>
            </div>
            <div class="hero-try-content__card hero-try-content__card--xs hero-try-content__card--transparent pos pos--10">
                <div class="hero-try-content__picture" style="background-image: url(/images/smile10.png)"></div>
                <div class="hero-try-content__info">
                    <p class="text--3xs text--b text--display">José</p>
                    <rr-stars size="sm" :qt="1"></rr-stars>
                </div>
            </div>
            <div class="hero-try-content__card hero-try-content__card--xs hero-try-content__card--transparent pos pos--11">
                <div class="hero-try-content__picture" style="background-image: url(/images/smile11.png)"></div>
                <div class="hero-try-content__info">
                    <p class="text--3xs text--b text--display">Angela</p>
                    <rr-stars size="sm" :qt="1"></rr-stars>
                </div>
            </div>
            <div class="hero-try-content__card hero-try-content__card--xs hero-try-content__card--transparent pos pos--12">
                <div class="hero-try-content__picture" style="background-image: url(/images/smile12.png)"></div>
                <div class="hero-try-content__info">
                    <p class="text--3xs text--b text--display">Mirian</p>
                    <rr-stars size="sm" :qt="1"></rr-stars>
                </div>
            </div>
            <nuxt-link to="#solucao" class="pos pos--13 chevron"><img src="/images/chevron-down.svg" alt="Rolar para baixo" /></nuxt-link>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    content: {
        type: Object
    }
})
</script>
<style lang="scss" scoped>
    .hero-try-section {
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        .button {
            position: relative;
            z-index: 1;
        }
    }

    .hero-try-section__content {
        position: relative;
        width: 100%;
        aspect-ratio: 16/9;
        background-image: url(/images/hero-curve.webp);
        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: center;
        margin-top: -10%;
        @media (max-width: 1280px) {
            aspect-ratio: 1/4;
            background-image: url(/images/hero-curve-mobile.webp);
            background-size: auto 80%;
            background-position: center right;
        }

    }

    .logo-circle {
        transform: translate(-50%, -50%);
        position: absolute;
        top: 22.5%;
        left: 13%;
        height: 36px;
        width: 36px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: row nowrap;
        border: 1px solid var(--white-color);
        background: linear-gradient(112.83deg, #E9C8FF 0%, rgba(236, 236, 236, 0) 110.84%);
        :deep(.rr-logo) {
            width: 20px;
        }
        @media (max-width: 1280px) {
            top: 10.5%;
            left: auto;
            right: 26%;
        }
    }

    .base-clientes {
        transform: translate(-50%, -50%);
        position: absolute;
        top: 73%;
        left: 80%;
    }

    .iphone {
        width: 40%;
        transform: translateX(-50%);
        position: absolute;
        bottom: 0;
        left: 13%;
        @media (max-width: 1280px) {
            width: 90%;
            left: 50%;
            bottom: auto;
            top: 12%;
        }
    }
    
    .hero-try-content {
        position: absolute;
        left: 50%;
        bottom: 12%;
        transform: translateX(-50%);
        display: flex;
        flex-flow: column wrap;
        gap: 16px;
        justify-content: center;
        align-items: center;
        @media (max-width: 1280px) {
            width: 90%;
            bottom: auto;
            top: 45%;
        }
        > * {
            position: relative;
        }
        & :deep(.switch-redi) {
            align-self: flex-end;
        }
    }

        .hero-try__horizontal-content {
            display: flex;
            flex-flow: row nowrap;
            gap: 12px;
        }

        .hero-try-content__grad {
            position: absolute;
            width: 40px;
            top: 25%;
        }

            .hero-try-content__grad--1{
                right: calc(50% - 1px);
            }

            .hero-try-content__grad--2{          
                transform: rotateY(180deg);
                left: calc(50% - 1px);
            }


        .hero-try-content__card {
            padding: 14px 0;
            border: 4px solid;
            border-image-source: radial-gradient(126.38% 126.38% at 50% 50%, rgba(114, 55, 153, 0.02) 0%, rgba(190, 92, 255, 0.02) 100%);
            background-color: var(--white-color);
            border-radius: 20px;
            width: 111px;
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }

            .hero-try-content__card--horizontal{
                position: relative;
                padding: 20px 30px;
                flex-flow: row nowrap;
                width: auto;
                flex-shrink: 0;
                gap: 14px;
                box-shadow: 0px 0.97px 18.79px 0px hsla(0, 0%, 0%, 0.1);
                @media (max-width: 1280px) {
                    padding: 10px 14px;
                }
                .hero-try-content__card-tags {
                    display: flex;
                    flex-flow: row nowrap;
                    gap: 4px;
                    .hero-try-content__card-tag {
                        padding: 4px;
                        background: linear-gradient(90deg, #AF37FF 0%, #EC56C6 140.79%);
                        border-radius: 8px;
                    }
                }
                .hero-try-content__info {
                    display: flex;
                    flex-flow: column nowrap;
                    gap: 8px;
                    align-items: flex-start;
                }
                    .hero-try-content__info--padding {
                        padding-left: 24px;
                        border-left: 2px solid rgba(206, 206, 206, 1);
                    }

                .spacer {
                    width: 2px;
                    height: 90%;
                    background: rgba(206, 206, 206, 1);
                }
            }

            .hero-try-content__picture {
                width: 65px;
                height: 65px;
                background-size: cover;
                background-position: center;
                border-radius: 50%;
                outline: 1px solid var(--white-color);
            }

                .hero-try-content__picture--square {
                    width: 74px;
                    height: 56px;
                    border-radius: 8px;
                }

            .hero-try-content__info {
                    display: flex;
                    flex-flow: column nowrap;
                    gap: 4px;
                    align-items: center;
            }

            .hero-try-content__card--sm {
                padding: 12px 0;
                width: 74px;
                gap: 7px;
                border-radius: 14px;
                .hero-try-content__picture {
                    width: 48px;
                    height: 48px;
                }
            }

            .hero-try-content__card--xs {
                padding: 5px 0;
                width: 51px;
                gap: 5px;
                border-radius: 10px;
                .hero-try-content__picture {
                    width: 32px;
                    height: 32px;
                }
                .hero-try-content__info {
                    gap: 3px;
                }
            }

            .hero-try-content__card--transparent {
                background: none;
            }

            .hero-try-content__tags {
                &::before {
                    content: '';
                    height: 1px;
                    background: linear-gradient(90deg, #BE5CFF -18.88%, rgba(240, 145, 216, 0.25) 96.94%);
                    position: absolute;
                    top: 50%;
                    left: 20%;
                    right: 20%;
                }
            }

                .hero-try-content__tag {
                    position: relative;
                    background: rgba(242, 79, 130, 1);
                    padding: 4px 10px;
                    border-radius: 5px;
                }

            .pos {
                position: absolute;
                transform: translate(50%, -50%);
            }

                .pos--1 {
                    top: 32%;
                    right: 15%;
                    @media (max-width: 1280px) {
                        top: 90%;
                        right: 29%;
                    }
                }

                .pos--2 {
                    top: 42%;
                    right: 5%;
                    @media (max-width: 1280px) {
                        top: 85%;
                        right: 54%;
                    }
                }

                .pos--3 {
                    top: 47%;
                    right: 15%;
                    @media (max-width: 1280px) {
                        top: 71%;
                        right: 45%;
                    }
                }

                .pos--4 {
                    top: 60%;
                    right: 17%;
                    @media (max-width: 1280px) {
                        top: 80%;
                        right: 95%;
                    }
                }

                .pos--5 {
                    top: 60%;
                    right: 0%;
                    @media (max-width: 1280px) {
                        top: 75%;
                        right: 25%;
                    }
                }

                .pos--6 {
                    top: 71%;
                    right: 8%;
                    @media (max-width: 1280px) {
                        top: 75%;
                        right: 73%;
                    }
                }

                .pos--7 {
                    top: 82%;
                    right: 17%;
                    @media (max-width: 1280px) {
                        top: 89%;
                        right: 78%;
                    }
                }

                .pos--8 {
                    top: 77%;
                    right: 0%;
                    @media (max-width: 1280px) {
                        top: 85%;
                        right: 34%;
                    }
                }

                .pos--9 {
                    top: 90%;
                    right: 6%;
                    @media (max-width: 1280px) {
                        top: 92%;
                        right: 63%;
                    }
                }

                .pos--10 {
                    top: 93%;
                    right: 17%;
                    @media (max-width: 1280px) {
                        top: 94%;
                        right: 92%;
                    }
                }

                .pos--11 {
                    top: 91%;
                    right: 0%;
                    @media (max-width: 1280px) {
                        top: 93%;
                        right: 13%;
                    }
                }

                .pos--12 {
                    top: 94%;
                    right: 11%;
                    @media (max-width: 1280px) {
                        top: 95%;
                        right: 78%;
                    }
                }

                .pos--13 {
                    bottom: 1%;
                    right: 50%;
                }
</style>