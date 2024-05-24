import React from 'react';
import { Box, Typography, Button, Card, CardContent, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import imageUrl from '../DashImages/Assets/villa1.png'; // Import the image
import img from '../DashImages/Assets/roof.png'; // Import the roof image
import home from '../DashImages/Assets/villa2.png'; // Import the tiny house image

function Trending() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    // <Box marginTop={isMobile ? 10 : 0}>
      <Card
        variant="outlined"
        style={{
          borderRadius: 20,
          // width:isMobile? 400: 440, 
          width: '100%',
          height: '100%',

          // marginLeft: isMobile ? 35 : 5,
          // paddingLeft: isMobile ? 5 : 15, 
          // paddingRight: isMobile ? 5 : 5 
        }}
      >
        <CardContent>
          <Typography variant="h4" gutterBottom marginBottom={2}>
            Trending Categories
          </Typography>

          {/* First Item */}
          <Box display="flex" alignItems="center" flexWrap={'wrap'}>
            <Box mr={2}>
              <img src={imageUrl} alt="Example" width={90} height={80} />
            </Box>
            <Box flexGrow={1}>
              <Typography variant="body2" color="#464E5F" fontSize={14} fontWeight="bold">
                Villa
              </Typography>
              <Typography variant="body2" color="#464E5F" fontSize={14}>
                32 requests
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              style={{
                backgroundColor: '#EEE5FF',
                color: '#8950FC',
                borderRadius: 10,
                minWidth: 'auto',
                marginLeft: 'auto'
              }}
            >
              View All
            </Button>
          </Box>

          {/* Second Item */}
          <Box display="flex" alignItems="center" marginBottom={2} flexWrap={'wrap'}>
            <Box mr={2}>
              <img src={img} alt="Example" width={90} height={80} />
            </Box>
            <Box flexGrow={1}>
              <Typography variant="body2" color="#464E5F" fontSize={14} fontWeight="bold">
                Roof
              </Typography>
              <Typography variant="body2" color="#464E5F" fontSize={14}>
                15 requests
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              style={{
                backgroundColor: '#EEE5FF',
                color: '#8950FC',
                borderRadius: 10,
                minWidth: 'auto',
                marginLeft: 'auto'
              }}
            >
              View All
            </Button>
          </Box>

          {/* Third Item */}
          <Box display="flex" alignItems="center" marginBottom={2} flexWrap={'wrap'}>
            <Box mr={2}>
              <img src={imageUrl} alt="Example" width={90} height={80} />
            </Box>
            <Box flexGrow={1}>
              <Typography variant="body2" color="#464E5F" fontSize={14} fontWeight="bold">
                Villa 2
              </Typography>
              <Typography variant="body2" color="#464E5F" fontSize={14}>
                8 requests
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              style={{
                backgroundColor: '#EEE5FF',
                color: '#8950FC',
                borderRadius: 10,
                minWidth: 'auto',
                marginLeft: 'auto'
              }}
            >
              View All
            </Button>
          </Box>

          {/* Fourth Item */}
          <Box display="flex" alignItems="center" flexWrap={'wrap'}>
            <Box mr={2}>
              <img src={home} alt="Example" width={90} height={80} />
            </Box>
            <Box flexGrow={1}>
              <Typography variant="body2" color="#464E5F" fontSize={14} fontWeight="bold">
                Tiny house
              </Typography>
              <Typography variant="body2" color="#464E5F" fontSize={14}>
                30 requests
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              style={{
                backgroundColor: '#EEE5FF',
                color: '#8950FC',
                borderRadius: 10,
                minWidth: 'auto',
                marginLeft: 'auto'
              }}
            >
              View All
            </Button>
          </Box>
        </CardContent>
      </Card>
    // </Box>
  );
}

export default Trending;
