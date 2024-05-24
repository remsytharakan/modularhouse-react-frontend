import React from 'react';
import { Grid, Box, Card, CardMedia, Typography } from '@mui/material';
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';

import IconButton from '@mui/material/IconButton';
import pic1 from '../../Assets/pic1.png';
import pic2 from '../../Assets/pic2.png';
import pic3 from '../../Assets/pic3.png';
import plan from './img/image.png';

function Custom2() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6}>
        <Box>
        <Box marginLeft='15%'
        marginTop='4%'
        >
        <Card sx={{ maxWidth: '35%' }}>
            <CardMedia
              component="img"
              height="auto"
              image={pic2}
              alt="Image description"
              
            />
          </Card>
          <Box>
          <Box
            display='flex'
            alignItems='center'
            paddingLeft={{ xs: '-3%', sm: '43%' }}
            marginTop={{ xs: '20px', sm: '-100px',lg:'-25%' }}
          >
            <IconButton><PermMediaOutlinedIcon /></IconButton>
            <Box ml={1} paddingLeft={{ xs: '-4%', sm: '1%',lg:'0%' }}>
              <Typography variant="body1" style={{ color: '#3c4563', fontSize: '14px', fontWeight: 400,  }}>
               Roofing
              </Typography>
            </Box>
          </Box>

          <Box paddingLeft={{ xs: '1%', sm: '45%',lg:'42%' }} paddingRight={{ xs: '10%', sm: '10%',lg:'15%' }} >
            <Typography style={{ color: '#1b1c57', fontSize: '14px', fontWeight: 500, lineHeight: '32px', textAlign: 'left' }}>
              Each cube-sized module measures for optimal versatility and ease of transportation. Module size is fixed.
            </Typography>
          </Box>
          </Box>

        </Box>

        <Box marginLeft='15%'
        marginTop='3.5%'
        paddingTop='5%'
        >
        <Card sx={{ maxWidth: '35%' }}>
            <CardMedia
              component="img"
              height="auto"
              image={pic3}
              alt="Image description"
             
            />
          </Card>
          <Box>
          <Box
            display='flex'
            alignItems='center'
            paddingLeft={{ xs: '-3%', sm: '43%' }}
            marginTop={{ xs: '20px', sm: '-100px',lg:'-25%' }}
          >
            <IconButton><PermMediaOutlinedIcon /></IconButton>
            <Box ml={1} paddingLeft={{ xs: '-4%', sm: '1%',lg:'0%' }}>
              <Typography variant="body1" style={{ color: '#3c4563', fontSize: '14px', fontWeight: 400,  }}>
               Roofing
              </Typography>
            </Box>
          </Box>

          <Box paddingLeft={{ xs: '1%', sm: '45%',lg:'42%' }} paddingRight={{ xs: '10%', sm: '10%',lg:'15%' }} >
            <Typography style={{ color: '#1b1c57', fontSize: '14px', fontWeight: 500, lineHeight: '32px', textAlign: 'left' }}>
              Each cube-sized module measures for optimal versatility and ease of transportation. Module size is fixed.
            </Typography>
          </Box>
          </Box>
          

          
        </Box>
        <Box marginLeft='15%'
        marginTop='3.5%'
        paddingTop='5%'
        >
        <Card sx={{ maxWidth: '35%' }}>
            <CardMedia
              component="img"
              height="auto"
              image={pic1}
              alt="Image description"
             
            />
          </Card>
<Box>
          <Box
            display='flex'
            alignItems='center'
            paddingLeft={{ xs: '-3%', sm: '43%' }}
            marginTop={{ xs: '20px', sm: '-100px',lg:'-25%' }}
          >
            <IconButton><PermMediaOutlinedIcon /></IconButton>
            <Box ml={1} paddingLeft={{ xs: '-4%', sm: '1%',lg:'0%' }}>
              <Typography variant="body1" style={{ color: '#3c4563', fontSize: '14px', fontWeight: 400,  }}>
               Roofing
              </Typography>
            </Box>
          </Box>

          <Box paddingLeft={{ xs: '1%', sm: '45%',lg:'42%' }} paddingRight={{ xs: '10%', sm: '10%',lg:'15%' }} >
            <Typography style={{ color: '#1b1c57', fontSize: '14px', fontWeight: 500, lineHeight: '32px', textAlign: 'left' }}>
              Each cube-sized module measures for optimal versatility and ease of transportation. Module size is fixed.
            </Typography>
          </Box>
          </Box>
        </Box>

        </Box>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Box mt={4} paddingLeft={{ xs: '11%', sm: '6%',lg:'3.5%' }} paddingRight={{ xs: '9%', sm: '8%',lg:'15%' }}>
          <Card >
            <CardMedia
              component="img"
              height="auto"
              image={plan}
              alt="Image description"
             
            />
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Custom2;
