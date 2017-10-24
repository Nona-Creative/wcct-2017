<template>
  <header>
    <logo></logo>
    <navigation></navigation>
  </header>
</template>

<script>
  import Logo from '@/components/header/logo'
  import Navigation from '@/components/header/navigation'

  export default {
    components: {
      Logo,
      Navigation
    }
  }
</script>
