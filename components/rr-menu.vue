<template>
    <div class="center">
        <nav class="rr-menu" :class="{'rr-menu--active': data.menuActive}">
            <div class="flex flex--60 flex-center">
                <nuxt-link  :to="getCountryLink(country, 'home')">
                    <img src="/images/redi-redi.svg" alt="RediRedi">
                </nuxt-link>
                <nav class="rr-menu__nav not-mobile">
                    <nuxt-link  :to="getCountryLink(country, 'sobre')" class="rr-menu__nav-link">{{ pageContent.textObj['sobre'] }}</nuxt-link>
                    <nuxt-link  :to="getCountryLink(country, 'catalogo')" class="rr-menu__nav-link">{{ pageContent.textObj['catalogo'] }}</nuxt-link>
                    <nuxt-link  :to="getCountryLink(country, 'blog')" class="rr-menu__nav-link">{{ pageContent.textObj['blog'] }}</nuxt-link>
                    <nuxt-link  :to="getCountryLink(country, 'premium')" class="rr-menu__nav-link">{{ pageContent.textObj['premium'] }}</nuxt-link>
                </nav>
            </div>
            <div class="flex flex-center flex--16">
                <nuxt-link  :to="getCountryLink(country, 'entrar')" class="button button--xs not-desktop" size="xs" visuals="secondary" color="w-primary">{{ pageContent.textObj['botao entrar'] }}</nuxt-link>
                <nuxt-link @click.prevent="data.languageActive = !data.languageActive" class="language-selector flex flex-center flex--5 not-desktop" :class="{'language-selector--active': data.languageActive}"><img src="/images/world.svg" alt="Change language" /><img src="/images/chevron-down.svg" alt="chevron" class="chevron" aria-hidden="true"></nuxt-link>
                <ul class="language-select not-desktop" v-if="data.languageActive">
                    <li v-for="loc in locales"><SwitchLocalePathLink @click="data.languageActive = false" class="locale" :class="{'locale--active': loc.code == locale}" :locale="loc.code">{{ loc.name }}</SwitchLocalePathLink></li>
                </ul>
                <button class="rr-menu__trigger not-desktop" @click="data.menuActive = true">
                    <img src="/images/menu.svg" alt="Abrir menu" aria-hidden="true" />
                </button>
            </div>
            <div class="rr-menu__links">
                <nav class="rr-menu__nav rr-menu__nav--small">
                    <nuxt-link  :to="getCountryLink(country, 'entrar')" class="button button--small not-mobile" visuals="secondary" color="w-primary">{{ pageContent.textObj['botao entrar'] }}</nuxt-link>
                    <rr-trial-button class="not-mobile" size="sm" :label="pageContent.textObj['botao experimente']"></rr-trial-button>
                    <rr-trial-button class="not-desktop" size="xs" :label="pageContent.textObj['botao experimente']"></rr-trial-button> 
                    <nuxt-link @click.prevent="data.languageActive = !data.languageActive" class="language-selector flex flex-center flex--5 not-mobile" :class="{'language-selector--active': data.languageActive}"><img src="/images/world.svg" alt="Change language" /><img src="/images/chevron-down.svg" alt="chevron" class="chevron" aria-hidden="true"></nuxt-link>
                    <ul class="language-select not-mobile" v-if="data.languageActive">
                        <li v-for="loc in locales"><SwitchLocalePathLink @click="data.languageActive = false" class="locale" :class="{'locale--active': loc.code == locale}" :locale="loc.code">{{ loc.name }}</SwitchLocalePathLink></li>
                    </ul>
                </nav>
                <nav class="rr-menu__nav not-desktop">
                    <nuxt-link  :to="getCountryLink(country, 'sobre')" class="rr-menu__nav-link">{{ pageContent.textObj['sobre'] }}</nuxt-link>
                    <nuxt-link  :to="getCountryLink(country, 'catalogo')" class="rr-menu__nav-link">{{ pageContent.textObj['catalogo'] }}</nuxt-link>
                    <nuxt-link  :to="getCountryLink(country, 'blog')" class="rr-menu__nav-link">{{ pageContent.textObj['blog'] }}</nuxt-link>
                    <nuxt-link  :to="getCountryLink(country, 'premium')" class="rr-menu__nav-link">{{ pageContent.textObj['premium'] }}</nuxt-link>
                </nav>
                <div class="rr-menu-header not-desktop">
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
import { getCountryLink } from '~/utils/useCountryLinks'
const { data: countryData } = await useFetch('/api/country')
const country = countryData.value?.country

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
            :deep(img) {
                max-width: 115px;
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
            @media (max-width: 36em) {
                right: 24px;
                width: 170px;
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
                width: 170px;
                flex-direction: column-reverse;
                gap: 24px;
                background: hsla(216, 34%, 23%, 1);
                z-index: 99;
                justify-content: space-between;
                padding: 15px 20px 40px;
                border-radius: 0 0 8px 0;
                transform: translateX(-120%);
                transition: 0.3s ease-out transform;
            }
        }

        .rr-menu__nav {
            display: flex;
            align-items: center;
            gap: 28px;
            position: relative;
            @media (max-width: 36em) {
                flex-direction: column;
                gap: 24px;
            }
        }

            .rr-menu__nav--small {
                gap: 14px;
                @media (max-width: 36em) {
                    padding-top: 30px;
                }
            }

            .rr-menu__nav-link {
                font-size: 1em;
                text-decoration: none;
                font-weight: 600;
                font-family: var(--display-font);
                @media (max-width: 36em) {
                    font-size: 1.125em;
                    color: var(--white-color);
                    font-weight: 500;
                    text-align: left;
                    width: 100%;
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