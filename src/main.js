import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'default-passive-events'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI)

//定义全局随机Border指令
Vue.directive('randomBorderColor', {
    inserted: function (el) {
        let colors = ['#ff5722', '#795548', '#9c27b0', '#ff9800', '#e91e63'];
        const randomNum = Math.ceil(Math.random() * 4)
        //取预制颜色并赋值
        el.setAttribute('style', 'border-color:' + colors[randomNum] + ';');
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

//引入iconfont
let iconfontUrl = "//at.alicdn.com/t/font_1919593_jf57puzqmrn.js"
const remoteScript = document.createElement('script')
remoteScript.type = 'text/JavaScript'
remoteScript.src = iconfontUrl
document.body.appendChild(remoteScript)

