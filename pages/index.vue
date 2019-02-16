<template>
<div>
  <div class="columns is-mobile is-centered">
    <div class="column is-half">
      <p>Proident qui aute nisi officia eiusmod proident duis. Sit nulla id excepteur consequat ut cupidatat do officia. Lorem ex cupidatat sint ipsum quis ex exercitation.</p>
      <br>
      <p>Exercitation eu aliquip nulla elit laborum deserunt laboris nisi in ex reprehenderit. Ipsum esse laboris culpa sint ullamco enim magna sunt ut tempor voluptate elit dolor pariatur. Consectetur sint ipsum qui aliquip enim. Occaecat eu anim non pariatur ea excepteur nisi deserunt in ea. Nostrud mollit culpa dolor elit enim nostrud consequat voluptate adipisicing quis eu laborum veniam id.</p>
    </div>
  </div>


  <div class="columns"></div>
  <div class="columns"></div>
  <div class="columns"></div>

  <nav class="level">
    <p class="level-item">
      <a href="https://www.github.com/IsraelMuCa" target="_blank" rel="noopener noreferrer"><fab :icon="fab.faGithub" /></a>
    </p>
    <p class="level-item">
      <a href="https://www.twitter.com/IsraelMuCa" target="_blank" rel="noopener noreferrer"><fab :icon="fab.faTwitter" /></a>
    </p>
  </nav>
</div>
</template>

<script>
import { fab } from '@fortawesome/free-brands-svg-icons'

export default {
  computed: {
    fab () {
      return fab
    }
  }
  
}
</script>


<style lang="sass" scoped>
@import "bulma/sass/utilities/initial-variables.sass"
@import "bulma/sass/utilities/derived-variables.sass"
@import "bulma/sass/utilities/mixins.sass"
@import "bulma/sass/components/level.sass"
@import "bulma/sass/utilities/_all.sass"
@import "bulma/sass/grid/columns.sass"

.columns
  margin-top: 4rem

a
  font-size: 2rem
  color: black
  text-decoration: none
</style>
