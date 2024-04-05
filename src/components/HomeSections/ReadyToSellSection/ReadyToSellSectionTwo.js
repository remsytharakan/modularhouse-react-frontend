import React from 'react';
import { Box } from '@mui/material';
import house from './house.png';

function ReadyToSellSectionTwo() {
  return (
    <div>
      <Box paddingRight="80px">
        <img src={house} alt="sell" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </Box>
    </div>
  );
}

export default ReadyToSellSectionTwo;