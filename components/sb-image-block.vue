<script setup>
import { computed, ref } from 'vue'
import sbImage from './sb-image.vue'
import StoryblokClient from 'storyblok-js-client'
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})
let Storyblok = new StoryblokClient({})

const link = ref(props.blok.link)
const islink = ref(props.blok.link.url)
const isEnlarge = ref(props.blok.enlarge)
const isFullWidth = ref(props.blok.full_width)
const desc = computed(() =>
  Storyblok.richTextResolver.render(props.blok.description)
)
const caption = computed(() =>
  Storyblok.richTextResolver.render(props.blok.caption)
)
const width = computed(() => props.blok.width)
const height = computed(() => props.blok.height)
const ratio = computed(() => props.blok.ratio)
const ratioArray = ratio.value
  ? ratio.value.split(',').map((d) => {
      return parseInt(d)
    })
  : []
const greyscale = computed(() => props.blok.greyscale)
</script>
<template>
  <div
    v-if="blok"
    v-editable="blok"
    class="blok image-blok mb-6 flex flex-column"
    :class="[{ 'full-width': isFullWidth }]"
  >
    <div>
      <div class="title mb-1" v-html="desc" />
      <nuxt-link :to="link.url" :target="link.target">
        <sb-image
          :src="blok.image"
          :preview="islink ? false : isEnlarge"
          :size="width || height ? `${width || 0}x${height || 0}` : ''"
          :ratio="ratioArray"
          :greyscale="greyscale"
        />
      </nuxt-link>
      <div class="caption" v-html="caption"></div>
    </div>
  </div>
</template>
