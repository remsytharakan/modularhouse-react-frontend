import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import img from '../../../Assets/decor1.png';

function AboutUsOne() {
  const isMobile = useMediaQuery('(max-width:600px)'); // Adjust breakpoint as needed

  return (
    <Box sx={{ marginTop: '90px',  paddingLeft:{ xs: '20px', sm: '40px', md: '80px', lg: '100px' }, marginRight: { xs: '32px', sm: '20px' } }}>
      <img src={img} alt="main" style={{ width: isMobile ? 'calc(100% + 40px)' : '100%', height: '100%', objectFit: 'cover' }} />
    </Box>
  );
}

export default AboutUsOne;