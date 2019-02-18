import Vue from 'vue'
import App from './App.vue'
// import VueSlideBar from 'App'

// Vue.component('anketa', VueSlideBar)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
