import React from 'react';
import Box from '@mui/material/Box';
import img from '../../../components/HomeSections/MainSection/image11 (1).jpg';

function MainSection2() {
  return (
    <Box sx={{ marginTop: '30px', marginLeft: { xs: '30px', sm: '0' },  paddingRight:{ xs: '35px', sm: '40px', md: '80px', lg: '110px' } }}>
      <img src={img} alt="main" style={{ width: 'calc(100% + 40px)', height: '100%', objectFit: 'cover',borderRadius:'5%' }} />
    </Box>
  );
}

export default MainSection2;