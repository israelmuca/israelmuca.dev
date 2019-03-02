// Global configuration for Nuxtdown

import Prism from 'prismjs'

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
        isPost: true
      }
    ]
  ],
  parsers: {
    md: {
      // Configuration to use Prism.js processor (https://prismjs.com/)
      extend(config) {
        config.highlight = (code, lang) => {
          return `<pre class="language-${lang}"><code class="language-${lang}">${Prism.highlight(code, Prism.languages[lang] || Prism.languages.markup)}</code></pre>`
        }
      }
    }
  }
};