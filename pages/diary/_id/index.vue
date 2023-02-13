<template>
  <div>
    <Post/>{{ this.$route.params.id }}
  </div>
</template>

<script>
import Post from "../../../components/diary/post.vue";

export default {
  async asyncData({ store, query }) {
    await store.dispatch('diary/fetchDiary', query)
  },
  components: {Post}
}
</script>
