import sbQuote from '../sb-quote.vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Components/sb-quote',
  component: sbQuote,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {

  },
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { sbQuote },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<sb-quote v-bind="args" />',
})

const quoteBlok = {
  "_uid": "ae25fb28-57d5-4ed0-9e21-dc0e1b4a5f4c",
  "photo": {
    "id": 11630,
    "alt": "",
    "name": "",
    "focus": "",
    "title": "",
    "filename": "https://a-us.storyblok.com/f/1001003/1435x890/a450969a25/poster.png",
    "copyright": "",
    "fieldtype": "asset",
    "is_external_url": false
  },
  "quote": {
    "type": "doc",
    "content": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "This is the quote the cool guy said today.",
            "type": "text"
          }
        ]
      }
    ]
  },
  "author": "Thomas Bono",
  "component": "quote"
}

export const Default = Template.bind({})
Default.args = {
  blok: quoteBlok,
}
