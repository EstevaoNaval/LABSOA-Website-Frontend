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
    '@nuxt/image'
  ],

  srcDir: './',

  plugins: [
    '~/plugins/axios.js',
    { src: '~/plugins/aos.client.js', ssr: false },
    { src: '~/plugins/toast.client.js', ssr: false },
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
      apiHost: process.env.API_URL_HOST,
      docsAPIEndpoint: process.env.DOCS_API_ENDPOINT,
      loginAPIEndpoint: process.env.LOGIN_API_ENDPOINT,
      logoutAPIEndpoint: process.env.LOGOUT_API_ENDPOINT,
      userAPIEndpoint: process.env.USER_API_ENDPOINT
    }
  },

  image: {
    // Options
  },

  compatibilityDate: '2024-11-17'
})