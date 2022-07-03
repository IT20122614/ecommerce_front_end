import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
var VueCookie = require('vue-cookie');
import VueResizeText from 'vue-resize-text';

Vue.use(VueResizeText)
import VueZoomer from 'vue-zoomer'

import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.config.productionTip = false
Vue.use(VueCookie);
Vue.use(VueZoomer);
Vue.component('apexChart', VueApexCharts)
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
