import MainMenu from "./MainMenu/MainMenu"
import NavbarAuth from "./NavbarAuth/NavbarAuth"
import NavbarUser from "./NavbarUser/NavbarUser"

import css from "./navbar.module.css"



const Navbar = () => {
    
    const isLogin = false

return (
    <div className={css.navbar }>
        
        <MainMenu></MainMenu>
        {isLogin ? <NavbarUser/> :<NavbarAuth/>  }
        
        
    </div>
)

}

export default Navbar