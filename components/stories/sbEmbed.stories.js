import sbEmbed from '../sb-embed.vue'

export default {
  title: 'Components/sb-embed',
  component: sbEmbed,
  argTypes: {

  },
}

const Template = (args) => ({
  components: { sbEmbed },
  setup() {
    return { args }
  },
  template: '<sb-embed v-bind="args" />',
})

const twitterEmbedCode = '<iframe style="border:none;" width="550" height="400" data-tweet-url="https://twitter.com/bonomite/status/1608220874682863617" src="data:text/html;charset=utf-8,%3Cblockquote%20class%3D%22twitter-tweet%22%3E%3Cp%20lang%3D%22en%22%20dir%3D%22ltr%22%3EAfter%20speaking%20with%20my%20dad%2C%20I%20realized%20when%20I%20asked%20for%20Mario%20Brothers%202%20when%20I%20was%20a%20child%2C%20it%20was%20his%20entire%20week%26%2339%3Bs%20paycheck.%3C/p%3E%26mdash%3B%20ThomasBono.com%20%28@bonomite%29%20%3Ca%20href%3D%22https%3A//twitter.com/bonomite/status/1608220874682863617%3Fref_src%3Dtwsrc%255Etfw%22%3EDecember%2028%2C%202022%3C/a%3E%3C/blockquote%3E%0A%3Cscript%20async%20src%3D%22https%3A//platform.twitter.com/widgets.js%22%20charset%3D%22utf-8%22%3E%3C/script%3E%0A"></iframe>'

const instagramEmbedCode = '<iframe class="instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/reel/ClALSxADcdG/embed/captioned/?cr=1&amp;v=14&amp;wp=540&amp;rd=https%3A%2F%2Flocalhost%3A3000&amp;rp=%2Farticles#%7B%22ci%22%3A0%2C%22os%22%3A722%2C%22ls%22%3A586.2999999523163%2C%22le%22%3A709.0999999046326%7D" allowtransparency="true" allowfullscreen="true" frameborder="0" height="998" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" style="background: white; max-width: 540px; width: calc(100% - 2px); border-radius: 3px; border: 1px solid rgb(219, 219, 219); box-shadow: none; display: block; margin: 0px 0px 12px; min-width: 326px; padding: 0px;"></iframe>'

const youtubeEmbedCode = '<iframe width="560" height="315" src="https://www.youtube.com/embed/UZLSYGzKeBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

const googleMapsEmbedCode = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317.6069604257676!2d-73.19494368892705!3d40.77073988475676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e8315ab5920b29%3A0x5aa9eb07c71bd0c0!2sHoppen%20Dr%2C%20Central%20Islip%2C%20NY%2011722!5e0!3m2!1sen!2sus!4v1672424291825!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

export const TwitterEmbed = Template.bind({})
TwitterEmbed.args = {
  code: twitterEmbedCode,
}

export const InstagramEmbed = Template.bind({})
InstagramEmbed.args = {
  code: instagramEmbedCode,
}

export const YoutubeEmbed = Template.bind({})
YoutubeEmbed.args = {
  code: youtubeEmbedCode,
}

export const GoogleMapsEmbed = Template.bind({})
GoogleMapsEmbed.args = {
  code: googleMapsEmbedCode,
}
