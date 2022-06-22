import { toBeChecked } from "@testing-library/jest-dom/dist/matchers";
import { useEffect, useState } from "react"
// import { setDatasets } from "react-chartjs-2/dist/utils";
import { useDispatch, useSelector } from "react-redux"
import { fetchData } from "../Redux/action"

export const Links=()=>{
    const dispatch=useDispatch();
    const[urlres,seturlres]=useState()
    const[imgurl,setimgurl]=useState([])
    const [count,setCount]=useState(0)
    const [extenalcount,setExCont]=useState(0)
    const posts=useSelector((state)=>(
        state.Data.posts.posts
     ))
     useEffect(()=>{
         dispatch(fetchData())
     },[])

    //  useEffect(()=>{
    //   var arr=[]
    //   if(posts){
    //     for(var i=0; i<posts.length; i++){
          
    //        if(posts[i].feature_image!=null){
    //             var imglinkres=linkimgcheck(posts[i].feature_image)
    //             console.log(imglinkres)
    //             imglinkres.then((res)=>{
    //                  save(res)
                   
    //             }).catch((err)=>{

    //             })
    //            }
    //            else{
                
    //            }

    //     }
    //     console.log(arr)
    //   }

    //  },[posts])
    //  function save(res){
    //  setimgurl([...res])
    //  }
 
    async function linkcheck(url){
      try{
        
        var res=await fetch(url)
       
        var data=  res.status
       if(data==200){
        
        seturlres(true)
       }
       else{
       seturlres(false)
       }
      }
      catch(err){
      
      }

     }
    async function linkimgcheck(url){
      try{
        
        var res=await fetch(url)
      //  console.log(res,"res")
        var data=  res.status
       if(data==200){
      return true
   
       }
       else{
     return false
       }
      }
      catch(err){
      console.log(err)
      }

     }
     useEffect(()=>{
      var interncount=0;
      var ex=0
         if(posts){
          for(var i=0; i<posts.length; i++){
            var url
            var internal;
            if(posts[i].feature_image!=null){
             
             internal=posts[i].feature_image.trim().split("n/")
            }
            if(posts[i]!=null){
             url= posts[i].url.trim().split("n/");
            }
          
            if(internal[0]=='https://ghost-blog.ipxp.i'&&url[0]=='https://ghost-blog.ipxp.i'){
                 interncount=interncount+2
            }
            else if(internal[0]=='https://ghost-blog.ipxp.i'){
              interncount++
            }
           
             else if(url[0]=='https://ghost-blog.ipxp.i'){
              interncount++
            }
            else{
                  ex++   
            }
           }
           setCount(interncount)
           setExCont(ex)
          }
         
     },[posts])
   
return(
    <div>
           <div  className="datalist">
            <div>
              <h3> Total number of Internal Links.</h3>
            {posts?<p>{count}</p>:null}
            <h3> Total number of External Links</h3>
            {posts?<p>{extenalcount}</p>:null}
            </div>

            <div>
              <h3> Total number of Broken Internal Links.</h3>
            {posts?posts.map((e,i)=>{
        
            
                var linkres= linkcheck(e.url)
               linkres.then((res)=>{
                   
                    }).catch((err)=>{
                     
                   
                    })
              // var nores=0
             
              //  console.log(nores,"df")
      return(
        <div key={i}>
          {!urlres?null:<p><span style={{fontSize:"20px",fontWeight:"500"}}>url</span>:{e.url}
          </p>}
        
          </div>
      )
 
      


     

            }):null}
            </div>

            <div>
              <h3> Total number of Broken Extenal Links.</h3>
               <div><p>0</p></div>
            </div>
            </div>
    </div>
)

}