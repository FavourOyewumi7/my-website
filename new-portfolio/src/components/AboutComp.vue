<template>
  <section class="wrap scroll-mt-24 py-20 md:py-28 about-div">
    <header class="border-b border-hairline pb-6">
      <p class="eyebrow">04 — About</p>
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
          Lately, I've been drawn to the problems behind
          <span class="text-ink">distributed systems</span>: how services
          coordinate, scale, and keep working when parts fail. I'm keen to
          explore that space further, with <span class="text-ink">Go</span> next
          on my learning list.
        </p>
        <p>
          Before finding my groove in reliability, I spent years building
          front-ends with <span class="text-ink">Vue and Tailwind</span>. These
          days, web development is more of a conversation topic than a side
          project — but that builder's instinct still shapes how I think about
          systems.
        </p>
        <p>
          I also spent time exploring
          <span class="text-ink">machine learning</span> — training models,
          wrangling datasets, and taking on competitions with
          <span class="text-ink">Zindi and Data Science Nigeria</span>. I'm not
          building models these days, but I still enjoy keeping up and talking
          shop.
        </p>
        <p>
          Off the clock, there's usually music on — and sometimes I'm behind a
          drum kit. I'm also a retired photographer, which means I still
          appreciate a good shot without having to carry all the gear.
        </p>
      </div>

      <aside class="about space-y-8">
        <img
          :src="avatarUrl"
          alt="Portrait of Favour wearing glasses and a green headwrap"
          class="h-40 w-40 rounded-full border border-hairline bg-surface object-cover"
        />
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
      avatarUrl: `${process.env.BASE_URL}avatar.png`,
      facts: [
        { label: 'Now', value: 'Site Reliability Engineer @ Moniepoint' },
        { label: 'Location', value: 'Lagos, Nigeria' },
        { label: 'Exploring', value: 'Go · Distributed systems' },
        { label: 'Interests', value: 'Reliability, music, web & machine learning' },
        { label: 'Toolkit', value: 'Go (learning) · Vue · JavaScript · Tailwind · Python · Keras' },
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
