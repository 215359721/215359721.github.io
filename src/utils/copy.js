
const copyH5 = (text) => {
  return new Promise(resolve => {
    const copy = require('copy-text-to-clipboard')
    copy(text)
    resolve()
  })
}

/**
 * @param text 复制的文本
 * @param isToast 是否显示toast
 */
export default (text = '', isToast = true) => {
  return new Promise(resolve => {
    let _copy = null
    _copy = copyH5
    _copy(text).then(() => {
      if (isToast) {
        alert('复制成功')
      }
      resolve()
    })
  })
}
