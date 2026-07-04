<template>
  <header
    class="sticky top-0 z-50 border-b border-hairline/70 bg-canvas/80 backdrop-blur-md"
  >
    <nav class="wrap flex h-16 items-center justify-between md:h-20">
      <!-- Wordmark -->
      <a
        href="#"
        @click.prevent="scrollTop"
        class="font-display text-lg font-semibold tracking-tight md:text-xl"
      >
        Favour Oyewumi<span class="text-accent">.</span>
      </a>

      <!-- Desktop links -->
      <div class="hidden items-center gap-8 md:flex">
        <a
          v-for="item in links"
          :key="item.href"
          :href="item.href"
          class="link-underline text-sm text-muted"
        >
          {{ item.label }}
        </a>
        <a
          :href="resumeUrl"
          target="_blank"
          rel="noopener"
          class="rounded-full border border-hairline px-4 py-1.5 text-sm font-medium transition-colors duration-300 hover:border-accent hover:text-accent"
        >
          Résumé
        </a>
        <button
          type="button"
          class="grid h-9 w-9 place-items-center rounded-full border border-hairline text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="$emit('toggle-theme')"
        >
          <!-- Sun (shown in dark mode) -->
          <svg
            v-if="isDark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-5 w-5"
          >
            <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
          </svg>
          <!-- Moon (shown in light mode) -->
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-5 w-5"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
          </svg>
        </button>
      </div>

      <!-- Mobile controls -->
      <div class="flex items-center gap-2 md:hidden">
        <button
          type="button"
          class="grid h-9 w-9 place-items-center rounded-full border border-hairline text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="$emit('toggle-theme')"
        >
          <svg
            v-if="isDark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-5 w-5"
          >
            <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-5 w-5"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
          </svg>
        </button>
        <button
          type="button"
          class="grid h-9 w-9 place-items-center rounded-full border border-hairline text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
          @click="menuOpen = !menuOpen"
        >
          <svg
            v-if="!menuOpen"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-5 w-5"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-5 w-5"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <transition name="menu">
      <div v-if="menuOpen" class="border-t border-hairline/70 md:hidden">
        <div class="wrap flex flex-col py-4">
          <a
            v-for="item in links"
            :key="item.href"
            :href="item.href"
            class="py-3 text-base text-muted transition-colors hover:text-accent"
            @click="menuOpen = false"
          >
            {{ item.label }}
          </a>
          <a
            :href="resumeUrl"
            target="_blank"
            rel="noopener"
            class="py-3 text-base font-medium text-accent"
            @click="menuOpen = false"
          >
            Résumé →
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    isDark: { type: Boolean, default: false },
  },
  emits: ['toggle-theme'],
  data() {
    return {
      menuOpen: false,
      resumeUrl:
        'https://drive.google.com/drive/folders/1566eOzngy9zmjbWqCDHn6DSXVfujh22s?usp=sharing',
      links: [
        { label: 'Work', href: '#works' },
        { label: 'About', href: '#about' },
        { label: 'Contact', href: '#contact' },
      ],
    };
  },
  methods: {
    scrollTop() {
      this.menuOpen = false;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
};
</script>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
