import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Drawer,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
  Button,
} from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import AssessmentIcon from '@mui/icons-material/Assessment';
import HomeIcon from '@mui/icons-material/Home';
import logo from '../Assets/DashImages/logo .png';

const Sidebar = ({ open, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const drawerWidth = 140;

  const handleNavigate = (path) => {
    navigate(path);
    if (isMobile) {
      onClose();
    }
  };

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'permanent'}
      open={open}
      onClose={onClose}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: 'black',
          color: 'white',
        },
      }}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <div>
        {/* Logo */}
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
          <img src={logo} alt="logo" style={{ width: '50px', height: '50px' }} />
        </Box>
        {/* Sidebar items */}
        <Box sx={{ p: 2 }}>
        <Button
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',ml:0.7 }}
            color="inherit"
            onClick={() => handleNavigate('/admin')}
          >
            <div>
              <HomeIcon />
            </div>
            <Typography variant="body2" color="inherit" textTransform="none">
             Home
            </Typography>
          </Button>
          <Button
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            color="inherit"
            onClick={() => handleNavigate('/admin/category')}
          >
            <div>
              <CategoryIcon />
            </div>
            <Typography variant="body2" color="inherit" textTransform="none">
              Category
            </Typography>
          </Button>
          <Button
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            color="inherit"
            onClick={() => handleNavigate('/admin/modules')}
          >
            <div>
              <ViewModuleIcon />
            </div>
            <Typography variant="body2" color="inherit" textTransform="none">
              Modules
            </Typography>
          </Button>
          <Button
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            color="inherit"
            onClick={() => handleNavigate('/admin/reports')}
          >
            <div>
              <AssessmentIcon />
            </div>
            <Typography variant="body2" color="inherit" textTransform="none">
              Reports
            </Typography>
          </Button>
        </Box>
      </div>
    </Drawer>
  );
};

export default Sidebar;
