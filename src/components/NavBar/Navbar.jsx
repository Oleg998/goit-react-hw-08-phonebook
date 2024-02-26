import MainMenu from "./MainMenu/MainMenu"
import NavbarAuth from "./NavbarAuth/NavbarAuth"
import NavbarUser from "./NavbarUser/NavbarUser"
import {  useSelector } from "react-redux"
import { selectAuthIsLogin } from "../../redux/auth/auth-selectors"
import css from "./navbar.module.css"



const Navbar = () => {
  const isLogin=useSelector(selectAuthIsLogin)
return (
    <div className={css.navbar }>
        
        <MainMenu></MainMenu>
        {isLogin ? <NavbarUser/> :<NavbarAuth/>  }
        
        
    </div>
)

}

export default Navbar