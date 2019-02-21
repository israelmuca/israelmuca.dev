<template>
  <article class="media">
    <figure class="media-left">
      <figure class="image">
        <img src="https://bulma.io/images/placeholders/640x480.png">
      </figure>
    </figure>

    <div class="media-content">
      <div class="content">
        <p class="art-tag">ARTICLE</p>
        <br>
        <p class="art-title">Title of the article</p>
        <br>
        <p class="art-extract">"Article extract... Do irure esse ullamco fugiat ad esse laborum excepteur. Veniam ex amet sunt officia culpa eiusmod reprehenderit labore sint. Nostrud cupidatat est nulla qui est occaecat cillum id adipisicing..."</p>
        <a class="button is-black is-medium">
          <span class="button-text">Read More</span>
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>

article {
  border-top-width: 0px !important;
}

.media-left {
  max-width: 50%;
}

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

.button-text {
  height: 16px;
  width: 106px;
  color: #ffffff;
  font-family: "Work Sans";
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2.47px;
  line-height: 16px;
}
</style>
