<template>
  <article class="media">
    <div class="container">
      <div class="columns">
        <div class="column image" :style="backgroundImage"></div>
        <div class="column text">
          <p class="art-tag">{{ articleInfo.type }}</p>
          <br>
          <p class="art-title">{{ articleInfo.title }}</p>
          <br>
          <p class="art-extract">{{ articleInfo.summary }}</p>
          <nuxt-link :to="articleInfo.permalink" class="button is-black is-medium">
            <span class="button-text">Read More</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: ["articleInfo"],
  computed: {
    URL: function() {
      return `${process.env.BASE_URL}${this.articleInfo.permalink}`;
    },
    image: function() {
      return `${process.env.BASE_URL}${this.articleInfo.thumbnail}`;
    },
    backgroundImage: function() {
      return `background-image: url("${this.image}");`;
    }
  }
};
</script>


<style scoped>
article {
  border-top-width: 0px !important;
}

.container {
  max-width: 70%;
}

.image {
  background-position: center;
  background-size: cover;
}

/* .clip-path {
  /* clip-path: inset(10% 10% 10% 10%);
  width: 100%;
  height: auto;
} */

.art-tag {
  color: #ff445b;
  font-family: "Work Sans";
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2.47px;
  line-height: 16px;
  margin-top: 25px;
  margin-bottom: 0 !important;
}

.art-title {
  color: #000000;
  font-family: "Eczar";
  font-size: 36px;
  line-height: 36px;
  margin-bottom: 0 !important;
}

.art-extract {
  color: #000000;
  font-family: "Work Sans";
  font-size: 21px;
  letter-spacing: -0.88px;
  line-height: 30px;
  margin-top: -20px;
}

.button {
  border-radius: 0;
}

.button:hover {
  color: #ff445b;
}

.button-text {
  height: 16px;
  width: 106px;
  font-family: "Work Sans";
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2.47px;
  line-height: 16px;
}
</style>
