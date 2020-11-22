// eslint-disable-next-line no-undef
module.exports = {
  // set your styleguidist configuration here
  title: '安南的组件库',
  components: 'src/base/**/[A-Z]*.vue',
  defaultExample: true,
  sections: [{
    name: '组件',
    components: 'src/base/**/[A-Z]*.vue'
  }],
  webpackConfig: {
    // custom config goes here
  },
  exampleMode: 'expand'
}