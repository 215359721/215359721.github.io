
import { Loading } from 'element-ui';
const options = {
  fullscreen: true,
  // text: '加载中...',
  spinner: 'el-icon-loading',
  background: 'rgba(0, 0, 0, 0.7)'
}
let loading = null
export default {
  show () {
    loading = Loading.service(options);
  },
  hide () {
    loading.close()
  }
}
