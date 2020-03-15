import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import router from './router'

import './style/style.css'

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
