<template>
  <div>
    <h1>apis</h1>
    <div>{{message}}</div>
    <button @click="updateBtn">更新</button>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      message: 'hello this is nextTick test'
    }
  },
  methods: {
    updateBtn: function () {
      this.message = '更新了'
    }
  }
}
</script>
