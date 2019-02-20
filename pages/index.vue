<template>
  <Header>
    <h1 class="title">Hello! I'm Israel Muñoz, a Full Stack Web Developer. I'm currently working in expanding access to computer science in mexican schools.</h1>
  </Header>
</template>

<script>
import Header from '~~/components/header.vue'

export default {
  components: {
    Header
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
	color: #FFFFFF;
  font-family: "Eczar";
  font-weight: 500;
	font-size: 48px;
	line-height: 64px;
}
</style>
