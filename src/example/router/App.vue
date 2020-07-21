<template>
  <div>
    <!-- <router-link to="/header">go to head</router-link>
    <br />
    <router-link to="/footer">go to foot</router-link>
    <br />
    <router-link to="/info">go to info</router-link>-->
    <Head></Head>
    <!-- <home></home> -->
    <router-view></router-view>
    <foot></foot>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
// import home from './home.vue'
import foot from './footer.vue'
import Head from './header.vue'
export default {
  name: 'App',
  components: {
    // home,
    foot,
    Head
  },
  computed: {

  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
<style></style>
