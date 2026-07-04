<template>
  <section class="wrap scroll-mt-24 py-20 md:py-28 work-div">
    <header
      class="flex flex-col gap-4 border-b border-hairline pb-6 md:flex-row md:items-end md:justify-between"
    >
      <div>
        <p class="eyebrow">01 — Selected work</p>
        <h2 class="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Things I've built
        </h2>
      </div>
      <p class="max-w-xs text-sm text-muted">
        A mix of front-end apps, machine-learning projects and client work.
      </p>
    </header>

    <div class="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 work-grid">
      <WorkCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
        class="work"
      />
    </div>

    <p class="mt-16 max-w-2xl text-sm leading-relaxed text-muted">
      Want to see more of my machine-learning journey? Explore my
      <a
        href="https://zindi.africa/users/FavourOyewumi/competitions"
        target="_blank"
        rel="noopener"
        class="text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
        >Zindi</a
      >
      and
      <a
        href="https://www.kaggle.com/favouroyewumi1"
        target="_blank"
        rel="noopener"
        class="text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
        >Kaggle</a
      >
      profiles.
    </p>
  </section>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
import WorkCard from './WorkCard.vue';

export default {
  name: 'WorkComp',
  components: { WorkCard },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Crypto Library',
          about:
            'An educational web app that breaks down cryptocurrency and Web3 concepts for beginners, organised into easy-to-browse topics.',
          imageUrl: 'cryptolib.jpg',
          link: 'https://crypto-library-hsyx-9sal2pqj2-esscapeplans-projects.vercel.app/',
          tools: ['Vue', 'Tailwind', 'Vue Router'],
          secondary: false,
        },
        {
          id: 6,
          title: 'Face Recognition',
          about:
            'A Python system that detects and identifies faces and logs recognised people to an attendance CSV — built with the face_recognition library and OpenCV.',
          imageUrl: 'facerecognition.jpg',
          link: 'https://github.com/FavourOyewumi7/face-recognition-project',
          tools: ['Python', 'OpenCV', 'face_recognition'],
          secondary: false,
        },
        {
          id: 7,
          title: 'Deep Learning Lab',
          about:
            'An ongoing collection of my deep-learning work — a face-mask detector using MobileNetV2 transfer learning, image scrapers, CNN experiments, and Zindi & DSN competition notebooks.',
          imageUrl: 'deeplearning.jpg',
          link: 'https://github.com/FavourOyewumi7/deeplearning',
          tools: ['Python', 'Keras', 'TensorFlow', 'PyTorch'],
          secondary: false,
        },
        {
          id: 9,
          title: 'Movie Finder',
          about:
            'Search for films and explore their details — synopsis, ratings and more — from a movie REST API, with routing for each title.',
          imageUrl: 'movie-finder.jpg',
          link: 'https://movie-search-woad.vercel.app/',
          tools: ['Vue', 'Tailwind', 'Vue Router', 'REST'],
          secondary: false,
        },
        {
          id: 8,
          title: 'Weather App',
          about:
            'A weather app showing current conditions and the days ahead, pulling live data from a weather API with smooth GSAP-animated transitions.',
          imageUrl: 'weather-app.jpg',
          link: 'https://weather-app-bice-omega.vercel.app/',
          tools: ['Vue', 'Tailwind', 'GSAP', 'REST'],
          secondary: false,
        },
        {
          id: 100,
          title: 'Image Gallery',
          about:
            'An image-search gallery powered by the Unsplash API, returning results in a responsive grid. Built as a front-end technical assessment.',
          imageUrl: 'cowrywise-imageapp.png',
          link: 'https://cowrywise-task.vercel.app/',
          tools: ['Vue', 'Tailwind', 'Vue Router', 'REST'],
          secondary: false,
        },
        {
          id: 12,
          title: 'GetLinked Hackathon',
          about:
            'My submission for the GetLinked hackathon — a responsive, animated event site built to the brief and wired to a REST API.',
          imageUrl: 'getlinked.png',
          link: 'https://get-linked-solution.vercel.app/',
          tools: ['Vue', 'Tailwind', 'Vue Router', 'REST'],
          secondary: false,
        },
        {
          id: 2,
          title: 'Todo App',
          about:
            'My first Vue project — a to-do app where I learned component design and centralised state management with Vuex.',
          imageUrl: 'todoapp.jpg',
          link: 'https://vue-todo-app-using-state-management.vercel.app/',
          tools: ['Vue', 'Tailwind', 'Vuex'],
          secondary: false,
        },
        {
          id: 3,
          title: 'PSF Hub',
          about:
            "A revamped website for the Pastors' Seed Family, a church youth ministry — a multi-page Vue build bringing their community and events online.",
          imageUrl: 'psfhub.jpg',
          link: 'https://staging.psalmzy.com/',
          tools: ['Vue', 'Tailwind', 'Vue Router'],
          secondary: true,
        },
        {
          id: 4,
          title: 'Church Website Template',
          about:
            'A complete, responsive church website — service schedules, a sermon section, photo gallery, member testimonies and a contact form.',
          imageUrl: 'daystar-static.jpg',
          link: 'https://daystar-lac.vercel.app/',
          tools: ['HTML', 'CSS', 'JS'],
          secondary: true,
        },
        {
          id: 5,
          title: 'Open Hack Week 2020',
          about:
            'Front-end interfaces built for Open Hack Week 2020 (as Team 13) — two charity landing pages: a clean-water fundraiser and a children’s-education campaign.',
          imageUrl: 'ohw-static-2.jpg',
          link: 'https://favouroyewumi7.github.io/',
          tools: ['HTML', 'CSS', 'JS'],
          secondary: true,
        },
        {
          id: 13,
          title: 'Client Landing Page',
          about:
            'A marketing landing page built for a client with hand-written HTML, CSS and JavaScript on Bootstrap.',
          imageUrl: 'contract.png',
          link: 'https://contract-project-wine.vercel.app/',
          tools: ['HTML', 'CSS', 'JS', 'Bootstrap'],
          secondary: true,
        },
      ],
    };
  },
  mounted() {
    gsap.from('.work', {
      scrollTrigger: {
        trigger: '.work-grid',
        start: 'top 85%',
      },
      opacity: 0,
      y: 32,
      duration: 0.7,
      stagger: 0.08,
      ease: 'power2.out',
    });
  },
};
</script>
