import axios from '../../axios'

export default {
  namespaced: true,
  state: {
    test: 0
  },
  mutations: {
    updateTest(state, payload) {
      state.test = payload.test
    }
  },
  actions : {
    getSample( context , parameters ) {
      return axios.get(`/api/sample/${parameters}`)
        .then( response => context.commit('updateTest', {
          test: response.data.test
        }))
    }
  }
}
