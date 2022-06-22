import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Routes,Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Links } from "../Pages/Liks";
import { Posts } from "../Pages/Postst";
import { fetchData } from "../Redux/action";
export const Allrouters=()=>{

    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Home/>} />
                <Route path={"/posts"} element={<Posts/>} />
                <Route path={"/links"} element={<Links/>} />
            </Routes>
           
        </div>
    )

}