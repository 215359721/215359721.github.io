<template>
  <div>
    <srLogin />
  </div>
</template>

<script>
import srLogin from '@/components/sr-login/srLogin'
export default {
  components: {
    srLogin
  },
  data () {
    return {
      key: ''
    }
  },
  computed: {

  },
  mounted () {
    console.log('process.env.VUE_APP_DEBUG:' + process.env.VUE_APP_DEBUG);
    this.$logs('mounted')
    this.$ls.set('key', '111111')
  },
  methods: {
    /**
    * 这是function名称
    * 这是params描述
    */
    func: function () {

    }
  }
}

</script>
<style lang='scss'>
</style>
