import React from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';


function AboutUsSectionTwo() {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center" sx={{ mx: { xs: 4, md: 3, lg: 6 }, mt: { xs: 2, md: 1, lg: 6 } }}>
      <Typography variant="h4" sx={{ color: '#1b1c57', fontWeight: 600 }}>About Us</Typography>
      <Divider 
        sx={{ 
          my: 2, 
          backgroundColor: '#1b1c57', 
          width: '60%', 
          marginLeft: 'auto', 
          marginRight: 'auto' 
        }} 
      />
        <Typography variant="h6" align="justify" sx={{ lineHeight: { xs: 1.7, md: 1.8, lg: 2 }, fontSize: { xs: '14px', md: '14px', lg: '16px' } }}>
          We are proud of our dedicated team, all of whom are committed to ensuring that every detail is taken care of. Upon completion
          of your project, you will be issued with certification by our chartered engineer.<br />
          MOA has moved away from traditional building techniques. Instead, we have created a seamless modular building process that is both
           taking on average 12 working days
          to complete.<br />
          MOA has moved away from traditional building techniques. Instead, we have created a seamless modular building process that is both
          innovative and non-invasive. The installation of your garden studio is quick and hassle-free, taking on average 12 working days
          to complete
        
        </Typography>
        <Button 
      variant="contained" 
      sx={{ 
        borderRadius: '32px', 
        backgroundColor: '#F1B66C', 
        mt: 4, 
        p: '8px', // Padding
        width: { xs: '100%', sm: '80%', md: '60%', lg: '50%' } // Responsive width
      }}
    >
      Read More
    </Button>
        <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
          <LocalShippingIcon />
          <Typography variant="body2" sx={{ ml: 2 }}>
            Free worldwide shipping on all orders over $100
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
          <EventAvailableIcon />
          <Typography variant="body2" sx={{ ml: 2 }}>
            Delivers in: 3-7 Working Days Shipping & Return
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default AboutUsSectionTwo;
