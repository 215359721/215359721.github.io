import axios from 'axios'
const config = {
  timeout: 60 * 1000
}
const myAxios = axios.create(config)
const post = function (url, data, config) {
  return myAxios.post(url, data, config)
}
const get = (url, config) => {
  return myAxios.get(url, config)
}
export {
  myAxios as axios,
  post,
  get
}
