import { createStore } from 'vuex'

import bodies from './modules/bodies' 
import equipableParts from './modules/equipable-parts' 
import equipments from './modules/equipments' 
import mysets from './modules/mysets' 
import notifies from './modules/notifies'
import parameterChips from './modules/parameter-chips' 
import parameters from './modules/parameters' 
import rates from './modules/rates' 

export default createStore({
  modules: {
    bodies ,
    equipableParts ,
    equipments ,
    mysets ,
    notifies ,
    parameterChips ,
    parameters ,
    rates ,
  } ,
  strict: process.env.NODE_ENV !== 'production' ,
})