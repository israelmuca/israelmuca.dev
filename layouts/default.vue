<template>
  <div>
    <nav class="level">
      <p class="level-item has-text-centered">
        <a href="#" aria-label="Blog" class="link is-info">Blog</a>
      </p>
      <p class="level-item has-text-centered">
        <a href="/" aria-label="Home"><img src="~/static/images/logo.png" alt="home"></a>
      </p>
      <p class="level-item has-text-centered">
        <a href="#" aria-label="CV" class="link is-info">CV</a>
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

<style lang="css" scoped>

img {
  height: 4rem;
}

nav {
  margin-top: 2rem;
}

a { 
  font-size: 1.5rem;
  color: black;
  text-decoration: none;
}

</style>
