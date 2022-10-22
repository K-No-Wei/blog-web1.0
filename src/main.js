import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/reset.css'
Vue.config.productionTip = false
import Share from 'vue-social-share'
import 'vue-social-share/dist/client.css';
Vue.use(Share)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
