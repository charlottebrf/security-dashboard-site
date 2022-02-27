import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    "app": {
        "basePath": "/",
        "assetsPath": "/_nuxt/",
        "cdnURL": null,
        "dev": process.env.NODE_ENV !== 'production'
      },
      env: {
        dev: true
      },
      vue: {
        config: {
          productionTip: false,
          devtools: true
        }
      },
      router: {
        base: '/',
        extendRoutes(routes, resolve) {
          routes.push({
            path: '/devTo',
            component: resolve(__dirname, 'pages/devTo.vue')
          })
        }
      }
})
