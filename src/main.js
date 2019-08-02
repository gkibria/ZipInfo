import Vue from 'vue'
import Ionic from '@ionic/vue'
import App from './App.vue'
import router from './router'
import '@ionic/core/css/core.css'
import { addIcons } from "ionicons";
import { star, trash, create, helpCircle } from "ionicons/icons";

Vue.use(Ionic)
addIcons({
  "ios-star": star.ios,
  "md-star": star.md,
  "ios-trash": trash.ios,
  "md-trash": trash.md,
  "ios-create": create.ios,
  "md-create": create.md,
  "ios-help-circle": helpCircle.ios,
  "md-help-circle": helpCircle.md
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
