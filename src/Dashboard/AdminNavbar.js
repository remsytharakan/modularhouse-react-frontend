import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = ({ onMenuOpen }) => {
  return (
    <AppBar position="fixed" color="inherit">
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={onMenuOpen}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap sx={{ marginLeft: { xs: 0, sm:12 ,lg: 12 } }}>
          Dashboard
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton
          color="inherit"
          aria-label="show notifications"
        >
          <NotificationsIcon />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="show settings"
        >
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
