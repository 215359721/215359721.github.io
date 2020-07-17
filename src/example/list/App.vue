<template>
  <div>
    <h1>v-for的使用</h1>
    <input type="text" v-model="name" placeholder="请输入姓名" />
    <input type="number" v-model="age" placeholder="请输入年龄" />
    <input type="text" v-model="email" placeholder="请输入邮箱" />
    <button @click.once="add()">添加</button>
    <ul>
      <li
        v-for="(person,index) in sourceData"
        :key="index"
        :sel_id="index"
      >{{index}} : {{person.name}} - {{person.age}}岁 - 邮箱：{{person.email}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      sourceData: [
        { name: 'Json', age: 18, email: 'json@qq.com' },
        { name: 'Herby', age: 25, email: 'herby@163.com' },
        { name: 'Toms', age: 30, email: 'toms@sina.com' },
        { name: 'Juddy', age: 26, email: 'juddy@qq.com' },
        { name: 'Mody', age: 35, email: 'mody@163.com' }
      ],
      name: '',
      age: '',
      email: ''
    }
  },
  methods: {
    /**
     *  添加对象
     */
    add: function () {
      var obj = {
        name: this.name,
        age: this.age,
        email: this.email
      }
      this.sourceData.push(obj)
      this.name = ''
      this.age = ''
      this.email = ''
    }
  }
}
</script>

<style>
li {
  width: 500px;
  line-height: 30px;
  font-size: 18px;
  border-radius: 5px;
  background-color: aquamarine;
  font-weight: 900px;
  margin: 5px;
  padding: 10px;
}
</style>
