import  Axios  from "axios";
import * as types from "./actionTypes";
// require('dotenv').config()
const  fetchDataReq=(payload)=>{
return { type:types.FETCH_DATA_REQ,
        payload
     } 
}
const  fetchDataSuc=(payload)=>{
return { type:types.FETCH_DATA_SUC,
        payload
     } 
}
const  fetchDataFail=(payload)=>{
return { type:types.FETCH_DATA_FAIL,
        payload
     } 
}

const fetchData=(payload)=>(dispatch)=>{
    dispatch(fetchDataReq())
   
    Axios.get(`https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=${process.env.REACT_APP_API_KEY}&published_at=DESC`)
    .then((res)=>{
  
        dispatch(fetchDataSuc(res.data))
    })
    .catch((err) =>(dispatch(fetchDataFail())))

}
//************************************* */
const  AuthorsfetchDataReq=(payload)=>{
    return { type:types.AUTHORS_FETCH_DATA_REQ,
            payload
         } 
    }
    const  AuthorsfetchDataSuc=(payload)=>{
    return { type:types.AUTHORS_FETCH_DATA_SUC,
            payload
         } 
    }
    const  AuthorsfetchDataFail=(payload)=>{
    return { type:types.AUTHORS_FETCH_DATA_FAIL,
            payload
         } 
    }
const fetchDataAuthors=(payload)=>(dispatch)=>{
    dispatch(AuthorsfetchDataReq())
    Axios.get(`https://ghost-blog.ipxp.in/ghost/api/v3/content/authors/?key=${process.env.REACT_APP_API_KEY}`)
    .then((res)=>{
        
        dispatch(AuthorsfetchDataSuc(res.data.meta.pagination))
    })
    .catch((err) =>(dispatch(AuthorsfetchDataFail())))
}

//******************************************************************** */

const  TagsfetchDataReq=(payload)=>{
    return { type:types.TAGS_FETCH_DATA_REQ,
            payload
         } 
    }
    const  TagsfetchDataSuc=(payload)=>{
    return { type:types.TAGS_FETCH_DATA_SUC,
            payload
         } 
    }
    const  TagsfetchDataFail=(payload)=>{
    return { type:types.TAGS_FETCH_DATA_FAIL,
            payload
         } 
    }


const fetchDataTags=(payload)=>(dispatch)=>{
    dispatch(TagsfetchDataReq())
    Axios.get(`https://ghost-blog.ipxp.in/ghost/api/v3/content/tags/?key=${process.env.REACT_APP_API_KEY}`)
    .then((res)=>{
     
        dispatch(TagsfetchDataSuc(res.data.meta.pagination))
    })
    .catch((err) =>(dispatch(TagsfetchDataFail())))
}

export {fetchData,fetchDataAuthors,fetchDataTags}