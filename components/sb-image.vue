<script setup>
import { ref, computed, onMounted } from 'vue'
import Image from 'primevue/image'
import ProgressSpinner from 'primevue/progressspinner'

const props = defineProps({
  src: {
    type: Object,
    default: null,
  },
  loading: {
    type: String,
    default: 'lazy',
  },
  size: {
    type: String,
    default: '',
  },
  quality: {
    type: Number,
    default: 70,
  },
  format: {
    type: String,
    default: 'webp',
  },
  greyscale: {
    type: Boolean,
    default: false,
  },
  preview: {
    type: Boolean,
    default: false,
  },
  density: {
    type: Array,
    default() {
      return [2]
    },
  },
  ratio: {
    type: Array,
    default: () => [],
  },
  scale: {
    type: Boolean,
    default: true,
  },
})

const imageHolderRef = ref(null)
const loadingEnlargedImage = ref(false)
const imageRef = ref(false)
const ready = ref(props.size ? true : false)
const focusPoint = props.src?.focus
const isRatio = props.ratio.length > 0 && props.size === ''
let transformedUrl = null
let transformedUrlToken = null

const maxWidth = computed(() => {
  const str = props.src?.filename.split('/')[5]
  return Number(str.split('x')[0])
})
const maxHeight = computed(() => {
  const str = props.src?.filename.split('/')[5]
  return Number(str.split('x')[1])
})
const sizeWidth = Number(
  props.size ? props.size?.split('x')[0] : maxWidth.value
)
const sizeHeight = Number(
  props.size ? props.size?.split('x')[1] : maxHeight.value
)

const getRatioDimensions = computed(() => {
  const hRatio = Number(props.ratio[0])
  const vRatio = Number(props.ratio[1])
  // for low rez images
  let theWidth = currentWidth
  if (maxWidth.value && maxWidth.value < theWidth) {
    theWidth = maxWidth.value
  }
  return {
    width: theWidth,
    height: Math.round((theWidth * vRatio) / hRatio),
  }
})

let currentWidth = null // will be determined on mounted

const transformUrl = () => {
  const image = props.src?.filename
  const size =
    props.size ||
    (isRatio
      ? `${getRatioDimensions.value.width}x${getRatioDimensions.value.height}`
      : `${currentWidth}x0`)
  const quality = props.quality
  const grey = props.greyscale
  if (!image) return ''
  transformedUrl = `/m/${size}${focusPoint ? '' : '/smart'}/filters:format(${
    props.format
  }):quality(${quality})${grey ? ':grayscale()' : ''}${
    focusPoint ? `:focal(${focusPoint})` : ''
  }`
  // add width token
  const transformedUrlTokenW = transformedUrl.replace(
    transformedUrl.split('/')[2].split('x')[0],
    'TOKENWIDTH'
  )
  // add height token
  transformedUrlToken = `${image}${transformedUrlTokenW.replace(
    transformedUrl.split('/')[2].split('x')[1],
    'TOKENHEIGHT'
  )}`
  return `${image}${transformedUrl}`
}

const srcset = () => {
  const template = transformedUrlToken
  const responsiveWidth = Number(currentWidth)
  const theWidth = props.size ? sizeWidth : responsiveWidth
  const theHeight = props.size
    ? sizeHeight
    : isRatio
    ? getRatioDimensions.value.height
    : 0
  if (template && props.density) {
    let srcset = ''
    let lastImage = false
    for (const densitySize of props.density) {
      /* continue if it is NOT the lastImage and the image has more pixels than its rendered area */
      if (!lastImage && maxWidth.value > theWidth) {
        let width = null
        let height = null
        /* the image no longer has enough resolution to support the next srcset, use its maximum size and make it the last on the srcset list */
        if (isRatio) {
          width = Math.round(getRatioDimensions.value.width * densitySize)
          height = Math.round(getRatioDimensions.value.height * densitySize)
          if (width > maxWidth.value || height > maxHeight.value) {
            console.log('max ? = ', maxWidth.value, maxHeight.value)
            console.log('last ? = ', width, height)
            lastImage = true
          }
        } else {
          width = Math.round(theWidth * densitySize)
          height = Math.round(theHeight * densitySize)
          if (width > maxWidth.value || height > maxHeight.value) {
            height = height !== 0 ? height : 0
            lastImage = true
          }
        }
        //if we are on the last size in the array set lastImage to true
        if (props.density.length - 1 === props.density.indexOf(densitySize)) {
          lastImage = true
        }
        const url = template
          .replace('TOKENWIDTH', width)
          .replace('TOKENHEIGHT', height)
          //remove original qaulity filter
          .replace(`:quality(${props.quality})`, '')
        // lower the quasliy for the larger images
        const quality = props.quality - (densitySize - 1) * 5
        srcset += `${url}:quality(${quality}) ${densitySize}x${
          !lastImage ? ',' : ''
        } `
      }
    }
    return srcset
  } else {
    return undefined
  }
}

const computedEnlargeSrc = computed(() => {
  const template = transformedUrlToken
  console.log('template = ', template)
  return template
    ? template
        .replace('TOKENWIDTH', maxWidth.value)
        .replace('TOKENHEIGHT', maxHeight.value)
        //remove original qaulity filter
        .replace(`:quality(${props.quality})`, ':quality(80)')
    : undefined
})

const enlarge = () => {
  //console.log('enlarging', computedEnlargeSrc.value)
  loadingEnlargedImage.value = true
  const img = document.getElementsByClassName('p-image-preview')
  img[0].setAttribute('alt', props.alt)
  img[0].setAttribute('src', computedEnlargeSrc.value)
}

const closeEnlarge = () => {
  loadingEnlargedImage.value = false
}

const getInlineAspectRatio = computed(() => {
  return `aspect-ratio: ${isRatio ? props.ratio[0] : sizeWidth} / ${
    isRatio ? props.ratio[1] : sizeHeight
  };`
})

onMounted(() => {
  const imageHolderWidth = imageHolderRef.value.offsetWidth
  const maxW = Number(maxWidth.value)
  currentWidth = imageHolderWidth > maxW ? maxW : imageHolderWidth
  ready.value = true
})
</script>

<template>
  <div ref="imageHolderRef" class="sb-image" :class="[{ scale: props.scale }]">
    <div v-if="!ready" class="loading-indication" :style="getInlineAspectRatio">
      <ProgressSpinner
        strokeWidth="8"
        animationDuration=".5s"
        style="height: 80%"
      />
    </div>
    <Image
      v-else
      ref="imageRef"
      class="image"
      :style="getInlineAspectRatio"
      :src="transformUrl()"
      :srcset="srcset()"
      :alt="props.src?.alt"
      :loading="props.loading"
      :preview="props.preview"
      @show="enlarge"
      @hide="closeEnlarge"
    />
    <div v-if="loadingEnlargedImage">
      <Teleport to=".p-component-overlay">
        <ProgressSpinner
          v-if="loadingEnlargedImage"
          strokeWidth="8"
          animationDuration=".5s"
          style="
            z-index: -1;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
          "
          stroke-width="6"
        />
      </Teleport>
    </div>
  </div>
</template>

<style lang="scss">
.p-image-toolbar {
  z-index: 2;
}
.sb-image {
  .loading-indication {
    width: 100%;
    height: auto;
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .p-image {
    img {
      display: block;
    }
  }
  &.scale {
    width: 100%;
    height: auto;
    .p-image,
    .p-image img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
