/* eslint-disable no-unused-vars */
'use strict'

import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import { KEY_ACCESS_TOKEN } from '@/constants/common'
import loading from '@/utils/loading'
import { message } from 'ant-design-vue'

message.config({
  top: `10px`,
  duration: 2,
  maxCount: 3,
});

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || '',
  timeout: 60 * 1000, // Timeout
  validateStatus: function (status) {
    return status >= 200 && status < 300
  },
  crossDomain: true
  // withCredentials: true, // Check cross-site Access-Control
}

const _axios = axios.create(config)
_axios.defaults.headers.post['Content-Type'] = 'application/json'

const errorHandler = (error) => {
  console.log('请求失败:', error)
  loading.hide()
  message.error(`${error}`)
  return Promise.reject(error)
}

_axios.interceptors.request.use(
  function (config) {
    if (config.www) {
      config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    loading.show()
    const token = Vue.ls.get(KEY_ACCESS_TOKEN)
    // Do something before request is sent
    if (config.method === 'post' && config.www) {
      config.data = qs.stringify(config.data)
    }
    if (token) {
      config.headers.token = token
    }
    config.headers = {
      ...config.headers,
    }
    return config
  },
  errorHandler
)

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    console.log('请求成功')
    loading.hide()
    return Promise.resolve(response)
  },
  errorHandler
)

const Plugin = {
  install (Vue, options) {
    Vue.axios = _axios
    window.axios = _axios
    Object.defineProperties(Vue.prototype, {
      axios: {
        get () {
          return _axios
        }
      },
      $axios: {
        get () {
          return _axios
        }
      }
    })
  }
}

Vue.use(Plugin)

export default Plugin

const post = function (url, data, config) {
  return _axios.post(url, data, config)
}

const get = (url, config = {}) => {
  return _axios.get(url, config)
}

const request = function (config) {
  return _axios.request(config)
}

export {
  _axios as axios,
  request,
  post,
  get
}
