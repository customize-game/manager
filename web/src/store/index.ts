import { createStore } from 'vuex'
import notify from './modules/notify'

export default createStore({
  modules: {
    notify,
  },
  strict: process.env.NODE_ENV !== 'production',
})