import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import premium from '../../Assets/premium.png';

function PremiumHouses() {
  return (
    <Box sx={{ ml: '12%', mr: '2.5%', mb: '12%' }}>
      <Typography
        variant="h2"
        sx={{
          mb: 4,
          fontSize: { xs: '32px', sm: '32px' },
          fontWeight: 600,
        }}
      >
        Premium Products
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Box>
            <img src={premium} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
            <Typography variant="h5" gutterBottom sx={{ color: '#404040' }}>
              Double Bed & Side Tables
            </Typography>
            <Typography sx={{ fontWeight: 'bold' }}> $200.00</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box>
            <img src={premium} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
            <Typography variant="h5" gutterBottom sx={{ color: '#404040' }}>
              Double Bed & Side Tables
            </Typography>
            <Typography sx={{ fontWeight: 'bold' }}> $200.00</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box>
            <img src={premium} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
            <Typography variant="h5" gutterBottom sx={{ color: '#404040' }}>
              Double Bed & Side Tables
            </Typography>
            <Typography sx={{ fontWeight: 'bold' }}> $200.00</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box>
            <img src={premium} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
            <Typography variant="h5" gutterBottom sx={{ color: '#404040' }}>
              Double Bed & Side Tables
            </Typography>
            <Typography sx={{ fontWeight: 'bold' }}> $200.00</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PremiumHouses;
