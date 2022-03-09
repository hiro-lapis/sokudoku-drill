import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  bridge: {
    nitro: process.env.NODE_ENV !== 'production',
  },
  target: 'static',
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'coding-typing',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // FontAwesome(CDN)
      // { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.2/css/all.css' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/reset',
    '~/assets/scss/foundation/_base',
    '~/assets/scss/foundation/_breakpoints',
    '~/assets/scss/layout/_wrapper',
    '~/assets/scss/layout/_page',
    '~/assets/scss/layout/_nuxt_common',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/common.ts'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    // '@nuxt/typescript-build',
    // Simple usage
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome',
  ],
  // https://www.npmjs.com/package/@nuxtjs/fontawesome
  // https://fontawesome.com/icons
  fontawesome: {
    icons: {
      solid: ['faArrowRight', 'faDoorOpen', 'faSlidersH', 'faCubes', ],
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
})
