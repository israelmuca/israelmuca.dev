<template>
  <div>
    <Header>
      <h1
        class="title"
      >Hello! I'm Israel Muñoz, a Full Stack Web Developer. I'm currently working in expanding access to computer science in mexican schools.</h1>
    </Header>
    <div class="container" id="blog">
      <div class="columns">
        <div class="column title-column">
          <span class="blog-title">Latest articles</span>
        </div>
      </div>
      <ArticleCard v-for="post in posts" :key="post.id" :articleInfo="post"></ArticleCard>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "~~/components/header.vue";
import ArticleCard from "~~/components/articleCard.vue";
import Footer from "~~/components/footer.vue";

export default {
  components: {
    Header,
    ArticleCard,
    Footer
  },
  // The head function generates all the metadata for the HTML's head
  head() {
    return {
      title: "Israel Muñoz",
      meta: [
        // SEO meta
        {
          hid: "description",
          name: "description",
          content: "A blog about Web Development, entrepeneurship, and education."
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Full Stack full-stack node.js nodejs express vue nuxt landing blog javascript jamstack"
        },
        // Facebook's Open Graph Markup
        {
          hid: "og:url",
          property: "og:url",
          content: "https://israelmuca.dev"
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website"
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Hello! I'm Israel Muñoz, a Full Stack Web Developer. I'm currently working in expanding access to computer science in mexican schools."
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "A blog about Web Development, entrepeneurship, and education."
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://avatars3.githubusercontent.com/u/15834664?s=400&u=428efa70328b335936bcfc500272a48234e803c6&v=4"
        },
        // Twitter's Card Markup
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Hello! I'm Israel Muñoz, a Full Stack Web Developer. I'm currently working in expanding access to computer science in mexican schools."
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "A blog about Web Development, entrepeneurship, and education."
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "https://avatars3.githubusercontent.com/u/15834664?s=400&u=428efa70328b335936bcfc500272a48234e803c6&v=4"
        }
      ]
    };
  },
  // Nuxt method that uses the Nuxtdown content-api to get all the posts with only certain fields that I need for the ArticleCard.vue.
  asyncData: async ({ app }) => {
    return {
      posts: await app
        .$content("/blog")
        .query({ exclude: ["description", "keywords", "date", "body"] })
        .getAll()
    };
  }
};
</script>


<style scoped>
h1 {
  color: #ffffff;
  font-family: "Eczar";
  font-weight: 500;
  font-size: 48px;
  line-height: 64px;
}

.container {
  margin-top: 35px;
}

.title-column {
  margin-bottom: 25px;
}

.blog-title {
  color: #000000;
  font-family: "Work Sans";
  font-size: 28px;
  letter-spacing: -0.88px;
  line-height: 32px;
  margin-bottom: 25px;
}

@media screen and (max-width: 1087px) {
  h1 {
    font-size: 36px;
    line-height: 46px;
  }

  .title-column {
  margin-left: 20px;
}
}
</style>
