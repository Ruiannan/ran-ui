import Vue from 'vue'
import App from './App.vue'

import CandiesButton from './index'

Vue.use(CandiesButton)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')