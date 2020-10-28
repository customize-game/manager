import axios from '@/axios'

export default {
  namespaced: true,
  state: {
    listUpdating : false,
    registering : false ,
    list : []
  },
  mutations: {
    registering( state : any , payload : boolean ){
      state.registering = payload
    } ,
    listUpdating( state : any , payload : boolean ){
      state.listUpdating = payload
    } ,
    updateList( state : any , payload : any ){
      state.list = payload
    } ,
  },
  actions : {
    register( context : any , parameters : any ){
      console.log( parameters )
      context.commit( 'registering' , true )
      axios.post( '/api/parameter-chips' , parameters )
      .then( () => {
        context.commit( 'registering' , true )        
      } )
    } ,
    updateList( context:any , parameters : any ){
      context.commit( 'listUpdating' , true )
      axios.get( '/api/parameter-chips' , parameters )
      .then( response => {
        context.commit( 'updateList' , response.data.data )
        context.commit( 'listUpdating' , false )
      })
    }
  }
}
