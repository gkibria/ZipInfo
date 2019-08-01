import Vue from 'vue'
import Ionic from '@ionic/vue'
import App from './App.vue'
import router from './router'
import '@ionic/core/css/core.css'

Vue.use(Ionic)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
