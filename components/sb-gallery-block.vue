<script setup>
import { ref, onMounted, onUnmounted, defineProps } from 'vue'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'
const props = defineProps({ blok: Object })

const images = ref([])

const transformUrl = (url, sizeArg) => {
  let transformedUrl = null
  const image = url
  const size = sizeArg
  const quality = '70'
  const grey = false
  const focusPoint = false
  transformedUrl = `${image}/m/${size}${
    focusPoint ? '' : '/smart'
  }/filters:format(webp):quality(${quality})${grey ? ':grayscale()' : ''}${
    focusPoint ? `:focal(${focusPoint})` : ''
  }`
  return transformedUrl
}

const getWidthFromRatio = (url, width, height) => {
  const w = url.split('/')[5].split('x')[0]
  const h = url.split('/')[5].split('x')[1]
  if (width > height) {
    return Math.round(height * (w / h))
  } else {
    return width
  }
}

const getHeightFromRatio = (url, width, height) => {
  const w = url.split('/')[5].split('x')[0]
  const h = url.split('/')[5].split('x')[1]
  if (height > width) {
    return Math.round(width * (h / w))
  } else {
    return height
  }
}
let lightbox = null
onMounted(() => {
  props.blok.images.forEach((image) => {
    const currentWindowWidth = window.innerWidth
    const currentWindowHeight = window.innerHeight
    const multiplier = currentWindowHeight > currentWindowWidth ? 2 : 1
    const w = getWidthFromRatio(
      image.filename,
      currentWindowWidth,
      currentWindowHeight
    )
    const h = getHeightFromRatio(
      image.filename,
      currentWindowWidth,
      currentWindowHeight
    )
    images.value.push({
      largeURL: transformUrl(
        image.filename,
        `${w * multiplier}x${h * multiplier}`
      ),
      thumbnailURL: transformUrl(image.filename, '351x233'),
      width: w,
      height: h,
    })
  })

  setTimeout(() => {
    if (!lightbox) {
      lightbox = new PhotoSwipeLightbox({
        gallery: '#gallery',
        children: 'a',
        initialZoomLevel: 0,
        secondaryZoomLevel: 2.5,
        maxZoomLevel: 2.5,
        pswpModule: () => import('photoswipe'),
      })
      lightbox.init()
    }
  }, 10)
})
onUnmounted(() => {
  if (!lightbox) {
    lightbox.destroy()
    lightbox = null
  }
})
</script>
<template>
  <div v-if="blok" v-editable="blok" class="blok gallery-blok mb-6">
    <div id="gallery" class="grid">
      <a
        v-for="(item, index) in images"
        :key="item.id"
        class="img col-6 md:col-4 lg:col-3 xxl:col-2"
        :href="item.largeURL"
        :data-pswp-width="item.width"
        :data-pswp-height="item.height"
        target="_blank"
        rel="noreferrer"
      >
        <img :src="item.thumbnailURL" alt="" style="width: 100%" />
      </a>
    </div>
  </div>
</template>

<style lang="scss"></style>
