<template>
  <div>
    <button ref="children" @click="buttonClick">单独的按钮</button>
  </div>
</template>
<script>
export default {
  name: 'single-button',
  props: {

  },
  data () {
    return {
      fatherMsg: '子组件改变了父组件的值！'
    }
  },
  methods: {
    buttonClick: function () {
      this.$parent.fatherAlert(this.fatherMsg)
      console.log(this.$refs.children.textContent)
    },
    childAlert: function () {
      console.log('子组件childAlert被访问了')
    }
  }
}
</script>
<style scoped>
div {
  border: 2px #000 dotted;
  background-color: darkkhaki;
  text-align: center;
  height: 50px;
}
button {
  border: 1px black solid;
  font-size: 16px;
  width: 150px;
  background-color: red;
  color: #fff;
}
</style>
