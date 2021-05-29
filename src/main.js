import Vue from 'vue'
import App from './App.vue'
import {store} from "@/store"
import { BootstrapVue } from 'bootstrap-vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
    libraries: 'places',
    installComponents: true
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  created() {
    this.$store.dispatch('init')
  }
}).$mount('#app')
