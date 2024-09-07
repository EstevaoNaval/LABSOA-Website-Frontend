// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  target: 'server',

  generate: {
    routes: [
      '/about',
      '/pdf2chemicals/about',
      '/pdf2chemicals/features'
    ]
  },

  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],

  srcDir: './',

  plugins: [
    '~/plugins/axios.js',
    { src: '~/plugins/aos.client.js', mode: 'client' },
    '~/plugins/close-details.js',
    '~/plugins/collapse-animation.js',
    '~/plugins/default-theme.js'
  ],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  css: [
    '~/assets/css/collapse-animation.css'
  ],

  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL_HOST,
      apiDocsUrl: process.env.API_DOCS_URL
    }
  },

  compatibilityDate: '2024-08-27',
})