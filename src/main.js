import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import config from '@/config'
import './permission' // permission control
import VueI18n from 'vue-i18n'
import messages from './local'
import moment from "moment"
// import $ from 'jquery'

import '@/icons' // icon

Vue.config.productionTip = false

Vue.prototype.$config = config

Vue.prototype.$moment = moment


Vue.use(VueI18n)
Vue.use(ElementUI)

const i18n = new VueI18n({
  local: 'zh', // 设置语言 
  fallbackLocale: 'zh',
  messages
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
