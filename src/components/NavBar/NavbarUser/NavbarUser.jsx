import Button from '@mui/material/Button';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import {  IconButton } from '@mui/material';
import { Face } from '@mui/icons-material';
import css from "./navbar-user.module.css"

const NavbarUser = () => {
  return (
    <div className={css.block}> 
      <IconButton>
        <Face/>
      </IconButton>
      <Button variant="contained" endIcon={<LogoutRoundedIcon />}>
        Logout
      </Button>
    </div>
  );
};

export default NavbarUser;
