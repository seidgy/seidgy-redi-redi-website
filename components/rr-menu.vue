<template>
    <div class="center">
        <nav class="rr-menu">
            <nuxt-link target="_blank" to="https://rediredi.com/">
                <img src="/images/redi-redi.svg" alt="RediRedi">
            </nuxt-link>
            <div class="rr-menu__links">
                <nav class="rr-menu__nav">
                    <nuxt-link target="_blank" to="" class="rr-menu__nav-link">Funcionalidades</nuxt-link>
                    <nuxt-link target="_blank" to="https://rediredi.com/br/catalogo-online/" class="rr-menu__nav-link">Marketplaces</nuxt-link>
                    <nuxt-link target="_blank" to="https://rediredi.com/br/premium-br/" class="rr-menu__nav-link">Preço</nuxt-link>
                    <nuxt-link target="_blank" to="https://rediredi.com/br/sobre-br/" class="rr-menu__nav-link">Sobre nós</nuxt-link>
                    <nuxt-link target="_blank" to="" class="rr-menu__nav-link">Contato</nuxt-link>
                </nav>
                <span class="rr-menu__separator"></span>
                <nav class="rr-menu__nav rr-menu__nav--small">
                    <rr-trial-button size="sm"></rr-trial-button>
                </nav>
            </div>
        </nav>
    </div>
</template>
<script setup>
const { locale, locales } = useI18n()
const props = defineProps({
})
</script>
<style scoped lang="scss">

    .rr-menu {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-block: 24px;
        margin-bottom: 80px;
            @media (max-width: 36em) {
                display: none;
            }
    }

        .rr-menu__links {
            display: flex;
            gap: 36px;
        }

        .rr-menu__nav {
            display: flex;
            align-items: center;
            gap: 36px;
        }

            .rr-menu__nav-link {
                font-size: 1em;
                text-decoration: none;
                font-weight: 500;
            }

        .rr-menu__separator {
            width: 1px;
            background-color: var(--base-color);
        }
</style>