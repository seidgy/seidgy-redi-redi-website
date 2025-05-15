<template>
    <div class="center">
        <nav class="rr-menu" :class="{'rr-menu--active': data.menuActive}">
            <nuxt-link target="_blank" to="https://rediredi.com/">
                <img src="/images/redi-redi.svg" alt="RediRedi">
            </nuxt-link>
            <button class="rr-menu__trigger not-desktop" @click="data.menuActive = true">
                <img src="/images/menu.svg" alt="Abrir menu" aria-hidden="true" />
            </button>
            <div class="rr-menu__links">
                <nav class="rr-menu__nav">
                    <nuxt-link target="_blank" to="https://rediredi.com/br/sobre-br/" class="rr-menu__nav-link">Sobre</nuxt-link>
                    <nuxt-link target="_blank" to="https://rediredi.com/br/catalogo-online/" class="rr-menu__nav-link">Catálogo</nuxt-link>
                    <nuxt-link target="_blank" to="https://rediredi.com/br/blog-br/" class="rr-menu__nav-link">Blog</nuxt-link>
                    <nuxt-link target="_blank" to="https://rediredi.com/br/premium-br/" class="rr-menu__nav-link">Premium</nuxt-link>
                </nav>
                <span class="rr-menu__separator"></span>
                <nav class="rr-menu__nav rr-menu__nav--small">
                    <rr-trial-button size="sm"></rr-trial-button>
                </nav>
                <div class="rr-menu-header not-desktop">
                    <img src="/images/redi-redi-negative.svg" alt="RediRedi" />
                    <button class="rr-menu__trigger not-desktop" @click="data.menuActive = false">
                        <img src="/images/close.svg" alt="Fechar menu" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </nav>
    </div>
</template>
<script setup>
const { locale, locales } = useI18n()
import { reactive } from 'vue';
const data = reactive({
    menuActive: false
})
</script>
<style scoped lang="scss">

    .rr-menu {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-block: 24px;
        margin-bottom: 50px;
        @media (max-width: 36em) {
            padding-block: 0;
            padding-inline: 24px;
            :deep(img) {
                max-width: 140px;
            }
            &::before {
                content: '';
                z-index: 98;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0,0,0, .3);
                backdrop-filter: blur(3px);
                display: none;
            }
        }
    }

        .rr-menu--active {
            @media (max-width: 36em) {
                &::before {
                    display: block;
                }
                .rr-menu__links {
                    transform: translateY(0);
                }
            }
        }

        .rr-menu__trigger {
            border: none;
            background: none;
        }

        .rr-menu__links {
            display: flex;
            gap: 36px;
            @media (max-width: 36em) {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 20%;
                flex-direction: column-reverse;
                gap: 24px;
                background: linear-gradient(90deg, #AF37FF 0%, #EC56C6 140.79%);
                z-index: 99;
                justify-content: space-between;
                padding: 30px 20px 100px;
                border-radius: 0 0 30px 30px;
                transform: translateY(-120%);
                transition: 0.6s ease-out transform;
            }
        }

        .rr-menu__nav {
            display: flex;
            align-items: center;
            gap: 36px;
            @media (max-width: 36em) {
                flex-direction: column;
            }
        }

            .rr-menu__nav-link {
                font-size: 1em;
                text-decoration: none;
                font-weight: 500;
                @media (max-width: 36em) {
                    font-size: 2em;
                    color: var(--white-color);
                    font-weight: 700;
                }
            }

        .rr-menu__separator {
            width: 1px;
            background-color: var(--base-color);
            @media (max-width: 36em) {
                display: none;
            }
        }

        .rr-menu-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
</style>