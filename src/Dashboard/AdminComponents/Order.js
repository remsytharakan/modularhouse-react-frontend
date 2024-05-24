import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from '../DashImages/Assets/order.png'; // Import your image here

function Order() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box 
      // marginRight={isMobile ? -4 : (isTablet ? -2 : 0)} 
      // marginLeft={isMobile ? 4 : (isTablet ? 5 : 0)}
      // paddingLeft={isMobile ? -3 : (isTablet ? -2 : 5)}
      // paddingRight={isMobile ? 3 : (isTablet ? 2 : 0)}
    >
      <Box 
        marginTop={isMobile ? 8 : (isTablet ? 10 : 12)}
        // width={isMobile ? '100%' : (isTablet ? '110%' : 400)}
        width={'100%'}
        // height={isMobile ? 150 : (isTablet ? 150 : 140)}
        borderRadius={2}
        bgcolor="#3699FF"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding={3}
      >
        <Box>
          <Typography variant="h6" gutterBottom color="#FFFFFF">
            Orders
          </Typography>

          <Typography variant="h6" gutterBottom marginBottom={1} color="#FFFFFF" fontSize={isMobile ? 12 : 14}>
            Flats, Shared Rooms, Duplex
          </Typography>
        </Box>

        <Box>
          <img src={Image} alt="example" style={{ maxWidth: '100%', height: 'auto' }} />
        </Box>
      </Box>
    </Box>
  );
}

export default Order;
