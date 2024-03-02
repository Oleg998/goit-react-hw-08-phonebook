import { Outlet } from "react-router-dom"
import {  useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import {selectAuthIsLogin , selectAuthToken } from "../../redux/auth/auth-selectors"
import Loader from "components/Loader/Loader"

const PublicRoute =()=>{
    const isLogin=useSelector(selectAuthIsLogin)
    const token =useSelector(selectAuthToken)
    if (!isLogin&&token){return <Loader/>}
    if(isLogin) {return  <Navigate to="/contact"/>}
    return <Outlet/>
}

export default PublicRoute
