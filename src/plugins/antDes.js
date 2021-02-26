
import Vue from 'vue'
import 'ant-design-vue/dist/antd.css'
import {
  Layout,
  Menu,
  message,
  Icon,
  Breadcrumb,
  Tabs,
  Card,
  Calendar,
  Badge,
  Button,
  Radio,
  Collapse,
  Drawer,
  Slider,
  InputNumber,
  Row,
  Col,
  Input,
  DatePicker,
  Select,
  Checkbox,
  Empty,
} from 'ant-design-vue'

Vue.prototype.$message = message;
message.config({
  top: `10px`,
  duration: 2,
  maxCount: 3,
});
Vue.use(Layout)
Vue.use(Menu)
Vue.use(message)
Vue.use(Icon)
Vue.use(Breadcrumb)
Vue.use(Tabs)
Vue.use(Card)
Vue.use(Calendar)
Vue.use(Badge)
Vue.use(Button)
Vue.use(Radio)
Vue.use(Collapse)
Vue.use(Drawer)
Vue.use(Slider)
Vue.use(InputNumber)
Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.use(DatePicker)
Vue.use(Select)
Vue.use(Checkbox)
Vue.use(Empty)
