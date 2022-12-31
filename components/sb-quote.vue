<script setup>
import { computed, ref } from 'vue'
import sbImage from './sb-image.vue'
const props = defineProps({ blok: Object })
const StoryblokClient = require('storyblok-js-client')
let Storyblok = new StoryblokClient({})
const richText = computed(() =>
  Storyblok.richTextResolver.render(props.blok.quote)
)
//const richText = computed(() => renderRichText(props.blok.quote))
const photo = ref(props.blok.photo.filename ? props.blok.photo : null)
const author = ref(props.blok.author)
</script>
<template>
  <div v-if="blok" v-editable="blok" class="blok quote-blok mb-3">
    <div class="grid">
      <div
        v-if="photo"
        class="photo col-12 sm:col-3 max-w-8rem sm:max-w-15rem m-auto"
      >
        <sb-image :src="photo" size="216x216" />
      </div>
      <div
        class="flex align-items-center"
        :class="photo ? 'col-12 sm:col-9 sm:pl-3 pt-3 sm:pt-0' : 'col-12'"
      >
        <div class="pl-0">
          <div class="quote" v-html="richText" />
          <p v-if="author" class="author p-small mt-3">&mdash; {{ author }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.quote-blok {
  background-color: var(--surface-a);
  border-radius: 1rem;
  padding: 2rem;
  .photo .sb-image {
    border-radius: 50%;
    overflow: hidden;
    border: 0.25rem solid var(--primary-color);
  }
  .quote {
    position: relative;
    font-family: var(--font-family-header);
    font-weight: normal;
    font-style: italic !important;
    font-size: 1.5rem;
    &::before {
      content: '“';
      font-size: 3rem;
      color: $primaryColor;
      position: absolute;
      top: -1.5rem;
      left: -1.5rem;
    }
    @include media('<md') {
      font-size: 1.25rem;
    }
  }
}
</style>
