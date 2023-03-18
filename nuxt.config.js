const axios = require('axios');
export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  server: {
    port: process.env.PORT || 3333, // default: 3333
    host: '0.0.0.0' // default: localhost
  },
  analyze: {
    analyzerMode: 'static'
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ESS',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Online Doctors'
      },
      {
        name: 'keywords',
        content: '検索キーワード,キーワード,キーワード'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Noto+Sans+JP:wght@300;400;500;700;900&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css'
      }
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.6.3.js'
      } ,
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js'
      } ,
      {
        src: "https://code.jquery.com/ui/1.12.1/jquery-ui.js",
      }
    ]
  },

  loading: {
    color: '#FFB701',
    throttle: 30
  },

  serverMiddleware: [{
    path: '/server-middleware',
    handler: '~/server-middleware/rest.js'
  }],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/app.scss',
    '~/node_modules/bootstrap/dist/css/bootstrap.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/plugins/fragment.js',
    {
      src: '~/plugins/vue-toast.js',
      mode: 'client'
    },
    '~/plugins/inject.js',
    '~/plugins/axios.js',
    '~/plugins/api.js',
    '~/plugins/vue-select.js',
    '~/plugins/nuxt-server-init.js',
    '~/plugins/element-ui.js',
    '~/plugins/component.js',
    '~/plugins/vee-validate.js',
    '~/plugins/date-format.js',
    '~/plugins/jquery.js',
    { src: '~/plugins/vue-datepicker', ssr: false },
    { src: "~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    ['@nuxtjs/moment', {
      defaultLocale: 'vi',
      locales: ['vi']
    }],
    ['@nuxtjs/router', {
      fileName: 'routers/index.js'
    }],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'portal-vue/nuxt',
    '@nuxtjs/robots',
    ['cookie-universal-nuxt', {
      alias: 'cookiz'
    }],
    ['@nuxtjs/component-cache', {
      maxAge: 1000 * 60 * 60
    }],
  ],

  axios: {
    progress: false
  },

  robots: [{
    UserAgent: '*',
    Disallow: () => ['/admin?*']
  }],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      /@fullcalendar.*/, // transpile ESM modules within all fullcalendar packages,
      'vee-validate',
      'vue-agile'
    ],
    extractCSS: process.env.NODE_ENV === 'production',
    optimizeCSS: true,
    html: {
      minify: {
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        removeEmptyAttributes: true,
        removeEmptyElements: true,
        removeRedundantAttributes: true,
        removeComments: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeOptionalTags: true,
        removeTagWhitespace: true,
        processConditionalComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        decodeEntities: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
    },
    loaders: {
      vue: {
        compiler: require('vue-template-babel-compiler')
      }
    },
    extend (config, { isDev, isClient }) {
      config.node = {
        fs: 'empty'
      };
    },
    build: {
     /**
     * add external plugins
     */

     vendor: ["jquery"],
    }
  },
  publicRuntimeConfig: {
    apiEndpoint: process.env.API_HOST,
    facebookClientID: process.env.FACEBOOK_CLIENT_ID,
    // googleClientID: process.env.GOOGLE_CLIENT_ID
  }
}
