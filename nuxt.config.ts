import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    "app": {
        "basePath": "/",
        "assetsPath": "/_nuxt/",
        "cdnURL": null
      },
      vue: {
        config: {
          productionTip: false,
          devtools: true
        }
      }
})
