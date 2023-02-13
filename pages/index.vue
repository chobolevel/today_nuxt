<template>
  <div>
    <post v-for="(diary) in diaryList" :item="diary" :key="diary.id"/>
  </div>
</template>

<script>
import {DiaryMixins} from "../mixins";
import Post from "../components/diary/post.vue";

export default {
  components: {Post},
  async asyncData({ store }) {
    await store.dispatch('diary/searchList')
  },
  mixins: [DiaryMixins],
  head() {
    return {
      link: [
        { rel: 'stylesheet', href: '/css/diary/diary_form.css' }
      ]
    }
  }
}
</script>
