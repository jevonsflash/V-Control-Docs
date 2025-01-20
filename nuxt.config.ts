// https://nuxt.com/docs/api/configuration/nuxt-config
import pkg from './package.json'
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    /*
    ** Headers of the page
    */
    head: {
      title: pkg.name,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: pkg.description },
        { name: 'theme-color', content: '#4B08B6' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: '/icon.png' }

      ]
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in' // 默认值
    },
    // layoutTransition: {
    //   name: 'page',
    //   mode: 'out-in' // 默认值
    // }
  },
  css: ['/assets/style/index.scss', 'element-plus/dist/index.css'],

  modules: ['@element-plus/nuxt', "@nuxt/content", "@pinia/nuxt", '@nuxtjs/mdc'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "/assets/style/element/index.scss" as element;`,
        },
      },
    },
  },
  content: {
    toc: {
      depth: 2,
      searchDepth: 2
    },
    highlight: {
      langs: [
        'csharp',
        'xml'
      ],
      theme: {
        default: "one-dark-pro",
        dark: "github-dark",
      },
    },
    markdown: {

      anchorLinks: { depth: 3 },
    },
    contentHead: false
  },
  mdc: {
    highlight: {
      langs: [
        'csharp',
        'xml'
      ]
    }
  },
  elementPlus: {
    themes: ['dark'],
    importStyle: 'scss',
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],



})
