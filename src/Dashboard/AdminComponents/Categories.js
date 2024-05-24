import React from 'react';
import { Box, Card, CardContent, Typography, useMediaQuery, useTheme } from '@mui/material';
import category from '../DashImages/Assets/category.png';
import user from '../DashImages/Assets/users.png';
import module from '../DashImages/Assets/modules.png';
import request from '../DashImages/Assets/request.png';

function SquareBox({ imageSrc, text }) {
  return (
    <Card variant="outlined" style={{ width: 150, height: 150, backgroundColor: 'white', borderRadius: 5, margin: 10 }}>
      <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <img src={imageSrc} alt={text} width={80} height={80} />
          <Typography variant="body2" color="#464E5F" fontSize={14} fontWeight="bold" style={{ marginTop: 10 }}>
            {text}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

function BoxContainer() {
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box
      width={'100%'}
      height={'100%'}
      bgcolor="#68C3B3"
      display="flex"
      flexDirection="column"
      // marginLeft={5} 
      borderRadius={10}
      justifyContent="center"
      alignItems="center"
    // padding={4}
    // paddingLeft={5}
    // paddingRight={5}
    >
      <Box display="flex" justifyContent="center" alignItems="center" flexWrap={'wrap'}>
        <SquareBox imageSrc={category} text="Home" />
        <SquareBox imageSrc={user} text="Business" />
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" flexWrap={'wrap'}>
        <SquareBox imageSrc={module} text="Public" />
        <SquareBox imageSrc={request} text="Person" />
      </Box>
    </Box>
  );
}

export default BoxContainer;
