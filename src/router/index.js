import Vue from 'vue'
import Router from 'vue-router'
import BlogList from '@/components/blog/list'
import Post from '@/components/blog/post'
import Page from '@/components/page'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      alias: '/blog',
      name: 'Home',
      component: BlogList
    },
    {
      path: '/blog/:slug',
      name: 'Post',
      component: Post
    },
    {
      path: '/:slug',
      name: 'Page',
      component: Page
    }
  ]
})
