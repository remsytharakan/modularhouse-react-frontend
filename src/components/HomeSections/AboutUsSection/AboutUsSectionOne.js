import React from 'react';
import Box from '@mui/material/Box';
import img from '../../../Assets/decor1.png';

function AboutUsOne() {
  return (
    <div>
      <Box sx={{ 
        mt: { xs: '8%', md: '20px', lg: '8%' }, 
        mr: { xs: '10%', md: '20px' }, 
        ml: { xs: '10%', md: '10%', lg: '12%' } 
      }}>
        <img src={img} alt="main" style={{ maxWidth: '100%', width: '100%' }} />
      </Box>
    </div>
  );
}

export default AboutUsOne;
