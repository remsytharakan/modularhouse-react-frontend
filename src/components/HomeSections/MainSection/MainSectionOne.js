// MainSection1.js
import React from 'react';
import { Typography, Box, useMediaQuery } from '@mui/material';

function MainSection1() {
  const isMobile = useMediaQuery('(max-width:600px)');
  
  return (
    <Box
      paddingTop={isMobile ? '20px' : '180px'}
      paddingLeft={isMobile ? '20px' : '120px'}
      paddingRight={isMobile ? '20px' : '120px'}
    >
      <Box>
        <Typography
          variant="h1"
          sx={{
            color: 'black',
            fontFamily: 'Lexend, var(--default-font-family)',
            fontSize: isMobile ? '32px' : '40px',
            fontWeight: 600,
            lineHeight: isMobile ? '40px' : '50px',
            textTransform: 'capitalize',
            WebkitTextStroke: '1px #d4e597',
          }}
        >
         Experience The Future<br/>of <span style={{ color: '#49dd7b' }}>Home Building</span> <br />With Modular Design.
        </Typography>
      </Box>
      {!isMobile && (
        <Box paddingTop='40px'>
          <Typography
            variant="h2"
            sx={{
              color: 'black',
              fontFamily: 'Lexend, var(--default-font-family)',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '30px',
              textAlign: 'left',
              opacity: 0.75,
              zIndex: 31,
            }}
          >
            Everything you need about finding your place to live will be here, where it will be easier for you
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default MainSection1;
