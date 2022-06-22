import * as types from "./actionTypes";

const initState={
    posts:[],
    authors:[],
    tags:[],
   //  loading:false
   
}

export const Datareducer=(state=initState,action)=>{
      const {type,payload}=action

      switch(type){
          case types.FETCH_DATA_REQ:
             return {
                ...state,
               //  loading:true,
                 
                 
             }
          case types.FETCH_DATA_SUC:
             return {
                ...state,
               //  loading:false,
                posts:payload
                 
                 
             }
          case types.FETCH_DATA_SUC:
             return {
                ...state,
               //  loading:false,
                posts:payload
                 
                 
             }
  //************************************ */

   case types.AUTHORS_FETCH_DATA_REQ:
      return {
         ...state,
         // loading:true,
          
          
      }
   case types.AUTHORS_FETCH_DATA_SUC:
      return {
         ...state,
         authors:payload,
         posts:initState.posts
        
          
      }
   case types.AUTHORS_FETCH_DATA_FAIL:
      return {
         ...state,
         loading:false,
         authors:payload
          
          
      }
      //*********************************************** */

      case types.TAGS_FETCH_DATA_REQ:
         return {
            ...state,
            loading:true,
             
             
         }
      case types.TAGS_FETCH_DATA_SUC:

         return {
            ...state,
            // loading:false,
            tags:payload,
            authors:state.authors,
            posts:state.posts
             
         }
      case types.TAGS_FETCH_DATA_FAIL:
         return {
            ...state,
            // loading:false,
            tags:payload
             
             
         }

             default :
               return state

      }
}