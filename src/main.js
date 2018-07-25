import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import * as fb from 'firebase'

import router from './router'
import store from './store'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    const config = {
      apiKey: 'AIzaSyDInkhsP4MrGbyoum0-Pys4fjoJeq75P38',
      authDomain: 'its-ad-project.firebaseapp.com',
      databaseURL: 'https://its-ad-project.firebaseio.com',
      projectId: 'its-ad-project',
      storageBucket: 'its-ad-project.appspot.com',
      messagingSenderId: '445844475570'
    }
    fb.initializeApp(config)
  }
})
