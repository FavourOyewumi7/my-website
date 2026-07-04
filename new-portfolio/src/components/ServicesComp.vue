<template>
  <section class="wrap scroll-mt-24 py-20 md:py-28 service-div">
    <header
      class="flex flex-col gap-4 border-b border-hairline pb-6 md:flex-row md:items-end md:justify-between"
    >
      <div>
        <p class="eyebrow">02 — Expertise</p>
        <h2 class="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          What I do
        </h2>
      </div>
      <p class="max-w-xs text-sm text-muted">
        Across reliability, software and machine learning — wherever the
        interesting problems live.
      </p>
    </header>

    <div class="mt-12 grid gap-x-12 gap-y-12 md:grid-cols-2">
      <div
        v-for="service in services"
        :key="service.number"
        class="serv-1 border-t border-hairline pt-6"
      >
        <span class="font-display text-sm font-medium text-accent">{{ service.number }}</span>
        <h3 class="mt-3 font-display text-xl font-semibold tracking-tight">
          {{ service.title }}
        </h3>
        <p class="mt-3 leading-relaxed text-muted">{{ service.body }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'ServicesComp',
  data() {
    return {
      services: [
        {
          number: '01',
          title: 'Site Reliability',
          body: 'Keeping services fast, observable and resilient — the automation, monitoring and calm incident response that keep systems running when it matters most.',
        },
        {
          number: '02',
          title: 'Software Engineering',
          body: 'Building clean, responsive front-ends with Vue and Tailwind, and the APIs behind them — readable code that’s built to last.',
        },
        {
          number: '03',
          title: 'Machine Learning',
          body: 'Computer-vision models for face recognition and mask detection with Keras and transfer learning, plus a competitive streak on Zindi and with Data Science Nigeria.',
        },
        {
          number: '04',
          title: 'Problem Solving',
          body: '350+ problems solved across LeetCode and HackerRank — a habit of reasoning toward efficient, correct solutions in both time and space.',
        },
      ],
    };
  },
  mounted() {
    gsap.from('.serv-1', {
      scrollTrigger: {
        trigger: '.service-div',
        start: 'top 80%',
      },
      opacity: 0,
      y: 28,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power2.out',
    });
  },
};
</script>
