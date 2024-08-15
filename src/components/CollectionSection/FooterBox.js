import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Grid from '@mui/material/Grid';

function FooterBox() {
  return (
    <Box sx={{ backgroundColor: '#F1B66C', p: 8, pt: 10, pb: 8 }}>
      <Grid container spacing={2}>
        {/* Left side content */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4" sx={{ color: 'white',lineHeight:'1.5' }}>
              Have a Look at Our Unique Selling Proportions
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: 'black',
                textTransform: 'none',
                borderRadius: '20px',
                mt: 3,
                px: 3,
                py: 1,
                '& .MuiButton-label': {
                  display: 'flex',
                  alignItems: 'center',
                },
              }}
            >
              Search for an item
              <ArrowForwardIosIcon sx={{ ml: 1 }} />
            </Button>
          </Box>
        </Grid>

        {/* Right side content */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: { xs: '12px', sm: '16px' }, color: 'white' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
                erat.
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Box>
                <Typography variant="h4" sx={{ color: 'white', fontSize: '22px' }}>
                  99%
                </Typography>
                <Typography sx={{ fontSize: { xs: '12px', sm: '16px' }, color: 'white' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box>
                <Typography variant="h4" sx={{ color: 'white', fontSize: '22px' }}>
                  100%
                </Typography>
                <Typography sx={{ fontSize: { xs: '12px', sm: '16px' }, color: 'white' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FooterBox;
