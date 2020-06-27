define(function(require, exports, module) {
  Vue.use(VueI18n)
  module.exports = new VueI18n({
    locale: localStorage.getItem('language') || "zh",
    messages: require('./langs.js'),
    silentTranslationWarn: true
  })
})