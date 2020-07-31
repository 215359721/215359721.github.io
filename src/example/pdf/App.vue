<template>
  <div>
    <pdf
      v-for="i in numPages"
      :key="i"
      :src="src"
      :page="i"
    />
  </div>
</template>
<script>
import pdf from 'vue-pdf'
var loadingTask = pdf.createLoadingTask('pdf/user2.pdf')
export default {
  name: 'App',
  components: {
    pdf
  },
  data () {
    return {
      src: loadingTask,
      numPages: undefined
    }
  },
  mounted () {
    this.src.promise.then(pdf => {
      this.numPages = pdf.numPages
    })
  },
  methods: {
  }
}
</script>
