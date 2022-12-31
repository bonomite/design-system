import sbImage from '../sb-image.vue'

export default {
  title: 'Components/sb-image',
  component: sbImage,
  argTypes: {
    loading: {
      control: { type: 'select' },
      options: ['lazy', 'eager'],
      defaultValue: 'lazy',
    },
    density: {
      name: 'density (array of multipliers [2,3,4])',
      control: { type: 'array' },
      defaultValue: [2],
    },
    ratio: {
      name: 'ratio ([w,h] [3,2] or [16,9] or [1,1])',
      control: { type: 'array' },
      defaultValue: [],
    },
    format: {
      control: { type: 'select' },
      options: ['webp', 'jpg', 'png'],
      defaultValue: 'webp',
    },
    preview: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    greyscale: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    scale: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
    // backgroundColor: { control: 'color' },
    // onClick: {},
  },
}

const Template = (args) => ({
  components: { sbImage },
  setup() {
    return { args }
  },
  template: '<sb-image v-bind="args" />',
})

const imageDataFromStorybook = {
  "id": 1335,
  "alt": "close up of a surgery site with 4 gloved hands holding tools",
  "name": "",
  "focus": "970x238:971x239",
  "title": "",
  "filename": "https://a-us.storyblok.com/f/1001003/1920x384/b898d9a5ac/surgery.jpg",
  "copyright": "",
  "fieldtype": "asset",
  "is_external_url": false
}

export const ResponsiveNoSSR = Template.bind({})
ResponsiveNoSSR.args = {
  src: imageDataFromStorybook,
}

export const ResponsiveNoSSREagerLoading = Template.bind({})
ResponsiveNoSSREagerLoading.args = {
  src: imageDataFromStorybook,
  loading: 'eager',
}

export const ResponsiveNoSSRSpecificRatio = Template.bind({})
ResponsiveNoSSRSpecificRatio.args = {
  src: imageDataFromStorybook,
  ratio: [4, 2],
}

export const SpecificSize = Template.bind({})
SpecificSize.args = {
  src: imageDataFromStorybook,
  size: '300x50',
}

export const SpecificSizeNoScale = Template.bind({})
SpecificSizeNoScale.args = {
  src: imageDataFromStorybook,
  size: '300x50',
  scale: false,
}

export const CustomQuality = Template.bind({})
CustomQuality.args = {
  src: imageDataFromStorybook,
  size: '800x200',
  quality: 10,
}

export const ChangeFormat = Template.bind({})
ChangeFormat.args = {
  src: imageDataFromStorybook,
  size: '800x200',
  format: 'jpg',
}

export const Greyscale = Template.bind({})
Greyscale.args = {
  src: imageDataFromStorybook,
  size: '800x200',
  greyscale: true,
}

export const SRCSET_DensityMultipliers = Template.bind({})
SRCSET_DensityMultipliers.args = {
  src: imageDataFromStorybook,
  size: '100x20',
  density: [2, 3, 4, 5],
  scale: false,
}

export const PreviewEnlarge = Template.bind({})
PreviewEnlarge.args = {
  src: imageDataFromStorybook,
  size: '800x200',
  preview: true,
}