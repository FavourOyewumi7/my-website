<template>
  <section
    class="wrap flex min-h-[calc(100vh-5rem)] flex-col justify-center py-20"
  >
    <p class="eyebrow hero-el">
      <span class="inline-flex h-2 w-2 rounded-full bg-accent"></span>
      Site Reliability Engineer · Moniepoint
    </p>

    <h1
      class="hero-el mt-8 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
    >
      I keep systems <span class="text-accent">reliable</span> —<br class="hidden sm:block" />
      and never stopped building.
    </h1>

    <p class="hero-el mt-8 max-w-2xl text-lg leading-relaxed text-muted">
      I'm Favour Oyewumi, a Site Reliability Engineer at Moniepoint in Lagos,
      Nigeria. I keep the systems behind one of Africa's fastest-growing
      fintechs fast and dependable — and off the clock, I build for the web and
      train machine-learning models.
    </p>

    <div class="hero-el mt-10 flex flex-wrap items-center gap-4">
      <a
        href="#works"
        class="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity duration-300 hover:opacity-90"
      >
        View my work
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
          <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414Z" clip-rule="evenodd" />
        </svg>
      </a>
      <a
        href="#contact"
        class="inline-flex items-center rounded-full border border-hairline px-6 py-3 text-sm font-medium transition-colors duration-300 hover:border-accent hover:text-accent"
      >
        Get in touch
      </a>
    </div>

    <ul class="hero-el mt-14 flex flex-wrap gap-x-6 gap-y-3 text-sm">
      <li v-for="social in socials" :key="social.label">
        <a
          :href="social.href"
          :target="social.href.startsWith('mailto:') ? undefined : '_blank'"
          rel="noopener"
          class="link-underline text-muted"
        >
          {{ social.label }}
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import { gsap } from 'gsap';

export default {
  name: 'LandingComp',
  data() {
    return {
      socials: [
        { label: 'GitHub', href: 'https://github.com/FavourOyewumi7' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/favour-o-3610731a6/' },
        { label: 'X', href: 'https://x.com/ayomideif' },
        { label: 'Instagram', href: 'https://instagram.com/ayomideof' },
        { label: 'Email', href: 'mailto:oyewumifavour65@gmail.com' },
      ],
    };
  },
  mounted() {
    gsap.fromTo(
      '.hero-el',
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
      }
    );
  },
};
</script>
