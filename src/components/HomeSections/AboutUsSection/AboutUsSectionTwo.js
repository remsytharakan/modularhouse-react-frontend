import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';



function AboutUsSectionTwo() {
  const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', paddingLeft: '40px', paddingRight:{ xs: '35px', sm: '40px', md: '80px', lg: '100px' }, marginTop: '120px' }}>
      <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ maxWidth: '800px' }}>
          <Grid item xs={12}>
              <Typography variant="h4" align="center">About Us</Typography>
          </Grid>
          <Grid item xs={12}>
              <Typography variant="body1" align="justify" sx={{ lineHeight: 2, font: '18px', color: '#414141', marginBottom: '20px' }}>
                  We are proud of our dedicated team, all of whom are committed to ensuring that every detail is taken care of. Upon completion 
                  of your project, you will be issued with certification by our chartered engineer.<br />
                  MOA has moved away from traditional building techniques. Instead, we have created a seamless modular building process that is both
                  innovative and non-invasive. The installation of your garden studio is quick and hassle-free, taking on average 12 working days 
                  to complete.<br />
                  This experience is one of collaboration. We recognize that communication is the key to ensuring your final bespoke garden studio
                  is what you want it to be. We are committed to offering the best craftsmanship available.
              </Typography>
          </Grid>
          <Grid item xs={12} container justifyContent="left" alignItems="center">
              <Button variant="contained" sx={{ borderRadius: '32px', backgroundColor: '#F1B66C', color: 'white', marginRight: '20px', marginBottom: '0' }}>
                  Read More
              </Button>
          </Grid>
          <Grid item xs={12} container alignItems="center">
              <Grid item>
                  <LocalShippingIcon />
              </Grid>
              <Grid item sx={{ marginLeft: '10px' }}>
                  <Typography variant="body2" align="left" sx={{ color: '#424242', font: '14px' }}>
                      Free worldwide shipping on all orders over $100
                  </Typography>
              </Grid>
          </Grid>
          <Grid item xs={12} container justifyContent="left" alignItems="center" sx={{ marginBottom: '20px' }}>
              <Grid container alignItems="center">
                  <Grid item>
                      <EventAvailableIcon />
                  </Grid>
                  <Grid item sx={{ marginLeft: '10px' }}>
                      <Typography variant="body2" align="left" sx={{ color: '#424242', font: '14px' }}>
                          Delivers in: 3-7 Working Days Shipping & Return
                      </Typography>
                  </Grid>
              </Grid>
          </Grid>
      </Grid>
  </Box>
    )
}


export default AboutUsSectionTwo;