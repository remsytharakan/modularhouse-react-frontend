import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import house from '../../Assets/house.png';

function CostDetail() {
  return (
    <Grid container spacing={2} >
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center',mt: 6 }}>
        <Typography
          variant="h2"
          sx={{
            color: '#1b1c57',
            fontFamily: 'Lexend, var(--default-font-family)',
            fontSize: { xs: '18px', sm: '32px' },
            fontWeight: 600,
          }}
        >
         MH01-Estimated Cost Details
        </Typography>
      </Grid>

      <Grid item xs={12} lg={6} md ={6} >
      <Box sx={{ ml: { xs: 3,md:9, lg: 9 }, mr: { xs: 3 }, mt: 3,  }}>
  <img src={house} alt="main" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
</Box>

      </Grid>

      <Grid item xs={12} lg={6} md ={6} >
  <Box sx={{ ml: { xs: 3,   } ,mr: { xs: 3,md:10,lg:8 }, mt: 3  }} >
    <Typography variant="h5" gutterBottom>MHO1-Module</Typography>
    <Typography variant="h4" gutterBottom>€ 24000.000</Typography>
    <Typography variant="body1" sx={{ lineHeight: 2, color: '#414141' }}>
      Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magn.
      Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magn. <br /><br />
      
    </Typography>
    <Grid container spacing={2} >
      <Grid item xs={12}>
        <Button variant="contained" sx={{ borderRadius: '32px', backgroundColor: '#F1B66C', color: 'white', width: '100%' }}>
          Email Brochure
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button variant="outlined" sx={{ borderRadius: '32px', backgroundColor: 'white', color: 'black', width: '100%' }}>
          Buy Now
        </Button>
      </Grid>
    </Grid>
    <Grid container alignItems="center" >
      <Grid item>
        <LocalShippingIcon />
      </Grid>
      <Grid item sx={{ marginLeft: '10px' }}>
        <Typography variant="body2" sx={{ color: '#424242' }}>
          Free worldwide shipping on all orders over $100
        </Typography>
      </Grid>
    </Grid>
    <Grid container alignItems="center" >
      <Grid item>
        <EventAvailableIcon />
      </Grid>
      <Grid item sx={{ marginLeft: '10px' }}>
        <Typography variant="body2" sx={{ color: '#424242' }}>
          Delivers in: 3-7 Working Days Shipping & Return
        </Typography>
      </Grid>
    </Grid>
  </Box>
</Grid>

    </Grid>
  );
}

export default CostDetail;
