import React from 'react';
import Box from '@mui/material/Box';
import house from '../../../Assets/ready.png';

function ReadyToSellSectionTwo() {
  return (
    <div>
      <Box sx={{ 
        mt: { xs: '2%', md: '12%', lg: '12%' }, 
        mr: { xs: '10%', md: '4%', lg: '3%' }, 
        ml: { xs: '10%',  md: '0%',   } 
      }}>
        <img src={house} alt="main" style={{  width: '100%' }} />
      </Box>
    </div>
  );
}

export default ReadyToSellSectionTwo;
