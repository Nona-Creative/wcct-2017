<template>
  <div id="app">
    <site-header></site-header>
    <main>
      <router-view/>
    </main>
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteHeader from '@/components/header/siteHeader'
import SiteFooter from '@/components/siteFooter'

export default {
  name: 'app',
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>

<style>
  #app {
    font-family: 'open sans', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  main {
    max-width: 800px;
    margin: 0 auto;
    text-align: justify;
  }

  .post a,
  .excerpt a {
    display: inline;
    color: #42b983;
    text-decoration: none;
    border: none;
  }

  figure {
    max-width: 100%;
  }

  img {
    max-width: 100%;
    height: 100%;
  }

  a {
    color: #2c3e50;
    text-decoration: none;
    margin: 32px 0;
    display: block;
    transition: color 0.3s;
    border-bottom: 1px solid #f1f1f1;
  }

  a:hover {
    color: #42b983;
  }

  li {
    list-style: none;
  }
</style>
