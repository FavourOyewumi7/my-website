<template>
  <a
    v-if="track"
    :href="track.url"
    target="_blank"
    rel="noopener"
    class="group flex max-w-[15rem] items-center gap-2.5 rounded-full border border-hairline px-3.5 py-1.5 transition-colors duration-300 hover:border-accent"
    :title="`${track.title} — ${track.artist}`"
  >
    <!-- Equalizer bars: animate while playing, flat when showing last played -->
    <span class="flex h-3 items-end gap-[2px]" aria-hidden="true">
      <span v-for="n in 3" :key="n" class="eq-bar" :class="{ 'eq-on': track.isPlaying }" :style="{ animationDelay: `${n * 0.15}s` }"></span>
    </span>
    <span class="min-w-0 leading-tight">
      <span class="block font-mono text-[10px] uppercase tracking-label text-muted">
        {{ track.isPlaying ? 'Now playing' : 'Last played' }}
      </span>
      <span class="block truncate text-xs font-medium transition-colors duration-300 group-hover:text-accent">
        {{ track.title }} · {{ track.artist }}
      </span>
    </span>
  </a>
</template>

<script>
export default {
  name: 'NowPlaying',
  data() {
    return { track: null, timer: null };
  },
  mounted() {
    this.load();
    this.timer = setInterval(() => {
      if (!document.hidden) this.load();
    }, 30000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
  methods: {
    async load() {
      try {
        const res = await fetch('/api/now-playing');
        if (!res.ok) return;
        const data = await res.json();
        // Hide the widget entirely if there is nothing to show (or in local dev).
        this.track = data && data.title ? data : null;
      } catch (e) {
        this.track = null;
      }
    },
  },
};
</script>

<style scoped>
.eq-bar {
  width: 2px;
  height: 4px;
  border-radius: 1px;
  background: rgb(var(--muted));
}
.eq-on {
  background: rgb(var(--ink));
  animation: eq 0.9s ease-in-out infinite;
}
@keyframes eq {
  0%, 100% { height: 3px; }
  50% { height: 12px; }
}
@media (prefers-reduced-motion: reduce) {
  .eq-on { animation: none; height: 8px; }
}
</style>
