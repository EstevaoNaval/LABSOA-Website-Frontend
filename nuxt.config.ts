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
    '@pinia/nuxt'
  ],
  srcDir: './',
  plugins: [
    '~/plugins/axios.js',
    { src: '~/plugins/aos.client.js', mode: 'client' },
    '~/plugins/close-details.js',
    '~/plugins/collapse-animation.js'
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  css: [
    '~/assets/css/collapse-animation.css'
  ]
})
