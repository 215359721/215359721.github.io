/* eslint-disable no-unused-vars */

import Vue from 'vue';
import Bus from '@/utils/bus'

const isDebug = process.env.VUE_APP_DEBUG === 'debug'
const Plugin = {
  install (Vue, options) {
    // 挂载公共方法-bus($bus)
    const bus = Bus
    Vue.bus = bus
    Object.defineProperty(Vue.prototype, '$bus', {
      get () {
        return bus
      }
    })
    // 挂载公共方法-打印日志($logs)
    const logs = commonLogs
    Vue.logs = logs
    Object.defineProperty(Vue.prototype, '$logs', {
      get () {
        return logs
      }
    })
    // 挂载公共方法-埋点($bury)
    const bury = conmmonBuryingPoint
    Vue.bury = bury
    Object.defineProperty(Vue.prototype, '$bury', {
      get () {
        return bury
      }
    })
    // 挂载公共方法-页面跳转($changePage)
    const changePage = commonChangePage
    Vue.changePage = changePage
    Object.defineProperty(Vue.prototype, '$changePage', {
      get () {
        return changePage
      }
    })
    // 挂载公共方法-页面返回($pageBack)
    const pageBack = commonPageBack
    Vue.pageBack = pageBack
    Object.defineProperty(Vue.prototype, '$pageBack', {
      get () {
        return pageBack
      }
    })
    // 挂载公共方法-判断是否为空($isEmpty)
    const isEmpty = commonIsEmpty
    Vue.isEmpty = isEmpty
    Object.defineProperty(Vue.prototype, '$isEmpty', {
      get () {
        return isEmpty
      }
    })
    // 挂载公共方法-获得params对象数据($paramData)
    const paramData = commonGetParams
    Vue.paramData = paramData
    Object.defineProperty(Vue.prototype, '$paramData', {
      get () {
        return paramData
      }
    })
    // 挂载公共方法-toast($toast)
    const toast = commonShowToast
    Vue.toast = toast
    Object.defineProperty(Vue.prototype, '$toast', {
      get () {
        return toast
      }
    })
    // 挂载公共方法-isInWechat($isInWechat)
    const isInWechat = commonIsInWechat
    Vue.isInWechat = isInWechat
    Object.defineProperty(Vue.prototype, '$isInWechat', {
      get () {
        return isInWechat
      }
    })
    // 挂载公共方法-包含A字符串B($isInclude)
    const isInclude = commonIsInclude
    Vue.isInclude = isInclude
    Object.defineProperty(Vue.prototype, '$isInclude', {
      get () {
        return isInclude
      }
    })
  }
}

const buryArray = []

/**
 *  公共方法-打印日志
 */
const commonLogs = function (str, data) {
  if (isDebug) {
    data ? console.log('【commLog】' + str, data) : (typeof str === 'object' ? console.log('【commLog】', str) : console.log('【commLog】' + str))
  }
}
/**
 *  公共方法-埋点
 *  option{} 埋点数据
 *  在localStronge记录用户操作日志及埋点数据
 */
const conmmonBuryingPoint = function (option) {
  buryArray.push(option.content)
  if (buryArray.length) {
    Vue.ls.set('buryPoint', buryArray)
  }
}

/**
 *  公共方法-页面跳转
 */
const commonChangePage = function (option) {
  if (typeof (option) === 'string') {
    this.$router.push({ path: option })
  } else {
    option.url = option.url || ''
    option.type = option.type || 'push'
    option.delta = option.delta || 1
    option.params = option.params || {}
    if (option.type.trim() === 'push') {
      this.$router.push({ path: option.url, params: option.params })
    }
    if (option.type.trim() === 'replace') {
      this.$router.replace({ path: option.url, params: option.params })
    }
  }
}
/**
 *  公共方法-页面返回
 */
const commonPageBack = function (backNum) {
  backNum = backNum || 1
  window.history.back(-1)
}
/**
 *  公共方法-判断是否为空
 */
const commonIsEmpty = function (value) {
  switch (typeof value) {
    case 'undefined':
      return true;
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length === 0) return true;
      break;
    case 'boolean':
      if (!value) return true;
      break;
    case 'number':
      if (value === 0 || isNaN(value)) return true;
      break;
    case 'object':
      if (value === null || value.length === 0) return true;
      for (var i in value) {
        return false;
      }
      return true;
  }
  return false;
}
/**
 *  公共方法-获取store中params对象
 */
const commonGetParams = function () {
  return this.$store.state.params
}
/**
 *  公共方法-显示Toast
 */
const commonShowToast = function (option) {
  if (typeof (option) === 'string') {
    this.$message.success(option)
  } else {
    option.type = option.type || 'success'
    option.content = option.content || ''
    option.icon = option.icon || ''
    option.top = option.top || '10px'
    option.duration = option.duration || 2
    option.maxCount = option.maxCount || 9
    option.onClose = option.onClose || function () { }
    const config = {
      content: option.content,
      duration: option.duration,
      icon: option.icon,
      onClose: option.onClose
    }
    this.$message.config({
      top: option.top,
      maxCount: option.maxCount
    })
    switch (option.type.trim()) {
      case 'success':
        this.$message.success(config)
        break;
      case 'error':
        this.$message.error(config)
        break;
      case 'warn':
        this.$message.warn(config)
        break;
      default:
        this.$message.success(config)
    }

  }
}
/**
 *  公共方法-判断是否在微信中（使用的微信内置浏览器）[仅限H5使用]
 */
const commonIsInWechat = function () {
  let flag = false
  // #ifdef H5
  var ua = navigator.userAgent.toLowerCase();
  var isWeixin = ua.indexOf('micromessenger') !== -1;
  if (isWeixin) {
    flag = true
  }
  // #endif
  return flag
}
/**
 *  公共方法-包含A字符串B
 */
const commonIsInclude = function (Astr, Bstr) {
  return Astr.indexOf(Bstr) !== -1
}
Vue.use(Plugin)
