import Vue from 'vue'
import App from './App.vue'

import CandiesButton from './index'
import SlideLogin from './index'

Vue.use(CandiesButton)
Vue.use(SlideLogin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')