import Vue from 'vue'
import VueMaterial from 'vue-material'
import VueDraggable from 'vue-draggable'
import App from './App.vue'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueDraggable)
Vue.use(VueMaterial)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
