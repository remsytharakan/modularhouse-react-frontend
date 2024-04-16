import React from 'react';
import Box from '@mui/material/Box';

import img from '../../Assets/Img.png';

function Custom1  ()  {
  return (
    <Box
      paddingLeft={{ xs: '20px', sm: '40px', md: '80px', lg: '100px' }}
      paddingRight={{ xs: '35px', sm: '40px', md: '80px', lg: '100px' }}
      marginTop={{ xs: '40px', sm: '60px', md: '80px', lg: '50px' }}
    >
      <img src={img} style={{ width: '100%', height: 'auto' }} alt="Responsive Image" />
    </Box>
  );
};

export default Custom1;
