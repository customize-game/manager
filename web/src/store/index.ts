import { createStore } from 'vuex'
import sample from './modules/Sample'

export default createStore({
  modules: {
    sample,
  },
  strict: process.env.NODE_ENV !== 'production',
})