import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import house from './house.png';

function ReadyToSellSectionTwo() {
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <div>
     <Box sx={{ marginTop: '70px', marginLeft: { xs: '30px', sm: '0' },   paddingRight:{ xs: '35px', sm: '40px', md: '80px', lg: '100px' } }}>
      <img src={house} alt="main" style={{ width: isMobile ? 'calc(100% + 40px)' : '100%', height: '100%', objectFit: 'cover',borderRadius:'2%' }} />
    </Box>
    </div>
  );
}

export default ReadyToSellSectionTwo;