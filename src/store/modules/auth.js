import auth from '../../api/auth'

// initial state
const state = {
  token: localStorage.getItem('user-token') || ''
}

// getters
const getters = {
  isAuthenticated: state => !!state.token
}

// actions
const actions = {
  login ({ commit }, { username, password }) {
    auth.authToken(username, password, token => {
      commit('setAuthToken', token)
    })
  },
  logout ({ commit }) {
    commit('destroyAuthToken')
  }
}

// mutations
const mutations = {
  setAuthToken (state, userData) {
    state.token = userData.token
    localStorage.setItem('user-token', userData.token)
  },
  destroyAuthToken (state) {
    state.token = null
    localStorage.removeItem('user-token')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
