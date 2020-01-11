import { login, logout, sendCode } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'
import { Base64 } from 'js-base64'
import Md5 from 'md5'

const state = {
  token: getToken(),
  nickname: '',
  useruuid: ''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NICKNAME: (state, name) => {
    state.nickname = name
  },
  SET_ID: (state, id) => {
    state.useruuid = id
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password, code } = userInfo
    return new Promise((resolve, reject) => {
      login(username.trim(), Md5(password), code).then(response => {
        const { data } = response
        commit('SET_TOKEN', data)
        setToken(data)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    const data = JSON.parse(Base64.decode(state.token))
    const { nickname, uuid } = data
    commit('SET_NICKNAME', nickname)
    commit('SET_ID', uuid)
  },

  // user logout
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        dispatch('permission/check', false, { root: true })
        removeToken()
        resetRouter()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  sendCode({ commit }, username) {
    return new Promise((resolve, reject) => {
      sendCode(username).then(() => {
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
