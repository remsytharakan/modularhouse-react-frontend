import React from 'react';
import { Typography, Box, Grid, TextField, InputAdornment, IconButton, Button } from '@mui/material';
import collection from '../../Assets/collection.png';
import SearchIcon from '@mui/icons-material/Search';
import KingBedIcon from '@mui/icons-material/KingBed';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Collection() {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              p: 3,
              border: '1px solid black',
              mt: { xs: '10%', md: '30%' },
              ml: { xs: '10%', sm: '5%', md: '15%', lg: '10%' },
              mr: { xs: '10%', sm: '5%', md: '15%', lg: '10%' },
            }}
          >
            <Typography sx={{ mb: 2, fontWeight: 'bold', fontSize: '1.5rem' }}> Categories </Typography>
            <TextField
              variant="outlined"
              fullWidth
              size="small"
              placeholder="Select Category"
              select
              SelectProps={{ native: true }}
              sx={{ mb: 1 }}
            >
              <option value="villa">Villa</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
            </TextField>
            <Typography sx={{ mb: 2, fontWeight: 'bold', fontSize: '1.5rem' }}> Price Range </Typography>
            <TextField
              variant="outlined"
              fullWidth
              size="small"
              placeholder="Select Price Range"
              select
              SelectProps={{ native: true }}
            >
              <option value="$20.00 - $50.00">$20.00 - $50.00</option>
              <option value="$50.00 - $100.00">$50.00 - $100.00</option>
              <option value="$100.00 - $200.00">$100.00 - $200.00</option>
            </TextField>
          </Box>
        </Grid>

        <Grid item xs={12} md={9}>
          <Box sx={{ mt: '6%',  mb: '5%',ml:'2%' }}>
            <Typography
              variant="h2"
              gutterbottom
              sx={{
                fontSize: { xs: '26px', sm: '32px' },
                fontWeight: 600,
              }}
            >
              Our Collection Of Houses{' '}
            </Typography>
            <Box sx={{ mr: '5%', mt: '1%' }}>
              <TextField
                variant="outlined"
                placeholder="Search an item"
                fullWidth
                sx={{
                  '& fieldset': {
                    borderRadius: '32px',
                  },
                  '& .MuiIconButton-root': {
                    color: '#49dd7b',
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <Box sx={{ mt: '1%', ml: '5%' }}>
              <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>
                Showing 1–12 of 24 item(s)
              </Typography>

              <Typography sx={{ fontSize: '0.8rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua.
              </Typography>
            </Box>

            <Grid container spacing={2}>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item}>
                  <Box sx={{ p: 5 }}>
                    <img src={collection} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
                    <Box sx={{ mt: '12%', ml: '5%' }}>
                      <Typography sx={{ mb: 2, fontWeight: 'bold' }}>MH01</Typography>
                      <Typography sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>€ 24000.000</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton>
                        <KingBedIcon />
                      </IconButton>
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 'bold', fontSize: '0.9rem', mr: '6%' }}
                      >
                        2 Bedrooms
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: '#10B981',
                          color: '#fff',
                          textTransform: 'none',
                          fontSize: '0.9rem',
                          borderRadius: '32px',
                        }}
                      >
                        Customize
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Collection;
