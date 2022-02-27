import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  head: {
    titleTemplate: 'Security News Dashboard',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: 'Security News Dashboard', name: 'Security News Dashboard', content: 'Meta description' }
    ]
  }, 
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
