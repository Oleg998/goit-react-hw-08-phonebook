import css from './navbar-auth.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import IconButton from '@mui/material/IconButton';

import AccountCircle from '@mui/icons-material/AccountCircle';

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const NavbarAuth = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
        sx={{ mr: 15 }}
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/registration" className={css.link}>
            Registration
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/login" className={css.link}>
            Login
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default NavbarAuth;
