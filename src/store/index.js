import Vue from 'vue'
import Vuex from 'vuex'
import { parseQueryString } from '@/utils/url'
import { KEY_ACCESS_TOKEN, KEY_ACCESS_TOKEN_EXPIRED } from '../constants/common'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    params: null // 页面跳转过来携带的 params 参数
  },
  mutations: {
    UPDATE_PARAMS (state, params) {
      state.params = params
    }
  },
  actions: {
    invokeParams ({ commit }, url) {
      const query = parseQueryString(url || location.href)
      const base64String = decodeURIComponent(query.params)
      try {
        const params = JSON.parse(atob(base64String)) // base64解码
        Vue.ls.set(KEY_ACCESS_TOKEN, params.token, KEY_ACCESS_TOKEN_EXPIRED)
        commit('UPDATE_PARAMS', params)
      } catch {
        Vue.ls.remove(KEY_ACCESS_TOKEN)
        commit('UPDATE_PARAMS', null)
      }
    }
  }
})
