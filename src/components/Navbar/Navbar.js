import * as React from 'react';
import { Link } from 'react-router-dom';
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
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Modular House', path: '/collection' },
  { label: 'FAQ', path: '/faq' },
  { label: 'About Us', path: '/aboutus' },
  { label: 'Contact Us', path: '/contactUs' },

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
    <Box sx={{ display: 'flex', flexDirection: 'column',  }}>
      <AppBar position="static" sx={{ bgcolor: '#10B981' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <EmailIcon sx={{ mr: 1 }} />
            <Typography variant="body2" sx={{ mr: 2 }}>
              info@example.com
            </Typography>
            <PhoneIcon sx={{ mr: 1 }} />
            <Typography variant="body2">
              +1 234 567 8900
            </Typography>
          </Box>
          <Box>
            <IconButton color="inherit" aria-label="facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="whatsapp">
              <WhatsAppIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      
      <AppBar
        component="nav"
        position="sticky"
        sx={{
          backgroundColor: 'transparent',
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
            sx={{ mr: 2, display: { sm: 'none' }, color: '#388e3c' }} 
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: '#388e3c', textAlign: 'left', paddingLeft: '68px' }}>
            Logo
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' }, flexDirection: 'row', gap: '40px', mt: '20px' }}>
  {navItems.map(({ label, path }) => (
    <Button
      key={label}
      sx={{
        display: 'flex',
        alignItems: 'center',
        textTransform: 'none',
        borderRadius: '15px',
        backgroundColor: 'white',
        color: 'green',
        fontSize: '14px',
        fontWeight: '600',
        textDecoration: 'none',
        '&:hover': {
          backgroundColor: '#10B981',
          color:'white',
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
    sx={{
      color: 'black',
      fontSize: '8rem',
      backgroundColor: 'white',
      '&:hover': { backgroundColor: '#b0e57c' },
      display: { xs: 'none', sm: 'flex', md: 'flex' },
    }}
    aria-label="sign up"
  >
    <PersonAddAlt1OutlinedIcon />
  </IconButton>
  <IconButton
    component={Link}
    to="/cart"
    sx={{
      color: 'black',
      backgroundColor: 'white',
      '&:hover': { backgroundColor: '#b0e57c' },
      display: { xs: 'none', sm: 'flex', md: 'flex' },
    }}
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