<template>
  <div class="home">
    <h1>this is Home Page</h1>
    <br />
    {{JSON.stringify(this.$route.params.per)}}
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  mounted () {
    console.log('home mounted:' + JSON.stringify(this.$route.params.per))
  }
}
</script>
<style scoped>
.home {
  background-color: bisque;
  text-align: center;
  height: 400px;
}
</style>
