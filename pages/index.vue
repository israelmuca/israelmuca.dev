<template>
  <div>
    <Header>
      <h1
        class="title"
      >Hello! I'm Israel Muñoz, a Full Stack Web Developer. I'm currently working in expanding access to computer science in mexican schools.</h1>
    </Header>
    <div class="container">
      <ArticleCard></ArticleCard>
      <ArticleCard></ArticleCard>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '~~/components/Header.vue'
import ArticleCard from '~~/components/ArticleCard.vue'
import Footer from '~~/components/Footer.vue'

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
          content: "Landing page with blog for IsraelMuCa"
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Full Stack full-stack node.js nodejs express vue nuxt landing blog javascript jamstack"
        }
      ]
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
</style>
