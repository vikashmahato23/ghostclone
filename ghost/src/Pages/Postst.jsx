import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/action";
import{ Link} from "react-router-dom"
import "./Posts.css"
export const Posts =()=>{
    const dispatch=useDispatch();

    // const[postData,setPostsData]=useState();
    

const posts=useSelector((state)=>(
   state.Data.posts.posts
))
useEffect(()=>{
    dispatch(fetchData())
},[])

    return (
        <div>
            <div  className="datalist">
            <div>
              <h3>List without meta Description</h3>
            {posts?posts.map((e,i)=>{
                 var witoutmeta=e.meta_description

             return(   <div key={i}>
                 <div >
                    <div>{witoutmeta==null?<p>{e.title}</p>:null}</div>
                 </div>
                  
              </div>

             )
         
               
               
            }):null}
            </div>


            <div>
              <h3>Too long Meta Description</h3>
            {posts?posts.map((e,i)=>{
                 
                   
               return(
                  <div key={i}>
                   <div >
                      <div>{e.meta_description?.length>10?<p>{e.title}</p>:null}</div>
                   </div>
                    
                </div>

               )
               
            }):null}
            </div>



            <div>
              <h3>Too long URL, more than 100 chars</h3>
            {posts?posts.map((e,i)=>{
               return(
                  <div key={i}>
                   <div >
                      <div>{e.url?.length>100?<p>{e.title}</p>:null}</div>
                   </div>
                    
                </div>

               )
               
            }):null}
            </div>


            <div>
              <h3>Too Short Posts, Below 250 words</h3>
            {posts?posts.map((e,i)=>{
               return(
                  <div key={i}>
                   <div >
                      <div>{e.excerpt?.length<250?<p>{e.title}</p>:null}</div>
                   </div>
                    
                </div>

               )
               
            }):null}
            </div>


            <div>
              <h3>List of Posts without Featured Image</h3>

            {posts?posts.map((e,i)=>{
               return(
                  <div key={i}>
                   <div >
                      <div>{e.excerpt?.length>1500?<p>{e.title}</p>:null}</div>
                   </div>
                    
                </div>

               )
               
            }):null}
         
            </div>


            <div>
              <h3>Too Long Posts, More than 1500 words</h3>

            {posts?posts.map((e,i)=>{
               return(
                  <div key={i}>
                   <div >
                      <div>{e.feature_image==null?<p>{e.title}</p>:null}</div>
                   </div>
                    
                </div>

               )
               
            }):null}
         
            </div>

             
          
            </div>
            <Link to="/links">Go To Links</Link>
        </div>
    )
}