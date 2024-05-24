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
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const navItems = ['About Us', 'Article', 'Property', 'Sign Up!'];

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: 'center', bgcolor: 'white', color: 'black', height: '100vh' }}>
      <Typography variant="h6" sx={{ color: 'white' }}>
        Logo
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="sticky" // Make the AppBar sticky
        sx={{ backgroundColor: 'rgba(0, 0, 0, 0)', overflow: 'hidden', boxShadow: 'none' }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: 'black' }} // Set color to black
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: 'black', textAlign: 'left', paddingLeft: '68px' }}>
            Logo
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'flex', marginRight: '100px', marginTop: '20px' }, flexDirection: 'row', gap: '50px' }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  marginTop: '2px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  textTransform: 'none',
                  cursor: 'pointer',
                  background: 'rgba(255, 255, 255, 0.93)',
                  borderRadius: '20px',
                  color: 'black',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  textDecoration: 'none', // Remove underline
                  ...(item === 'Sign Up!' && {
                    backgroundColor: '#46a58a',
                    color: 'white',
                    fontFamily: 'Lexend, var(--default-font-family)',
                    fontSize: '16px',
                    fontWeight: 'bold',
                  }),
                }}
                component={Link} // Use Link component
                to={item === 'Sign Up!' ? '/register' : '/'}
              >
                {item}
              </Button>
            ))}
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