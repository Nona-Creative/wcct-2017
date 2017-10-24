<template>
  <div class="post" v-if="post" v-html="post[0].content.rendered"></div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        post: null
      }
    },
    created () {
      this.fetchData()
    },
    watch: {
      '$route' () {
        this.fetchData()
      }
    },
    methods: {
      fetchData () {
        axios.get(`http://localhost/wp-json/wp/v2/pages?slug=${this.$route.params.slug}`)
          .then(response => {
            this.post = response.data
          })
      }
    }
  }
</script>
