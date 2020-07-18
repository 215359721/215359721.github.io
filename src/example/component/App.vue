<template>
  <div>
    <div class="outer">
      <input type="text" v-model="fatherTitle_1" />
      <myButton :title="fatherTitle_1" :id="1" @changeFather="fun1"></myButton>
    </div>
    <div class="outer">
      <input type="text" v-model="fatherTitle_2" />
      <myButton :title="fatherTitle_2" :id="2" @changeFather="fun1"></myButton>
    </div>
    <div class="outer">
      <input type="text" v-model="fatherTitle_3" />
      <myButton :title="fatherTitle_3" :id="3" @changeFather="fun1"></myButton>
    </div>
    <my-button #default="userObj">
      <!-- <template > -->
      {{userObj.user.name}}-{{userObj.user.age}}-{{userObj.user.email}}
      <br />
      这是插套的内容{{slotValue}}
      <!-- </template> -->
    </my-button>
    <div class="outer">
      <button @click="visitChild">改变子组件</button>
      <span class="label">{{labelText}}</span>
      <br />
      <single-button ref="demo"></single-button>
    </div>
  </div>
</template>

<script>
import myButton from './myButton.vue'
import singleButton from './singleButton.vue'
export default {
  name: 'App',
  data () {
    return {
      fatherTitle_1: '第1个父元素值',
      fatherTitle_2: '第2个父元素值',
      fatherTitle_3: '第3个父元素值',
      slotValue: 999,
      labelText: 'test'
    }
  },
  methods: {
    fun1: function (obj) {
      console.log('执行父组件中fun1方法' + obj.value)
      if (Number(obj.id) === 1) {
        this.fatherTitle_1 = obj.value
      } else if (Number(obj.id) === 2) {
        this.fatherTitle_2 = obj.value
      } else if (Number(obj.id) === 3) {
        this.fatherTitle_3 = obj.value
      }
    },
    fatherAlert: function (msg) {
      console.log(msg || 'this is fathers method!')
    },
    visitChild: function () {
      this.$refs.demo.childAlert()
    }
  },
  components: { myButton, singleButton }
}

</script>
<style scoped>
.outer {
  background-color: rgb(195, 162, 226);
  line-height: 40px;
  margin: 10px 10px 10px 10px;
  border: 2px solid #000;
  width: 200px;
  padding: 10px;
  display: inline-block;
  text-align: center;
}
</style>
