import Vue from 'vue'
import App from './App.vue'
import elementio from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ru-RU'
import 'element-ui/lib/theme-chalk/index.css'

// import VueSlideBar from 'App'

// Vue.component('anketa', VueSlideBar)

Vue.config.productionTip = false

Vue.use(elementio, {locale});
new Vue({
  render: h => h(App),
}).$mount('#app')
