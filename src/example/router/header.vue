<template>
  <div class="head">
    <h3>This is Header Page</h3>
    <div class="rl">
      <router-link :to="{name:'home',params:{per:person}}">home</router-link>
      <router-link to="/header" style="margin-left:10px;">header</router-link>
      <router-link to="/info" style="margin-left:10px;">info</router-link>
      <router-link to="/footer" style="margin-left:10px;">footer</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Head',
  data () {
    return {
      person: {
        id: 9,
        name: 'tome',
        age: 18,
        email: 'tome@163.com'
      }
    }
  }
}
</script>
<style scoped>
.head {
  background-color: darkturquoise;
  text-align: center;
  height: 150px;
}
.rl {
  background-color: rgb(198, 241, 2);
  height: 50px;
}
</style>
