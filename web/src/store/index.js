import Vuex from 'vuex'
import sample from './modules/Sample'

const store = new Vuex.Store({
  modules: {
    sample ,
  },
  strict: process.env.NODE_ENV !== 'production',
})

export default store