<template>
  <div>
    <post-form v-for="(diary) in diaryList" :item="diary" :key="diary.id"/>
  </div>
</template>

<script>
import {DiaryMixins} from "../mixins";
import PostForm from "../components/diary/postForm.vue";

export default {
  components: {PostForm},
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
