<template>
  <div>
    <form>
      <div>
        <label for="title">제목</label>
        <input v-model="diary.title" type="text" id="title" name="title" placeholder="제목"/>
      </div>
      <div>
        <label for="content">내용</label>
        <textarea v-model="diary.content" id="content" name="content" placeholder="내용"/>
      </div>
      <div>
        <button @click.prevent="handleSave">저장하기</button>
        <button>취소하기</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      diary: {
        title: '',
        content: ''
      }
    }
  },
  methods: {
    async handleSave() {
      await this.$store.dispatch('diary/writeDiary', this.diary)
    }
  }
}
</script>
