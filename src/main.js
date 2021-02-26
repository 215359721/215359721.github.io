import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Directives from './directive'
import "@/plugins";
import rcyj from 'rcyj-ui'
import 'rcyj-ui/dist/rcyj-ui.css';
import 'vue-event-calendar/dist/style.css'
import vueEventCalendar from 'vue-event-calendar'
// import 'element-ui/lib/theme-chalk/display.css'

Vue.config.productionTip = false
Vue.use(Directives)
Vue.use(rcyj);
Vue.use(vueEventCalendar, { locale: 'zh' })

new Vue({
  router,
  store,
  render: h => h(App),
  // mounted () {
  //   document.dispatchEvent(new Event('render-event'))
  // }
}).$mount('#app')
