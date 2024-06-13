import React from 'react';
import { Grid, Box,  CardMedia, Typography, IconButton } from '@mui/material';
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';


import pic2 from '../../Assets/pic2.png';

import plan from '../../Assets/module.png';

function ModuleDetails() {
  return (
    <Grid container spacing={6}>

<Grid item xs={12}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Typography
            variant="h2"
            sx={{
              color: '#1b1c57',
              fontFamily: 'Lexend, var(--default-font-family)',
              fontSize: { xs: '20px', sm: '32px', lg: '32px' },
              fontWeight: 600,
            }}
          >
            MH01-Module Details
          </Typography>
        </Box>
      </Grid>



      <Grid item xs={12} md={6}>
        <Box ml={5}mr={4}  >
          <Grid container spacing={3} sx={{ mb: 6 }}>
            <Grid item xs={12} md={3}>
              <CardMedia component="img" image={pic2} alt="Image description" />
            </Grid>
            <Grid item xs={12} md={9}>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', }}>
                  <IconButton>
                    <PermMediaOutlinedIcon />
                  </IconButton>
                  <Typography variant="body1" sx={{ color: '#3c4563', fontSize: '14px', fontWeight: 400, marginLeft: '10px' }}>
                    Roofing
                  </Typography>
                </Box>
                <Typography sx={{ color: '#1b1c57', fontSize: '14px', fontWeight: 500, lineHeight: '32px', textAlign: 'left', padding: '0 5%' }}>
                  Each cube-sized module measures for optimal versatility and ease of transportation. Module size is fixed.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={3} sx={{ mb: 6 }}>
            <Grid item xs={12} md={3}>
              <CardMedia component="img" image={pic2} alt="Image description" />
            </Grid>
            <Grid item xs={12} md={9}>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center',  }}>
                  <IconButton>
                    <PermMediaOutlinedIcon />
                  </IconButton>
                  <Typography variant="body1" sx={{ color: '#3c4563', fontSize: '14px', fontWeight: 400, marginLeft: '10px' }}>
                    Roofing
                  </Typography>
                </Box>
                <Typography sx={{ color: '#1b1c57', fontSize: '14px', fontWeight: 500, lineHeight: '32px', textAlign: 'left', padding: '0 5%' }}>
                  Each cube-sized module measures for optimal versatility and ease of transportation. Module size is fixed.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={3}  >
            <Grid item xs={12} md={3}>
              <CardMedia component="img" image={pic2} alt="Image description" />
            </Grid>
            <Grid item xs={12} md={9}>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center',  }}>
                  <IconButton>
                    <PermMediaOutlinedIcon />
                  </IconButton>
                  <Typography variant="body1" sx={{ color: '#3c4563', fontSize: '14px', fontWeight: 400, marginLeft: '10px' }}>
                    Roofing
                  </Typography>
                </Box>
                <Typography sx={{ color: '#1b1c57', fontSize: '14px', fontWeight: 500, lineHeight: '32px', textAlign: 'left', padding: '0 5%' }}>
                  Each cube-sized module measures for optimal versatility and ease of transportation. Module size is fixed.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>

      <Grid item xs={12} md={6}>
        <Box ml={{ xs: 4 }} mr={{ xs: 4 ,lg:9}} >
          <img src={plan} alt="" style={{ width: '100%', height: 'auto' }} />
        </Box>
      </Grid>
    </Grid>
  );
}

export default ModuleDetails;
