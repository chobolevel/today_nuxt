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
  }
}
