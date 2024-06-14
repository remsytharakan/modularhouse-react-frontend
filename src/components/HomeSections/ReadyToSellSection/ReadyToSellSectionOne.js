import React from 'react';
import { Box, Typography, IconButton, Avatar, Button } from '@mui/material';
import KingBedIcon from '@mui/icons-material/KingBed';
import BathtubIcon from '@mui/icons-material/BathtubOutlined';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import DoorSlidingIcon from '@mui/icons-material/DoorSliding';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import img3 from '../../../Assets/avatar.png';
import './Ready.css';

function ReadyToSellSectionOne() {
  return (
    <div style={{ margin: '10%' }}> {/* Adjust margin values as needed */}
      <Box display="flex" alignItems="center">
        <div className='header-icon'></div>
        <Typography sx={{ color: '#f59e0b', fontSize: '14px', ml: 1 }}>
          Ready to sell!
        </Typography>
      </Box>
      <Typography variant="h4" sx={{ color: '#1b1c57', fontWeight: 600 }}>
        Let's Tour And See Our Premium House!
      </Typography>
      <Typography variant="h8" sx={{ color: '#626686' }}>
        House recommended by our partners that have been curated to become the home of your dreams!
      </Typography>
      <Typography sx={{ color: '#1b1c57', mt: 2 }}>
        House Detail- $ 40 000.000
      </Typography>
      <Box display="flex" alignItems="center" mt="10px">
        <IconButton><KingBedIcon /></IconButton>
        <Typography variant="body1" sx={{ color: '#3c4563', mr: '15%', ml: { xs: '10px', md: '20px', lg: '30px' } }}>
          4 Bedrooms
        </Typography>
        <IconButton><BathtubIcon /></IconButton>
        <Typography variant="body1" sx={{ color: '#3c4563', ml: '15px' }}>
          2 Bathrooms
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" mt="25px">
        <IconButton><DirectionsCarFilledIcon /></IconButton>
        <Typography variant="body1" sx={{ color: '#3c4563', mr: '18%', ml: { xs: '10px', md: '20px', lg: '30px' } }}>
          1 carport
        </Typography>
        <IconButton><DoorSlidingIcon /></IconButton>
        <Typography variant="body1" sx={{ color: '#3c4563', ml: '15px' }}>
          2 Floors
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" mt="10px">
        <Avatar alt="avatar" src={img3} />
        <Box ml={{ xs: '10px', md: '20px', lg: '30px' }}>
          <Typography>
            Dianne Russell
          </Typography>
          <Typography sx={{ color: '#878b96', fontSize: '13px' }}>
            Manager Director
          </Typography>
        </Box>
        <Box ml={{ xs: '4px',  lg: '30px' }}>
          <Button variant="contained" startIcon={<PhoneAndroidIcon />} sx={{ backgroundColor: '#10b981', textTransform: 'none', borderRadius: '50px' }}>
            Contact Now
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default ReadyToSellSectionOne;
