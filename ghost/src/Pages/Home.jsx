import "./home.css";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchData, fetchDataAuthors, fetchDataTags } from "../Redux/action";
import { BarChart,XAxis,YAxis,CartesianGrid,Bar } from "recharts";
import { useNavigate,Link } from "react-router-dom";

  
export const Home=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate()
    // const[postData,setPostsData]=useState();
    const [data,setData]=useState([])
    // const[five,setFive]=useState([])
const posts=useSelector((state)=>(
   state.Data.posts.posts
))

const postslen=useSelector((state)=>(

state.Data
  
))


useEffect(()=>{
    dispatch(fetchData())
dispatch(fetchDataAuthors())
dispatch(fetchDataTags())

},[dispatch])
useEffect(()=>{
    const postData=[ { name: "Jan", x: 0,y:0  },
    { name: "Feb", x: 0, },
    { name: "Mar", x: 0 },
    { name: "Apr", x: 0 },
    { name: "May", x: 0 },
    { name: "Jun", x: 0 },
    { name: "Jul", x: 0 },
    { name: "Aug", x: 0 },
    { name: "Sep", x: 0 },
    { name: "Oc", x: 0 },
    { name: "Nov", x: 0 },
    { name: "Dec", x: 0 },
]
var latest=[]
const count=0;

    if(posts){
        posts.map((e)=>{
        
           var time=e.published_at;
           var Date=time.trim().split("T")[0]
           var timearr=time.trim().split("T")[0].split("-")[1]

           var month=((+timearr)-1)
            postData[month].x=postData[month].x+1
            var obj={}
           if(count<=5){
              obj.posts=e.html
              obj.data=Date

           
             
           }
          
           
             
          })
    }
   console.log(latest)
setData(postData)
},[posts])
   
    return (
        <div className="container">
          
          <div className="conpost">
            <div className="posts">
              <div>

                <p>Total number of Posts</p>
              {postslen.posts?postslen.posts.posts?.length:null}
              </div>
             
             </div>
            <div className="posts">
              <div>

                <p>Total number of authors</p>
                {postslen.authors?postslen.authors.total:null}
              </div>
             
             </div>
             
         
          </div>
          <h3>Posts per month Chart</h3>
          {data? <BarChart width={600} style={{marginLeft:"30%",  background: "linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} height={300} data={data} >
            <CartesianGrid />
            <XAxis dataKey="name" />
           <YAxis/>
            <Bar dataKey="x" stackId="a" fill="#8884d8" />
            <Bar dataKey="y" stackId="a" fill="#82ca9d" />
        </BarChart>:null }
      
        <div className="conpost">
            <div className="posts">
              <div>
                <p>5 latest posts</p>
              
    
              {posts?<img style ={{width:"50px"}}src={posts[0].feature_image}alt="" />:null}
              </div>
             
             </div>
            <div className="posts">
              <div>

                <p>Total number of tags</p>
                {postslen.tags?postslen.tags.total:null}
              </div>
             
             </div>
             
          </div>
          <div ><Link to="/posts"><h3> Check List</h3></Link>
           </div>
        </div>
    )
}

