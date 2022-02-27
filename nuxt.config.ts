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
        routes: [
          {
            name: 'index',
            path: '/',
            component: 'pages/index.vue'
          },
          {
            name: 'devTo',
            path: '/devTo',
            component: 'pages/devTo.vue'
          },
          {
            name: 'snykVulns',
            path: '/snykVulns',
            component: 'pages/snykVulns.vue'
          },
        ]
  }
})
