<template>
    <article>
        <div class="lp-hero">
            <div class="center" size="wide">
                <div class="lp-hero__nav">
                    <div class="lp-hero__logos">
                        <nuxt-link v-for="logo in pageData.logos"
                            target="_blank"
                            :to="logo.url"
                            class="lp-hero__logo"
                            >
                            <img :src="logo.imagem" :alt="logo.alt" />
                        </nuxt-link>
                    </div>
                        <nuxt-link target="_blank" 
                            :to="pageData.button_url?pageData.button_url:getCountryLink(country, 'registro')" 
                            class="button button--small" color="primary" visuals="primary"
                        >
                            {{ pageData.button_label }}
                        </nuxt-link>
                </div>
                <div class="lp-hero__content">
                    <div class="lp-hero__info">
                        <div class="lp-hero__text prose-content">
                            <div v-html="pageData.conteudo"></div>
                        </div>
                        <rr-trial-button :label="pageData.conteudo_button_label"></rr-trial-button>
                        <div class="lp-hero__icons">
                            <rr-icone v-for="icone in pageData.icones" :icone="icone"></rr-icone>
                        </div>
                    </div>
                    <img :src="pageData.imagem_hero" :alt="pageData.title" class="lp-hero__image" />   
                </div> 
            </div>
        </div>
        <rr-cta>
            <p class="text--2xl text--sb text--white align-center" v-if="pageData.cta">{{ pageData.cta }}</p>
        </rr-cta>
        <rr-section v-for="secao in pageData.secoes" :content="secao"></rr-section>
        <footer class="footer">
            <div class="center" size="wide">
                <div class="footer__header">
                    <div class="lp-hero__logos">
                        <nuxt-link v-for="logo in pageData.logos"
                            target="_blank"
                            :to="logo.url"
                            class="lp-hero__logo"
                            >
                            <img :src="logo.negativa" :alt="logo.alt" />
                        </nuxt-link>
                    </div>
                    <rr-socials :content="pageContent"></rr-socials>
                </div>
                <div class="footer__header">
                    <nav class="footer__nav">
                        <nuxt-link target="_blank" :to="getCountryLink(country, 'sobre')" class="footer__link">{{ pageContent.textObj['sobre'] }}</nuxt-link>
                        <nuxt-link target="_blank" :to="getCountryLink(country, 'catalogo')" class="footer__link">{{ pageContent.textObj['catalogo'] }}</nuxt-link>
                        <nuxt-link target="_blank" :to="getCountryLink(country, 'blog')" class="footer__link">{{ pageContent.textObj['blog'] }}</nuxt-link>
                        <nuxt-link target="_blank" :to="getCountryLink(country, 'premium')" class="footer__link">{{ pageContent.textObj['premium'] }}</nuxt-link>
                        <nuxt-link target="_blank" :to="getCountryLink(country, 'ajuda')" class="footer__link">{{ pageContent.textObj['central de ajuda'] }}</nuxt-link>
                        <nuxt-link target="_blank" :to="getCountryLink(country, 'politica')" class="footer__link">{{ pageContent.textObj['politica de privacidade'] }}</nuxt-link>
                        <nuxt-link target="_blank" :to="getCountryLink(country, 'termos')" class="footer__link">{{ pageContent.textObj['termos e condicoes'] }}</nuxt-link>
                    </nav>
                    <p class="text--white">© 2025 RediRedi. Todos os Direitos Reservados</p>
                </div>
                <p class="footer__cta">* Lojas que usam a RediRedi e seguem nossas recomendações inteligentes aumentam, em média, 20% o número de pedidos.</p>
            </div>
        </footer>
    </article>
</template>
<script setup>
import { reactive } from "vue";
const route = useRoute()
const requestURL = useRequestURL()
const { data: countryData } = await useFetch('/api/country')
const country = countryData.value?.country

const pageData = await queryContent('lps').where({
    slug: route.params.slug
}).findOne();
const pageContent = await queryContent('paginas-fixas', 'homepage').findOne();


const seoTitle = pageData.title
const seoDescription = pageData.description
const seoImage = pageData.imagem_OG?pageData.imagem_OG:'/OG.jpg'
useHead({
    title: seoTitle,
    meta: [
      { property: 'og:title',  content: seoTitle},
      { name: "description", content: seoDescription  },
      { property: 'og:description',  content: seoDescription},
      { name: 'twitter:description', content: seoDescription },
      { property: 'og:site_name',  content: seoTitle},
      { property: 'og:image',  content: seoImage},
      { property: 'og:image:alt',  content: seoTitle},
      { name: 'twitter:image',  content: seoImage},
      { name: 'twitter:image:alt',  content: seoTitle},
    ]
})

</script>
<style lang="scss" scoped>
article {
    background: #2577B1;
}
.lp-hero {
    background-image: url('/images/hero-bg.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    padding-block: 21px 0;
    & > .center {
        display: flex;
        flex-direction: column;
        gap: 74px;
    }
}

    .lp-hero__nav {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 24px;
    }

        .lp-hero__logos {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
        }

        .lp-hero__logo {
            img{
                max-height: 36px;
            }
            &:not(:last-child) {
                padding-right: 34px;
                border-right: 1px solid #5A8986;
            }
            &:not(:first-child) {
                padding-left: 34px;
            }
        }

    .lp-hero__content {
        display: grid;
        grid-template-columns: auto 47%;
        gap: 47px;
    }

    .lp-hero__info {
        display: flex;
        flex-direction: column;
        gap: 66px;
        align-items: flex-start;
        padding-top: 30px;
    }

    .lp-hero__icons {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        gap: 70px;
    }

    :deep(.rr-cta) {
        transform: translateY(-100%);
    }

    .footer {
        background-color: #2577B1;
        padding-block: 38px 32px;
        .lp-hero__logo {
            img{
                max-height: 34px;
            }
            &:not(:last-child) {
                border-color: #FFF;
            }
        }
    }

        .footer__header {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 24px;
        }

            .footer__header + .footer__header {
                border-bottom: 1px solid var(--white-color);
            }

        .footer__nav {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            gap: 16px;
        }

        .footer__link {
            font-size: 0.875em;
            opacity: 0.7;
            color: var(--white-color);
            text-decoration: none;
        }

        .footer__cta {
            padding-top: 24px;
            text-align: center;
            color: var(--white-color);
        }
</style>