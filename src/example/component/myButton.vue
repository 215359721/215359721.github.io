<template>
  <div>
    title:
    <span class="titleClass">{{myTitle}}</span>
    <br />clickTime:
    <span class="countClass">{{count}}</span>
    <br />
    <input type="text" v-model="myTitle" />
    <br />
    <button @click="countUp">You clicked me {{count}} times.</button>
    <br />
    <span class="sl">
      <slot :user="user">【原始内容】</slot>
    </span>
  </div>
</template>>

<script>
export default {
  name: 'my-button',
  props: {
    title: String,
    id: Number
  },
  mixins: {},
  data () {
    return {
      count: 0,
      myTitle: this.title,
      user: {
        name: 'Jim Green',
        age: 28,
        email: 'jim@163.com'
      }
    }
  },
  watch: {
    title (newValue) {
      this.myTitle = this.title
    },
    myTitle (newValue) {
      console.log('watch中myTitle改变' + newValue + ';id:' + this.id)
      var param = {
        id: this.id,
        value: newValue
      }
      this.$emit('changeFather', param)
    }
  },
  methods: {
    countUp: function () {
      this.count++
    },
    fun2: function () {
      console.log('执行子组件中fun2方法')
    }
  }
}
</script>
<style scoped>
div {
  background-color: aquamarine;
  line-height: 30px;
  text-align: center;
}
.countClass {
  font-weight: 900;
  font-size: 13px;
  color: red;
}
.titleClass {
  font-weight: 900;
  font-size: 18px;
  color: rgb(23, 50, 204);
}
button {
  text-align: center;
}
.sl {
  color: red;
}
</style>
