<template>
  <!-- Navbar -->
  <section class="hero is-medium" id="header" :style="backgroundImage">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <nuxt-link to="/" class="navbar-item">
              <span class="israel-munoz">ISRAEL MUÑOZ</span>
            </nuxt-link>
            <span
              class="navbar-burger"
              @click="showNav = !showNav"
              :class="{ 'is-active': showNav }"
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div class="navbar-menu" :class="{ 'is-active': showNav }">
            <div class="navbar-end">
              <nuxt-link to="/#blog" class="navbar-item is-clearfix">
                <span class="header-link is-pulled-right">BLOG</span>
              </nuxt-link>
              <a href="#" class="navbar-item is-clearfix">
                <span class="header-link is-pulled-right">ABOUT</span>
              </a>
              <a href="#contact" class="navbar-item is-clearfix">
                <span class="header-link is-pulled-right">CONTACT</span>
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
  props: ["image"],
  data: function() {
    return {
      showNav: false
    };
  },
  computed: {
    fab() {
      return fab;
    },
    backgroundImage() {
      if (this.image) {
        return `background-image: linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)), url("${
          this.image
        }"); background-position: center;`;
      } else {
        return `background-color: black;`;
      }
    }
  }
};
</script>

<style scoped>
.navbar {
  padding-top: 50px;
}

.navbar-burger {
  color: white;
}
.navbar-burger:hover {
  background-color: transparent;
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

@media screen and (max-width: 1087px) {
  .navbar {
    padding-top: 25px;
  }

  .navbar-menu {
    box-shadow: none;
  }

  .is-active {
    background-color: rgba(0, 0, 0, 0) !important;
  }

  .hero-foot {
    padding-bottom: 25px;
  }

  .brand-icon {
    height: 1.5em;
    width: 1.5em;
  }
}
</style>

