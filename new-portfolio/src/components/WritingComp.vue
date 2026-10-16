<template>
  <section class="wrap scroll-mt-24 py-20 md:py-28">
    <div
      class="flex flex-col gap-8 border-t border-hairline pt-8 md:flex-row md:items-end md:justify-between"
    >
      <div>
        <p class="eyebrow">02 — Writing</p>
        <h2 class="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Ideas worth sharing.
        </h2>
        <p class="mt-5 max-w-xl text-base leading-relaxed text-muted">
          I write about building reliable systems, algorithms, and the lessons I
          pick up along the way.
        </p>
      </div>

      <a
        :href="publicationUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex w-fit items-center gap-2 rounded-full border border-hairline px-6 py-3 text-sm font-medium transition-colors duration-300 hover:border-accent hover:text-accent"
      >
        Read my articles on Hashnode
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-4 w-4"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.19-7.19v5.16a.75.75 0 0 0 1.5 0V5.78a.75.75 0 0 0-.75-.75H6.28a.75.75 0 0 0 0 1.5h5.16l-7.19 7.19a.75.75 0 0 0 0 1.06Z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WritingComp',
  data() {
    return {
      publicationUrl: 'https://favouroyewumi.hashnode.dev/',
    };
  },
};
</script>
