// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: [
    'assets/css/main.css',
  ],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['trix-editor'].indexOf(tag) !== -1
    }
  },
  vite: {
    optimizeDeps: {
      include: [
        'nouislider',
        'wnumb',
        'trix'
      ]
    }
  }
})
