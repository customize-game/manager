import axios from '../../axios'

export default {
  namespaced: true,
  state: {
    test: 0
  },
  mutations: {
    updateTest(state:any, payload:any) {
      state.test = payload.test
    }
  },
  actions : {
    getSample( context:any , parameters:any ) {
      return axios.get(`/api/sample/${parameters}`)
        .then( response => context.commit('updateTest', {
          test: response.data.test
        }))
    }
  }
}
