// Global configuration for Nuxt.js

module.exports = {
  modules: [
    "nuxtdown",
    ['nuxt-fontawesome', {
      component: 'fab',
      imports: [
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faGithub', 'faTwitter', 'faLinkedin']
        },
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        }
      ]
    }],
    ['@nuxtjs/google-analytics', {
      id: 'UA-135521790-1'
    }]
  ],
  env: {
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000'
  },
  /*
  ** Headers for EVERY page
  */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Eczar:400,500|Work+Sans:400,500" }
    ],
  },
  /*
  ** Global CSS framework
  */
  css: [
    { src: 'bulma/css/bulma.css', lang: 'css' },
    '@fortawesome/fontawesome-svg-core/styles.css',
    'prismjs/themes/prism-okaidia.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#FFBB43" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
}