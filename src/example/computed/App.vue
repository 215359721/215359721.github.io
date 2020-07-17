<template>
  <div>
    <h1>计算属性</h1>
    <span>inputStr: {{inputStr}}</span>
    <br />
    <input type="text" v-model="inputStr" />
    <button>提交</button>
    <br />
    <ul>
      <li v-for="word in getWordByString" :key="word">{{word}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      inputStr: '',
      wordsArr: [1, 2, 3, 4, 5]
    }
  },
  computed: {
    getWordByString: {
      get: function () {
        var myArr = []
        this.inputStr.split(' ').map(function (value, index, data) {
          myArr.push(value)
        })
        return myArr
      },
      set: function (myArr) {
        console.log('set 执行')
        console.log('set value:' + myArr)
        this.wordsArr = myArr
      }
    }
  },
  watch: {
    inputStr: function () {
      console.log('watch inputStr执行')
    }
  },
  methods: {

  }
}
</script>
