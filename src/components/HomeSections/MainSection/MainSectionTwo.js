import React from 'react';
import Box from '@mui/material/Box';
import img from '../../../Assets/mainhome.jpg';

function MainSection2() {
  return (
    <Box sx={{
      mr: { xs: 2 },
      mt: { xs: 3 },
      ml: { xs: 2 }
    }}>
      <img src={img} alt="main" style={{ width: '100%', objectFit: 'cover', borderRadius: '5%' }} />
    </Box>
    
  );
}

export default MainSection2;