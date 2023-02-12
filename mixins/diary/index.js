import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      'diaryList': 'diary/getList',
      'diaryItem': 'diary/getItem'
    })
  }
}
