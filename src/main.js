import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue,BootstrapVueIcons} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {store} from './store/store'
import VueRouter from 'vue-router'
import Route from './routes.js'

Vue.use(VueAxios,axios)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueRouter);

const routes=new VueRouter({
  routes:Route,
  mode:'history'
});

new Vue({
  store:store,
  router:routes,
  render: h => h(App),
}).$mount('#app')
