<template>
  <div>
    store中的值{{this.$store.state.count}}
    <!-- computed中的bkID:{{getBD}} -->
    <br />
    <button @click="this.fun1">点击</button>
  </div>
</template>

<script>
// import mapGetters from 'vuex'
export default {
  name: 'app',
  data () {
    return {}
  },
  computed: {
    // ...mapGetters(['showbankId'])
    // getBD: function () {
    //   console.log('computed')
    //   return this.$store.getters.getBkID()
    // }
  },
  methods: {
    fun1: function () {
      console.log('store的值:' + this.$store.state.count)
      this.$store.commit('addCount', Math.random(100))
    }
  }
}
</script>
<style>
</style>
