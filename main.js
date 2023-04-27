import App from './App'
import '@/assets/font/text.css'
import 'vant/lib/index.css'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App,
})
app.$mount()
// #endif
// #ifdef VUE3
import { createSSRApp } from 'vue'

import { Sidebar, SidebarItem } from 'vant'

export function createApp() {
  const app = createSSRApp(App)
  app.use(Sidebar)
  app.use(SidebarItem)
  return {
    app,
  }
}
// #endif
