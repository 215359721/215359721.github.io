<template>
  <div>
    <input type="text" placeholder="输入姓名" v-model="message" />
    <br />
    1个过滤器{{message | firstNumLock('t2') }}
    <br />
    2个过滤器{{message | firstNumLock('t2') | allNumLock('D2','D3')}}
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      message: ''
    }
  },
  filters: {
    /**
     *首字符大写
     */
    firstNumLock: function (arg0, arg1 = 'empty', arg2 = 'empty') {
      console.log('【firstNumLock】arg0:' + arg0 + ';arg1:' + arg1 + ';arg2:' + arg2)
      return arg0.charAt(0).toUpperCase() + arg0.slice(1)
    },
    /**
     * 所有字母转大写
     */
    allNumLock: function (arg0, arg1 = 'empty', arg2 = 'empty') {
      console.log('【allNumLock】arg0:' + arg0 + ';arg1:' + arg1 + ';arg2:' + arg2)
      return arg0.toUpperCase()
    }
  }
}
</script>
<style scoped>
</style>
