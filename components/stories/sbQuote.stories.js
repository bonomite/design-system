import sbQuote from '../sb-quote.vue'


export default {
  title: 'Components/sb-quote',
  component: sbQuote,
  argTypes: {

  },
}

const Template = (args) => ({
  components: { sbQuote },
  setup() {
    return { args }
  },
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
const quoteBlokNoAuthor = {
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
  "author": "",
  "component": "quote"
}
const quoteBlokNoPhoto = {
  "_uid": "ae25fb28-57d5-4ed0-9e21-dc0e1b4a5f4c",
  "photo": {
    "id": null,
    "alt": null,
    "name": "",
    "focus": null,
    "title": null,
    "filename": null,
    "copyright": null,
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

const quoteBlokNoPhotoNoAuthor = {
  "_uid": "ae25fb28-57d5-4ed0-9e21-dc0e1b4a5f4c",
  "photo": {
    "id": null,
    "alt": null,
    "name": "",
    "focus": null,
    "title": null,
    "filename": null,
    "copyright": null,
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
  "author": "",
  "component": "quote"
}

export const Default = Template.bind({})
Default.args = {
  blok: quoteBlok,
}

export const NoAuthor = Template.bind({})
NoAuthor.args = {
  blok: quoteBlokNoAuthor,
}

export const NoImage = Template.bind({})
NoImage.args = {
  blok: quoteBlokNoPhoto,
}

export const NoImageNoAuthor = Template.bind({})
NoImageNoAuthor.args = {
  blok: quoteBlokNoPhotoNoAuthor,
}
