import React from 'react';
import Box from '@mui/material/Box';
import { Typography, IconButton, Avatar, Button, useMediaQuery } from '@mui/material';
import KingBedIcon from '@mui/icons-material/KingBed';
import BathtubIcon from '@mui/icons-material/BathtubOutlined';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import DoorSlidingIcon from '@mui/icons-material/DoorSliding';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import img3 from './avatar.png';
import './Ready.css';

function ReadyToSellSectionOne() {
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <Box sx={{ marginTop: '70px', paddingLeft:{ xs: '20px', sm: '40px', md: '80px', lg: '100px' }, marginRight: { xs: '-40px', sm: '20px' } }}>
      <Box display="flex" flexDirection="row" alignItems="center">
        <div className='header-icon'></div>
        <Typography
          sx={{
            color: '#f59e0b',
            fontFamily: 'Lexend, var(--default-font-family)',
            fontSize: '14px',
            fontWeight: 500,
            paddingLeft: '9px',
          }}
        >
          Ready to sell!
        </Typography>
      </Box>
      <Typography 
        variant="h1"
        sx={{
          color: '#1b1c57',
          fontFamily: 'Lexend, var(--default-font-family)',
          fontSize: '32px',
          fontWeight: 600,
          lineHeight: '40px',
          textAlign: 'left',
          textTransform: 'capitalize',
          zIndex: 9,
        }}
      >
        Let's Tour And See Our Premium House!
      </Typography>
      <Typography 
        variant="h2"
        sx={{
          color: '#626686',
          fontFamily: 'Lexend, var(--default-font-family)',
          fontSize: '16px',
          fontWeight: 400,
          lineHeight: '28px',
          textAlign: 'left',
          opacity: 0.75,
          zIndex: 13,
          paddingTop: '10px',
        }}
      >
        House recommended by our partners that have been curated to become the home of your dreams!
      </Typography>
      <Typography
        style={{
          color: '#1b1c57',
          fontFamily: 'Lexend, var(--default-font-family)',
          fontSize: '16px',
          fontWeight: 600,
          lineHeight: '28px',
          opacity: 0.75,
          zIndex: 15,
          paddingTop: '10px',
        }}
      >
        House Detail- $ 40 000.000
      </Typography>
      <Box display="flex" alignItems="center" paddingTop="10px">
        <IconButton><KingBedIcon /></IconButton>
        <Typography 
          variant="body1"
          sx={{
            color: '#3c4563',
            fontFamily: 'Lexend, var(--default-font-family)',
            fontSize: '16px',
            fontWeight: 500,
            textAlign: 'left',
            textTransform: 'capitalize',
            whiteSpace: 'nowrap',
            zIndex: 20,
            paddingRight: isMobile ? '50px' : '150px',
          }}
        >
          4 Bedrooms
        </Typography>
        <IconButton><BathtubIcon /></IconButton>
        <Typography 
          variant="body1"
          sx={{
            color: '#3c4563',
            fontFamily: 'Lexend, var(--default-font-family)',
            fontSize: '16px',
            fontWeight: 500,
            textAlign: 'left',
            textTransform: 'capitalize',
            whiteSpace: 'nowrap',
            zIndex: 20,
          }}
        >
          2 Bathrooms
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <IconButton><DirectionsCarFilledIcon /></IconButton>
        <Typography 
          variant="body1"
          sx={{
            color: '#3c4563',
            fontFamily: 'Lexend, var(--default-font-family)',
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '100px',
            textAlign: 'left',
            textTransform: 'capitalize',
            whiteSpace: 'nowrap',
            zIndex: 20,
            paddingRight: isMobile ? '60px' : '170px',
          }}
        >
          1 carport
        </Typography>
        <IconButton><DoorSlidingIcon /></IconButton>
        <Typography 
          variant="body1"
          sx={{
            color: '#3c4563',
            fontFamily: 'Lexend, var(--default-font-family)',
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '20px',
            textAlign: 'left',
            textTransform: 'capitalize',
            whiteSpace: 'nowrap',
            zIndex: 20,
          }}
        >
          2 Floors
        </Typography>
      </Box>
      <Box 
  display="flex" 
  alignItems="center" 
  flexDirection={isMobile ? 'column' : 'row'} // Adjust flex direction based on screen size
  paddingTop={isMobile ? '20px' : '0'}
>
  <Avatar
    alt="avatar"
    src={img3}
    sx={{ width: 56, height: 56, marginRight: isMobile ? 0 : '15px' }} // Adjust margin for mobile
  />
  <Box 
    paddingRight={isMobile ? '0' : '20px'} // Adjust padding for mobile
    marginBottom={isMobile ? '10px' : 0} // Add margin bottom for mobile
  >
    <Typography
      sx={{
        color: '#0d1635',
        fontFamily: 'Lexend, var(--default-font-family)',
        fontSize: '18px',
        fontWeight: 500,
      }}
    >
      Dianne Russell
    </Typography>
    <Typography
      sx={{
        color: '#878b96',
        fontFamily: 'Lexend, var(--default-font-family)',
        fontSize: '16px',
        fontWeight: 500,
      }}
    >
      Manager Director
    </Typography>
  </Box>
  <Box paddingRight={isMobile ? '0' : '40px'}> {/* Adjust padding for mobile */}
    <Button 
      variant="contained" 
      startIcon={<PhoneAndroidIcon />} 
      style={{ backgroundColor: '#10b981', textTransform: 'none', borderRadius: '50px' }}
    >
      Contact Now
    </Button>
  </Box>
</Box>


    </Box>
  );
}

export default ReadyToSellSectionOne;