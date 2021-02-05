import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Set API URL

// Vue.prototype.apiurl = "http://localhost:4000"
Vue.prototype.apiurl = "https://testapi.jearally.com"

// Import Bootstrap

import "bootstrap/dist/css/bootstrap-grid.css";

// Import Vue Formulate

import VueFormulate from '@braid/vue-formulate'
Vue.use(VueFormulate)
import "@braid/vue-formulate/dist/snow.min.css";

// Import Vue Notifications

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
Vue.use(VueToast, {
  position: 'top',
  duration: 2000
})

// Import Vue Meta

import VueMeta from 'vue-meta'
Vue.use(VueMeta)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
