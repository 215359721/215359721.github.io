import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    commonCount: 100
  },
  mutations: {
    commonAdd () {
      console.log('store commonAdd')
      this.state.commonCount += 100
    }
  },
  actions: {
  },
  modules: {
  }
})
