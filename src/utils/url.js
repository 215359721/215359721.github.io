/**
 * 获得当前页面参数对象
 */
export const parseQueryString = (url) => {
  const _url = decodeURIComponent(url)
  const obj = {}
  let keyvalue = []
  let key = ''; let value = ''
  const paraString = _url.substring(url.indexOf('?') + 1, url.length).split('&')
  for (const i in paraString) {
    keyvalue = paraString[i].split('=')
    key = keyvalue[0]
    value = keyvalue[1]
    obj[key] = value
  }
  return obj
}
