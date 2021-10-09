import Vue from 'vue'
import App from './App.vue'
import WlUI from '../packages'


Vue.config.productionTip = false
Vue.use(WlUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
