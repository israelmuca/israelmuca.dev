<template>
  <footer class="footer" id="contact">
    <div class="container">
      <!-- First level -->
      <nav class="level is-mobile contact-me-level">
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
              aria-label="Github"
              class="external-link"
            >
              <span class="fab">
                <fab class="brand-icon" :icon="fab.faGithub"/>
              </span>
            </a>
          </div>
          <div class="level-item">
            <a
              href="https://linkedin.com/in/israelmuca"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
              class="external-link"
            >
              <fab class="brand-icon" :icon="fab.faLinkedin"/>
            </a>
          </div>
          <!-- Angel List -->
          <div class="level-item">
            <a
              href="https://angel.co/israelmuca"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Angel List"
              class="external-link"
            >
              <fab class="brand-icon" :icon="fab.faAngellist"/>
            </a>
          </div>
          <!-- Resume -->
          <!-- <div class="level-item">
            <a
              href="https://drive.google.com/open?id=1s2Ds6PPm1qlQikcF7ZFXajCNFhwKdJoj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              class="external-link"
            >
              <img class="brand-icon-svg" src="/ext-icon/resume.svg" alt="resume icon">
            </a>
          </div> -->
        </div>
      </nav>

      <!-- Second Level -->
      <nav class="level">
        <!-- Left side -->
        <div class="level-left">
          <div class="level-item">
            <span class="email">email@israelmuca.dev</span>
          </div>
        </div>
        <!-- Right side -->
        <div class="level-right">
          <a href="#header" class="level-item">
            <fab class="arrow-icon" :icon="fas.faArrowCircleUp"/>
            <span class="footer-link">Back to top</span>
          </a>
        </div>
      </nav>
    </div>
  </footer>
</template>

<script>
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"

export default {
  computed: {
    fab() {
      return fab
    },
    fas() {
      return fas
    }
  }
}
</script>

<style scoped>
footer {
  margin-top: 60px;
  padding-bottom: 48px;
}

.contact-me {
  color: #000000;
  font-family: "Eczar";
  font-weight: 500;
  font-size: 48px;
  letter-spacing: -0.3px;
  line-height: 64px;
}

.brand-icon {
  height: 2em;
  width: 2em;
  color: #4a4a4a;
}
.brand-icon:hover {
  color: #3273dc;
}

/* .brand-icon-svg {
  height: 2em;
  width: 2em;
  fill: #4a4a4a;
}
.brand-icon-svg:hover {
  fill: #3273dc;
} */

.arrow-icon {
  height: 1.5em;
  width: 1.5em;
  color: #9b9b9b;
}

.email {
  color: #000000;
  font-family: "Work Sans";
  font-size: 28px;
  letter-spacing: -1.17px;
  line-height: 37px;
}

.footer-link {
  color: #9b9b9b;
  font-family: "Work Sans";
  font-size: 14px;
  line-height: 16px;
  padding-left: 10px;
}

@media screen and (max-width: 1087px) {
  footer {
    padding-bottom: 24px;
  }

  .contact-me {
    font-size: 36px;
  }

  .brand-icon {
    height: 1.5em;
    width: 1.5em;
  }

  .external-link {
    padding-left: 10px;
    padding-right: 10px;
  }
}

@media screen and (max-width: 380px) {
  footer {
    padding: 15px;
  }

  .contact-me-level {
    margin-bottom: 0px;
  }

  .contact-me {
    font-size: 34px;
  }

  .external-link {
    padding-left: 7px;
    padding-right: 7px;
  }
}
</style>
