import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "path";
import locales from './locales'

const description = ''
const title = 'Redi Redi'
const OG = '/OG.jpg'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Redi Redi",
      meta: [
        { name: "description", content: description },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { property: 'og:site_name',  content: title},
        { property: 'og:title',  content: title},
        { property: 'og:description',  content: description},
        { property: 'og:image',  content: OG},
        { property: 'og:image:alt',  content: `Imagem de página para ${title}`},
        { name: 'twitter:image',  content: OG},
        { name: 'twitter:image:alt',  content: `Imagem de página para ${title}`},
        { name: 'twitter:description', content: description }
      ],
      script: [
      ],
      link: [
        { rel: 'icon', type: 'image/svg', href: '/favicon.svg' },
      ],
    }
  },

  css: [
    '/assets/css/theme.scss',
    '/assets/css/style.scss',
  ],

  components: {
    "dirs": [
      "~/components"
    ]
  },

  modules: ['@nuxt/content', '@nuxtjs/i18n', '@nuxtjs/google-fonts'],
  i18n: {
    lazy: true,
    locales,
    defaultLocale: 'pt-br'
  },
  googleFonts: {
    families: {
      Montserrat: [100, 200, 300, 400, 500, 600, 700, 900],
    }
  },
  generate: {
    routes: [
    ]
  },

  build: {
    terser: {
      compress: {
        drop_console: true, // Remove os console.logs na produção
      },
    },
    // Extração de CSS
    extractCSS: true,
  },

  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
    },
  },

  compatibilityDate: '2025-04-10',
});