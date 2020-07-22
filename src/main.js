import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'default-passive-events'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//引入iconfont
let iconfontUrl = "//at.alicdn.com/t/font_1919593_853l4zljfzp.js"
const remoteScript = document.createElement('script')
remoteScript.type = 'text/JavaScript'
remoteScript.src = iconfontUrl
document.body.appendChild(remoteScript)

