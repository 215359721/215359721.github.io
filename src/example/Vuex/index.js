import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)
const ST = new Vuex.Store({
  state: {
    count: 0,
    bankID: '800'
  },
  getters: {
    showbankId: state => state.bankID,
    getBkID: function () {
      console.log('getters-getBkID')
      // return this.state.bankID
    }
  },
  mutations: {
    addCount: function (state, num) {
      console.log('store - addCount:' + parseInt(num * 100))
      state.count++
    }
  },
  actions: {

  }
})
new Vue({
  render: h => h(App),
  store: ST
}).$mount('#app')
