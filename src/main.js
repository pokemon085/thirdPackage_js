import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import SlideVerify from 'vue-monoplasty-slide-verify';
import VueAwesomeSwiper from 'vue-awesome-swiper'
// If you use Swiper 6.0.0 or higher
import 'swiper/swiper-bundle.css'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.use(SlideVerify);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
