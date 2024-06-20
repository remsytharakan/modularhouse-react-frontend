import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = ({ onMenuOpen }) => {
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = useState(null);

  const handleProfileMenuOpen = (event) => {
    setProfileMenuAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchorEl(null);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    // For example, redirect to logout endpoint or clear session
    console.log("Logging out...");
    // After logout, close the profile menu
    handleProfileMenuClose();
  };

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
        <Typography variant="h6" noWrap sx={{ marginLeft: { xs: 0, sm: 12, lg: 12 } }}>
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
          aria-label="show profile"
          onClick={handleProfileMenuOpen}
        >
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
      <Menu
        anchorEl={profileMenuAnchorEl}
        open={Boolean(profileMenuAnchorEl)}
        onClose={handleProfileMenuClose}
      >


        <MenuItem onClick={handleLogout}>Logout</MenuItem>
       
      </Menu>
    </AppBar>
  );
};

export default Navbar;
