import React from 'react';
import { Grid, Box,Button, Typography, IconButton, useMediaQuery } from '@mui/material';
import pic2 from '../../Assets/pic2.png';
import DeleteIcon from '@mui/icons-material/Delete';

const boxStyle = {
  border: '2px solid #000',
  padding: '10px', 
  marginBottom:'50px'
};

const typographyStyle = {
  margin: '0 50px', // Adjust the margin as needed
};

const imageStyle = {
  width: '70%',
};

function Custom4() {
  
  return (
    <div>
      <Grid container spacing={5}>
        <Grid item xs={12} md={8} lg={8} >
            <Box  paddingLeft={{ xs: '110px', sm: '40px', md: '80px', lg: '90px' }} paddingRight={{xs:'150px',lg:'60px'}} marginTop='5%'>
          <Box bgcolor="#fbe9e7" paddingLeft='0%' display="flex"
           flexDirection="row" alignItems="center" justifyContent="center"
            paddingTop="1%"marginLeft={25} >
            <Typography variant="h6" style={typographyStyle}>Product</Typography>
            <Typography variant="h6" style={typographyStyle}>Price</Typography>
            <Typography variant="h6" style={typographyStyle}>Quantity</Typography>
            <Typography variant="h6" style={typographyStyle}>Subtotal</Typography>
          </Box></Box>
<Box
  display="flex"
  flexDirection="row"
  justifyContent={{ xs: 'flex-start', lg: 'center' }}
>
  <Box marginTop="5%" marginLeft='1%'>
    <img src={pic2} alt="Your Image" style={imageStyle} />
  </Box>
  <Box marginLeft="1px" display="flex" flexDirection="row" marginTop="8%">
    <Typography style={typographyStyle}>Fleet-set1</Typography>
    <Typography style={typographyStyle}>€4000.00</Typography>
    <Typography style={typographyStyle}>1</Typography>
    <Typography style={typographyStyle}>€4000.00</Typography>
    <Box marginTop="-1%">
      <IconButton><DeleteIcon /></IconButton>
    </Box>
  </Box>
</Box>

<Box
  display="flex"
  flexDirection="row"
  justifyContent={{ xs: 'flex-start', lg: 'center' }}
>
  <Box marginTop="5%" marginLeft='1%'>
    <img src={pic2} alt="Your Image" style={imageStyle} />
  </Box>
  <Box marginLeft="1px" display="flex" flexDirection="row" marginTop="8%">
    <Typography style={typographyStyle}>Fleet-set1</Typography>
    <Typography style={typographyStyle}>€4000.00</Typography>
    <Typography style={typographyStyle}>1</Typography>
    <Typography style={typographyStyle}>€4000.00</Typography>
    <Box marginTop="-1%">
      <IconButton><DeleteIcon /></IconButton>
    </Box>
  </Box>
</Box>

        </Grid>

        <Grid item xs={12} md={4}>
            <Box  paddingRight={{ xs: '0px', sm: '60px', md: '80px', lg: '100px' }}
            paddingLeft={{xs:'10px'}}
            
            marginTop='10%'>
          <Box bgcolor="#fbe9e7" height='120%' width="100%"  display="flex" flexDirection="column" alignItems="center" justifyContent="center" >
            <Box paddingTop="1%">
              <Typography variant="h4" fontWeight="bold">Product Details</Typography>
            </Box>
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" paddingTop="8%" >
              <Typography variant="h6" style={{ marginRight: '80px' }}>Subtotal</Typography>
              <Typography variant="h8">€ 30,000.0</Typography>
            </Box>
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" paddingTop="8%" marginBottom='6%'>
              <Typography variant="h6" style={{ marginRight: '80px' }}>Total</Typography>
              <Typography variant="h8">€ 30,000.0</Typography>
            </Box>
            <Button style={{ ...boxStyle, color: '#000' }}>
  Check Out
</Button>

          </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Custom4;
