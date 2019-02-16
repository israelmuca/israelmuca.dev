<template>
  <div>
    <nav class="level">
      <p class="level-item has-text-centered">
        <a href="#" class="link is-info">Blog</a>
      </p>
      <p class="level-item has-text-centered">
        <a href="/"><img src="~/static/images/logo.png" alt="home"></a>
      </p>
      <p class="level-item has-text-centered">
        <a href="#" class="link is-info">CV</a>
      </p>
    </nav>
    <!-- <nav>
      <ul>
        <li>
          <nuxt-link class="button--green" :to="'/page-1'">Page 1</nuxt-link>
        </li>
        <li>
          <nuxt-link class="button--grey" :to="'/page-2'">Page 2</nuxt-link>
        </li>
      </ul>
    </nav> -->
    <nuxt/>
  </div>
</template>

<style lang="sass" scoped>
@import "bulma/sass/utilities/initial-variables.sass"
@import "bulma/sass/utilities/derived-variables.sass"
@import "bulma/sass/utilities/mixins.sass"
@import "bulma/sass/components/level.sass"

img
  height: 4rem

nav
  margin-top: 2rem

a
  font-size: 1.5rem
  color: black
  text-decoration: none
</style>
