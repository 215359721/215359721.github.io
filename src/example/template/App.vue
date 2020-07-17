<template>
  <div>
    <h1>这是模板语法</h1>
    <button v-on:click="changeShowFlag">点击改变</button>
    <ul>
      <li v-bind:id="1">
        <span class="head">显示data中数据：</span>
        <span class="content">{{msg}}</span>
      </li>
      <li v-if="showFlg" :id="2">
        <span class="head">当前页面状态：</span>
        <span class="content">{{showStatus}}</span>
      </li>
      <li v-show="showFlg">
        <span v-html="htmlStr"></span>
      </li>
      <li>
        <a :href="url">jump to baidu</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: '这是data中的msg',
      status: '',
      visitCount: 0,
      url: 'https://www.baidu.com',
      showFlg: true,
      htmlStr: '<span style="color:red;font-size:20px;">这是内嵌html的内容</span>'
    }
  },
  computed: {
    showStatus: function (messgae) {
      return this.status
    }
  },
  methods: {
    myAlert: function (messgae) {
      console.log('【日志】当前状态:' + messgae)
    },
    changeShowFlag: function () {
      this.showFlg = !this.showFlg
    }
  },
  beforeCreate: function () {
    this.status = 'beforeCreate'
    console.log('【日志】当前状态:' + this.status)
  },
  created: function () {
    this.status = 'created'
    this.myAlert(this.status)
  },
  beforeMount: function () {
    this.status = 'beforeMount'
    this.myAlert(this.status)
  },
  mounted: function () {
    this.status = 'mounted'
    this.myAlert(this.status)
  },
  // beforeUpdate: function () {
  //   this.status = 'beforeUpdate'
  //   this.myAlert(this.status)
  // },
  // updated: function () {
  //   this.status = 'updated'
  //   this.myAlert(this.status)
  // },
  beforeDestroy: function () {
    this.status = 'beforeDestory'
    this.myAlert(this.status)
  },
  destroyed: function () {
    this.status = 'destoryed'
    this.myAlert(this.status)
  }
}
</script>

<style scoped>
ul {
  line-height: 30px;
}
button {
  font-size: 14px;
  color: #ffffff;
  background-color: red;
  border: none;
  padding: 10px;
  border-radius: 4px;
}
.head {
  font-size: 16px;
  font-weight: 900;
}
.content {
  font-size: 14px;
}
</style>>
