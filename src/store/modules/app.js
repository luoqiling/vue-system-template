import defaultSettings from '@/settings'

const { title } = defaultSettings

const state = {
  title,
  sidebar: {
    closed: false
  }
}

const mutations = {
  SET_CLOSED: (state, val) => {
    state.sidebar.closed = val
  }
}

const actions = {
  close({ commit }, val) {
    commit('SET_CLOSED', val)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
