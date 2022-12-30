import sbEmbed from '../sb-embed.vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Components/sb-embed',
  component: sbEmbed,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    // loading: {
    //   control: { type: 'select' },
    //   options: ['lazy', 'eager'],
    //   defaultValue: 'lazy',
    // },
    // density: {
    //   name: 'density (array of multipliers [2,3,4])',
    //   control: { type: 'array' },
    //   defaultValue: [2],
    // },
    // ratio: {
    //   name: 'ratio ([w,h] [3,2] or [16,9] or [1,1])',
    //   control: { type: 'array' },
    //   defaultValue: [],
    // },
    // format: {
    //   control: { type: 'select' },
    //   options: ['webp', 'jpg', 'png'],
    //   defaultValue: 'webp',
    // },
    // preview: {
    //   control: { type: 'boolean' },
    //   defaultValue: false,
    // },
    // greyscale: {
    //   control: { type: 'boolean' },
    //   defaultValue: false,
    // },
    // scale: {
    //   control: { type: 'boolean' },
    //   defaultValue: true,
    // },
    // backgroundColor: { control: 'color' },
    // onClick: {},
  },
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { sbEmbed },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<sb-embed v-bind="args" />',
})

const twitterEmbed = '<iframe style="border:none;" width="550" height="400" data-tweet-url="https://twitter.com/bonomite/status/1608220874682863617" src="data:text/html;charset=utf-8,%3Cblockquote%20class%3D%22twitter-tweet%22%3E%3Cp%20lang%3D%22en%22%20dir%3D%22ltr%22%3EAfter%20speaking%20with%20my%20dad%2C%20I%20realized%20when%20I%20asked%20for%20Mario%20Brothers%202%20when%20I%20was%20a%20child%2C%20it%20was%20his%20entire%20week%26%2339%3Bs%20paycheck.%3C/p%3E%26mdash%3B%20ThomasBono.com%20%28@bonomite%29%20%3Ca%20href%3D%22https%3A//twitter.com/bonomite/status/1608220874682863617%3Fref_src%3Dtwsrc%255Etfw%22%3EDecember%2028%2C%202022%3C/a%3E%3C/blockquote%3E%0A%3Cscript%20async%20src%3D%22https%3A//platform.twitter.com/widgets.js%22%20charset%3D%22utf-8%22%3E%3C/script%3E%0A"></iframe>'

export const TwitterEmbed = Template.bind({})
TwitterEmbed.args = {
  code: twitterEmbed,
}
