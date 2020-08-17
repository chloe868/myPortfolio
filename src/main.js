import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import VueTypedJs from 'vue-typed-js'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import * as mdbvue from 'mdbvue'
for (const component in mdbvue) {
  Vue.component(component, mdbvue[component])
}

Vue.use(BootstrapVue)
Vue.use(VueTypedJs)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router: router,
  template: '<router-view></router-view>'
}).$mount('#app')
