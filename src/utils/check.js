import Vue from "vue";
/**
 * 通用输入合法性校验
 * desc：要校验的对象(String)
 * rule：校验的规则(emp:常规判空|tel:电话号码|idnum:身份证号|msgcode:短信验证码|email:邮箱|number:判断数字)
 */
export function checkInput (desc, rule) {
  var flag = true
  switch (rule) {
    case 'emp':
      if (isEmpty(desc)) {
        Vue.toast('输入框内容不能为空')
      }
      break
    case 'tel':
      if (isEmpty(desc)) {
        Vue.toast('手机号码不能为空')
        flag = false
        return
      }
      if (isTelphone(desc)) {
        Vue.toast('请输入正确格式的手机号码')
        flag = false
        return
      }
      break
    case 'msgcode':
      if (isEmpty(desc)) {
        Vue.toast('短信验证码不能为空')
        flag = false
        return
      }
      if (isLessThan(desc, 6)) {
        Vue.toast('请输入6位验证码')
        flag = false
        return
      }
      break
    case 'email':
      if (isEmpty(desc)) {
        Vue.toast('邮箱不能为空')
        flag = false
        return
      }
      if (isEmail(desc)) {
        Vue.toast('请输入正确邮箱格式')
        flag = false
        return
      }
      break
    case 'idnum':
      if (isEmpty(desc)) {
        Vue.toast('身份证号不能为空')
        flag = false
        return
      }
      if (isIdNumber(desc)) {
        Vue.toast('请输入正确身份证号格式')
        flag = false
        return
      }
      break
    case 'number':
      if (isNumber(desc)) {
        Vue.toast('只允许输入数字')
        flag = false
        return
      }
      break
  }
  return flag
}

/**
 * 判空
 * desc:判断对象
 */
function isEmpty (desc) {
  const reg = new RegExp(/^\s*$/)
  return reg.test(desc)
}

/**
 * 判断纯数字
 * desc:判断对象
 */
function isNumber (desc) {
  const reg = new RegExp(/^[0-9]*$/)
  return reg.test(desc)
}

/**
 * 判断至少n位
 * desc:判断对象
 * n：至少n位
 */
function isLessThan (desc, n) {
  const reg = new RegExp(/^\d{6}$/)
  return !reg.test(desc)
}

/**
 * 判断邮箱
 * desc:判断对象
 */
function isEmail (desc) {
  const reg = new RegExp(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)
  return !reg.test(desc)
}

/**
 * 判断手机号码
 * desc:判断对象
 */
function isTelphone (desc) {
  const reg = new RegExp(/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/)
  return !reg.test(desc)
}

/**
 * 判断身份证号码
 * desc:判断对象
 */
function isIdNumber (desc) {
  const reg = new RegExp(/^\d{8,18}|[0-9x]{8,18}|[0-9X]{8,18}?$/)
  return !reg.test(desc)
}
