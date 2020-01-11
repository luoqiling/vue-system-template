import { constantRoutes, dynamicRoutes } from '@/router'

const state = {
  routes: [],
  checked: false
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.routes = constantRoutes.concat(routes)
  },
  SET_CHECKED: (state, val) => {
    state.checked = val
  }
}

const actions = {
  check({ commit }, val) {
    commit('SET_CHECKED', val)
  },

  async generateRoutes({ commit, state }) {
    commit('SET_ROUTES', dynamicRoutes)
    commit('SET_CHECKED', true)
    return dynamicRoutes
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
