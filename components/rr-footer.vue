<template>
    <footer class="footer">
        <div class="center">
            <div class="footer__header">
                <div class="footer__identity">
                    <nuxt-link :to="$localePath('/')">
                        <img src="/images/redi-redi-negative.svg" alt="RediRedi">
                    </nuxt-link>
                    <rr-store-buttons></rr-store-buttons>
                </div>
                <rr-socials></rr-socials>
            </div>
            <div class="footer__links">
                <nav class="footer__nav">
                    <nuxt-link to="" class="footer__link">Funcionalidades</nuxt-link>
                    <nuxt-link to="" class="footer__link">Marketplace</nuxt-link>
                    <nuxt-link to="" class="footer__link">Preço</nuxt-link>
                    <nuxt-link to="" class="footer__link">Sobre nós</nuxt-link>
                    <nuxt-link to="" class="footer__link">Contato</nuxt-link>
                    <nuxt-link to="" class="footer__link">Política de privacidade</nuxt-link>
                    <nuxt-link to="" class="footer__link">Termos e condições de uso</nuxt-link>
                </nav>
                <span class="footer__separator"></span>
                <p class="footer__rights">© 2025 RediRedi. Todos os Direitos Reservados</p>
            </div>
        </div>
    </footer>
</template>

<script setup>

</script>   


<style scoped lang="scss">
    footer {
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
        }

            .footer__identity {
                display: flex;
                align-items: center;
                gap: 35px;
            }

            .footer__links {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .footer__separator {
                height: 24px;
                width: 1px;
                background-color: var(--white-color);
            }

            .footer__rights {
                color: var(--white-color);
            }

            .footer__nav {
                display: flex;
                align-items: center;
                gap: 16px;
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