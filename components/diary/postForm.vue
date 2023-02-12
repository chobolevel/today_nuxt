<template>
  <div class="diary_post">
    <p class="post_title">{{ item.title }}</p>
    <p class="post_content">{{ item.content }}</p>
    <span class="post_view">조회수 : {{ item.viewCount }}</span>
    <span class="post_like">좋아요 : {{ item.likeCount }}</span>
    <p class="post_writer">작성자 : {{ item.writerId }}</p>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>
