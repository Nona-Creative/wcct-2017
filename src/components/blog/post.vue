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
    methods: {
      fetchData () {
        axios.get(`http://localhost/wp-json/wp/v2/posts`)
          .then(response => {
            this.post = response.data
          })
      }
    }
  }
</script>
