<template>
  <div class="container">
    <Header/>
    <section>
      <nuxt class="main_content"/>
    </section>
  </div>
</template>

<script>
import Header from "../components/common/header.vue";

export default {
  name: "Default",
  components: {Header},
  head() {
    return {
      link: [
        { rel: 'stylesheet', href: '/css/style.css' }
      ]
    }
  }
}
</script>
