<template>
  <!-- Navbar -->
  <section class="hero is-medium" id="header">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <nuxt-link to="/" class="navbar-item">
              <span class="israel-munoz">ISRAEL MUÑOZ</span>
            </nuxt-link>
            <span class="navbar-burger burger" data-target="navbarMenuHero">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHero" class="navbar-menu">
            <div class="navbar-end">
              <a href="#" class="navbar-item">
                <span class="header-link">BLOG</span>
              </a>
              <a href="#" class="navbar-item">
                <span class="header-link">ABOUT</span>
              </a>
              <a :href="contactAnchor" class="navbar-item">
                <span class="header-link">CONTACT</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <!-- Body -->
    <div class="hero-body">
      <div class="container has-text-left">
        <slot></slot>
      </div>
    </div>

    <!-- Icons -->
    <div class="hero-foot">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a
              class="navbar-item"
              href="https://www.github.com/IsraelMuCa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <fab class="brand-icon" :icon="fab.faGithub"/>
            </a>
            <a
              class="navbar-item"
              href="https://www.linkedin.com/in/israel-mu%C3%B1oz-1a9265161/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
            >
              <fab class="brand-icon" :icon="fab.faLinkedin"/>
            </a>
            <a
              class="navbar-item"
              href="https://www.twitter.com/IsraelMuCa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <fab class="brand-icon" :icon="fab.faTwitter"/>
            </a>
          </div>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
import { fab } from "@fortawesome/free-brands-svg-icons";

export default {
  computed: {
    fab() {
      return fab;
    },
    contactAnchor() {
      return `${this.$route.path}#contact`;
    }
  }
};
</script>

<style scoped>
.hero {
  background-color: black;
}

.navbar {
  padding-top: 50px;
}

.israel-munoz {
  color: #ff445b;
  font-family: "Work Sans";
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 2.57px;
  line-height: 21px;
}

.navbar-item:hover {
  background-color: transparent;
  color: #3273dc;
}

.header-link {
  height: 16px;
  width: 67px;
  color: #ffffff;
  font-family: "Work Sans";
  font-size: 14px;
  line-height: 16px;
}

.header-link:hover {
  color: #ff445b;
}

.hero-foot {
  padding-bottom: 50px;
}

.brand-icon {
  height: 2em;
  width: 2em;
}
</style>

