import Prism from 'prismjs'
import externalLinks from 'markdown-it-link-attributes'

module.exports = {
  api: function(isStatic) {
    const baseURL = "http://localhost:3000";
    const browserBaseURL = !isStatic ? "" : process.env.BASE_URL;

    return {
      baseURL,
      browserBaseURL
    };
  },
  content: [
    [ "blog",
      {
        page: "/blog/_blogpost",
        permalink: "blog/:slug",
        //data: TODO:
        isPost: true
      }
    ]
  ],
  parsers: {
    md: {
      extend(config) {
        config.highlight = (code, lang) => {
          return `<pre class="language-${lang}"><code class="language-${lang}">${Prism.highlight(code, Prism.languages[lang] || Prism.languages.markup)}</code></pre>`
        }
      },
      plugins: [
        [ externalLinks, { target: '_blank', rel: 'noopener' } ]
      ]
    }
  }
};