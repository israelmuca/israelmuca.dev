<template>
  <footer class="footer">
    <div class="container">
      <!-- First level -->
      <nav class="level is-mobile">
        <!-- Left side -->
        <div class="level-left">
          <div class="level-item">
            <span class="contact-me">Contact me</span>
          </div>
        </div>
        <!-- Right side -->
        <div class="level-right">
          <!-- Github -->
          <div class="level-item">
            <a
              href="https://www.github.com/IsraelMuCa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Githubs"
            >
              <span class="fab">
                <fab :icon="fab.faGithub"/>
              </span>
            </a>
          </div>
          <!-- Twitter -->
          <div class="level-item">
            <a
              href="https://www.twitter.com/IsraelMuCa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <fab :icon="fab.faTwitter"/>
            </a>
          </div>
        </div>
      </nav>

      <!-- Second Level -->
      <nav class="level is-mobile">
        <!-- Left side -->
        <div class="level-left">
          <div class="level-item">
            <span class="email">isra.munoz@gmail.com</span>
          </div>
        </div>
        <!-- Right side -->
        <div class="level-right">
          <a href="#" class="level-item">
            <span class="footer-link">BLOG</span>
          </a>
          <a href="#" class="level-item">
            <span class="footer-link">ABOUT</span>
          </a>
          <a href="#" class="level-item">
            <span class="footer-link">CONTACT</span>
          </a>
        </div>
      </nav>
    </div>
  </footer>
</template>

<script>
import { fab } from "@fortawesome/free-brands-svg-icons";

export default {
  computed: {
    fab() {
      return fab;
    }
  }
};
</script>

<style scoped>
footer {
  margin-top: 60px;
}

.contact-me {
  height: 64px;
  width: 235px;
  color: #000000;
  font-family: "Eczar";
  font-weight: 500;
  font-size: 48px;
  letter-spacing: -0.3px;
  line-height: 64px;
}

.svg-inline--fa {
  height: 2em;
  width: 2em;
  color: #4a4a4a;
}

.email {
  height: 37px;
  width: 243px;
  color: #000000;
  font-family: "Work Sans";
  font-size: 28px;
  letter-spacing: -1.17px;
  line-height: 37px;
}

.footer-link {
  height: 16px;
  width: 43px;
  color: #9b9b9b;
  font-family: "Work Sans";
  font-size: 14px;
  line-height: 16px;
}
</style>
