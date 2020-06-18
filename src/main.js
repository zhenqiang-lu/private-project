define(function(require) {
  var App = require("./pages/App.js");
  var router = require('./router/index.js');
  var i18n = require('./lang/index.js')
  new Vue({
    el: '#app',
    router: router,
    i18n: i18n,
    components: { 
      App: App 
    },
    template: '<App/>'
  })
})
