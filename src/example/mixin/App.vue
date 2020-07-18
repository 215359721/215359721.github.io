<template>
  <div>
    <button @click="buttonCli">按钮点击</button>
    <br />
    <my-input></my-input>
  </div>
</template>

<script>
import myInput from './myInput.vue'
var myMixin = {
  data () {
    return {
      person: {
        age: 25,
        email: 'tome@163.com'
      }
    }
  },
  created: function () {
    console.log('mix created')
  },
  methods: {
    mixFun1: function () {
      console.log('mix function 1')
    },
    defFun2: function () {
      console.log('mix function 2')
    }
  }
}
export default {
  name: 'App',
  mixins: [
    myMixin
  ],
  components: {
    myInput
  },
  data () {
    return {
      person: {
        name: 'Tom',
        age: 18
      }
    }
  },
  created: function () {
    console.log('self created')
  },
  methods: {
    defFun1: function () {
      console.log('self function 1')
    },
    defFun2: function () {
      console.log('self function 2')
    },
    buttonCli: function () {
      console.log(this.person)
      this.mixFun1()
      this.defFun1()
      this.defFun2()
    }
  }
}
</script>
<style scoped>
</style>
