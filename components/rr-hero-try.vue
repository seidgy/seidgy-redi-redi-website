<template>
    <div class="hero-try-section" aria-hidden="true">
        <rr-trial-button  :label="content.textObj['botao experimente']"></rr-trial-button>
        <div class="hero-try-section__content not-mobile">
            <div class="logo-circle" aria-hidden="true">
                <rr-minimal-logo fill="hsla(273, 64%, 52%, 1)"></rr-minimal-logo>
            </div>
            <img :src="content.imageObj['sua base de clientes'].url" :alt="content.imageObj['sua base de clientes'].alt" class="base-clientes">
            <img :src="content.imageObj['hero smartphone'].url" :alt="content.imageObj['hero smartphone'].alt" class="iphone not-mobile" aria-hidden="true" />
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
                            <p class="text--xs text--b text--display">{{ content.textObj['maria'] }}</p>
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
                        <p class="text--xl text--b text--display">{{ content.textObj['maria'] }}</p>
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
                    <p class="text--2xs text--b text--display">{{ content.textObj['joao'] }}</p>
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
                    <p class="text--3xs text--b text--display">{{ content.textObj['renato'] }}</p>
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
                    <p class="text--xs text--b text--display">{{ content.textObj['maria'] }}</p>
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
        <div class="hero-try-section__content not-desktop">
            <img src="/images/hero-curve.webp" alt="Curva" class="hero-try-section__content-mobile-curve" aria-hidden="true">
            <div class="hero-try-section__content-mobile flex flex--30">
                <div class="hero-try-section__content-mobile-card flex flex--col flex--22">
                    <div class="hero-try-section__content-mobile-card-content">
                        <img class="hero-try-section__content-mobile-smartphone" :src="content.imageObj['hero smartphone mobile'].url" :alt="content.imageObj['hero smartphone mobile'].alt">
                    </div>
                    <div class="flex flex--col flex--16">
                        <h3 class="align-left">{{ content.textObj['mobile hero card 1 title'] }}</h3>
                        <p class="text--xs align-left">{{ content.textObj['mobile hero card 1 subtitle'] }}</p>
                    </div>
                </div>
                <div class="hero-try-section__content-mobile-card flex flex--col flex--22">
                    <div class="hero-try-section__content-mobile-card-content">
                        <div class="hero-try-content hero-try-content hero-try-content--card2">
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
                                        <p class="text--xs text--b text--display">{{ content.textObj['maria'] }}</p>
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
                                    <p class="text--xl text--b text--display">{{ content.textObj['maria'] }}</p>
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
                    </div>
                    <div class="flex flex--col flex--16">
                        <h3 class="align-left">{{ content.textObj['mobile hero card 2 title'] }}</h3>
                        <p class="text--xs align-left">{{ content.textObj['mobile hero card 2 subtitle'] }}</p>
                    </div>
                </div>
                <div class="hero-try-section__content-mobile-card flex flex--col flex--22">
                    <div class="hero-try-section__content-mobile-card-content">
                        <div class="hero-try-section__content-mobile-card-content">
                            <div class="hero-try-content hero-try-content--card3">
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
                                        <p class="text--2xs text--b text--display">{{ content.textObj['joao'] }}</p>
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
                                        <p class="text--3xs text--b text--display">{{ content.textObj['renato'] }}</p>
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
                                        <p class="text--xs text--b text--display">{{ content.textObj['maria'] }}</p>
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
                            </div>
                        </div>
                    </div>
                    <div class="flex flex--col flex--16">
                        <h3 class="align-left">{{ content.textObj['mobile hero card 3 title'] }}</h3>
                        <p class="text--xs align-left">{{ content.textObj['mobile hero card 3 subtitle'] }}</p>
                    </div>
                </div>
            </div>
            <div class="hero-try-section__content-mobile-nav" aria-hidden="true">
                <button class="hero-try-section__content-mobile-nav-btn" @click="scrollToCard(0)"></button>
                <button class="hero-try-section__content-mobile-nav-btn" @click="scrollToCard(1)"></button>
                <button class="hero-try-section__content-mobile-nav-btn" @click="scrollToCard(2)"></button>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    content: {
        type: Object
    }
})

