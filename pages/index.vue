<template>
  <header></header>
</template>

<script>
const Header = () => import("~/components/header");

export default {
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


<style lang="css" scoped>
</style>
