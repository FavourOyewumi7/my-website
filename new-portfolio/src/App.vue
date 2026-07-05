<template>
  <Analytics />
  <div id="app" class="min-h-screen bg-canvas text-ink antialiased">
    <NavBar :is-dark="darkMode" @toggle-theme="toggleTheme" />
    <main>
      <LandingComp />
      <WorkComp id="works" />
      <ServicesComp id="services" />
      <AboutComp id="about" />
      <ContactComp id="contact" />
    </main>
    <FooterBar />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import LandingComp from './components/LandingComp.vue';
import WorkComp from './components/WorkComp.vue';
import ServicesComp from './components/ServicesComp.vue';
import AboutComp from './components/AboutComp.vue';
import ContactComp from './components/ContactComp.vue';
import FooterBar from './components/FooterBar.vue';
import { Analytics } from '@vercel/analytics/vue';

export default {
  name: 'App',
  components: {
    NavBar,
    LandingComp,
    WorkComp,
    ServicesComp,
    AboutComp,
    ContactComp,
    FooterBar,
    Analytics,
  },
  data() {
    return {
      darkMode: false,
    };
  },
  created() {
    const stored = localStorage.getItem('theme');
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.darkMode = stored ? stored === 'dark' : prefersDark;
    this.applyTheme();
  },
  methods: {
    toggleTheme() {
      this.darkMode = !this.darkMode;
      localStorage.setItem('theme', this.darkMode ? 'dark' : 'light');
      this.applyTheme();
    },
    applyTheme() {
      document.documentElement.classList.toggle('dark', this.darkMode);
    },
  },
};
</script>
