<template>
  <section class="wrap scroll-mt-24 py-20 md:py-28 about-div">
    <header class="border-b border-hairline pb-6">
      <p class="eyebrow">03 — About</p>
      <h2 class="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        A bit about me
      </h2>
    </header>

    <div class="mt-12 grid gap-12 lg:grid-cols-3">
      <div class="about space-y-6 text-lg leading-relaxed text-muted lg:col-span-2">
        <p>
          I'm Favour — a <span class="text-ink">Site Reliability Engineer at
          Moniepoint</span>, one of Africa's fastest-growing fintechs. My work is
          about keeping systems fast, observable and resilient, so the services
          people depend on stay up when it matters most.
        </p>
        <p>
          I came to reliability through building. I've spent years crafting
          front-ends with <span class="text-ink">Vue and Tailwind</span>, and
          that builder's instinct still shapes how I think about systems —
          clearly, and with the person on the other end in mind.
        </p>
        <p>
          Somewhere along the way I fell for
          <span class="text-ink">machine learning</span> too. I've trained models
          to recognise faces and detect face masks, scraped and wrangled my own
          datasets, and put my skills to the test in
          <span class="text-ink">Zindi and Data Science Nigeria</span>
          competitions.
        </p>
        <p>
          Away from the screen, you'll find me outdoors, deep in a good meal or a
          cooking video, or lost in a game. I'm at my best learning something new
          and building things that are genuinely useful — and a little bit
          delightful.
        </p>
      </div>

      <aside class="about space-y-8">
        <div v-for="fact in facts" :key="fact.label">
          <p class="text-xs font-medium uppercase tracking-label text-muted">
            {{ fact.label }}
          </p>
          <p class="mt-2 text-ink">{{ fact.value }}</p>
        </div>
      </aside>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'AboutComp',
  data() {
    return {
      facts: [
        { label: 'Now', value: 'Site Reliability Engineer @ Moniepoint' },
        { label: 'Location', value: 'Lagos, Nigeria' },
        { label: 'Focus', value: 'Reliability, software & machine learning' },
        { label: 'Toolkit', value: 'Vue · JavaScript · Tailwind · Python · Keras' },
        { label: 'Community', value: 'Zindi · Data Science Nigeria' },
      ],
    };
  },
  mounted() {
    gsap.from('.about', {
      scrollTrigger: {
        trigger: '.about-div',
        start: 'top 80%',
      },
      opacity: 0,
      y: 28,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
    });
  },
};
</script>
