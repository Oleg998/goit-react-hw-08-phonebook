import { Outlet } from "react-router-dom"
import {  useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import {selectAuthIsLogin} from "../../redux/auth/auth-selectors"

const PrivateRoute =()=>{
    const isLogin=useSelector(selectAuthIsLogin)
    if(!isLogin) {return  <Navigate to="/"/>}
    return <Outlet/>
}

export default PrivateRoute