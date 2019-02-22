<template>
  <div>
    <Header>
      <h1 class="title">{{ post.title }}</h1>
      <h2 class="subtitle">{{ post.summary }}</h2>
    </Header>
    <div class="container small-body">
      <p class="description-tag">DESCRIPTION</p>
      <p class="description-text">{{post.description}}</p>
      <hr>
      <nuxtdown-body class="body" :body="post.body"/>
    </div>
  </div>
</template>

<script>
import Header from "~~/components/header.vue";
import Prism from "prismjs";

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

<style>
.title {
  color: #ffffff;
  font-family: "Eczar";
  font-weight: 500;
  font-size: 48px;
  line-height: 64px;
}

.subtitle {
  color: #ffffff;
  font-family: "Work Sans";
  font-size: 21px;
  letter-spacing: -0.88px;
  line-height: 35px;
}

.small-body {
  max-width: 60%;
}

.description-tag {
  margin-top: 60px;
  color: #ff445b;
  font-family: "Work Sans";
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2.47px;
  line-height: 16px;
  margin-bottom: 20px;
}

hr {
  border: 1px solid #E2E5ED;
  margin-top: 50px;
  margin-bottom: 50px;
}

.number {
  display: inline;
  padding: inherit;
  font-size: inherit;
  line-height: inherit;
  text-align: inherit;
  vertical-align: inherit;
  border-radius: inherit;
  font-weight: inherit;
  white-space: inherit;
  background: inherit;
  margin: inherit;
}

a {
  color: #ff445b;
}
a:hover {
  color: #ff445b;
  text-decoration: underline;
}

p {
  color: #000000;
  font-family: "Work Sans";
  font-size: 21px;
  letter-spacing: -0.88px;
  line-height: 37px;
  margin-bottom: 10px;
}

h2 {
  color: #000000;
  font-family: "Eczar";
  font-weight: 500;
  font-size: 28px;
  line-height: 64px;
}

h3 {
  color: #000000;
  font-family: "Work Sans";
  font-weight: 600;
  font-size: 21px;
  line-height: 64px;
}

ul {
  list-style-type: disc;
  list-style-position: inside;
  margin-left: 15px;
  margin-bottom: 10px;
}


/* .body p {
  color: #000000;
  font-family: "Work Sans";
  font-size: 21px;
  letter-spacing: -0.88px;
  line-height: 37px;
}

div h2 {
  color: #000000;
  font-family: "Work Sans";
  font-size: 28px;
} */
</style>
