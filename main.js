import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入iconfont
import './assets/iconfont.css'

import { Icon } from 'vant';
import 'vant/lib/button/style';
Vue.use(Icon);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
