export const state = () => ({
  list: [],
  item: {}
})

export const mutations = {
  setList(state, list) {
    state.list = list
  },
  setItem(state, item) {
    state.item = item
  }
}

export const getters = {
  getList(state) {
    return state.list
  },
  getItem(state) {
    return state.item
  }
}

export const actions = {
  search(context, params) {
    return this.$axios.get('/api/diary/list')
  },
  async searchList({ dispatch, commit }, payload) {
    const { data } = await dispatch('search', payload)
    if(data) {
      commit('setList', data)
    } else {
      commit('setList', [])
    }
  },
  fetch(context, params) {
    return this.$axios.get(`/api/diary/${params}`)
  },
  async fetchDiary({ dispatch, commit }, payload) {
    const { data } = await dispatch('fetch', payload)
    if(data) {
      commit('setItem', data)
    } else {
      commit('setItem', {})
    }
  },
  write(context, params) {
    return this.$axios.post('/api/diary/write', params)
  },
  async writeDiary({ dispatch }, payload) {
    const { status } = await dispatch('write', payload)
    if(status === 201) {
      alert('작성이 완료되었습니다')
    } else {
      alert('작성 실패!')
    }
  }
}
