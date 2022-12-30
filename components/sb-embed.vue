<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  code: {
    type: String,
    default: null,
  },
})

const isYoutube = ref(props.code.includes('https://www.youtube.com/embed'))
const isGoogleMaps = ref(
  props.code.includes('https://www.google.com/maps/embed')
)

const embedCode = computed(() => {
  return props.code
})
</script>

<template>
  <div
    class="streamfield-embed"
    :class="[{ youtube: isYoutube }, { googleMaps: isGoogleMaps }]"
    v-html="embedCode"
  />
</template>

<style lang="scss">
.streamfield-embed {
  &.youtube {
    iframe {
      aspect-ratio: 16 / 9 !important;
      width: 100% !important;
      height: 100% !important;
    }
  }
  &.googleMaps {
    iframe {
      width: 100% !important;
    }
  }
  .twitter-tweet {
    max-width: 100% !important;
    justify-content: center;
    min-width: unset !important;
    iframe {
      width: 550px !important;
      max-width: 100% !important;
      flex-grow: unset !important;
      min-width: unset !important;
      * {
        min-width: unset !important;
      }
    }
  }
  .instagram-media {
    max-width: 100% !important;
    justify-content: center;
    margin: auto !important;
    width: 550px !important;
    max-width: 100% !important;
    min-width: unset !important;
    flex-grow: unset !important;
  }
}
</style>
