import React from 'react';
import { Typography, Box, TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function MainSectionOne() {
  return (
    <div>
      <Box 
        sx={{
          mr: { xs: 2, md: 2, lg: 5 }, 
          mt: { xs: 3, md: 6, lg: 16 }, 
          ml: { xs: 2, md: 8, lg: 10 } 
        }}
      >
        <Typography variant="h1"  gutterBottom sx={{  fontSize: { xs: '32px', sm: '40px' }, fontWeight: 'bold',  }}>
          Experience The Future<br/>
          of <span style={{ color: '#49dd7b' }}>Home Building</span> <br />With Modular Design.
        </Typography>
      
      <Box sx={{mt: "8%"}}>
        <Typography variant="h8" sx={{   lineHeight: '30px', }}>
          Everything you need about finding your place to live will be here, where it will be easier for you
        </Typography>
      </Box>
      {/* Search Field */}
      <Box sx={{ mt: { xs: '10%', md: '5%', lg: '14%' } }}>
  <TextField
    variant="outlined"
    placeholder="Search for your dream home"
    fullWidth
    sx={{
      '& fieldset': {
        borderRadius: '32px', // Setting border radius for the fieldset
      },
      '& .MuiIconButton-root': {
        color: '#49dd7b', // Setting color for the search icon button
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

      </Box>

    </div>
  );
}

export default MainSectionOne;
