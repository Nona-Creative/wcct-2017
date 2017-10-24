<template>
  <ul v-if="navigation">
    <li v-for="navItem in navigation.items">
      <router-link :to="{ path: getRelativeURL(navItem.url) }">{{ navItem.title }}</router-link>
    </li>
  </ul>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        navigation: null
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      fetchData () {
        axios.get('http://localhost/wp-json/wp-api-menus/v2/menus/176')
          .then(response => {
            this.navigation = response.data
          })
      },
      getRelativeURL (absoluteURL) {
        const domain = window.location.hostname
        const protocol = window.location.protocol
        return absoluteURL.replace(`${protocol}//${domain}`, '')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
