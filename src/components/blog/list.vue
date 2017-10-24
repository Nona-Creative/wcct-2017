<template>
  <ul v-if="blogPosts">
    <li v-for="post in blogPosts">
      <article>
        <router-link :to="`blog/${post.slug}`">
          <div class="summary">
            <h2 v-html="post.title.rendered"></h2>
            <div class="excerpt" v-html="post.excerpt.rendered"></div>
          </div>
        </router-link>
      </article>
    </li>
  </ul>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        blogPosts: null
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      fetchData () {
        axios.get('http://localhost/wp-json/wp/v2/posts')
          .then(response => {
            this.blogPosts = response.data
          })
      }
    }
  }
</script>
