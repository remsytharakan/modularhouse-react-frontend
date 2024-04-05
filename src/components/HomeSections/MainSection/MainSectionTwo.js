// MainSection2.js
import React from 'react';
import Box from '@mui/material/Box';
import img from './image11.jpg';

function MainSection2() {
  return (
    <div>
      <Box>
        <img src={img} alt="main" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </Box>
    </div>
  );
}

export default MainSection2;
