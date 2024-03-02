import Button from '@mui/material/Button';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import {  IconButton } from '@mui/material';
import { Face } from '@mui/icons-material';
import css from "./navbar-user.module.css"
import { useSelector , useDispatch} from 'react-redux';
import { selectAuthorUser } from '../../../redux/auth/auth-selectors';
import {logout} from "../../../redux/auth/auth-operation"



const NavbarUser = () => {
 
  const userNane=useSelector(selectAuthorUser)
  const dispatch =useDispatch()
  const onLogout =()=>
    dispatch(logout());


  return (
    <div className={css.block}> 
      <IconButton>
      {userNane} <Face/>
      </IconButton>
      <Button onClick={onLogout} variant="contained" endIcon={<LogoutRoundedIcon />}>
        Logout
      </Button>
    </div>
  );
};

export default NavbarUser;
