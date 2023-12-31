/*!

=========================================================
* BootstrapVue Argon Dashboard - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/bootstrap-vue-argon-dashboard
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from 'vue';
import DashboardPlugin from './plugins/dashboard-plugin';
import App from './App.vue';
import VCharts from 'v-charts'
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  ak: 'QBdl4bnuDVgAchd3AoohXPKLe2FooIcV'
})
Vue.use(VCharts)

import "./assets/open.css"
import VueKinesis from 'vue-kinesis'

Vue.use(VueKinesis)
import {
  SharedElementRouteGuard,
  SharedElementDirective,
  createSharedElementDirective
} from 'v-shared-element'

Vue.use(SharedElementDirective)
// axios
import axios from 'axios'
Vue.prototype.$axios = axios 
// router setup
import router from './routes/router';
router.beforeEach(SharedElementRouteGuard)

import VWave from 'v-wave'

Vue.use(VWave)

import Print from 'vue-print-nb'
Vue.use(Print)

import downloadHtmlToPdf from '@/util/downloadHtmlToPdf'
Vue.use(downloadHtmlToPdf)
import downloadHtmlToPdf_copy from '@/util/downloadHtmlToPdf_copy'
Vue.use(downloadHtmlToPdf_copy)

// plugin setup
Vue.use(DashboardPlugin);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
});
