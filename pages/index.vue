<template>
  <div>
    <Header>
      <h1
        class="title"
      >Hello! I'm Israel Muñoz, a Full Stack Web Developer. I'm currently working in expanding access to computer science in mexican schools.</h1>
    </Header>
    <div class="container">
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
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Israel Muñoz's blog"
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
  padding-top: 77px;
}
.container:last-child {
  padding-bottom: 77px;
}

.is-active {
  background-color: black;
}

@media screen and (max-width: 1087px) {
  h1 {
    font-size: 36px;
    line-height: 46px;
  }
}
</style>
