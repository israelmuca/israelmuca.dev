module.exports = {
  modules: [
    "nuxtdown",
    ['nuxt-fontawesome', {
      component: 'fab',
      imports: [
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faGithub', 'faTwitter']
        }
      ]
    }]
  ],
  env: {
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000'
  },
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: "IsraelMuCa",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Landing page with blog for IsraelMuCa"
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "Full Stack full-stack node.js nodejs vue nuxt landing blog javascript jamstack"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Global CSS framework
  */
  css: [
    // { src: 'bulma/bulma.sass', lang: 'sass' }
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
};
