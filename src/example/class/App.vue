<template>
  <div>
    <h1>CLass与Style样式的绑定</h1>
    <button @click="changeStatus">改变状态</button>
    <br />
    <span class="text1" :class="{active:textActive}">这里是待激活的内容1</span>
    <br />
    <span class="text2" :class="dangerClass">这里是待激活的内容2</span>
    <br />
    <span
      class="text1"
      :style="{ color: highLightColor,fontSize:highLightSize,backgroundColor:highBgColor}"
    >Style语法</span>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      textActive: false,
      dangerClass: {
        active: false,
        err: false
      },
      highLightColor: 'rgb(250, 1, 1)',
      highLightSize: '30px',
      highBgColor: '#000'
    }
  },
  methods: {
    changeStatus: function () {
      this.textActive = !this.textActive
      this.dangerClass.active = this.textActive
      this.dangerClass.err = this.textActive
      this.highLightColor = this.getRandomColor()
      this.highBgColor = this.getRandomColor()
    },
    getRandomColor: function () {
      return '#' + '0123456789abcdef'.split('').map(function (v, i, a) {
        return i > 5 ? null : a[Math.floor(Math.random() * 16)]
      }).join('')
    }
  }
}
</script>
<style scoped>
div {
  line-height: 65px;
}
.text1 {
  font-size: 16px;
  color: #6f746f;
}
.text2 {
  font-size: 20px;
  color: #fff;
  padding: 10px;
  background-color: saddlebrown;
}
.active {
  color: red;
}
.err {
  font-size: 20px;
  padding: 10px;
  background-color: rgb(51, 255, 0);
}
</style>
