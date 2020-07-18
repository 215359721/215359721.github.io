<template>
  <div>
    <input type="number" placeholder="请输入数值" v-model="count" v-focus />
    <div class="innerDIV" v-info:[count]="count"></div>
  </div>
</template>
<script>
export default {
  name: 'my-input',
  data () {
    return {
      message: 'this is message',
      count: 50
    }
  },
  directives: {
    focus: {
      inserted: function (el, binding, vnode) {
        el.focus()
      }
    },
    info: {
      inserted: function (el, binding, vnode) {
        var format = JSON.stringify
        var htmlString = '<span>name:' + format(binding.name) + '</span><br/>' +
          '<span>value:' + format(binding.value) + '</span><br/>' +
          '<span>expression:' + format(binding.expression) + '</span><br/>' +
          '<span>agr:' + format(binding.arg) + '</span><br/>' +
          '<span>modifiers' + format(binding.modifiers) + '</span><br/>'
        el.innerHTML = htmlString
        console.log('count is ' + binding.arg)
      }
    }
  },
  methods: {

  }
}
</script>
<style scoped>
input {
  margin-top: 20px;
}
.innerDIV {
  margin-top: 20px;
  width: 400px;
  height: 400px;
  border: 3px black dotted;
  border-radius: 8px;
  background-color: rgb(199, 184, 164);
}
</style>
