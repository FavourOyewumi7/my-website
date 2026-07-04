<template>
  <footer class="border-t border-hairline">
    <div class="wrap py-12">
      <div class="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <a
            href="#"
            @click.prevent="scrollTop"
            class="font-display text-lg font-semibold tracking-tight"
          >
            Favour Oyewumi<span class="text-accent">.</span>
          </a>
          <p class="mt-2 max-w-xs text-sm text-muted">
            Software engineer building for the web, data and machine learning —
            based in Lagos, Nigeria.
          </p>
        </div>

        <div class="flex flex-col gap-4 md:items-end">
          <ul class="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <li v-for="social in socials" :key="social.label">
              <a
                :href="social.href"
                target="_blank"
                rel="noopener"
                class="link-underline text-muted"
              >
                {{ social.label }}
              </a>
            </li>
          </ul>
          <p class="text-xs text-muted">
            © {{ year }} Favour Oyewumi. Built with Vue &amp; Tailwind.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterBar',
  data() {
    return {
      year: new Date().getFullYear(),
      socials: [
        { label: 'GitHub', href: 'https://github.com/FavourOyewumi7' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/favour-o-3610731a6/' },
        { label: 'X', href: 'https://x.com/ayomideif' },
        { label: 'Email', href: 'mailto:oyewumifavour65@gmail.com' },
      ],
    };
  },
  methods: {
    scrollTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
};
</script>
