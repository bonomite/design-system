import sbImageBlock from '../sb-image-block.vue'

export default {
  title: 'Components/sb-image-block',
  component: sbImageBlock,
  argTypes: {

  },
}

const Template = (args) => ({
  components: { sbImageBlock },
  setup() {
    return { args }
  },
  template: '<sb-image-block v-bind="args" />',
})

const imageBlockDataFromStorybook = {
  "_uid": "ef4dca99-9969-478f-812b-c5369be0ddf9",
  "link": {
    "id": "",
    "url": "",
    "target": "_self",
    "linktype": "url",
    "fieldtype": "multilink",
    "cached_url": ""
  },
  "image": {
    "id": 1327,
    "alt": "",
    "name": "",
    "focus": "",
    "title": "",
    "filename": "https://a-us.storyblok.com/f/1001003/3008x2000/e2c62ebca5/dsc_0039.JPG",
    "copyright": "",
    "fieldtype": "asset",
    "is_external_url": false
  },
  "ratio": "",
  "title": "",
  "width": "",
  "height": "",
  "caption": {
    "type": "doc",
    "content": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "This is a caption 2023",
            "type": "text"
          }
        ]
      }
    ]
  },
  "enlarge": false,
  "component": "asset-image",
  "greyscale": false,
  "full_width": false,
  "description": {
    "type": "doc",
    "content": [
      {
        "type": "heading",
        "attrs": {
          "level": 4
        },
        "content": [
          {
            "text": "This is the header",
            "type": "text"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "this is the description. And, I can format it any way I please to. This is probably better control for the author.",
            "type": "text"
          }
        ]
      }
    ]
  }
}



export const DefaultResponsiveNoSSR = Template.bind({})
DefaultResponsiveNoSSR.args = {
  blok: imageBlockDataFromStorybook,
}
