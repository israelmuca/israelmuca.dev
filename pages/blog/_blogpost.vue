<template>
  <div>
    <Header>
      <h1 class="title">{{ post.title }}</h1>
      <h2 class="subtitle">{{ post.summary }}</h2>
    </Header>
    <div class="container">
      <nuxtdown-body class="body" :body="post.body"/>
    </div>
  </div>
</template>

<script>
import Header from "~~/components/header.vue";

export default {
  components: {
    Header
  },
  head: function() {
    return {
      title: `${this.post.title}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.post.description
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.post.keywords
        }
      ]
    };
  },
  asyncData: async ({ app, route, payload }) => {
    return {
      post: (await app.$content("/blog").get(route.path)) || payload
    };
  }
};
</script>

<style scoped>
.title {
	color: #FFFFFF;
	font-family: "Eczar";
  font-weight: 500;
	font-size: 48px;
	line-height: 64px;
}

.subtitle {
	color: #FFFFFF;
	font-family: "Work Sans";
	font-size: 21px;
	letter-spacing: -0.88px;
	line-height: 35px;
}
</style>
