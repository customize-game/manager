import axios from '@/axios'

export default {
  namespaced: true,
  state: {
    listUpdating : false,
    list : []
  },
  mutations: {
    listUpdating( state : any , payload : boolean ){
      state.listUpdating = payload
    } ,
    updateList( state : any , payload : any ){
      state.list = payload
    } ,
  },
  actions : {
    updateList( context:any , parameters : any ){
      context.commit( 'listUpdating' , true )
      axios.get( '/api/mysets' , parameters )
      .then( response => {
        context.commit( 'updateList' , response.data.data )
        context.commit( 'listUpdating' , false )
      })
    }
  }
}
