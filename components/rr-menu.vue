<template>
    <div class="center">
        <nav class="rr-menu" :class="{'rr-menu--active': data.menuActive}">
            <div class="flex flex--60 flex-center">
                <nuxt-link target="_blank" to="https://rediredi.com/">
                    <img src="/images/redi-redi.svg" alt="RediRedi">
                </nuxt-link>
                <nav class="rr-menu__nav not-mobile">
                    <nuxt-link target="_blank" to="https://rediredi.com/br/sobre-br/" class="rr-menu__nav-link">{{ pageContent.textObj['sobre'] }}</nuxt-link>
                    <nuxt-link target="_blank" to="https://rediredi.com/br/catalogo-online/" class="rr-menu__nav-link">{{ pageContent.textObj['catalogo'] }}</nuxt-link>
                    <nuxt-link target="_blank" to="https://rediredi.com/br/blog-br/" class="rr-menu__nav-link">{{ pageContent.textObj['blog'] }}</nuxt-link>
                    <nuxt-link target="_blank" to="https://rediredi.com/br/premium-br/" class="rr-menu__nav-link">{{ pageContent.textObj['premium'] }}</nuxt-link>
                </nav>
            </div>
            <button class="rr-menu__trigger not-desktop" @click="data.menuActive = true">
                <img src="/images/menu.svg" alt="Abrir menu" aria-hidden="true" />
            </button>
            <div class="rr-menu__links">
                <nav class="rr-menu__nav rr-menu__nav--small">
                    <nuxt-link target="_blank" to="https://app.rediredi.com/pt-BR/signin" class="button button--small" visuals="secondary" color="w-primary">{{ pageContent.textObj['botao entrar'] }}</nuxt-link>
                    <rr-trial-button size="sm" :label="pageContent.textObj['botao experimente']"></rr-trial-button>
                    <nuxt-link @click.prevent="data.languageActive = !data.languageActive" class="language-selector flex flex-center flex--5" :class="{'language-selector--active': data.languageActive}"><img src="/images/world.svg" alt="Change language" /><img src="/images/chevron-down.svg" alt="chevron" class="chevron" aria-hidden="true"></nuxt-link>
                    <ul class="language-select" v-if="data.languageActive">
                        <li v-for="loc in locales"><SwitchLocalePathLink @click="data.languageActive = false" class="locale" :class="{'locale--active': loc.code == locale}" :locale="loc.code">{{ loc.name }}</SwitchLocalePathLink></li>
                    </ul>
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
const switchLocalePath = useSwitchLocalePath();
const pageContent = await queryContent(locale.value !== 'pt' ? `paginas-fixas/${locale.value}` : 'paginas-fixas', 'homepage').findOne();
import { reactive } from 'vue';

const data = reactive({
    menuActive: false,
    languageActive: false
})

</script>
<style scoped lang="scss">

    .rr-menu {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-block: 24px;
        margin-bottom: 30px;
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

        .language-selector {
            cursor: pointer;
        }

        .chevron {
            transition: transform 0.2s ease-out;
        }

        .language-selector--active .chevron {

            transform: rotateX(180deg);
        }

        .language-select {
            position: absolute;
            top: 60px;
            right: 0;
            padding-block: 20px;
            padding-inline: 0;
            border-radius: 16px;
            background-color: var(--white-color);
            display: flex;
            flex-flow: column;
            box-shadow: 0px 0.97px 18.79px 0px hsla(0, 0%, 0%, 0.1);
            li {
                list-style: none;
                :deep(a) {
                    font-size: 1.125em;
                    font-weight: 500;
                    padding-block: 10px;
                    padding-inline: 20px;
                    display: block;
                    text-decoration: none;
                    &:hover,
                    &.locale--active {
                        background: hsla(207, 31%, 89%, 1);
                    }
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
            gap: 28px;
            position: relative;
            @media (max-width: 36em) {
                flex-direction: column;
            }
        }

            .rr-menu__nav--small {
                gap: 14px;
            }

            .rr-menu__nav-link {
                font-size: 1em;
                text-decoration: none;
                font-weight: 600;
                font-family: var(--display-font);
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