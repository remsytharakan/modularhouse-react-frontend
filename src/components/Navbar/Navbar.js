import * as React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const navItems = [
  { label: 'Home', path: '/' },
  
  { label: 'Modular House', path: '/collection' },
  { label: 'FAQ', path: '/faq' },
  { label: 'About Us', path: '/aboutus' },
  { label: 'Contact Us', path: '/contactUs' },
  { label: 'Project Process', path: '/contact-us' }
];

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: 'center', bgcolor: 'white', color: 'black', height: '200vh' }}>
      <Typography variant="h6" sx={{ color: 'black' }}>
        Logo
      </Typography>
      <Divider />
      <List>
        {navItems.map(({ label, path }) => (
          <ListItem key={label} disablePadding>
            <ListItemButton component={Link} to={path} sx={{ textAlign: 'center' }}>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
     
     <AppBar
  component="nav"
  position="sticky"
  sx={{
    backgroundColor: '#388e3c',
    overflow: 'hidden',
    boxShadow: 'none',
   
  }}
>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: 'white' }} 
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: 'white', textAlign: 'left', paddingLeft: '68px' }}>
            Logo
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'flex', marginRight: '20px'}, flexDirection: 'row', gap: '40px' }}> 
            {navItems.map(({ label, path }) => (
              <Button
                key={label}
                sx={{
                  display: 'flex',
                 
                  alignItems: 'center',
                  textTransform: 'none',
                  borderRadius: '20px',
                  color: 'white',
                  fontSize: '18px',
                  fontWeight: '300',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
                component={Link} 
                to={path} 
              >
                {label}
              </Button>
            ))}
            <IconButton
              component={Link}
              to="/register" 
              sx={{ color: 'white',fontSize: '8rem' }}
              aria-label="sign up"
            >
              <PersonAddAlt1OutlinedIcon />
            </IconButton>
            <IconButton
              component={Link}
              to="/cart" 
              sx={{ color: 'white' }}
              aria-label="cart"
            >
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
