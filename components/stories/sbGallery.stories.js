import sbGallery from '../sb-gallery.vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Components/sb-gallery',
  component: sbGallery,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {

  },
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { sbGallery },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<sb-gallery v-bind="args" />',
})

const galleryBlok = {
  "_uid": "1cab5c46-b8dc-4afd-aad3-6b8677d239df",
  "images": [
    {
      "id": 11647,
      "alt": "",
      "name": "",
      "focus": "",
      "title": "",
      "filename": "https://a-us.storyblok.com/f/1001003/3000x4000/fbde493d9b/20220820_092231.jpg",
      "copyright": "",
      "fieldtype": "asset"
    },
    {
      "id": 11646,
      "alt": "",
      "name": "",
      "focus": "",
      "title": "",
      "filename": "https://a-us.storyblok.com/f/1001003/3000x4000/f6e917971c/20221115_152104.jpg",
      "copyright": "",
      "fieldtype": "asset"
    },
    {
      "id": 11645,
      "alt": "",
      "name": "",
      "focus": "",
      "title": "",
      "filename": "https://a-us.storyblok.com/f/1001003/4080x3072/d1ac39fffe/pxl_20221009_172138885.jpg",
      "copyright": "",
      "fieldtype": "asset"
    },
    {
      "id": 11644,
      "alt": "",
      "name": "",
      "focus": "",
      "title": "",
      "filename": "https://a-us.storyblok.com/f/1001003/4000x3000/06876c407a/20220731_123246.jpg",
      "copyright": "",
      "fieldtype": "asset"
    },
    {
      "id": 11643,
      "alt": "",
      "name": "",
      "focus": "",
      "title": "",
      "filename": "https://a-us.storyblok.com/f/1001003/3000x4000/7f9a354be3/20220223_094138.jpg",
      "copyright": "",
      "fieldtype": "asset"
    },
    {
      "id": 11642,
      "alt": "",
      "name": "",
      "focus": "",
      "title": "",
      "filename": "https://a-us.storyblok.com/f/1001003/3000x4000/beb7386f70/20220410_133252.jpg",
      "copyright": "",
      "fieldtype": "asset"
    },
    {
      "id": 11641,
      "alt": "",
      "name": "",
      "focus": "",
      "title": "",
      "filename": "https://a-us.storyblok.com/f/1001003/3464x4618/cd5eb2721b/p5150159.JPG",
      "copyright": "",
      "fieldtype": "asset"
    },
    {
      "id": 11640,
      "alt": "",
      "name": "",
      "focus": "",
      "title": "",
      "filename": "https://a-us.storyblok.com/f/1001003/3000x4000/fa73ce3a02/20220319_102518.jpg",
      "copyright": "",
      "fieldtype": "asset"
    },
    {
      "id": 11639,
      "alt": "",
      "name": "",
      "focus": "",
      "title": "",
      "filename": "https://a-us.storyblok.com/f/1001003/1280x960/f202554ba2/california-238.jpg",
      "copyright": "",
      "fieldtype": "asset"
    },
    {
      "id": 11638,
      "alt": "",
      "name": "",
      "focus": "",
      "title": "",
      "filename": "https://a-us.storyblok.com/f/1001003/3000x4000/b5b6443be7/20220319_094525.jpg",
      "copyright": "",
      "fieldtype": "asset"
    },
    {
      "id": 11637,
      "alt": "",
      "name": "",
      "focus": "",
      "title": "",
      "filename": "https://a-us.storyblok.com/f/1001003/2396x3216/43f2a8ad56/20190316_093306.jpg",
      "copyright": "",
      "fieldtype": "asset"
    },
    {
      "id": 11636,
      "alt": "",
      "name": "",
      "focus": "",
      "title": "",
      "filename": "https://a-us.storyblok.com/f/1001003/1600x1200/140c0a2408/gv_california-009.jpg",
      "copyright": "",
      "fieldtype": "asset"
    },
    {
      "id": 11635,
      "alt": "",
      "name": "",
      "focus": "",
      "title": "",
      "filename": "https://a-us.storyblok.com/f/1001003/3024x4032/c108fa4e56/20200108_103632.jpg",
      "copyright": "",
      "fieldtype": "asset"
    },
    {
      "id": 11634,
      "alt": "",
      "name": "",
      "focus": "",
      "title": "",
      "filename": "https://a-us.storyblok.com/f/1001003/3000x4000/98d2c4de14/20220727_133838.jpg",
      "copyright": "",
      "fieldtype": "asset"
    },
    {
      "id": 11633,
      "alt": "",
      "name": "",
      "focus": "",
      "title": "",
      "filename": "https://a-us.storyblok.com/f/1001003/3024x4032/e65658a7af/20200123_101517.jpg",
      "copyright": "",
      "fieldtype": "asset"
    },
    {
      "id": 11632,
      "alt": "",
      "name": "",
      "focus": "",
      "title": "",
      "filename": "https://a-us.storyblok.com/f/1001003/1600x1200/b7bb9d9d5e/gv_california-020.jpg",
      "copyright": "",
      "fieldtype": "asset"
    },
    {
      "id": 11631,
      "alt": "",
      "name": "",
      "focus": "",
      "title": "",
      "filename": "https://a-us.storyblok.com/f/1001003/1200x1600/25f3fa1964/gv_california-022.jpg",
      "copyright": "",
      "fieldtype": "asset"
    }
  ],
  "component": "gallery"
}

export const Default = Template.bind({})
Default.args = {
  blok: galleryBlok,
}
