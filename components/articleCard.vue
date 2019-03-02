<template>
  <article class="media">
    <div class="container article-card">
      <div class="columns">
        <div class="column image" :style="backgroundImage"></div>
        <div class="column separator"></div>
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
    // image will always return the correct URL for the thumbnail, both for development and once deployed
    image: function() {
      return `${process.env.BASE_URL}${this.articleInfo.thumbnail}`;
    },
    // returns an inline style with the image to be used from the props
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

.article-card {
  margin-top: 35px;
  margin-bottom: 35px;
}

.image {
  background-position: center;
  background-size: cover;
  min-height: 200px;
}

.separator {
  max-width: 20px;
}

.art-tag {
  color: #ff445b;
  font-family: "Work Sans";
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2.47px;
  line-height: 16px;
  margin-top: 0px;
  margin-bottom: 0 !important;
  text-transform: capitalize;
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
  line-height: 32px;
  margin-bottom: 25px;
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
  text-transform: uppercase;
}

@media screen and (min-width: 10px) and (max-width: 1088px) {
  .container {
    max-width: 90%;
  }
  .separator {
    display: none;
  }
}

@media screen and (min-width: 1089px) and (max-width: 1280px) {
  .container {
    max-width: 80%;
  }
}
</style>
