import React from 'react';
import { Box, Typography, Card, CardContent, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import imageUrl from '../DashImages/Assets/weekly.png';
import villa from '../DashImages/Assets/img1.png';
import commission from '../DashImages/Assets/commision.png';
import siteVisits from '../DashImages/Assets/site.png';
import requests from '../DashImages/Assets/rqst.png';

function WeeklySales() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box>
      <Card
        variant="outlined"
        style={{
          borderRadius: 20,
          // width:isMobile? 400: 440, 
          width: '100%',
          height: '100%',
          // marginLeft :isMobile ? 35 : 5 ,
          // paddingLeft: isMobile ? 5 : 0, 
          // paddingRight: isMobile ? 5 : 0 ,

        }}
      >
        <CardContent>
          <Typography variant="h4" gutterBottom fontWeight={500} marginBottom={2}>
            Weekly Sales Stats
          </Typography>

          <Typography variant="h6" gutterBottom marginBottom={2}>
            540 Sales
          </Typography>

          {/* <Box> */}
          <img src={imageUrl} alt="Example"
            // width={300}
            width={'100%'}
          />
          {/* </Box> */}

          <Box display="flex" flexDirection={"column"} justifyContent="center" gap={'20px'} mt={2}>
            {/* First set */}
            <Box display="flex" flexDirection={"row"} justifyContent="center" gap={'50px'}>
              <Box display="flex" justifyContent="center" >
                <Box
                  width={60}
                  height={60}
                  borderRadius={5}
                  bgcolor="#E1F0FF"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mr={2}
                >
                  <img src={villa} alt="Villa Sales" width={40} height={40} />
                </Box>
                <Box>
                  <Typography variant="h2" color="#464E5F" fontSize={16} fontWeight={700}>
                    € 232,034
                  </Typography>
                  <Typography variant="body2" color="#B5B5C3" fontSize={12}>
                    Villa Sales
                  </Typography>
                </Box>
              </Box>

              {/* Second set */}
              <Box display="flex" alignItems="center">
                <Box
                  width={60}
                  height={60}
                  borderRadius={5}
                  bgcolor="#FFE2E5"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mr={2}
                >
                  <img src={commission} alt="Commission" width={40} height={40} />
                </Box>
                <Box>
                  <Typography variant="h2" color="#464E5F" fontSize={16} fontWeight={700}>
                    €12,706
                  </Typography>
                  <Typography variant="body2" color="#B5B5C3" fontSize={12}>
                    Commission
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center" gap={'50px'}>
              {/* Third set */}
              <Box display="flex" alignItems="center">
                <Box
                  width={60}
                  height={60}
                  borderRadius={5}
                  bgcolor="#D7F9EF"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mr={2}
                >
                  <img src={siteVisits} alt="Site Visits" width={40} height={40} />
                </Box>
                <Box>
                  <Typography variant="h2" color="#464E5F" fontSize={16} fontWeight={700}>
                    € 400,000
                  </Typography>
                  <Typography variant="body2" color="#B5B5C3" fontSize={12}>
                    Site Visits
                  </Typography>
                </Box>
              </Box>

              {/* Fourth set */}
              <Box display="flex" alignItems="center">
                <Box
                  width={60}
                  height={60}
                  borderRadius={5}
                  bgcolor="#EEE5FF"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mr={2}
                >
                  <img src={requests} alt="Requests" width={40} height={40} />
                </Box>
                <Box>
                  <Typography variant="h2" color="#464E5F" fontSize={16} fontWeight={700}>
                    € 5.8k
                  </Typography>
                  <Typography variant="body2" color="#B5B5C3" fontSize={12}>
                    Requests
                  </Typography>
                </Box>
              </Box>
            </Box>

          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default WeeklySales;
