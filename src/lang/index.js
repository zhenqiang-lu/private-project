define(function(require, exports, module) {
  Vue.use(VueI18n)
  var getCookie = require('../tools/cookie.js').getCookie;
  // console.log(getCookie('language'))
  module.exports = new VueI18n({
    locale: getCookie('language') || "chinese",
    messages: require('./langs.js'),
    silentTranslationWarn: true
  })
})