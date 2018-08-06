import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import BuyModalComponent from '@/components/Shared/BuyModal'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

import router from './router'
import store from './store'

Vue.use(Vuetify)
Vue.component('app-buy-modal', BuyModalComponent)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyDInkhsP4MrGbyoum0-Pys4fjoJeq75P38',
      authDomain: 'its-ad-project.firebaseapp.com',
      databaseURL: 'https://its-ad-project.firebaseio.com',
      projectId: 'its-ad-project',
      storageBucket: 'its-ad-project.appspot.com',
      messagingSenderId: '445844475570'
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')
  }
})
