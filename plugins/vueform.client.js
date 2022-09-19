import Vueform from '@vueform/vueform/plugin'
import vueformConfig from './../vueform.config'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(Vueform, vueformConfig)
})