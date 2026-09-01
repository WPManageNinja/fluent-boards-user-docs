<template>
  <div class="video-embed">
    <!--
      Facade first: a docs page should not pay for ~1MB of YouTube player code
      (and its cookies) on load. The real iframe is mounted only after a click.
    -->
    <button
      v-if="!activated"
      type="button"
      class="video-embed__poster"
      aria-label="Play video"
      @click="activated = true"
    >
      <img
        :src="thumbnail"
        alt=""
        loading="lazy"
        decoding="async"
        @error="onThumbError"
      />
      <span class="video-embed__play" aria-hidden="true">
        <svg viewBox="0 0 68 48" width="68" height="48">
          <path
            class="video-embed__play-bg"
            d="M66.52 7.74a8 8 0 0 0-5.63-5.67C55.79 0.7 34 0.7 34 0.7s-21.79 0-26.89 1.37a8 8 0 0 0-5.63 5.67C0.13 12.85 0.13 24 0.13 24s0 11.15 1.35 16.26a8 8 0 0 0 5.63 5.67C12.21 47.3 34 47.3 34 47.3s21.79 0 26.89-1.37a8 8 0 0 0 5.63-5.67C67.87 35.15 67.87 24 67.87 24s0-11.15-1.35-16.26z"
          />
          <path d="M27.2 34.4L45.3 24 27.2 13.6z" fill="#fff" />
        </svg>
      </span>
    </button>

    <iframe
      v-else
      :src="`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`"
      title="Video player"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

const activated = ref(false)

// maxresdefault is not generated for every upload, so fall back to hqdefault
// (always present) the one time the request 404s.
const thumbnail = ref(`https://i.ytimg.com/vi/${props.id}/maxresdefault.jpg`)

const onThumbError = () => {
  const fallback = `https://i.ytimg.com/vi/${props.id}/hqdefault.jpg`
  if (thumbnail.value !== fallback) thumbnail.value = fallback
}
</script>

<style scoped>
.video-embed {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  margin: 24px 0;
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
}

.video-embed > iframe,
.video-embed__poster {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.video-embed__poster {
  display: block;
  padding: 0;
  cursor: pointer;
  background: none;
}

.video-embed__poster img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.video-embed__play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.2s ease;
}

.video-embed__play-bg {
  fill: #212121;
  fill-opacity: 0.8;
  transition: fill-opacity 0.2s ease;
}

.video-embed__poster:hover .video-embed__play-bg,
.video-embed__poster:focus-visible .video-embed__play-bg {
  fill: #f00;
  fill-opacity: 1;
}

.video-embed__poster:focus-visible {
  outline: 2px solid var(--vp-c-brand-1, #473ccc);
  outline-offset: -2px;
}

@media (max-width: 640px) {
  .video-embed {
    margin: 16px 0;
  }

  .video-embed__play svg {
    width: 54px;
    height: 38px;
  }
}
</style>