const scrollToCard = (index) => {
    const container = document.querySelector('.hero-try-section__content-mobile')
    const cards = document.querySelectorAll('.hero-try-section__content-mobile-card')
    if (container && cards[index]) {
        container.scrollTo({
            left: cards[index].offsetLeft,
            behavior: 'smooth'
        })
    }
}
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
        @media (max-width: 1280px) {
            gap: 112px;
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
        padding-bottom: 85px;
        @media (max-width: 1280px) {
            aspect-ratio: auto;
            margin-top: 0;
            background: none;
            background-size: auto 80%;
            background-position: center right;
        }

    }

        .hero-try-section__content-mobile {
            overflow-x: auto;
            padding-bottom: 20px;
            scroll-snap-type: x mandatory;
            padding-inline: 20px;
        }

        .hero-try-section__content-mobile-curve {
            position: absolute;
            top: 0;
            left: -37.5%;
            max-width: none;
            width: 175%;
        }

        .hero-try-section__content-mobile-card {
            scroll-snap-align: center;
            width: 80vw;
            flex-shrink: 0;
        }

        .hero-try-section__content-mobile-card-content {
            width: 100%;
            position: relative;
            & > * {
                position: relative;
            }
            &::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 0;
                right: 0;
                height: 275px;
                border-radius: 24px;
                background-color: hsla(0, 0%, 92%, 1);
                transform: translateY(-50%);
            }

        }

            .hero-try-section__content-mobile-card-content--relative {
                padding: 10px;
                &::before {
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    transform: translateY(0);
                    height: initial;
                }
            }

        .hero-try-section__content-mobile-smartphone {
            width: auto;
            height: 300px;
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
        width: 27%;
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
            width: 100%;
            position: static;
            transform: translateY(0);
        }
        > * {
            position: relative;
        }
        & :deep(.switch-redi) {
            align-self: flex-end;
        }
    }

        .hero-try-content--card2,
        .hero-try-content--card3 {
            aspect-ratio: initial;
            position: relative;
            left: 0;
            top: 0;
            height: 300px;
            gap: 8px;
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
            width: 63px;
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            @media (max-width: 1280px) {
                padding: 5px;
                border-radius: 12px;
                gap: 4px;
                .text--xs {
                    font-size: 0.475em;
                }
                .text--2xs {
                    font-size: 0.3em;
                }
            }
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
                    @media (max-width: 1280px) {
                        gap: 4px;
                    }
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
                @media (max-width: 1280px) {
                    width: 40px;
                    height: 40px;
                }
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
                @media (max-width: 1280px) {
                    width: 43px;
                    padding: 5px 0;
                }
                .hero-try-content__picture {
                    width: 48px;
                    height: 48px;
                    @media (max-width: 1280px) {
                        width: 29px;
                        height: 29px;
                    }
                }
                .hero-try-content__info {
                    @media (max-width: 1280px) {
                        gap: 3px;
                    }
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
                    @media (max-width: 1280px) {
                        width: 24px;
                        height: 24px;
                    }
                }
                .hero-try-content__info {
                    gap: 3px;
                    @media (max-width: 1280px) {
                        gap: 2px;
                    }
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
                    @media (max-width: 1280px) {
                        padding: 2px 6px;
                        font-size: 0.375em;
                    }
                }

            .pos {
                position: absolute;
                transform: translate(50%, -50%);
                @media (max-width: 1280px) {
                   transform: translate(0);
                }
            }

                .pos--1 {
                    top: 32%;
                    right: 15%;
                    @media (max-width: 1280px) {
                        top: 0;
                        right: auto;
                        left: 25%;
                    }
                }

                .pos--2 {
                    top: 42%;
                    right: 5%;
                    @media (max-width: 1280px) {
                        top: 8%;
                        right: auto;
                        left: 50%;
                    }
                }

                .pos--3 {
                    top: 47%;
                    right: 15%;
                    @media (max-width: 1280px) {
                        top: 20%;
                        right: auto;
                        left: 25%;
                    }
                }

                .pos--4 {
                    top: 60%;
                    right: 17%;
                    @media (max-width: 1280px) {
                        top: 15%;
                        right: auto;
                        left: 7%;
                    }
                }

                .pos--5 {
                    top: 60%;
                    right: 0%;
                    @media (max-width: 1280px) {
                        top: 32%;
                        right: auto;
                        left: 65%;
                    }
                }

                .pos--6 {
                    top: 71%;
                    right: 8%;
                    @media (max-width: 1280px) {
                        top: 55%;
                        right: 50%;
                        transform: translate(50%, -50%);
                    }
                }

                .pos--7 {
                    top: 82%;
                    right: 17%;
                    @media (max-width: 1280px) {
                        top: 61%;
                        right: auto;
                        left: 25%;
                    }
                }

                .pos--8 {
                    top: 77%;
                    right: 0%;
                    @media (max-width: 1280px) {
                        top: 58%;
                        right: auto;
                        left: 59%;
                    }
                }

                .pos--9 {
                    top: 90%;
                    right: 6%;
                    @media (max-width: 1280px) {
                        top: 71%;
                        right: auto;
                        left: 46%;
                    }
                }

                .pos--10 {
                    top: 93%;
                    right: 17%;
                    @media (max-width: 1280px) {
                        top: 82%;
                        right: auto;
                        left: 31%;
                    }
                }

                .pos--11 {
                    top: 91%;
                    right: 0%;
                    @media (max-width: 1280px) {
                        top: 83%;
                        right: auto;
                        left: 60%;
                    }
                }

                .pos--12 {
                    top: 94%;
                    right: 11%;
                    @media (max-width: 1280px) {
                        left: 64%;
                        right: auto;
                        top: 0%;
                    }
                }

                .pos--13 {
                    bottom: 1%;
                    right: 50%;
                }

    .hero-try-section__content-mobile-nav {
        display: flex;
        justify-content: center;
        gap: 8px;
        margin-top: 16px;
    }

    .hero-try-section__content-mobile-nav-btn {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: hsla(0, 0%, 92%, 1);
        cursor: pointer;
        transition: all 0.3s ease;
        border: none;
        &:hover {
            background: hsla(171, 73%, 36%, 1);
        }
    }
</style>