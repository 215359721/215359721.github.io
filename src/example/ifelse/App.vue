<template>
  <div>
    <h1>条件分支</h1>
    <span>value: {{textVal}}</span>
    <br />
    <input type="text" v-model="textVal" />
    <br />
    <div class="t-red" v-if="Number(textVal) >0 && Number(textVal) <100"></div>
    <div class="t-green" v-else-if="Number(textVal) >=100 && Number(textVal) <1000"></div>
    <div class="t-black" v-else></div>
    <div class="t-long-red" v-show="Number(textVal) > 0 && Number(textVal) < 500"></div>
    <div class="t-long-green" v-show="Number(textVal) >= 500"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      textVal: ''
    }
  },
  methods: {

  }
}
</script>

<style scoped>
div {
  line-height: 40px;
}
.t-red {
  display: inline-block;
  height: 50px;
  width: 50px;
  background-color: red;
}
.t-green {
  display: inline-block;
  height: 50px;
  width: 50px;
  background-color: green;
}
.t-black {
  display: inline-block;
  height: 50px;
  width: 50px;
  background-color: #000;
}
.t-long-red {
  height: 50px;
  width: 150px;
  background-color: red;
}
.t-long-green {
  height: 50px;
  width: 150px;
  background-color: green;
}
</style>
