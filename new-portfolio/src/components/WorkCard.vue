<template>
  <a
    :href="project.link"
    target="_blank"
    rel="noopener"
    class="group block"
    :class="{ 'hidden xl:block': project.secondary }"
  >
    <div class="overflow-hidden rounded-xl border border-hairline bg-surface">
      <img
        :src="require('@/assets/' + project.imageUrl)"
        :alt="project.title"
        loading="lazy"
        class="aspect-[16/10] w-full object-cover transition-transform duration-[600ms] ease-out-expo group-hover:scale-[1.04]"
      />
    </div>

    <div class="mt-5 flex items-start justify-between gap-4">
      <h3
        class="font-display text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent"
      >
        {{ project.title }}
      </h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.8"
        stroke="currentColor"
        class="h-5 w-5 shrink-0 translate-y-0.5 text-muted transition-all duration-300 group-hover:-translate-y-0 group-hover:translate-x-0.5 group-hover:text-accent"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5 19.5 4.5m0 0H8.25m11.25 0v11.25" />
      </svg>
    </div>

    <p class="mt-2 text-sm leading-relaxed text-muted">{{ project.about }}</p>

    <ul class="mt-4 flex flex-wrap gap-2">
      <li
        v-for="tool in project.tools"
        :key="tool"
        class="rounded-full border border-hairline px-3 py-1 text-xs text-muted"
      >
        {{ tool }}
      </li>
    </ul>
  </a>
</template>

<script>
export default {
  name: 'WorkCard',
  props: {
    project: { type: Object, required: true },
  },
};
</script>
