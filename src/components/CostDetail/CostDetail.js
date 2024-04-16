import React from 'react';
import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import img from '../../Assets/house.png';

function CostDetail() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (

    <Grid container spacing={2}>
     
     <Grid item xs={12} sm={12} lg={6} >
     <Box sx={{ marginTop: '50px', marginLeft: { xs: '10%', sm: ' 10%' ,lg:'10%' }, marginRight: { xs: '17%', sm: '10%',lg:'15%' } }}>
        <img src={img} alt="main" style={{ width: isMobile ? 'calc(100% + 40px)' : '100%', height: '100%', objectFit: 'cover' }} />
      </Box>

</Grid>

    <Grid item xs={12} sm={12} lg={6} >

    <Box sx={{ marginTop: '50px', marginLeft: { xs: '20px', sm: '50px' }, marginRight: { xs: '-50px', sm: '0',lg:'10%' } }}>
      <Grid container justifyContent="center" alignItems="flex-start" spacing={2} sx={{ maxWidth: '800px' }}>
        <Grid item xs={12}>
          <Typography variant="h5" align="left" gutterBottom>MHO1-Module</Typography>
          <Typography variant="h4" align="left" gutterBottom>€ 24000.000</Typography>
          <Typography variant="body1" align="justify" sx={{ lineHeight: 2, font: '18px', color: '#414141', marginBottom: '20px', ...(isMobile && { marginTop: '20px',marginRight:'16%',marginLeft:'2%' }) }}>
            Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magn.
            Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magn. <br/><br/>
            Lorem ipsum dolor sit amet, adipi scing elit<br/>
            Lorem ipsum dolor sit amet, consectetuer adipi scing elit<br/>
            Lorem ipsum dolor sit amet, consectetuer adipi
          </Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="left" alignItems="center">
          <Button variant="contained" sx={{ borderRadius: '32px', backgroundColor: '#F1B66C', color: 'white', marginRight: '60px', marginBottom: '0', width: '100%' }}>
            Email Brochure
          </Button>
          <Button variant="outlined" sx={{ borderRadius: '32px', backgroundColor: 'white', color: 'black', marginRight: '60px', width: '95%',marginTop:'20px' }}>
            Buy Now
          </Button>
        </Grid>
        <Grid item xs={12} container alignItems="center">
        
        <Grid item xs={12} container alignItems="center" sx={{ marginBottom: '20px' }}>
<Grid item>
  <LocalShippingIcon />
</Grid>
<Grid item sx={{ marginLeft: '10px' }}>
  <Typography variant="body2" align="left" sx={{ color: '#424242', fontSize: isMobile ? '12px' : '14px' }}>
    Free worldwide shipping on all orders over $100
  </Typography>
</Grid>
</Grid>
<Grid item xs={12} container alignItems="center" sx={{ marginBottom: '20px' }}>
<Grid item>
  <EventAvailableIcon />
</Grid>
<Grid item sx={{ marginLeft: '10px' }}>
  <Typography variant="body2" align="left" sx={{ color: '#424242', fontSize: isMobile ? '12px' : '14px' }}>
    Delivers in: 3-7 Working Days Shipping & Return
  </Typography>
</Grid>
</Grid>
    </Grid>
    </Grid>
    </Box>
    </Grid>
    </Grid>
  );
}

export default CostDetail;