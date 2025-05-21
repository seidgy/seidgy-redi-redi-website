<template>
    <footer class="footer">
        <div class="center">
            <div class="footer__header">
                <div class="footer__identity">
                    <nuxt-link target="_blank" to="https://rediredi.com/">
                        <img src="/images/redi-redi-negative.svg" alt="RediRedi">
                    </nuxt-link>
                    <rr-store-buttons></rr-store-buttons>
                </div>
                <rr-socials></rr-socials>
            </div>
            <div class="footer__links">
                <nav class="footer__nav">
                    <nuxt-link target="_blank" to="https://rediredi.com/br/sobre-br/" class="footer__link">{{ pageContent.textObj['sobre'] }}</nuxt-link>
                    <nuxt-link target="_blank" to="https://rediredi.com/br/catalogo-online/" class="footer__link">{{ pageContent.textObj['catalogo'] }}</nuxt-link>
                    <nuxt-link target="_blank" to="https://rediredi.com/br/blog-br/" class="footer__link">{{ pageContent.textObj['blog'] }}</nuxt-link>
                    <nuxt-link target="_blank" to="https://rediredi.com/br/premium-br/" class="footer__link">{{ pageContent.textObj['premium'] }}</nuxt-link>
                    <nuxt-link target="_blank" to="https://help.rediredi.com/" class="footer__link">{{ pageContent.textObj['central de ajuda'] }}</nuxt-link>
                    <nuxt-link target="_blank" to="https://rediredi.com/br/politica-de-privacidade/" class="footer__link">{{ pageContent.textObj['politica de privacidade'] }}</nuxt-link>
                    <nuxt-link target="_blank" to="https://rediredi.com/br/termos-e-condicoes/" class="footer__link">{{ pageContent.textObj['termos e condicoes'] }}</nuxt-link>
                </nav>
                <div class="flex flex--22">
                    <span class="footer__separator"></span>
                    <p class="footer__rights">{{ pageContent.textObj['footer rights'] }}</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
const { locale } = useI18n()
const pageContent = await queryContent(locale.value !== 'pt' ? `paginas-fixas/${locale.value}` : 'paginas-fixas', 'homepage').findOne();
</script>   


<style scoped lang="scss">
    footer {
        margin-top: -1px;
        padding-bottom: 60px;
        background-color: #2577B1;
        & > .center {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }
    }

        .footer__header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            @media (max-width: 36em) {
                flex-direction: column;
                gap: 24px;
            }
        }

            .footer__identity {
                display: flex;
                align-items: center;
                gap: 35px;
                @media (max-width: 36em) {
                    justify-content: space-between;
                    width: 100%;
                }
            }

            .footer__links {
                display: flex;
                align-items: center;
                justify-content: space-between;
                @media (max-width: 36em) {
                    flex-direction: column;
                    gap: 24px;
                }
            }

            .footer__separator {
                height: 24px;
                width: 1px;
                background-color: var(--white-color);
                @media (max-width: 36em) {
                    display: none;
                }
            }

            .footer__rights {
                color: var(--white-color);
            }

            .footer__nav {
                display: flex;
                align-items: center;
                gap: 16px;
                @media (max-width: 36em) {
                    flex-direction: column;
                }
            }

            .footer__link {
                color: hsla(var(--white-hsl), 0.6);
                font-size: 0.875em;
                transition: all 0.2s ease-in-out;
                &:hover {
                    color: var(--white-color);
                }
            }


    </style>