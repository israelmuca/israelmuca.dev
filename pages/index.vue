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
  head() {
    return {
      title: "Israel Muñoz",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "A blog about Web Development"
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Full Stack full-stack node.js nodejs express vue nuxt landing blog javascript jamstack"
        }
      ]
    };
  },
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
  padding-top: 35px;
}
.container:last-child {
  padding-bottom: 77px;
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
