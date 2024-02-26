import Button from '@mui/material/Button';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import {  IconButton } from '@mui/material';
import { Face } from '@mui/icons-material';
import css from "./navbar-user.module.css"
import { useSelector } from 'react-redux';
import { selectAuthorUser } from '../../../redux/auth/auth-selectors';

const NavbarUser = () => {
  const userNane=useSelector(selectAuthorUser)
  return (
    <div className={css.block}> 
      <IconButton>
      {userNane} <Face/>
      </IconButton>
      <Button variant="contained" endIcon={<LogoutRoundedIcon />}>
        Logout
      </Button>
    </div>
  );
};

export default NavbarUser;
